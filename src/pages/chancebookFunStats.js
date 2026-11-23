
import {
    CHANCEBOOK_SUPABASE_URL,
    CHANCEBOOK_SUPABASE_ANON_KEY
} from "../chancebook/config.js";

let itemsById = new Map();
let teardownHandler = null;

const TOOL_NAMES = [
    "Knife",
    "Hammer",
    "Saw",
    "Tinderbox",
    "Bucket",
    "Spade",
    "Chisel",
    "Pestle and mortar",
    "Vial of water",
    "Rake",
    "Rope",
    "Lockpick",
    "Gardening trowel",
    "Secateurs",
    "Watering can",
    "Small fishing net",
    "Big fishing net",
    "Fishing rod",
    "Fly fishing rod",
    "Lobster pot",
    "Bird snare",
    "Box trap",
    "Insect net",
    "Net trap",
    "Noose wand",
    "Teasing stick"
];

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
    if (itemsById.size) return;

    const response = await fetch("/data/items.json");
    if (!response.ok) {
        throw new Error("Could not load the item database.");
    }

    const items = await response.json();
    itemsById = new Map(
        items.map((item) => [Number(item.id), item])
    );
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

function normalizeName(name) {
    return String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

function findToolItem(name) {
    const normalized = normalizeName(name);

    return [...itemsById.values()].find(
        (item) => normalizeName(item.name) === normalized
    );
}

function statCard(title, value, description = "") {
    return `
        <section class="chancebook-stat-card">
            <h3>${escapeHtml(title)}</h3>
            <p class="chancebook-fun-stat-value">${escapeHtml(value)}</p>
            ${description
                ? `<small>${escapeHtml(description)}</small>`
                : ""}
        </section>
    `;
}

function renderToolCard(name, item, count, contributorCount) {
    if (!item) {
        return `
            <div class="chancebook-tool-card">
                <div class="chancebook-tool-name">${escapeHtml(name)}</div>
                <small class="chancebook-muted">Item data unavailable</small>
            </div>
        `;
    }

    const percentage = contributorCount > 0
        ? (count / contributorCount) * 100
        : 0;

    return `
        <div class="chancebook-tool-card">
            <img
                class="chancebook-tool-image"
                src="/images/${encodeURIComponent(item.image)}"
                alt="${escapeHtml(item.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
            <div class="chancebook-tool-name">
                ${escapeHtml(item.name)}
            </div>
            <div class="chancebook-tool-percentage">
                ${percentage.toFixed(1)}%
            </div>
            <small class="chancebook-muted">
                ${number(count)} / ${number(contributorCount)} chancers
            </small>
        </div>
    `;
}

function renderToolWithoutOtherToolStats(funStats) {
    const stats = funStats.toolWithoutOtherTool || [];

    if (!stats.length) return "";

    return `
        <section class="chancebook-panel">
            <h2>Sad tool sounds</h2>
            <div class="chancebook-stat-grid">
                ${stats.map((stat) => statCard(
                    stat.name,
                    number(stat.count),
                    "Chancers are very sad"
                )).join("")}
            </div>
        </section>
    `;
}

function renderUnlockCard(name, count, contributorCount) {
    const percentage = contributorCount > 0
        ? (count / contributorCount) * 100
        : 0;

    return statCard(
        `${name} unlocked`,
        `${number(count)} / ${number(contributorCount)}`,
        `${percentage.toFixed(1)}% of chancers`
    );
}

function renderFunStats(data) {
    const contributorCount = Number(data.contributorCount || 0);
    const funStats = data.funStats || {};

    const totalRolls = Number(funStats.totalRolls || 0);
    const ironmanCount = Number(funStats.ironmanCount || 0);

    const unlockCounts = funStats.unlockCounts || {};

    const rolledCounts = new Map(
        (data.rolledItemCounts || [])
            .map((entry) => [
                Number(entry.itemId),
                Number(entry.count || 0)
            ])
    );

    const toolCards = TOOL_NAMES.map((name) => {
        const item = findToolItem(name);
        const count = item
            ? rolledCounts.get(Number(item.id)) || 0
            : 0;

        return renderToolCard(
            name,
            item,
            count,
            contributorCount
        );
    }).join("");
        const unlockCards = [
        renderUnlockCard(
            "Herblore",
            Number(unlockCounts.herblore || 0),
            contributorCount
        ),
        renderUnlockCard(
            "Sailing",
            Number(unlockCounts.sailing || 0),
            contributorCount
        ),
        renderUnlockCard(
            "Morytania",
            Number(unlockCounts.morytania || 0),
            contributorCount
        ),
    ].join("");

    return `
        <div class="chancebook-stat-grid chancebook-fun-summary">
            ${statCard(
                "Participating chancers",
                number(contributorCount)
            )}
            ${statCard(
                "Total community rolls",
                number(totalRolls),
                "Includes duplicate rolls"
            )}
            ${statCard(
                "Ironman chancers",
                `${number(ironmanCount)} / ${number(contributorCount)}`,
                contributorCount > 0
                    ? `${((ironmanCount / contributorCount) * 100).toFixed(1)}% of chancers`
                    : "No participating chancers yet"
            )}
        </div>

        <section class="chancebook-panel">
            <h2>Community Unlocks</h2>
            <p class="chancebook-muted">
                How many participating chancers have unlocked areas/skills.
            </p>
            <div class="chancebook-stat-grid">
                ${unlockCards}
            </div>
        </section>

        <section class="chancebook-panel">
            <h2>Tool Collection</h2>
            <p class="chancebook-muted">
                Percentage of chancers who have rolled each tool.
            </p>
            <div class="chancebook-tool-grid">
                ${toolCards}
            </div>
            ${renderToolWithoutOtherToolStats(funStats)}
            
           
        </section>
    `;
}

export default async function ChancebookFunStatsPage() {
    return `
        <div class="chancebook-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Fun Stats!</h1>
                    <p>Some numbers from the Chanceman community.</p>
                </div>
            </div>

            <div
                id="chancebook-fun-stats-status"
                class="chancebook-muted"
                role="status"
            >
                Loading community statistics...
            </div>

            <div id="chancebook-fun-stats-content" hidden></div>
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

    const status = app.querySelector("#chancebook-fun-stats-status");
    const content = app.querySelector("#chancebook-fun-stats-content");

    try {
        await Promise.all([
            loadItems()
        ]);

        if (!alive) return;

        if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) {
            throw new Error("Chancebook is not configured yet.");
        }

        const data = await fetchPublicData();

        if (!alive) return;

        content.innerHTML = renderFunStats(data);
        content.hidden = false;
        status.hidden = true;
    } catch (error) {
        if (!alive) return;

        status.innerHTML = `
            <span class="chancebook-error">
                ${escapeHtml(error.message || "Could not load Fun Stats.")}
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
