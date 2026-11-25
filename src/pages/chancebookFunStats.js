
import {
    CHANCEBOOK_SUPABASE_URL,
    CHANCEBOOK_SUPABASE_ANON_KEY
} from "../chancebook/config.js";

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

function renderToolCard(tool, contributorCount) {
    if (!tool || !tool.itemId) {
        return `
            <div class="chancebook-tool-card">
                <div class="chancebook-tool-name">
                    ${escapeHtml(tool?.name || "Unknown tool")}
                </div>
                <small class="chancebook-muted">Item data unavailable</small>
            </div>
        `;
    }

    const image = tool.image
        ? `
            <img
                class="chancebook-tool-image"
                src="/images/${encodeURIComponent(tool.image)}"
                alt="${escapeHtml(tool.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
        `
        : "";

    return `
        <div class="chancebook-tool-card">
            ${image}
            <div class="chancebook-tool-name">
                ${escapeHtml(tool.name)}
            </div>
            <div class="chancebook-tool-percentage">
                ${Number(tool.percentage || 0).toFixed(1)}%
            </div>
            <small class="chancebook-muted">
                ${number(tool.count)} / ${number(contributorCount)} chancers
            </small>
        </div>
    `;
}

function renderToolWithoutOtherToolStats(funStats) {
    const stats = funStats.toolWithoutOtherTool || {};

    const labels = {
        rakeWithoutSpade: "Rakes without a Spade",
        sawWithoutHammer: "Saws without a Hammer",
        herbloreWithoutVial: "Herblore without a Vial of water",
        plantpotWithoutTrowel: "Plant Pots without a Gardening Trowel",
        trowelWithoutPlantpot: "Gardening Trowels without a Plant Pot"
    };

    const cards = Object.entries(labels).map(([key, name]) =>
        statCard(
            name,
            number(stats[key] || 0),
            "Chancers are very sad"
        )
    );

    return `
        <section class="chancebook-panel">
            <h2>Sad tool sounds</h2>
            <div class="chancebook-stat-grid">
                ${cards.join("")}
            </div>
        </section>
    `;
}

function renderUnlockCard(name, count, contributorCount, percentage) {
    return statCard(
        `${name} unlocked`,
        `${number(count)} / ${number(contributorCount)}`,
        `${Number(percentage || 0).toFixed(1)}% of chancers`
    );
}

function renderFunStats(data) {
    const contributorCount = Number(data.contributorCount || 0);
    const funStats = data.funStats || {};

    const totalRolls = Number(funStats.totalRolls || 0);
    const ironmanCount = Number(funStats.ironmanCount || 0);

    const unlockCounts = funStats.unlockCounts || {};
    const unlockPercentages = funStats.unlockPercentages || {};

    const toolCards = (data.tools || [])
        .map((tool) => renderToolCard(tool, contributorCount))
        .join("");

    const unlockCards = [
        renderUnlockCard(
            "Herblore",
            Number(unlockCounts.herblore || 0),
            contributorCount,
            unlockPercentages.herblore
        ),
        renderUnlockCard(
            "Sailing",
            Number(unlockCounts.sailing || 0),
            contributorCount,
            unlockPercentages.sailing
        ),
        renderUnlockCard(
            "Morytania",
            Number(unlockCounts.morytania || 0),
            contributorCount,
            unlockPercentages.morytania
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
                    ? `${Number(funStats.ironmanPercentage || 0).toFixed(1)}% of chancers`
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
