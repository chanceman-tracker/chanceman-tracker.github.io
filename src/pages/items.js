export default async function ItemsPage() {
    const items = await fetch("/data/items.json").then(r => r.json());

    return `
        <h1>Item Overview</h1>
        <p>Total items: ${items.length}</p>

        <div class="item-grid">
            ${items.map(i => `
                <div class="item-card">
                    <img
                        class="lazy-img"
                        data-src="/images/${i.image}"
                        src="/images/placeholder.png"
                        alt="${i.name}"
                    >
                    <strong>${i.name}</strong><br>
                    <small>${i.category || ""}</small>
                </div>
            `).join("")}
        </div>
    `;
}
