import { router } from "./router.js";
import { fileStore } from "./storage/fileStore.js";

window.addEventListener("DOMContentLoaded", async () => {
    await fileStore.init(); // load from IndexedDB first
    router();
});

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('popstate', router);
window.addEventListener("hashchange", router);

// Allow <a data-link href="/about"> navigation
document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        window.location.hash = e.target.getAttribute("href").replace("#", "");
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
        window.location.hash = e.target.getAttribute("href").replace("#", "");
        router();
        setTimeout(initLazyImages, 0);
    }
});

// Hook into router so your lazy images load after page render
export function afterRoute() {
    initLazyImages();
}
