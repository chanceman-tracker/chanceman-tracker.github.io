// import { canObtainItem } from "../logic/itemAvailability.js";

export default async function ItemsPage() {
    const items = await fetch("data/items.json").then(r => r.json());

    return `
        <h1>Items</h1>
        <div class="item-grid">
            ${items.map(item => {
            // const obtainable = canObtainItem(item, fileStore)
            //     ? `<span class="obtainable yes">✔</span>`
            //     : `<span class="obtainable no">✘</span>`;
            // <p>Obtainable: ${obtainable}</p>

                return `
                    <div
                        class="item-card"
                        onclick="navigate('/item?id=${item.id}')"
                    >
                        <img
                            class="lazy-img"
                            data-src="images/${item.image}"
                            src="images/placeholder.png"
                        >
                        <strong>${item.name}</strong>
                    </div>
                `
            }).join("")}
        </div>
    `;
}
