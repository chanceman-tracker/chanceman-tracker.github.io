import { getObtainabilityRank, isItemObtainable } from "./logic/sortHelpers.js";
import { router } from "./router.js";
import { fileStore } from "./storage/fileStore.js";

window.addEventListener("DOMContentLoaded", async () => {
    await fileStore.init(); // load from IndexedDB first
    router();
});

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('popstate', router);

// Allow <a data-link href="/about"> navigation
document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        router();
    }
});

function initLazyImages() {
    const lazyImages = document.querySelectorAll("img.lazy-img");

    const observer = new IntersectionObserver((entries, obs) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;   // load real image
                img.classList.remove("lazy-img");
                obs.unobserve(img);
            }
        }
    });

    lazyImages.forEach(img => observer.observe(img));
}

window.initItemsPage = function () {
    const data = window.__itemsPageData;
    if (!data) return;

    const searchInput = document.getElementById("itemSearch");
    const hideRolled = document.getElementById("hideRolled");
    const onlyUnlocked = document.getElementById("onlyUnlocked");
    const onlyObtainable = document.getElementById("onlyObtainable");
    const hideClue = document.getElementById("hideClueRewardOnly");
    const grid = document.getElementById("itemGrid");

    if (!searchInput || !hideRolled || !onlyUnlocked || !onlyObtainable || !hideClue || !grid) {
        setTimeout(initItemsPage, 0);
        return;
    }

    const f = fileStore.filters;
    searchInput.value = f.search ?? "";
    hideRolled.checked = f.hideRolled ?? true;
    onlyUnlocked.checked = f.onlyUnlocked ?? false;
    onlyObtainable.checked = f.onlyObtainable ?? false;
    hideClue.checked = f.hideClue ?? true;

    const { items, rolled, unlocked } = data;

    async function renderItems() {
        const search = searchInput.value.toLowerCase();
        const hideR = hideRolled.checked;
        const onlyU = onlyUnlocked.checked;
        const onlyO = onlyObtainable.checked;
        const hideCl = hideClue.checked;

        let filtered = [];

        for (const item of items) {
            if (!item.name.toLowerCase().includes(search)) continue;

            const isRolled = rolled.includes(item.id);
            const isUnlocked = unlocked.includes(item.id);

            if (hideR && isRolled) continue;
            if (onlyU && !isUnlocked) continue;

            if (hideCl && item.tags?.includes("clue-reward-only")) continue;

            if (onlyO) {
                const obtainable = await isItemObtainable(item, fileStore);
                if (!obtainable) continue;
            }

            filtered.push(item);
        }

        // sort async
        filtered = await Promise.all(
            filtered.map(async item => ({
                item,
                sort: await getObtainabilityRank(item, fileStore)
            }))
        );

        filtered.sort((a, b) => {
            if (a.sort.rank !== b.sort.rank) return a.sort.rank - b.sort.rank;
            return a.sort.name.localeCompare(b.sort.name);
        });

        grid.innerHTML = filtered.map(({ item }) => {
            const isRolled = rolled.includes(item.id);
            const isUnlocked = unlocked.includes(item.id);

            return `
                <div class="item-card" onclick="navigate('/item?id=${item.id}')">
                    ${isRolled ? `<span class="badge rolled">Rolled</span>` : ""}
                    ${isUnlocked ? `<span class="badge unlocked">Unlocked</span>` : ""}
                    <img class="lazy-img item-image" data-src="/images/${item.image}" src="/images/placeholder.png">
                    ${item.name}
                </div>
            `;
        }).join("");

        setTimeout(() => initLazyImages(), 0);
    }

    function saveFilters() {
        fileStore.setFilters({
            search: searchInput.value,
            hideRolled: hideRolled.checked,
            onlyUnlocked: onlyUnlocked.checked,
            onlyObtainable: onlyObtainable.checked,
            hideClue: hideClue.checked
        });
    }

    searchInput.addEventListener("input", () => {
        saveFilters();
        renderItems();
    });

    hideRolled.addEventListener("input", () => {
        saveFilters();
        renderItems();
    });

    onlyUnlocked.addEventListener("input", () => {
        saveFilters();
        renderItems();
    });

    onlyObtainable.addEventListener("input", () => {
        saveFilters();
        renderItems();
    });

    hideClue.addEventListener("input", () => {
        saveFilters();
        renderItems();
    });

    renderItems();
};

window.addEventListener("DOMContentLoaded", async () => {
    await fileStore.init();
    router();
});

// Re-init lazy loader after routing
window.addEventListener("popstate", () => {
    router();
    setTimeout(initLazyImages, 0);
});

// Also listen for clicks that use data-link routing
document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        router();
        setTimeout(initLazyImages, 0);
    }
});

// Hook into router so your lazy images load after page render
export function afterRoute() {
    initLazyImages();

    if (typeof initItemsPage === "function") {
        initItemsPage();
    }
}
