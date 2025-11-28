import { fileStore } from "../storage/fileStore.js";

// export default async function ItemPage() {
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get("id");

//     if (!id) return `<h1>No item selected</h1>`;

//     // Example: read local JSON data from /public/data/items.json
//     const items = await fetch("/data/items.json").then(r => r.json());
//     const item = items[id];

//     if (!item) return `<h1>Item not found</h1>`;

//     return `
//         <h1>${item.name}</h1>
//         <img src="/images/${item.image}" width="200">
//         <p>${item.description}</p>
//     `;
// }

export default function ItemPage() {
    const rolled = fileStore.rolled;
    const unlocked = fileStore.unlocked;

    if (!rolled || !unlocked)
        return `<h1>Please upload your files on the Home page first.</h1>`;

    return `
        <h1>Item Page</h1>
        <p>Rolled count: ${Object.keys(rolled).length}</p>
        <p>Unlocked count: ${Object.keys(unlocked).length}</p>
    `;
}