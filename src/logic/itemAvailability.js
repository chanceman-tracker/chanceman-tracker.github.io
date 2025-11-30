import { NPC_RULES } from "./npcRules.js";
import { REQUIREMENT_CHECKS } from "./requirements.js";

export function canReachNpc(npcName, ctx) {
    const rule = NPC_RULES[npcName];

    // No rule means killable by default
    if (!rule) return true;

    return evaluateRule(rule, ctx);
}

export function canDoOtherMethod(ruleName, ctx) {
    return evaluateRule(ruleName, ctx);
}

export function evaluateRule(rule, ctx) {
    // Empty or undefined means automatically obtainable
    if (!rule) return true;

    // If rule is a string -> reference to requirement function
    if (typeof rule === "string") {
        const fn = REQUIREMENT_CHECKS[rule];
        if (!fn) {
            console.warn("Unknown rule:", rule);
            return false;
        }
        return fn(ctx);
    }

    // If rule is an array -> OR logic
    if (Array.isArray(rule)) {
        return rule.some(r => evaluateRule(r, ctx));
    }

    // If rule is an object -> structural rule
    if (rule.has) {
        return ctx.unlocked.includes(rule.has);
    }

    if (rule.any) {
        return rule.any.some(sub => evaluateRule(sub, ctx));
    }

    if (rule.all) {
        return rule.all.every(sub => evaluateRule(sub, ctx));
    }

    console.warn("Unknown rule structure:", rule);
    return false;
}
