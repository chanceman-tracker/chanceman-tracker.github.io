import { fileStore } from "../storage/fileStore.js";

export default async function ItemsPage() {
    const items = await fetch("/data/items.json").then(r => r.json());

    const rolled = fileStore.rolled || [];
    const unlocked = fileStore.unlocked || [];

    return `
        <h1>Items</h1>

        <div class="item-grid">
            ${items.map(item => {
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
            }).join("")}
        </div>
    `;
}
