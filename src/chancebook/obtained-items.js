
import {CHANCEBOOK_SUPABASE_URL,CHANCEBOOK_SUPABASE_ANON_KEY} from "../chancebook/config.js";
import { fileStore } from "../storage/fileStore.js";

let teardownHandler = null;

function number(value) {
    return Number(value || 0).toLocaleString();
}

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

async function loadItems() {
    const response = await fetch("/data/items.json");

    if (!response.ok) {
        throw new Error("Could not load the item database.");
    }

    return response.json();
}

async function fetchPublicData() {
    const response = await fetch(
        `${CHANCEBOOK_SUPABASE_URL}/functions/v1/chancebook-public-data`,
        {
            headers: {
                apikey: CHANCEBOOK_SUPABASE_ANON_KEY
            }
        }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.error || `Chancebook request failed (${response.status}).`
        );
    }

    return data;
}

function loadVisibleImages(container) {
    const images = container.querySelectorAll("img[data-src]");

    images.forEach((img) => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
            delete img.dataset.src;
        }
    });
}

function renderItemRows(items, counts, contributorCount) {
    const countById = new Map(
        (counts || []).map((entry) => [
            Number(entry.itemId),
            Number(entry.count || 0)
        ])
    );

    const sortedItems = items.map((item) => {
        const count = countById.get(Number(item.id)) || 0;
        const percentage = contributorCount > 0
            ? (count / contributorCount) * 100
            : 0;

        return {
            ...item,
            playerCount: count,
            percentage
        };
    });

    return sortedItems.map((item) => `
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(item.id)}"
            data-item-name="${escapeHtml(String(item.name || "").toLowerCase())}"
            data-itemset="${(item.tags || []).includes("itemset")}"
            data-flatpack="${(item.tags || []).includes("flatpack")}"
            data-clue-only="${(item.tags || []).includes("clue-reward-only")}"
            data-poisoned="${/\((?:p\+{0,2}|kp)\)$/i.test(String(item.name || "").trim())}"
            data-count="${item.playerCount}"
            data-percentage="${item.percentage}"
        >
            <span class="chancebook-item-count-image-wrap">
                <img
                    data-src="/images/${encodeURIComponent(item.image || "")}"
                    alt=""
                    loading="lazy"
                    onerror="this.hidden = true"
                >
            </span>

            <span class="chancebook-item-count-name">
                ${escapeHtml(item.name)}
            </span>

            <span class="chancebook-item-count-details">
                <strong>${number(item.playerCount)} / ${number(contributorCount)}</strong>
                <small>${item.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("");
}

export default async function ChancebookObtainedItemsPage() {
    return `
        <style>
            .chancebook-item-count-page {
                width: 100%;
            }

            .chancebook-item-count-controls {
                display: grid;
                grid-template-columns: minmax(180px, 1fr) auto;
                gap: 12px 20px;
                align-items: center;
                margin: 20px 0;
                padding: 16px;
                border: 1px solid var(--border-color, #444);
                border-radius: 10px;
            }

            .chancebook-item-count-search {
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
                padding: 10px 12px;
                border: 1px solid var(--border-color, #666);
                border-radius: 6px;
                background: var(--input-background, transparent);
                color: inherit;
                font: inherit;
            }

            .chancebook-item-count-filters {
                display: flex;
                flex-wrap: wrap;
                gap: 12px 20px;
                grid-column: 1 / -1;
            }

            .chancebook-item-count-filters label {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 0.9rem;
            }

            .chancebook-item-count-sort {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;
                white-space: nowrap;
            }

            .chancebook-item-count-sort select {
                max-width: 180px;
                padding: 9px 10px;
                border: 1px solid var(--border-color, #666);
                border-radius: 6px;
                background: var(--input-background, transparent);
                color: inherit;
                font: inherit;
            }

            .chancebook-item-count-summary {
                margin: 0 0 10px;
                font-size: 0.85rem;
                opacity: 0.75;
            }

            .chancebook-item-count-list {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .chancebook-item-count-row {
                display: grid;
                grid-template-columns: 42px minmax(0, 1fr) auto;
                align-items: center;
                gap: 12px;
                min-height: 54px;
                padding: 7px 12px;
                border: 1px solid transparent;
                border-radius: 7px;
                color: inherit;
                text-decoration: none;
                transition: background 0.15s, border-color 0.15s;
            }

            .chancebook-item-count-row:hover {
                background: var(--hover-background, rgba(128, 128, 128, 0.12));
                border-color: var(--border-color, #666);
            }

            .chancebook-item-count-image-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
            }

            .chancebook-item-count-image-wrap img {
                display: block;
                max-width: 36px;
                max-height: 36px;
                object-fit: contain;
                image-rendering: pixelated;
            }

            .chancebook-item-count-name {
                min-width: 0;
                overflow-wrap: anywhere;
            }

            .chancebook-item-count-details {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 2px;
                white-space: nowrap;
                font-variant-numeric: tabular-nums;
            }

            .chancebook-item-count-details strong {
                font-size: 0.95rem;
            }

            .chancebook-item-count-details small {
                font-size: 0.78rem;
                opacity: 0.7;
            }

            .chancebook-item-count-empty {
                padding: 24px 12px;
                text-align: center;
                opacity: 0.7;
            }

            .chancebook-item-count-row[hidden] {
                display: none !important;
            }

            @media (max-width: 600px) {
                .chancebook-item-count-controls {
                    grid-template-columns: 1fr;
                }

                .chancebook-item-count-sort {
                    justify-content: flex-start;
                }

                .chancebook-item-count-filters {
                    flex-direction: column;
                    gap: 12px;
                }

                .chancebook-item-count-row {
                    grid-template-columns: 36px minmax(0, 1fr) auto;
                    gap: 9px;
                    padding: 7px 8px;
                }

                .chancebook-item-count-image-wrap {
                    width: 36px;
                    height: 36px;
                }

                .chancebook-item-count-image-wrap img {
                    max-width: 32px;
                    max-height: 32px;
                }
            }

            .chancebook-item-count-row.is-personal-item {
                background: rgba(34, 197, 94, 0.10);
                border-color: rgba(34, 197, 94, 0.3);
            }

            .chancebook-item-count-row.is-personal-item:hover {
                background: rgba(34, 197, 94, 0.18);
            }
        </style>

        <div class="chancebook-page chancebook-item-count-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Obtained Items</h1>
                    <p>How many participating chancers have obtained each item.</p>
                </div>
            </div>

            <div
                id="chancebook-obtained-items-status"
                class="chancebook-muted"
                role="status"
            >
                Loading obtained item statistics...
            </div>

            <div id="chancebook-obtained-items-content" hidden>
                <div class="chancebook-item-count-controls">
                    <input
                        id="chancebook-obtained-items-search"
                        class="chancebook-item-count-search"
                        type="search"
                        placeholder="Search items..."
                        aria-label="Search items"
                    >

                    <label class="chancebook-item-count-sort">
                        <span>Sort:</span>
                        <select id="chancebook-obtained-items-sort">
                            <option value="desc">Most to least</option>
                            <option value="asc">Least to most</option>
                        </select>
                    </label>

                    <div class="chancebook-item-count-filters">
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-full"
                                type="checkbox"
                            >
                            Hide items obtained by 100% of players
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-only-zero"
                                type="checkbox"
                            >
                            Only show items obtained by 0 players
                        </label>
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-itemsets"
                                type="checkbox"
                            >
                            Hide item sets
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-hide-flatpacks"
                                type="checkbox"
                            >
                            Hide flatpacks
                        </label>
                        
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-poisoned"
                                type="checkbox"
                            >
                            Hide poisoned weapons
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-hide-clue"
                                type="checkbox"
                            >
                            Hide clue rewards
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-only-personal"
                                type="checkbox"
                            >
                            Only show items I haven't obtained
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-highlight-personal"
                                type="checkbox"
                            >
                            Highlight items I've obtained
                        </label>
                    </div>
                </div>

                <p
                    id="chancebook-obtained-items-summary"
                    class="chancebook-item-count-summary"
                ></p>

                <div
                    id="chancebook-obtained-items-list"
                    class="chancebook-item-count-list"
                ></div>
            </div>
        </div>
    `;
}

export async function init() {
    teardown();

    const app = document.getElementById("app");
    if (!app) return;

    let alive = true;

    teardownHandler = () => {
        alive = false;
    };

    const status = app.querySelector("#chancebook-obtained-items-status");
    const content = app.querySelector("#chancebook-obtained-items-content");
    const search = app.querySelector("#chancebook-obtained-items-search");
    const sort = app.querySelector("#chancebook-obtained-items-sort");
    const hideFull = app.querySelector("#chancebook-obtained-items-hide-full");
    const onlyZero = app.querySelector("#chancebook-obtained-items-only-zero");
    const hideItemsets = app.querySelector("#chancebook-obtained-items-hide-itemsets");
    const hideFlatpacks = app.querySelector("#chancebook-obtained-items-hide-flatpacks");
    const hidePoisoned = app.querySelector("#chancebook-obtained-items-hide-poisoned");
    const summary = app.querySelector("#chancebook-obtained-items-summary");
    const list = app.querySelector("#chancebook-obtained-items-list");
    const onlyPersonal = app.querySelector("#chancebook-obtained-items-only-personal");
    const highlightPersonal = app.querySelector("#chancebook-obtained-items-highlight-personal");
    const hideClue = app.querySelector("#chancebook-obtained-items-hide-clue");

    try {
        if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) {
            throw new Error("Chancebook is not configured yet.");
        }

        const [items, data] = await Promise.all([
            loadItems(),
            fetchPublicData()
        ]);

        if (!alive) return;

        const contributorCount = Number(data.contributorCount || 0);

        const personalObtainedIds = new Set(
            (Array.isArray(fileStore.obtained) ? fileStore.obtained : [])
                .map(Number)
                .filter(Number.isFinite)
        );

        const rows = renderItemRows(
            items,
            data.obtainedItemCounts,
            contributorCount
        );

        list.innerHTML = rows;

        const allRows = [...list.querySelectorAll(".chancebook-item-count-row")];

        function updateList() {
            const query = search.value.trim().toLowerCase();
            const direction = sort.value;
            const hideAllPlayers = hideFull.checked;
            const showOnlyZero = onlyZero.checked;
            const hideItemSets = hideItemsets.checked;
            const hideFlatpackItems = hideFlatpacks.checked;
            const hidePoisonedWeapons = hidePoisoned.checked;
            const showOnlyPersonal = onlyPersonal.checked;
            const highlightPersonalItems = highlightPersonal.checked;
            const hideClueItems = hideClue.checked;

            const sortedRows = [...allRows].sort((a, b) => {
                const countA = Number(a.dataset.count);
                const countB = Number(b.dataset.count);

                if (countA !== countB) {
                    return direction === "asc"
                        ? countA - countB
                        : countB - countA;
                }

                return a.dataset.itemName.localeCompare(b.dataset.itemName);
            });

            sortedRows.forEach((row) => {
                const count = Number(row.dataset.count);
                const nameMatches = row.dataset.itemName.includes(query);
                const isFull = contributorCount > 0 && count >= contributorCount;
                const isZero = count === 0;
                const isPersonalItem = personalObtainedIds.has(
                    Number(row.getAttribute("href").match(/[?&]id=(\d+)/)?.[1])
                );

                row.classList.toggle(
                    "is-personal-item",
                    highlightPersonalItems && isPersonalItem
                );

                const isItemset = row.dataset.itemset === "true";
                const isFlatpack = row.dataset.flatpack === "true";

                const visible = nameMatches
                    && !(hideAllPlayers && isFull)
                    && !(showOnlyZero && !isZero)
                    && !(hideItemSets && isItemset)
                    && !(hideFlatpackItems && isFlatpack)
                    && !(hidePoisonedWeapons && row.dataset.poisoned === "true")
                    && (!showOnlyPersonal || !isPersonalItem)
                    && !(hideClueItems && row.dataset.clueOnly === "true");
                    
                row.hidden = !visible;
                list.appendChild(row);
            });

            loadVisibleImages(list);

            const visibleCount = allRows.filter((row) => !row.hidden).length;

            summary.textContent =
                `Showing ${number(visibleCount)} of ${number(allRows.length)} items`;

            let emptyMessage = list.querySelector(".chancebook-item-count-empty");

            if (visibleCount === 0) {
                if (!emptyMessage) {
                    emptyMessage = document.createElement("p");
                    emptyMessage.className = "chancebook-item-count-empty";
                    emptyMessage.textContent = "No items match your filters.";
                    list.appendChild(emptyMessage);
                }
            } else if (emptyMessage) {
                emptyMessage.remove();
            }
        }

        search.addEventListener("input", updateList);
        sort.addEventListener("change", updateList);
        hideFull.addEventListener("change", updateList);
        onlyZero.addEventListener("change", updateList);
        hideItemsets.addEventListener("change", updateList);
        hideFlatpacks.addEventListener("change", updateList);
        hidePoisoned.addEventListener("change", updateList);
        onlyPersonal.addEventListener("change", updateList);
        highlightPersonal.addEventListener("change", updateList);
        hideClue.addEventListener("change", updateList);

        updateList();

        content.hidden = false;
        status.hidden = true;
    } catch (error) {
        if (!alive) return;

        status.innerHTML = `
            <span class="chancebook-error">
                ${escapeHtml(error.message || "Could not load obtained item statistics.")}
            </span>
        `;
    }
}

export function teardown() {
    if (typeof teardownHandler === "function") {
        teardownHandler();
        teardownHandler = null;
    }
}
