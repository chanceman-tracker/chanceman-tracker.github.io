export default async function ItemsPage() {
    const items = await fetch("/data/items.json").then(r => r.json());

    return `
        <h1>Items</h1>
        <div class="item-grid">
            ${items.map(item => `
                <div
                    class="item-card"
                    onclick="navigate('/item?id=${item.id}')"
                >
                    <img
                        class="lazy-img"
                        data-src="/images/${item.image}"
                        src="/images/placeholder.png"
                        src="/images/${item.image}"
                    >
                    <strong>${item.name}</strong>
                </div>
            `).join("")}
        </div>
    `;
}
