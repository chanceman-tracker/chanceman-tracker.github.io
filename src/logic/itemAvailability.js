import { NPC_RULES } from "./npcRules.js";
import { REQUIREMENT_CHECKS } from "./requirements.js";

export function canReachNpc(npcName, ctx) {
    // If no rules exist, assume killable
    if (!NPC_RULES[npcName])
        return true;

    const requirements = NPC_RULES[npcName];

    // All requirements must be met
    return requirements.every(reqName => {
        const check = REQUIREMENT_CHECKS[reqName];
        if (!check) {
            console.warn("Unknown requirement:", reqName);
            return false;
        }
        return check(ctx);
    });
}
