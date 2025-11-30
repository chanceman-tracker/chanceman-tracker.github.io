import { canDoOtherMethod, canReachNpc } from "./itemAvailability.js";

export function isItemObtainable(item, ctx) {
    const src = item.sources || {};

    // === Shops === (always obtainable if unlocked, or no rule needed)
    if (src.shops) return true;

    // === Spawns ===
    if (src.spawns) return true;

    // === Drops ===
    if (src.drops) {
        for (const npc of Object.keys(src.drops)) {
            if (canReachNpc(npc, ctx)) return true;
        }
    }

    // === Other methods ===
    if (src.other) {
        for (const key of Object.keys(src.other)) {
            const rule = src.other[key].rule;
            if (canDoOtherMethod(rule, ctx)) return true;
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
