// Fast helper:
function has(unlocked, id) {
    return unlocked.includes(id);
}

export const REQUIREMENT_CHECKS = {
    canCompleteDragonSlayer2(ctx) {
        return false; // TODO
    },
    canCompleteThroneOfMiscellania(ctx) {
        return canCompleteThroneOfMiscellania(ctx);
    },
    canCompleteTheHeartOfDarkness(ctx) {
        return canCompleteTheHeartOfDarkness(ctx);
    },
    canReachAbyssalSire(ctx) {
        return canCompleteEnterTheAbyss(ctx) || canCompleteFairytaleIGrowingPains(ctx);
    },
    canDoGuardiansOfTheRift(ctx) {
        return canCompleteTempleOfTheEye(ctx);
    },
    canTrainFarming(ctx) {
        return canTrainFarming(ctx);
    },
    canTrainWoodcutting(ctx) {
        return canTrainWoodcutting(ctx);
    },
    canTrainMining(ctx) {
        return canTrainMining(ctx);
    },
    isNotSlayerLocked(ctx) {
        return true; // TODO implement slayer locked filter
    },
    canDoGnomeRestaurant(ctx) {
        return canDoGnomeRestaurant(ctx);
    },
    canDoValeTotems(ctx) {
        return canDoValeTotems(ctx);
    },
    canDoWintertodt(ctx) {
        return canDoWintertodt(ctx);
    },
    canDoHallowedSepulchre(ctx) {
        return false; // TODO
    },
    canDoSalvaging(ctx) {
        return canDoSalvaging(ctx);
    },
    canDoShadesOfMortton(ctx) {
        return canDoShadesOfMortton(ctx);
    },
    canDoGodWarsDungeon(ctx) {
        return false; // TODO
    },
    CanCompleteMonkeyMadnessII(ctx) {
        return false; // TODO
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

function canCompleteThroneOfMiscellania(ctx) {
    return canCompleteHeroesQuest(ctx) //
            && canCompleteTheFremennikTrials(ctx) //
            && has(ctx.unlocked, 2351)      // Iron bar
            && (has(ctx.unlocked, 1635)     // Gold ring
                || has(ctx.unlocked, 1637)  // Sapphire ring
                || has(ctx.unlocked, 1639)  // Emerald ring
                || has(ctx.unlocked, 1641)  // Ruby ring
                || has(ctx.unlocked, 1643)) // Diamond ring
            && has(ctx.unlocked, 1511); // Logs
}

function canCompleteHeroesQuest(ctx) { // TODO quest points
    return canCompleteLostCity(ctx) //
            && canCompleteMerlinsCrystal(ctx) //
            && canCompleteDragonSlayerI(ctx) //
            && canTrainMining(ctx) //
            && canTrainHerblore(ctx) //
            && canTrainFishing(ctx) //
            && canTrainCooking(ctx) //
            && has(ctx.unlocked, 307) // Fishing rod
            && has(ctx.unlocked, 313) // Fishing bait
            && has(ctx.unlocked, 97)  // Harralander potion (unf)
            && has(ctx.unlocked, 255) // Harralander
            && has(ctx.unlocked, 227); // Vial of water
}

function canCompleteMerlinsCrystal(ctx) {
    return has(ctx.unlocked, 2309)     // Bread
            && has(ctx.unlocked, 590)  // Tinderbox
            && has(ctx.unlocked, 30)   // Bucket of wax
            && has(ctx.unlocked, 1925) // Bucket
            && has(ctx.unlocked, 28)   // Insect repellent
            && has(ctx.unlocked, 530); // Bat bones
}

function canCompleteDragonSlayerI(ctx) { // TODO quest points
    return has(ctx.unlocked, 1791)      // Unfired bowl
            && has(ctx.unlocked, 1761)  // Soft clay
            && has(ctx.unlocked, 1907)  // Wizards mind bomb
            && has(ctx.unlocked, 301)   // Lobster pot
            && has(ctx.unlocked, 950)   // Silk
            && has(ctx.unlocked, 1540)  // Anti-dragon shield
            && has(ctx.unlocked, 2347)  // Hammer
            && has(ctx.unlocked, 1539)  // Steel nails
            && has(ctx.unlocked, 960);  // Plank
}

function canCompleteTheFremennikTrials(ctx) {
    return has(ctx.unlocked, 1917)      // Beer
            && has(ctx.unlocked, 590)   // Tinderbox
            && (has(ctx.unlocked, 383) // Raw shark
                || (canTrainFishing(ctx) && (has(ctx.unlocked, 389) || has(ctx.unlocked, 395))))  // Raw manta ray or Raw sea turtle
}

function canCompleteDruidicRitual(ctx) {
    return has(ctx.unlocked, 2136)      // Raw bear meat
            && has(ctx.unlocked, 2134)  // Raw rat meat
            && has(ctx.unlocked, 2132)  // Raw beef
            && has(ctx.unlocked, 2138); // Raw chicken
}

function canCompletePandemonium(ctx) {
    return has(ctx.unlocked, 2347)      // Hammer
            && has(ctx.unlocked, 8794); // Saw
}

function canCompleteTheHeartOfDarkness(ctx) {
    return canTrainMining(ctx);
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

function canTrainWoodcutting(ctx) {
    return has(ctx.unlocked, 1351)      // Bronze axe
            || has(ctx.unlocked, 1349)  // Iron axe
            || has(ctx.unlocked, 1353); // Steel axe
}

function canTrainMining(ctx) {
    return has(ctx.unlocked, 1265)      // Bronze pickaxe
            || has(ctx.unlocked, 1267)  // Iron pickaxe
            || has(ctx.unlocked, 1269); // Steel pickaxe
}

function canTrainHerblore(ctx) {
    return canCompleteDruidicRitual(ctx) //
            && has(ctx.unlocked, 199)  // Grimy guam leaf
            && has(ctx.unlocked, 201)  // Grimy marrentill
            && has(ctx.unlocked, 203); // Grimy tarromin
}

function canTrainFishing(ctx) {
    return has(ctx.unlocked, 303)     // Small fishing net
            && has(ctx.unlocked, 305) // Big fishing net
            && (has(ctx.unlocked, 307) && has(ctx.unlocked, 313)); // Fishing rod & Fishing bait
}

function canTrainCooking(ctx) {
    return has(ctx.unlocked, 25833)    // Raw boar meat
            && has(ctx.unlocked, 2132) // Raw beef
            && has(ctx.unlocked, 2136) // Raw bear meat
            && has(ctx.unlocked, 2134) // Raw rat meat
            && has(ctx.unlocked, 2138) // Raw chicken
            && has(ctx.unlocked, 317)  // Raw shrimps
            && has(ctx.unlocked, 3226) // Raw rabbit
            && has(ctx.unlocked, 327)  // Raw sardine
            && has(ctx.unlocked, 321)  // Raw anchovies
            && has(ctx.unlocked, 1859) // Raw ugthanki meat
            && has(ctx.unlocked, 2307) // Bread dough
            && has(ctx.unlocked, 345); // Raw herring
}

function canTrainFarming(ctx) {
    return has(ctx.unlocked, 5341); // Rake
}

function canTrainFletching(ctx) {
    return (has(ctx.unlocked, 946) && has(ctx.unlocked, 1511)) // Knife & Logs
            || (has(ctx.unlocked, 52) && has(ctx.unlocked, 314)) // Arrow shaft & Feather
            || (has(ctx.unlocked, 53) && has(ctx.unlocked, 39)) // Headless arrow & Bronze arrowtip
}

function canTrainFiremaking(ctx) {
    return has(ctx.unlocked, 590); // Tinderbox
}

function canDoGnomeRestaurant(ctx) {
    return canTrainCooking(ctx) //
            && ( //
                ( // Crunchies
                    (has(ctx.unlocked, 2171) && has(ctx.unlocked, 2165) && has(ctx.unlocked, 2169)) // Gianne dough, Crunchy tray & Gnome spice
                    && (
                        (has(ctx.unlocked, 2128) && has(ctx.unlocked, 2217)) // Toad crunchies
                        || (has(ctx.unlocked, 2128) && has(ctx.unlocked, 2213)) // Spicy crunchies
                        || (has(ctx.unlocked, 2128) && has(ctx.unlocked, 2162) && has(ctx.unlocked, 2205)) // Worm crunchies
                        || (has(ctx.unlocked, 1973) && has(ctx.unlocked, 1975) && has(ctx.unlocked, 2209)) // Chocchip crunchies
                    )
                ) //
                || ( // Battas
                    (has(ctx.unlocked, 2171) && has(ctx.unlocked, 2164) && has(ctx.unlocked, 2128)) // Gianne dough, Batta tin & Equa leaves
                    && (
                        (has(ctx.unlocked, 2120) && has(ctx.unlocked, 2122) && has(ctx.unlocked, 2108) && has(ctx.unlocked, 2110) && has(ctx.unlocked, 2114) && has(ctx.unlocked, 2116) && has(ctx.unlocked, 2169) && has(ctx.unlocked, 2277)) // Fruit batta
                        || (has(ctx.unlocked, 2169) && has(ctx.unlocked, 1985) && has(ctx.unlocked, 2152) && has(ctx.unlocked, 2255)) // Toad Batta
                        || (has(ctx.unlocked, 2169) && has(ctx.unlocked, 1985) && has(ctx.unlocked, 2162) && has(ctx.unlocked, 2253)) // Worm Batta
                        || (has(ctx.unlocked, 1982) && has(ctx.unlocked, 2126) && has(ctx.unlocked, 1957) && has(ctx.unlocked, 1985) && has(ctx.unlocked, 1965) && has(ctx.unlocked, 2281)) // Vegetable Batta
                        || (has(ctx.unlocked, 1982) && has(ctx.unlocked, 1985) && has(ctx.unlocked, 2259)) // Cheese+tom batta
                    )
                )
                || ( // Gnomebowls
                    (has(ctx.unlocked, 2171) && has(ctx.unlocked, 2166) && has(ctx.unlocked, 2128)) // Gianne dough, Gnomebowl & Equa leaves
                    && (
                        (has(ctx.unlocked, 2162) && has(ctx.unlocked, 1957) && has(ctx.unlocked, 2169) && has(ctx.unlocked, 2191)) // Worm hole
                        || (has(ctx.unlocked, 1957) && has(ctx.unlocked, 1942) && has(ctx.unlocked, 2152) && has(ctx.unlocked, 2195)) // Veg bowl
                        || (has(ctx.unlocked, 2152) && has(ctx.unlocked, 2169) && has(ctx.unlocked, 1985) && has(ctx.unlocked, 2126) && has(ctx.unlocked, 2187)) // Tangled toad's legs
                        || (has(ctx.unlocked, 1973) && has(ctx.unlocked, 1975) && has(ctx.unlocked, 2130) && has(ctx.unlocked, 2185)) // Chocolate bomb
                    )
                )
                || ( // Cocktails
                    (has(ctx.unlocked, 2025) && has(ctx.unlocked, 2026)) // Cocktail shaker & Cocktail glass
                    && (
                        (has(ctx.unlocked, 2114) && has(ctx.unlocked, 2102) && has(ctx.unlocked, 2108) && has(ctx.unlocked, 2106) && has(ctx.unlocked, 2084)) // Fruit blast
                        || (has(ctx.unlocked, 2114) && has(ctx.unlocked, 2102) && has(ctx.unlocked, 2108) && has(ctx.unlocked, 2120) && has(ctx.unlocked, 2122) && has(ctx.unlocked, 2116) && has(ctx.unlocked, 2112) && has(ctx.unlocked, 2048)) // Pineapple punch
                        || (has(ctx.unlocked, 2015) && has(ctx.unlocked, 2019) && has(ctx.unlocked, 2120) && has(ctx.unlocked, 2102) && has(ctx.unlocked, 2114) && has(ctx.unlocked, 2108) && has(ctx.unlocked, 2116) && has(ctx.unlocked, 2124) && has(ctx.unlocked, 2054)) // Wizard blizzard
                        || (has(ctx.unlocked, 2015) && has(ctx.unlocked, 2120) && has(ctx.unlocked, 2124) && has(ctx.unlocked, 2128) && has(ctx.unlocked, 2080)) // Short green guy
                        || (has(ctx.unlocked, 2015) && has(ctx.unlocked, 2019) && has(ctx.unlocked, 2126) && has(ctx.unlocked, 2114) && has(ctx.unlocked, 2116) && has(ctx.unlocked, 2130) && has(ctx.unlocked, 2092)) // Drunk dragon
                        || (has(ctx.unlocked, 2017) && has(ctx.unlocked, 1973) && has(ctx.unlocked, 2128) && has(ctx.unlocked, 1927) && has(ctx.unlocked, 1975) && has(ctx.unlocked, 2130) && has(ctx.unlocked, 2074)) // Choc saturday
                        || (has(ctx.unlocked, 2015) && has(ctx.unlocked, 2021) && has(ctx.unlocked, 2019) && has(ctx.unlocked, 2102) && has(ctx.unlocked, 2104) && has(ctx.unlocked, 2108) && has(ctx.unlocked, 2110) && has(ctx.unlocked, 2128) && has(ctx.unlocked, 2120) && has(ctx.unlocked, 2124) && has(ctx.unlocked, 2064)) // Blurberry special
                    )
                )
            );
}

function canDoValeTotems(ctx) {
    return canTrainFletching(ctx) //
            && has(ctx.unlocked, 946) // Knife
            && (
                has(ctx.unlocked, 843) // Oak shortbow
                || has(ctx.unlocked, 845) // Oak longbow
                || has(ctx.unlocked, 9442) // Oak stock
                || has(ctx.unlocked, 22251) // Oak shield
                || (has(ctx.unlocked, 946) && (has(ctx.unlocked, 54) || has(ctx.unlocked, 56))) // Oak logs & either Oak shortbow (u) or Oak longbow (u)
            ) //
            && (
                has(ctx.unlocked, 849) // Willow shortbow
                || has(ctx.unlocked, 847) // Willow longbow
                || has(ctx.unlocked, 9444) // Willow stock
                || (has(ctx.unlocked, 1519) && (has(ctx.unlocked, 60) || has(ctx.unlocked, 58) || has(ctx.unlocked, 22254))) // Willow logs & either Willow shortbow (u), Willow longbow (u) or Willow shield
            ) //
            && (
                has(ctx.unlocked, 853) // Maple shortbow
                || has(ctx.unlocked, 851) // Maple longbow
                || has(ctx.unlocked, 9448) // Maple stock
                || (has(ctx.unlocked, 1517) && (has(ctx.unlocked, 64) || has(ctx.unlocked, 62) || has(ctx.unlocked, 22257))) // Maple logs & either Maple shortbow (u), Maple longbow (u) or Maple shield
            ) //
            && (
                has(ctx.unlocked, 857) // Yew shortbow
                || has(ctx.unlocked, 855) // Yew longbow
                || (has(ctx.unlocked, 1515) && (has(ctx.unlocked, 68) || has(ctx.unlocked, 66) || has(ctx.unlocked, 22260) || has(ctx.unlocked, 9452))) // Yew logs & either Yew shortbow (u), Yew longbow (u), Yew shield or Yew stock
            ) //
            && (
                has(ctx.unlocked, 857) // Yew shortbow
                || has(ctx.unlocked, 855) // Yew longbow
                || (has(ctx.unlocked, 1515) && (has(ctx.unlocked, 68) || has(ctx.unlocked, 66) || has(ctx.unlocked, 22260) || has(ctx.unlocked, 9452))) // Yew logs & either Yew shortbow (u), Yew longbow (u), Yew shield or Yew stock
            ) //
            && (has(ctx.unlocked, 1513) && (has(ctx.unlocked, 72) || has(ctx.unlocked, 70) || has(ctx.unlocked, 22263) || has(ctx.unlocked, 21952))) // Magic logs & either Magic shortbow (u), Magic longbow (u), Magic shield or Magic stock
            && (canTrainWoodcutting(ctx) && has(ctx.unlocked, 19669) && (has(ctx.unlocked, 31049) || has(ctx.unlocked, 22266))); // Redwood logs & either Redwood hiking staff or Redwood shield
}

function canDoWintertodt(ctx) {
    return canTrainFiremaking(ctx) //
            && canTrainWoodcutting(ctx);
}

function canDoSalvaging(ctx) {
    return canCompletePandemonium(ctx); // TODO add different salvaging hooks requirements
}

function canDoShadesOfMortton(ctx) {
    return false; // TODO
}