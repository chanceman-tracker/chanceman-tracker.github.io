import { canDoOtherMethod, canReachNpc } from "../logic/itemAvailability.js";
import { NPC_WIKI_LINKS } from "../logic/npcWikiLinks.js";
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
            <img src="/images/${item.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${item.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${renderSources(item.sources)}

        <h2>Processable into:</h2>
        ${renderProcessable(item.processable, items)}
    `;
}

/* ===========================================================
    SOURCES SECTIONS
   =========================================================== */
function renderSources(sources = {}) {
    const sections = ["drops", "other", "shops", "spawns"];

    return sections.map(section => `
        <div class="source-section">
            <h3>${capitalize(section)}</h3>
            ${renderSourceTable(section, sources[section])}
        </div>
    `).join("");
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function renderSourceTable(section, entries) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    if (!entries || Object.keys(entries).length === 0)
        return `<p><em>No data.</em></p>`;

    // ---------------------------
    // DROPS TABLE
    // ---------------------------
    if (section === "drops") {
        return `
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(entries).map(([name, data]) => {
                    const obtainable = canReachNpc(name, fileStore)
                        ? `<span class="obtainable yes">✔</span>`
                        : `<span class="obtainable no">✘</span>`;
                    return `
                        <tr>
                            <td><a href="${NPC_WIKI_LINKS[name] || "#"}" target="_blank">${name}</a></td>
                            <td>${data.droprate}</td>
                            <td>${obtainable}</td>
                        </tr>
                    `;
                }).join("")}
            </table>
        `;
    }


    // ---------------------------
    // OTHER TABLE
    // ---------------------------
    if (section === "other") {
    return `
            <table class="osrs-table">
                <tr>
                    <th>How</th>
                    <th>Notes</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(entries).map(([method, info]) => {
                    const { notes, rule } = info;

                    const obtainable = canDoOtherMethod(rule, fileStore)
                        ? `<span class="obtainable yes">✔</span>`
                        : `<span class="obtainable no">✘</span>`;

                    return `
                        <tr>
                            <td>${method}</td>
                            <td>${notes}</td>
                            <td>${obtainable}</td>
                        </tr>
                    `;
                }).join("")}
            </table>
        `;
    }

    // ---------------------------
    // SHOPS TABLE
    // ---------------------------
    if (section === "shops") {
        return `
            <table class="osrs-table">
                <tr>
                    <th>Requirement</th>
                    <th>Obtainable?</th>
                </tr>

                ${Object.entries(entries).map(([label, rule]) => {
                    let obtainable = false;

                    // Rule is a string
                    if (fileStore.unlocked.includes(id)) {
                        if (typeof rule === "string") {
                            if (rule === "No requirements") {
                                obtainable = true;
                            } else {
                                obtainable = canDoOtherMethod(rule, fileStore);
                            }
                        }
                    }

                    // Rule is an object (e.g. any/all)
                    else if (typeof rule === "object") {
                        obtainable = canDoOtherMethod(rule, fileStore);
                    }

                    return `
                        <tr>
                            <td>${formatRule(rule)}</td>
                            <td>
                                ${obtainable
                                    ? `<span class="obtainable yes">✔</span>`
                                    : `<span class="obtainable no">✘</span>`}
                            </td>
                        </tr>
                    `;
                }).join("")}
            </table>
        `;
    }

    // ---------------------------
    // SPAWNS TABLE
    // ---------------------------
    if (section === "spawns") {
        return `
            <table class="osrs-table">
                <tr>
                    <th>Requirement</th>
                    <th>Obtainable?</th>
                </tr>

                ${Object.entries(entries).map(([label, rule]) => {
                    let obtainable = false;

                    if (fileStore.unlocked.includes(id)) {
                        if (typeof rule === "string") {
                            if (rule === "No requirements") {
                                obtainable = true;
                            } else {
                                obtainable = canDoOtherMethod(rule, fileStore);
                            }
                        } else if (typeof rule === "object") {
                            obtainable = canDoOtherMethod(rule, fileStore);
                        }
                    }

                    return `
                        <tr>
                            <td>${formatRule(rule)}</td>
                            <td>
                                ${obtainable
                                    ? `<span class="obtainable yes">✔</span>`
                                    : `<span class="obtainable no">✘</span>`}
                            </td>
                        </tr>
                    `;
                }).join("")}
            </table>
        `;
    }
}

/* ===========================================================
   PROCESSABLE TABLE
   =========================================================== */
function renderProcessable(processable = {}, allItems) {
    if (!processable || Object.keys(processable).length === 0)
        return `<p><em>Not processable.</em></p>`;

    return `
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(processable).map(([resultId, components]) => {
                const resultItem = allItems.find(x => x.id == resultId);
                const ingredientIds = components.split(",");

                const ingredients = ingredientIds.map(cid => {
                    const ing = allItems.find(x => x.id == cid);
                    return ing
                        ? `<a onclick="navigate('/item?id=${cid}')">${ing.name}</a>`
                        : cid;
                }).join(", ");

                return `
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${resultId}')">${resultItem.name}</a>
                        </td>
                        <td>${ingredients}</td>
                    </tr>
                `;
            }).join("")}
        </table>
    `;
}

function formatRule(rule) {
    if (!rule) return "";

    if (typeof rule === "string")
        return rule;

    if (rule.any)
        return "Any: " + rule.any.join(", ");

    if (rule.all)
        return "All: " + rule.all.map(r => typeof r === "object" ? JSON.stringify(r) : r).join(", ");

    return JSON.stringify(rule);
}