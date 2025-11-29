import { Header } from "./components/header.js";
import { afterRoute } from "./main.js";
import ItemPage from "./pages/item.js";
import ItemsPage from "./pages/items.js";
import NotFoundPage from "./pages/notFound.js";
import QuestsPage from "./pages/quests.js";
import ReuploadPage from "./pages/reupload.js";
import UploadPage from "./pages/upload.js";

export async function navigate(path) {
    window.location.hash = path;
}

window.navigate = navigate;

export async function router() {
    const hash = window.location.hash || "#/";
    const path = hash.slice(1);

    const basePath = path.split("?")[0];

    const routes = {
        "/": UploadPage,
        "/items": ItemsPage,
        "/item": ItemPage,
        "/quests": QuestsPage,
        "/reupload": ReuploadPage,
    };

    const page = routes[basePath] || NotFoundPage;
    const app = document.getElementById("app");

    if (basePath !== "/") {
        app.innerHTML = Header() + await page();
    } else {
        app.innerHTML = await page();
    }

    afterRoute();
}

window.addEventListener("popstate", router);
window.addEventListener("hashchange", router);
