// Fast helper:
function has(unlocked, id) {
    return unlocked.includes(id);
}

export const REQUIREMENT_CHECKS = {
    canCompleteDragonSlayer2(ctx) {
        return false; // TODO
    },
    canReachAbyssalSire(ctx) {
        return canCompleteEnterTheAbyss(ctx) || canCompleteFairytaleIGrowingPains(ctx);
    },
    canDoGuardiansOfTheRift(ctx) {
        return canCompleteTempleOfTheEye(ctx);
    },
    isNotSlayerLocked(ctx) {
        return true; // TODO implement slayer locked filter
    }
};


function canCompleteEnterTheAbyss(ctx) {
    return canCompleteRuneMysteries(ctx);
}

function canCompleteRuneMysteries(ctx) {
    return has(ctx.unlocked, 1438); // Air talisman
}

function canCompleteFairytaleIGrowingPains(ctx) {
    return canCompleteLostCity(ctx) //
            && canCompleteNatureSpirit(ctx) //
            && has(ctx.unlocked, 5329) // Secateurs
            && has(ctx.unlocked, 952)  // Spade
            // TODO other item reqs?
            ;
}

function canCompleteLostCity(ctx) {
    return has(ctx.unlocked, 1351)     // Bronze axe
            && has(ctx.unlocked, 946)  // Knife
            && canTrainCrafting(ctx);
}

function canCompleteNatureSpirit(ctx) {
    return has(ctx.unlocked, 2961)     // Silver sickle
            && has(ctx.unlocked, 2355) // Silver bar
            && has(ctx.unlocked, 2976) // Sickle mould
            && canTrainCrafting(ctx);
}

function canCompleteTempleOfTheEye(ctx) {
    return has(ctx.unlocked, 1929)     // Bucket of water
            && has(ctx.unlocked, 1755) // Chisel
            && (has(ctx.unlocked, 1265) || has(ctx.unlocked, 1267)) // A bronze or iron pickaxe
            && canTrainRunecraft(ctx);
}

function canTrainCrafting(ctx) {
    return true; //TODO implement this beast (true because lamps and buttons)
}

function canTrainRunecraft(ctx) {
    return canCompleteRuneMysteries(ctx) &&
            (
                has(ctx.unlocked, 5525)    // Tiara
                || has(ctx.unlocked, 1436) // Rune essence
                || has(ctx.unlocked, 7936) // Pure essence
            );
}
