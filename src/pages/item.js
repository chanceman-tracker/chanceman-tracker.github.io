import { fileStore } from "../storage/fileStore.js";

export default async function ItemPage() {
    const rolled = fileStore.rolled;
    const unlocked = fileStore.unlocked;

    if (!rolled || !unlocked)
        return `<h1>Please upload your files on the Home page first.</h1>`;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) return `<h1>No item selected</h1>`;

    const items = await fetch("/data/items.json").then(r => r.json());
    const item = items.find(x => x.id == id);

    if (!item) return `<h1>Item not found</h1>`;

    return `
        <h1>${item.name}</h1>

        <div class="item-header">
            <img src="/images/${item.image}" width="128" height="128" />
            <p><strong>ID:</strong> ${item.id}</p>
            <p><strong>Internal Index:</strong> ${item.index}</p>
        </div>

        <h2>Where to get it</h2>
        ${renderSources(item.sources)}

        <h2>Processable</h2>
        ${renderProcessable(item.processable, items)}
    `;
}

function renderSources(sources = {}) {
    const sections = ["drops", "shops", "spawns", "other"];

    return sections.map(section => `
        <div class="source-section">
            <h3>${section.charAt(0).toUpperCase() + section.slice(1)}</h3>
            ${renderSourceSection(sources[section])}
        </div>
    `).join("");
}

function renderSourceSection(entries) {
    if (!entries || Object.keys(entries).length === 0)
        return `<p><em>No data.</em></p>`;

    return `
        <ul>
            ${Object.entries(entries).map(([name, url]) =>
                `<li><a href="${url}" target="_blank">${name}</a></li>`
            ).join("")}
        </ul>
    `;
}

function renderProcessable(processable = {}, allItems) {
    if (!processable || Object.keys(processable).length === 0)
        return `<p><em>Not processable.</em></p>`;

    return `
        <ul>
            ${Object.entries(processable).map(([resultId, components]) => {
                const result = allItems.find(x => x.id == resultId);
                const componentIds = components.split(",");

                // Component names
                const componentNames = componentIds.map(cid => {
                    const c = allItems.find(x => x.id == cid);
                    return c ? `<a onclick="navigate('/item?id=${cid}')">${c.name}</a>` : cid;
                }).join(", ");

                return `
                    <li>
                        Creates <a onclick="navigate('/item?id=${resultId}')">${result.name}</a>
                        using: ${componentNames}
                    </li>
                `;
            }).join("")}
        </ul>
    `;
}