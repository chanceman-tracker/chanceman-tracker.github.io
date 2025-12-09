import { fileStore } from "../storage/fileStore.js";
import { canDoOtherMethod, canReachNpc } from "./itemAvailability.js";

export async function isItemObtainable(item, ctx) {
    await ctx.ensureItemsLoaded();
    const src = item.sources || {};

    if (fileStore.unlocked.includes(item.id)) {
        // === Shops ===
        if (src.shops) {
            for (const rule of Object.values(src.shops)) {

                // "No requirements"
                if (rule === "No requirements") return true;

                // string → single rule
                if (typeof rule === "string") {
                    if (await canDoOtherMethod(rule, ctx)) return true;
                }

                // object → any/all
                if (typeof rule === "object") {
                    if (await canDoOtherMethod(rule, ctx)) return true;
                }
            }
        }

        // === Spawns ===
        if (src.spawns) {
            for (const rule of Object.values(src.spawns)) {

                if (rule === "No requirements") return true;

                if (typeof rule === "string") {
                    if (await canDoOtherMethod(rule, ctx)) return true;
                }

                if (typeof rule === "object") {
                    if (await canDoOtherMethod(rule, ctx)) return true;
                }
            }
        }
    }

    // === Drops ===
    if (src.drops) {
        for (const npc of Object.keys(src.drops)) {
            if (await canReachNpc(npc, ctx)) return true;
        }
    }

    // === Other ===
    if (src.other) {
        for (const obj of Object.values(src.other)) {
            if (await canDoOtherMethod(obj.rule, ctx)) return true;
        }
    }

    return false;
}

/*
    LOWER rank = appears first.
    Obtainable → shop/spawn > drop > other → alphabetical
*/
export async function getObtainabilityRank(item, ctx) {
    const src = item.sources || {};
    const name = item.name.toLowerCase();
    const id = item.id;

    // 1. Shops
    if (src.shops) {
        for (const rule of Object.values(src.shops)) {
            if (fileStore.unlocked.includes(id)) {
                // Rule is a string
                if (typeof rule === "string") {
                    if (rule === "No requirements") {
                        return { rank: 1, type: "shop", name };
                    }
                    if (await canDoOtherMethod(rule, ctx)) {
                        return { rank: 1, type: "shop", name };
                    }
                }
                // Rule is an object (e.g. any/all)
                else if (typeof rule === "object") {
                    if (await canDoOtherMethod(rule, ctx)) {
                        return { rank: 1, type: "shop", name };
                    }
                }
            }
        }
    }

    // 2. Spawns
    if (src.spawns) {
        for (const rule of Object.values(src.spawns)) {
            if (fileStore.unlocked.includes(id)) {
                if (typeof rule === "string") {
                    if (rule === "No requirements") {
                        return { rank: 2, type: "spawn", name };
                    }
                    if (await canDoOtherMethod(rule, ctx)) {
                        return { rank: 2, type: "spawn", name };
                    }
                }
                else if (typeof rule === "object") {
                    if (await canDoOtherMethod(rule, ctx)) {
                        return { rank: 2, type: "spawn", name };
                    }
                }
            }
        }
    }

    // 3. Drops
    if (src.drops) {
        for (const npc of Object.keys(src.drops)) {
            if (await canReachNpc(npc, ctx))
                return { rank: 3, type: "drop", name };
        }
    }

    // 4. Other methods (crafting, etc.)
    if (src.other) {
        for (const obj of Object.values(src.other)) {
            if (await canDoOtherMethod(obj.rule, ctx))
                return { rank: 4, type: "other", name };
        }
    }

    // 5. Unobtainable
    return { rank: 99, type: "unobtainable", name };
}
