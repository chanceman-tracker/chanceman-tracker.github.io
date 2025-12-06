import { fileStore } from "../storage/fileStore.js";
import { canDoOtherMethod, canReachNpc } from "./itemAvailability.js";

export function isItemObtainable(item, ctx) {
    const src = item.sources || {};

    if (fileStore.unlocked.includes(item.id)) {
        // === Shops ===
        if (src.shops) {
            for (const rule of Object.values(src.shops)) {

                // "No requirements"
                if (rule === "No requirements") return true;

                // string → single rule
                if (typeof rule === "string") {
                    if (canDoOtherMethod(rule, ctx)) return true;
                }

                // object → any/all
                if (typeof rule === "object") {
                    if (canDoOtherMethod(rule, ctx)) return true;
                }
            }
        }

        // === Spawns ===
        if (src.spawns) {
            for (const rule of Object.values(src.spawns)) {

                if (rule === "No requirements") return true;

                if (typeof rule === "string") {
                    if (canDoOtherMethod(rule, ctx)) return true;
                }

                if (typeof rule === "object") {
                    if (canDoOtherMethod(rule, ctx)) return true;
                }
            }
        }
    }

    // === Drops ===
    if (src.drops) {
        for (const npc of Object.keys(src.drops)) {
            if (canReachNpc(npc, ctx)) return true;
        }
    }

    // === Other ===
    if (src.other) {
        for (const obj of Object.values(src.other)) {
            if (canDoOtherMethod(obj.rule, ctx)) return true;
        }
    }

    return false;
}

/*
    LOWER rank = appears first.
    Obtainable → shop/spawn > drop > other → alphabetical
*/
export function getObtainabilityRank(item, ctx) {
    const src = item.sources || {};
    const obtainable = isItemObtainable(item, ctx);

    if (!obtainable)
        return { rank: 99, type: "zzz", name: item.name.toLowerCase() };

    // Now categorize by source priority:
    if (src.shops)   return { rank: 1, type: "shop",  name: item.name.toLowerCase() };
    if (src.spawns)  return { rank: 2, type: "spawn", name: item.name.toLowerCase() };
    if (src.drops)   return { rank: 3, type: "drop",  name: item.name.toLowerCase() };
    if (src.other)   return { rank: 4, type: "other", name: item.name.toLowerCase() };

    // Fallback (should never happen)
    return { rank: 10, type: "other", name: item.name.toLowerCase() };
}
