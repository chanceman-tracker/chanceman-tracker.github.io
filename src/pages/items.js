import { fileStore } from "../storage/fileStore.js";

export default async function ItemsPage() {
    const items = await fetch("/data/items.json").then(r => r.json());

    const rolled = fileStore.rolled || [];
    const unlocked = fileStore.unlocked || [];

    window.__itemsPageData = {
        items,
        rolled,
        unlocked
    };

    return `
        <h1>Items</h1>

        <div class="item-filters">
            <input type="text" id="itemSearch" placeholder="Search items..." />

            <label>
                <input type="checkbox" id="hideRolled">
                Hide rolled
            </label>

            <label>
                <input type="checkbox" id="onlyUnlocked">
                Only unlocked
            </label>

            <label>
                <input type="checkbox" id="onlyObtainable">
                Only obtainable
            </label>
        </div>

        <div class="item-grid" id="itemGrid"></div>
    `;
}
