import { Header } from "./components/header.js";
import { afterRoute } from "./main.js";
import ItemsPage from "./pages/items.js";
import NotFoundPage from "./pages/notFound.js";
import QuestsPage from "./pages/quests.js";
import ReuploadPage from "./pages/reupload.js";
import UploadPage from "./pages/upload.js";

export async function router() {
    const path = window.location.pathname;
    const routes = {
        "/": UploadPage,
        "/items": ItemsPage,
        "/quests": QuestsPage,
        "/reupload": ReuploadPage,
    };

    const page = routes[path] || NotFoundPage;
    const app = document.getElementById("app");

    if (path !== "/") {
        app.innerHTML = Header() + await page();
    } else {
        app.innerHTML = await page();
    }

    afterRoute();
}
