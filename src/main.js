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
    if (!data) return; // Not on items page

    const { items, rolled, unlocked } = data;

    const searchInput = document.getElementById("itemSearch");
    const hideRolled = document.getElementById("hideRolled");
    const onlyUnlocked = document.getElementById("onlyUnlocked");
    const grid = document.getElementById("itemGrid");

    if (!grid) return; // Safety check

    function renderItems() {
        const search = searchInput?.value.toLowerCase() || "";
        const hideR = hideRolled?.checked || false;
        const onlyU = onlyUnlocked?.checked || false;

        const filtered = items.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(search);
            if (!nameMatch) return false;

            const isRolled = rolled.includes(item.id);
            const isUnlocked = unlocked.includes(item.id);

            if (hideR && isRolled) return false;
            if (onlyU && !isUnlocked) return false;

            return true;
        });

        grid.innerHTML = filtered.map(item => {
            const isRolled = rolled.includes(item.id);
            const isUnlocked = unlocked.includes(item.id);

            return `
                <div class="item-card" onclick="navigate('/item?id=${item.id}')">

                    ${isRolled ? `<span class="badge rolled">Rolled</span>` : ""}
                    ${isUnlocked ? `<span class="badge unlocked">Unlocked</span>` : ""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${item.image}"
                        src="/images/placeholder.png"
                    >

                    ${item.name}
                </div>
            `;
        }).join("");

        // Re-init lazy loading after render
        setTimeout(() => initLazyImages(), 0);
    }

    // Wire up filters
    searchInput?.addEventListener("input", renderItems);
    hideRolled?.addEventListener("input", renderItems);
    onlyUnlocked?.addEventListener("input", renderItems);

    // Initial render
    renderItems();
}


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
