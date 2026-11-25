
import { fileStore } from "../storage/fileStore.js";
import { CHANCEBOOK_SUPABASE_URL, CHANCEBOOK_SUPABASE_ANON_KEY } from "../chancebook/config.js";
import { getChancebookClient } from "../chancebook/client.js";

const SKILLS = [
    "Attack", "Hitpoints", "Mining", "Strength", "Agility", "Smithing",
    "Defence", "Herblore", "Fishing", "Ranged", "Thieving", "Cooking",
    "Prayer", "Crafting", "Firemaking", "Magic", "Fletching", "Woodcutting",
    "Runecraft", "Slayer", "Farming", "Construction", "Hunter", "Sailing"
];

const RULESET_STORAGE_KEY = "chancebookRulesets";
const COMMUNITY_STATS_CACHE_KEY = "chancebookCommunityStatsCacheV2";

const PLUGIN_RULES = [
    { id: "freeToPlayOnly", label: "I am free to play only" },
    { id: "itemSets", label: "I play with item sets" },
    { id: "flatpacks", label: "I play with flatpacks" },
    { id: "weaponPoisonRequirements", label: 'I play with "Weapon Poison Requirements"' },
    { id: "toolRollGuarantee", label: 'I play with "Tool Roll Guarantee"' },
    { id: "questItemRolls", label: 'I play with "Quest Item Rolls"' }
];

const CUSTOM_RULES = [
    { id: "skill99Rolls", label: "I roll an item when I reach level 99 in a skill" },
    { id: "petRolls", label: "I roll 5 items when I obtain a pet" },
    { id: "otherPlayersHouses", label: "I get rolls from other player's houses" },
    { id: "allowTelegrab", label: "I allow telegrab for rolls" },
    { id: "rerollThirdAge", label: "I reroll third age items" },
    { id: "rerollGilded", label: "I reroll gilded items" },
    { id: "rerollDivinePotions", label: "I reroll divine potions and barbarian mixes" },
    {
        id: "questOfChance",
        label: "I play with the Quest of Chance ruleset by Maclay",
        info: [
            "Watch Maclay's Youtube series for an explanation.",
        ]
    },
    {
        id: "luckOfShuk",
        label: "I play with LuckOfShuk's ruleset",
        info: [
            "Watch LuckOfShuk's Youtube series for an explanation.",
        ]
    }
];

function getSavedRulesets() {
    try {
        const saved = JSON.parse(localStorage.getItem(RULESET_STORAGE_KEY) || "{}");
        return {
            pluginSettings: Array.isArray(saved.pluginSettings) ? saved.pluginSettings : [],
            customRules: Array.isArray(saved.customRules) ? saved.customRules : []
        };
    } catch {
        return { pluginSettings: [], customRules: [] };
    }
}

function saveRulesets(rulesets) {
    try {
        localStorage.setItem(RULESET_STORAGE_KEY, JSON.stringify(rulesets));
    } catch (error) {
        console.warn("Could not save Chancebook ruleset preferences.", error);
    }
}

function collectRulesets(app) {
    const rulesets = {
        pluginSettings: [],
        customRules: []
    };

    app.querySelectorAll("[data-ruleset-group]").forEach((checkbox) => {
        if (checkbox.checked) {
            rulesets[checkbox.dataset.rulesetGroup].push(checkbox.value);
        }
    });

    return rulesets;
}

function renderRuleInfo(info) {
    if (!info?.length) return "";

    return `
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${info.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
            </div>
        </details>
    `;
}

function renderRulesetOptions(rules, group) {
    return rules.map((rule) => `
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${group}"
                    value="${rule.id}"
                >
                ${escapeHtml(rule.label)}
            </label>
            ${renderRuleInfo(rule.info)}
        </div>
    `).join("");
}

function renderProfileRulesets(rulesets = {}) {
    const pluginSettings = Array.isArray(rulesets.pluginSettings)
        ? rulesets.pluginSettings
        : [];

    const customRules = Array.isArray(rulesets.customRules)
        ? rulesets.customRules
        : [];

    const selectedPluginRules = PLUGIN_RULES.filter((rule) =>
        pluginSettings.includes(rule.id)
    );

    const selectedCustomRules = CUSTOM_RULES.filter((rule) =>
        customRules.includes(rule.id)
    );

    if (!selectedPluginRules.length && !selectedCustomRules.length) {
        return `<p class="chancebook-muted">No additional rulesets specified.</p>`;
    }

    const renderSelected = (rules) => rules.length
        ? rules.map((rule) => `
            <div class="chancebook-profile-rule">
                <span>${escapeHtml(rule.label)}</span>
                ${renderRuleInfo(rule.info)}
            </div>
        `).join("")
        : `<p class="chancebook-muted">None specified.</p>`;

    return `
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${renderSelected(selectedPluginRules)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${renderSelected(selectedCustomRules)}
                </div>
            </div>
        </div>
    `;
}

let client = null;
let teardownHandler = null;
let itemsById = new Map();

function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
}

function number(value) {
    return Number.isFinite(Number(value)) ? Number(value).toLocaleString() : "0";
}

function getClient() {
    if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) return null;
    return import("https://esm.sh/@supabase/supabase-js@2").then(({ createClient }) => {
        if (!client) {
            client = createClient(CHANCEBOOK_SUPABASE_URL, CHANCEBOOK_SUPABASE_ANON_KEY, {
                auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
            });
        }
        return client;
    });
}

async function loadItems() {
    if (itemsById.size) return;
    const response = await fetch("/data/items.json");
    if (!response.ok) throw new Error("Could not load the item database.");
    const items = await response.json();
    itemsById = new Map(items.map((item) => [Number(item.id), item]));
}


function itemMarkup(itemId, count, itemData = null) {
    const item = itemData?.name
        ? itemData
        : itemsById.get(Number(itemId));

    if (!item) {
        return `
            <div class="chancebook-item">
                <span>Item #${escapeHtml(itemId)}</span>
                <strong>${number(count)}</strong>
            </div>
        `;
    }

    return `
        <a class="chancebook-item" data-link href="/item?id=${Number(itemId)}" title="${escapeHtml(item.name)}">
            ${item.image ? `
                <img src="/images/${encodeURIComponent(item.image)}" alt="" loading="lazy">
            ` : ""}
            <span>${escapeHtml(item.name)}</span>
            <strong>${number(count)}</strong>
        </a>
    `;
}

function itemStatCard(title, record, emptyText, itemsPageHref, itemsPageLabel) {
    return `
        <section class="chancebook-stat-card">
            <h3>${title}</h3>
            ${record
                ? itemMarkup(record.itemId, record.count, record)
                : `<p class="chancebook-muted">${emptyText}</p>`
            }
            ${record ? `
                ${record.tiedCount > 1
                    ? `<small>+ ${number(record.tiedCount - 1)} other items tied for this spot</small>`
                    : ""
                }
            ` : ""}
            <a data-link href="${itemsPageHref}" class="chancebook-item-stat-link">
                ${itemsPageLabel} →
            </a>
        </section>
    `;
}

let hiscoresPage = 0;
let hiscoresFreeToPlayOnly = false;

function hiscoreAccountIcon(row) {
    const icons = {
        ironman: "Ironman_chat_badge.webp",
        hardcore_ironman: "Hardcore_ironman_chat_badge.webp",
        ultimate_ironman: "Ultimate_ironman_chat_badge.webp",
        group_ironman: "Group_ironman_chat_badge.webp",
        hardcore_group_ironman: "Hardcore_group_ironman_chat_badge.webp",
        unranked_group_ironman: "Unranked_group_ironman_chat_badge.webp",
    };

    const icon = icons[row.accountType];

    if (!row.isIronman || !icon) return "";

    return `
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${icon}"
            alt=""
            aria-hidden="true"
            title="${escapeHtml(row.accountType.replaceAll("_", " "))}"
        >
    `;
}

function renderHiscoresSection(container, rows = []) {
    const filteredRows = hiscoresFreeToPlayOnly
        ? rows.filter(row => row.freeToPlayOnly === true)
        : rows;

    const pageSize = 10;
    const totalPages = Math.ceil(filteredRows.length / pageSize);
    const currentPage = Math.min(hiscoresPage, Math.max(0, totalPages - 1));
    hiscoresPage = currentPage;

    const start = currentPage * pageSize;
    const pageRows = filteredRows.slice(start, start + pageSize);

    container.innerHTML = `
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Each chancer has their own ruleset, so feel free to click into their profile and have a look!</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${hiscoresFreeToPlayOnly ? "checked" : ""}>
                Free to Play
            </label>
        </div>

        ${pageRows.length ? `
            <div class="chancebook-table-wrap">
                <table class="osrs-table chancebook-hiscores">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player</th>
                            <th>Rolled</th>
                            <th>Obtained</th>
                            <th>QP</th>
                            <th>Total level</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pageRows.map((row, index) => `
                            <tr>
                                <td>${start + index + 1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${row.profileUrl
                                            ? `<a data-link href="${escapeHtml(row.profileUrl)}">${escapeHtml(row.name)}</a>`
                                            : escapeHtml(row.name || "Anonymous")}
                                        ${hiscoreAccountIcon(row)}
                                    </span>
                                </td>
                                <td>${number(row.rolledCount)}</td>
                                <td>${number(row.obtainedCount)}</td>
                                <td>${number(row.questPoints)}</td>
                                <td>${number(row.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        ` : `<p class="chancebook-muted">No chancers found${hiscoresFreeToPlayOnly ? " with Free to Play selected" : ""}.</p>`}

        ${totalPages > 1 ? `
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${currentPage === 0 ? "disabled" : ""} aria-label="Previous page">←</button>
                <span>Page ${currentPage + 1} of ${totalPages}</span>
                <button type="button" class="chancebook-page-next" ${currentPage >= totalPages - 1 ? "disabled" : ""} aria-label="Next page">→</button>
            </div>
        ` : ""}
    `;

    container.querySelector("#chancebook-f2p-filter").addEventListener("change", (event) => {
        hiscoresFreeToPlayOnly = event.target.checked;
        hiscoresPage = 0;
        renderHiscoresSection(container, rows);
    });

    container.querySelector(".chancebook-page-prev")?.addEventListener("click", () => {
        hiscoresPage--;
        renderHiscoresSection(container, rows);
    });

    container.querySelector(".chancebook-page-next")?.addEventListener("click", () => {
        hiscoresPage++;
        renderHiscoresSection(container, rows);
    });
}

function renderContribution() {
    const loaded = Array.isArray(fileStore.rolled) && Array.isArray(fileStore.obtained) && fileStore.player;
    const currentName = fileStore.player?.name || "";
    return `
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${loaded ? `
                <p class="chancebook-ready">Tracker data detected for <strong>${escapeHtml(currentName)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${renderRulesetOptions(PLUGIN_RULES, "pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${renderRulesetOptions(CUSTOM_RULES, "customRules")}
                    </div>
                </div>
                <label class="chancebook-check"><input type="checkbox" id="cb-share"> I agree to share my statistics with Chancebook.</label>
                <label class="chancebook-check"><input type="checkbox" id="cb-name" disabled> Display my RuneScape username publicly.</label>
                <label class="chancebook-check"><input type="checkbox" id="cb-hiscores" disabled> Include me in the community hiscores.</label>
                <p class="chancebook-muted chancebook-small">The username and hiscores options are independent. You can contribute anonymously. You can change these preferences or withdraw your contribution later.</p>
                <div class="chancebook-actions">
                    <button type="button" id="cb-submit" disabled>Submit statistics</button>
                    <span id="cb-submit-status" role="status" aria-live="polite"></span>
                </div>
            ` : `
                <p class="chancebook-muted">Upload your rolled, obtained and player profile files on the <a data-link href="/upload">Upload page</a> first. Your existing local tracker data will remain unchanged.</p>
            `}
            <div id="cb-manage" hidden>
                <button type="button" class="chancebook-danger" id="cb-withdraw">Remove my statistics</button>
            </div>
        </section>
    `;
}

export default async function ChancebookPage() {
    const path = window.location.pathname.replace(/\/+$/, "");
    if (path.startsWith("/chancebook/")) {
        return `
            <div class="chancebook-page">
                <div class="chancebook-profile-back"><a data-link href="/chancebook">← Chancebook</a></div>
                <div id="chancebook-profile-content"><p>Loading player profile...</p></div>
            </div>
        `;
    }

    return `
        <div class="chancebook-page">
            <div class="chancebook-heading">
                <div>
                    <h1>Chancebook</h1>
                    <p>Community statistics for all you nerds.</p>
                </div>
            </div>
            <div id="chancebook-load-status" class="chancebook-muted" role="status">Loading community statistics...</div>
            <div id="chancebook-statistics" hidden>
                <div class="chancebook-stat-grid" id="chancebook-stat-grid"></div>
                <div class="chancebook-fun-stats-link">
                    <a data-link href="/chancebook/fun-stats">
                        <span>
                            <strong>Fun Stats!</strong>
                            <small>Explore community totals, tool ownership and more.</small>
                        </span>
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
                <section class="chancebook-panel">
                    <h2>Community Hiscores</h2>
                    <div id="chancebook-hiscores"></div>
                </section>
            </div>
            ${renderContribution()}
        </div>
    `;
}


function renderCommunityStats(app, result) {
    const status = app.querySelector("#chancebook-load-status");
    const statistics = app.querySelector("#chancebook-statistics");

    if (!statistics) return;

    status.hidden = true;
    statistics.hidden = false;

    // Avoid duplicating the contributor note when background data refreshes.
    statistics.querySelector(".chancebook-contributor-note")?.remove();

    const contributorNote = document.createElement("p");
    contributorNote.className =
        "chancebook-muted chancebook-small chancebook-contributor-note";

    contributorNote.textContent =
        `${number(result.contributorCount)} chancers currently contribute statistics.`;

    statistics.prepend(contributorNote);

    app.querySelector("#chancebook-stat-grid").innerHTML = [
        itemStatCard(
            "Most commonly rolled item",
            result.itemHighlights?.mostRolled,
            "No rolled items yet.",
            "/chancebook/rolled-items",
            "View all rolled items"
        ),
        itemStatCard(
            "Most commonly obtained item",
            result.itemHighlights?.mostObtained,
            "No obtained items yet.",
            "/chancebook/obtained-items",
            "View all obtained items"
        ),
        itemStatCard(
            "Least commonly rolled item",
            result.itemHighlights?.leastRolled,
            "No rolled items yet.",
            "/chancebook/rolled-items",
            "View all rolled items"
        ),
        itemStatCard(
            "Least commonly obtained item",
            result.itemHighlights?.leastObtained,
            "No obtained items yet.",
            "/chancebook/obtained-items",
            "View all obtained items"
        )
    ].join("");

    renderHiscoresSection(
        app.querySelector("#chancebook-hiscores"),
        result.hiscores
    );
}


export async function init() {
    teardown();

    const app = document.getElementById("app");
    if (!app) return;

    const profilePath = window.location.pathname.replace(/\/+$/, "");
    const isProfile = profilePath.startsWith("/chancebook/");
    let alive = true;

    // Register teardown immediately, including while requests are pending.
    teardownHandler = () => {
        alive = false;
    };

    if (isProfile) {
        const profileRoot = app.querySelector("#chancebook-profile-content");
        const pathParts = profilePath
            .slice("/chancebook/".length)
            .split("/")
            .filter(Boolean);

        const slug = decodeURIComponent(pathParts[0] || "");
        const isItemHistory = pathParts[1] === "item-history";

        if (!profileRoot) return;

        try {
            if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) {
                throw new Error("Chancebook is not configured yet.");
            }

            // Load item metadata and the profile simultaneously.
            const [, result] = await Promise.all([
                loadItems().catch((error) => {
                    console.warn("Chancebook item data could not be loaded.", error);
                }),
                requestPublicData({ profile: slug })
            ]);

            if (!alive) return;

            if (!result.profile) {
                profileRoot.innerHTML = `
                    <h1>Player not found</h1>
                    <p>This profile may be private or may no longer be contributing.</p>
                `;
                return;
            }

            profileRoot.innerHTML = isItemHistory
                ? renderItemHistory(result.profile, slug)
                : renderProfile(result.profile, slug);

        } catch (error) {
            if (!alive) return;

            profileRoot.innerHTML = `
                <h1>Player profile</h1>
                <p class="chancebook-error">
                    ${escapeHtml(error.message || "Could not load this profile.")}
                </p>
            `;
        }

        return;
    }

    
    const status = app.querySelector("#chancebook-load-status");

    // Set up contribution controls immediately.
    // Their existing-contribution check runs independently.
    bindContribution(app);

    try {
        if (!CHANCEBOOK_SUPABASE_URL || !CHANCEBOOK_SUPABASE_ANON_KEY) {
            status.innerHTML = `
                Chancebook needs its Supabase project settings.
                Add <code>VITE_SUPABASE_URL</code> and
                <code>VITE_SUPABASE_ANON_KEY</code> to your local
                <code>.env.local</code> file before building.
            `;
        } else {
            const result = await fetchPublicData((updatedData) => {
                // This callback runs if newer statistics arrive in the background.
                if (!alive) return;

                renderCommunityStats(app, updatedData);
            });

            if (!alive) return;

            renderCommunityStats(app, result);
        }

    } catch (error) {
        if (alive && status) {
            status.innerHTML = `
                <span class="chancebook-error">
                    ${escapeHtml(error.message || "Could not load Chancebook statistics.")}
                </span>
            `;
        }
    }
}


function getCachedCommunityStats() {
    try {
        const cached = JSON.parse(
            localStorage.getItem(COMMUNITY_STATS_CACHE_KEY) || "null"
        );

        if (
            cached &&
            cached.version !== undefined &&
            cached.data &&
            typeof cached.data === "object"
        ) {
            return cached;
        }
    } catch (error) {
        console.warn("Could not read cached Chancebook statistics.", error);
    }

    return null;
}

function saveCachedCommunityStats(data) {
    if (!data || data.version === undefined) return;

    // Only cache information required to render the main Chancebook page.
    // The full item-count arrays are not needed here.
    const cacheData = { ...data };

    delete cacheData.rolledItemCounts;
    delete cacheData.obtainedItemCounts;

    try {
        localStorage.setItem(
            COMMUNITY_STATS_CACHE_KEY,
            JSON.stringify({
                version: data.version,
                updatedAt: data.updatedAt ?? null,
                data: cacheData
            })
        );
    } catch (error) {
        console.warn("Could not cache Chancebook statistics.", error);

        // If an older cache is taking up space, remove it and retry once.
        try {
            localStorage.removeItem(COMMUNITY_STATS_CACHE_KEY);

            localStorage.setItem(
                COMMUNITY_STATS_CACHE_KEY,
                JSON.stringify({
                    version: data.version,
                    updatedAt: data.updatedAt ?? null,
                    data: cacheData
                })
            );
        } catch (retryError) {
            console.warn(
                "Could not save the reduced Chancebook cache.",
                retryError
            );
        }
    }
}

// Make a request to the public data Edge Function.
async function requestPublicData(params = {}) {
    const query = new URLSearchParams(params);
    const url = `${CHANCEBOOK_SUPABASE_URL}/functions/v1/chancebook-public-data${query.toString() ? `?${query}` : ""}`;

    const response = await fetch(url, {
        headers: { apikey: CHANCEBOOK_SUPABASE_ANON_KEY }
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(
            data.error || `Chancebook request failed (${response.status}).`
        );
    }

    return data;
}

// Fetch public data. Individual profiles are never cached.
// Community statistics are cached and checked against the server version.
async function fetchPublicData(onBackgroundUpdate) {
    const cached = getCachedCommunityStats();

    // Return cached data immediately and refresh in the background.
    if (cached) {
        void (async () => {
            try {
                const versionData = await requestPublicData({
                    versionOnly: "true"
                });

                // Nothing to refresh if the snapshot is unchanged.
                if (
                    String(cached.version) === String(versionData.version)
                ) {
                    return;
                }

                const data = await requestPublicData();

                saveCachedCommunityStats(data);

                if (typeof onBackgroundUpdate === "function") {
                    onBackgroundUpdate(data);
                }

            } catch (error) {
                console.warn(
                    "Could not refresh Chancebook statistics in the background.",
                    error
                );
            }
        })();

        return cached.data;
    }

    // First visit: no cache exists, so fetch the full snapshot.
    const data = await requestPublicData();

    saveCachedCommunityStats(data);

    return data;
}


function renderProfile(profile, slug) {
    const player = profile.player || {};
    const levels = player.levels || {};
    const rolledItemIds = new Set(
        (profile.rolledIds || []).map(Number)
    );

    const achievements = [
        {
            label: "Herblore unlocked",
            itemIds: [2136, 2134, 2138, 2132]
        },
        {
            label: "Sailing unlocked",
            itemIds: [8794, 2347]
        },
        {
            label: "Morytania unlocked",
            itemIds: [1925],
            alternativeItemIds: [7936, 1436]
        }
    ];

    const recent = Array.isArray(profile.recentRolls)
        ? profile.recentRolls
        : Array.isArray(player.recentRolls)
            ? player.recentRolls
            : [];

    const recentObtained = Array.isArray(profile.recentObtained)
        ? profile.recentObtained
        : Array.isArray(player.recentObtained)
            ? player.recentObtained
            : [];

    const totalLevel = SKILLS.reduce(
        (sum, skill) => sum + (Number(levels[skill]) || 0),
        0
    );

    return `
        <div class="chancebook-profile-heading">
            <div>
                <h1>${escapeHtml(profile.name)}</h1>
                ${profile.lastUpdated ? `
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${escapeHtml(new Date(profile.lastUpdated).toLocaleDateString())}
                    </p>
                ` : ""}
            </div>
        </div>
        <div class="chancebook-profile-stats">
            <div><strong>${number(profile.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${number(profile.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${number(player.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${number(totalLevel)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${achievements.map(achievement => {
                    const {
                        label,
                        itemIds,
                        alternativeItemIds
                    } = achievement;

                    let complete;
                    let progress = "";

                    if (alternativeItemIds) {
                        const bucketRolled = rolledItemIds.has(1925);
                        const essenceRolled = alternativeItemIds.some(id =>
                            rolledItemIds.has(id)
                        );

                        complete = bucketRolled && essenceRolled;

                        if (!complete) {
                            if (bucketRolled) {
                                progress = "Bucket rolled, missing essence";
                            } else if (essenceRolled) {
                                progress = "Essence rolled, bucket missing";
                            } else {
                                progress = "0/2 requirements rolled";
                            }
                        }
                    } else {
                        const rolledCount = itemIds.filter(id =>
                            rolledItemIds.has(id)
                        ).length;

                        complete = rolledCount === itemIds.length;

                        if (!complete) {
                            progress = `${rolledCount}/${itemIds.length} items rolled`;
                        }
                    }

                    const displayLabel = complete
                        ? label
                        : label.replace("unlocked", "still locked");

                    return `
                        <div class="chancebook-achievement ${complete ? "is-unlocked" : "is-locked"}">
                            <div>
                                <div><span>${complete ? "✓" : "○"}</span>${displayLabel}</div>
                                ${!complete ? `
                                    <small class="chancebook-muted">${progress}</small>
                                ` : ""}
                            </div>
                        </div>
                    `;
                }).join("")}
            </div>
        </section>
        <section class="chancebook-panel">
            <h2>Rules of this account</h2>
            ${renderProfileRulesets(profile.chancebookRulesets)}
        </section>
        <div class="chancebook-history-link">
            <a data-link href="/chancebook/${encodeURIComponent(slug)}/item-history">
                View full item history →
            </a>
        </div>
        <div class="chancebook-recent-grid">
        <section class="chancebook-panel">
            <h2>Recently obtained</h2>
            ${recentObtained.length ? `
                <div class="chancebook-recent-items">
                    ${recentObtained.slice(0, 3).map((id) => {
                        const item = itemsById.get(Number(id));
                        return item ? `
                            <a data-link href="/item?id=${Number(id)}">
                                <img src="/images/${encodeURIComponent(item.image)}" alt="">
                                <span>${escapeHtml(item.name)}</span>
                            </a>
                        ` : "";
                    }).join("")}
                </div>
            ` : `<p class="chancebook-muted">Recent obtained history is not available for this submission yet.</p>`}
        </section>
        <section class="chancebook-panel">
            <h2>Recently rolled</h2>
            ${recent.length ? `<div class="chancebook-recent-items">${recent.slice(0, 3).map((id) => {
                const item = itemsById.get(Number(id));
                return item ? `<a data-link href="/item?id=${Number(id)}"><img src="/images/${encodeURIComponent(item.image)}" alt=""><span>${escapeHtml(item.name)}</span></a>` : "";
            }).join("")}</div>` : `<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>`}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${SKILLS.map((skill) => {
                    const icon = skill.toLowerCase().replace(/ /g, "_");
                    return `<div class="chancebook-skill"><img src="/images/skills/${icon}.png" alt=""><span>${escapeHtml(skill)}</span><strong>${number(levels[skill] || 1)}</strong></div>`;
                }).join("")}
            </div>
        </section>
    `;
}

function renderHistoryList(title, ids) {
    const itemIds = Array.isArray(ids) ? ids : [];

    return `
        <section class="chancebook-panel">
            <h2>${title} <small>(${number(itemIds.length)})</small></h2>

            ${itemIds.length ? `
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${itemIds.map((id, index) => {
                        const item = itemsById.get(Number(id));

                        return `
                            <a
                                data-link
                                href="/item?id=${Number(id)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${index + 1}.</span>
                                ${item ? `
                                    <img
                                        src="/images/${encodeURIComponent(item.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${escapeHtml(item.name)}</span>
                                ` : `
                                    <span>Pressed roll button</span>
                                `}
                            </a>
                        `;
                    }).join("")}
                </div>
            ` : `
                <p class="chancebook-muted">No item history available.</p>
            `}
        </section>
    `;
}

function renderItemHistory(profile, slug) {
    const obtainedIds = Array.isArray(profile.obtainedIds)
        ? profile.obtainedIds
        : [];

    const rolledIds = Array.isArray(profile.rolledIds)
        ? profile.rolledIds
        : [];

    return `
        <div class="chancebook-profile-heading">
            <div>
                <h1>${escapeHtml(profile.name)} - Item History</h1>
                ${profile.lastUpdated ? `
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${escapeHtml(new Date(profile.lastUpdated).toLocaleDateString())}
                    </p>
                ` : ""}
            </div>
        </div>

        <div class="chancebook-history-link">
            <a data-link href="/chancebook/${encodeURIComponent(slug)}">
                ← Back to player profile
            </a>
        </div>

        <div class="chancebook-recent-grid">
            ${renderHistoryList("Obtained items", obtainedIds)}
            ${renderHistoryList("Rolled items", rolledIds)}
        </div>
    `;
}

function bindContribution(app) {
    const share = app.querySelector("#cb-share");
    const name = app.querySelector("#cb-name");
    const hiscores = app.querySelector("#cb-hiscores");
    const submit = app.querySelector("#cb-submit");
    const status = app.querySelector("#cb-submit-status");
    const manage = app.querySelector("#cb-manage");

    if (manage) manage.hidden = true;
    if (!share || !name || !hiscores || !submit) return;

    // Restore previously saved ruleset selections.
    const savedRulesets = getSavedRulesets();

    app.querySelectorAll("[data-ruleset-group]").forEach((checkbox) => {
        checkbox.checked = savedRulesets[checkbox.dataset.rulesetGroup]
            .includes(checkbox.value);

        checkbox.addEventListener("change", () => {
            saveRulesets(collectRulesets(app));
        });
    });

    // Restore previously saved contribution preferences.
    const PREFERENCES_STORAGE_KEY = "chancebookPreferences";

    function getSavedPreferences() {
        try {
            return JSON.parse(localStorage.getItem(PREFERENCES_STORAGE_KEY) || "{}");
        } catch {
            return {};
        }
    }

    function savePreferences() {
        try {
            localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify({
                share: share.checked,
                name: name.checked,
                hiscores: hiscores.checked
            }));
        } catch (error) {
            console.warn("Could not save Chancebook preferences.", error);
        }
    }

    const savedPreferences = getSavedPreferences();

    share.checked = savedPreferences.share === true;
    name.checked = savedPreferences.name === true;
    hiscores.checked = savedPreferences.hiscores === true;

    const update = () => {
        name.disabled = !share.checked;
        hiscores.disabled = !share.checked;

        if (!share.checked) {
            name.checked = false;
            hiscores.checked = false;
        }

        submit.disabled = !share.checked;
        savePreferences();
    };

    share.addEventListener("change", update);
    name.addEventListener("change", savePreferences);
    hiscores.addEventListener("change", savePreferences);

    update();

    const onSubmit = async () => {
        submit.disabled = true;
        status.textContent = "Submitting...";
        try {
            const supabase = await getChancebookClient();
            if (!supabase) throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");

            const { data: authData, error: authError } = await supabase.auth.getSession();
            if (authError) throw authError;

            let session = authData.session;

            if (!session) {
                const { data, error } = await supabase.auth.signInAnonymously();
                if (error) throw error;
                session = data.session;
            }

            const profile = JSON.parse(fileStore.playerBlobText || "");

            const { data, error } = await supabase.functions.invoke("submit-player-data", {
                body: {
                    rolledIds: fileStore.rolled,
                    obtainedIds: fileStore.obtained,
                    profile,
                    chancebookRulesets: collectRulesets(app),
                    shareStats: true,
                    showUsername: name.checked,
                    leaderboardOptIn: hiscores.checked
                }
            });

            if (error) throw error;

            status.textContent = "Your statistics have been submitted.";
            app.querySelector("#cb-manage").hidden = false;
        } catch (error) {
            console.error("Chancebook submission failed:", error);

            if (error?.context) {
                try {
                    const responseText = await error.context.clone().text();

                    console.error(
                        "Chancebook Edge Function response:",
                        error.context.status,
                        responseText
                    );
                } catch (responseError) {
                    console.error("Could not read submission error response:", responseError);
                }
            }

            status.textContent = error.message || "Could not submit your statistics.";
        } finally {
            submit.disabled = !share.checked;
        }
    };

    const onWithdraw = async () => {
        const button = app.querySelector("#cb-withdraw");
        button.disabled = true;

        try {
            const supabase = await getChancebookClient();
            const { error } = await supabase.functions.invoke("withdraw-player-data", {
                body: { action: "withdraw" }
            });

            if (error) throw error;

            status.textContent = "Your Chancebook contribution has been withdrawn.";
            app.querySelector("#cb-manage").hidden = true;
        } catch (error) {
            status.textContent = error.message || "Could not withdraw your contribution.";
        } finally {
            button.disabled = false;
        }
    };

    const checkExistingContribution = async () => {
        try {
            const supabase = await getChancebookClient();
            if (!supabase || !manage) return;

            // Don't create a new anonymous session just to check.
            const { data: authData, error: authError } = await supabase.auth.getSession();
            if (authError) throw authError;

            if (!authData.session) return;

            const { data, error } = await supabase.functions.invoke(
                "withdraw-player-data",
                { body: { action: "status" } }
            );

            if (error) throw error;

            manage.hidden = data?.hasContribution !== true;

        } catch (error) {
            console.warn("Could not check Chancebook contribution status:", error);
            status.textContent = "Could not check your existing contribution. Please refresh the page.";
        }
    };

    checkExistingContribution();

    submit.addEventListener("click", onSubmit);
    app.querySelector("#cb-withdraw")?.addEventListener("click", onWithdraw);
}

export function teardown() {
    if (typeof teardownHandler === "function") teardownHandler();
    teardownHandler = null;
}
