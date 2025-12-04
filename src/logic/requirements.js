import { canDoOtherMethod, canReachNpc } from "./itemAvailability.js";

function has(ctx, id) {
    const item = ctx.items.find(i => i.id === id);
    if (!item) return false;
    return ctx.unlocked.includes(id) && canObtainItem(item, ctx, ctx.items);
}

function canObtainItem(item, ctx, allItems, visited = new Set()) {
    if (!item) return false;

    // Stop cycles
    if (visited.has(item.id)) return false;
    visited.add(item.id);

    // 1. Already rolled
    if (ctx.rolled.includes(item.id)) return true;

    // 2. Droppable by killable NPC
    if (item.sources?.drops) {
        for (const [npcName] of Object.entries(item.sources.drops)) {
            if (canReachNpc(npcName, ctx)) return true;
        }
    }

    // 3. Other methods
    if (item.sources?.other) {
        for (const [method, obj] of Object.entries(item.sources.other)) {
            if (canDoOtherMethod(obj.rule, ctx)) {
                return true;
            }
        }
    }

    // 4. Processable (crafting)
    if (item.processable) {
        for (const [resultId, ingredientList] of Object.entries(item.processable)) {
            //
            // NOTE: The item itself is the **result**, not the ingredient.
            // Processable is like:
            //     "9143": "9380"
            //
            // That means item 9380 -> item 9143
            //
            // So if the current item is 9143, ingredients are 9380.
            //

            if (Number(resultId) !== item.id) continue;

            const ingredients = ingredientList.split(",");

            let allIngredientsObtainable = true;

            for (const ingId of ingredients) {
                const ingObj = allItems.find(i => i.id == ingId);

                if (!ingObj || !canObtainItem(ingObj, ctx, allItems, visited)) {
                    allIngredientsObtainable = false;
                    break;
                }
            }

            if (allIngredientsObtainable) return true;
        }
    }

    // Nothing worked
    return false;
}

export const REQUIREMENT_CHECKS = {
    canCompleteDragonSlayerII(ctx) {
        return false; // TODO
    },
    canCompleteDesertTreasureII(ctx) {
        return false; // TODO
    },
    canCompleteSongOfTheElves(ctx) {
        return false; // TODO
    },
    canCompleteThroneOfMiscellania(ctx) {
        return canCompleteThroneOfMiscellania(ctx);
    },
    canCompleteDeathPlateau(ctx) {
        return canCompleteDeathPlateau(ctx);
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
    CanCompleteMonkeyMadnessII(ctx) {
        return false; // TODO
    },
    canCompletePriestInPeril(ctx) {
        return canCompletePriestInPeril(ctx);
    },
    canCompleteZogreFleshEaters(ctx) {
        return canCompleteZogreFleshEaters(ctx);
    },
    canEnterKaruulmSlayerDungeon(ctx) {
        return canEnterKaruulmSlayerDungeon(ctx);
    },
    hasFacemask(ctx) {
    return has(ctx, 4164);
    },
    canKillGargoyles(ctx) {
        return canKillGargoyles(ctx);
    },
    canKillDifficultDragons(ctx) {
        return canKillDifficultDragons(ctx);
    },
    canKillFossilIslandWyverns(ctx) {
        return canKillFossilIslandWyverns(ctx);
    },
    hasAccessToWyvernProtection(ctx) {
        return hasAccessToWyvernProtection(ctx);
    },
    canTrainFletching(ctx) {
        return canTrainFletching(ctx);
    },
    canTrainSmithing(ctx) {
        return canTrainSmithing(ctx);
    },
    canCompleteDwarfCannon(ctx) {
        return canCompleteDwarfCannon(ctx);
    },
    canCompleteTroubledTortugans(ctx) {
        return canCompleteTroubledTortugans(ctx);
    },
    canLongrange(ctx) {
        return canLongrange(ctx);
    },
    canShortrange(ctx) {
        return canShortrange(ctx);
    },
    canSailToTheNorthernOcean(ctx) {
        return canSailToTheNorthernOcean(ctx);
    },
    canDoSailingCombat(ctx) {
        return canDoSailingCombat(ctx);
    },
    canEnterTheCharredDungeon(ctx) {
        return canEnterTheCharredDungeon(ctx);
    },
    canSailToBrittleIsle(ctx) {
        return canSailToBrittleIsle(ctx);
    },
    canSailToYnysdail(ctx) {
        return canSailToYnysdail(ctx);
    },
    canEnterAncientCavern(ctx) {
        return canEnterAncientCavern(ctx);
    },
    canEnterKalphiteLair(ctx) {
        return canEnterKalphiteLair(ctx);
    },
    canCompleteRoyalTrouble(ctx) {
        return canCompleteRoyalTrouble(ctx);
    },
    canCompleteTouristTrap(ctx) {
        return canCompleteTouristTrap(ctx);
    },
    canCompletePandemonium(ctx) {
        return canCompletePandemonium(ctx);
    },
    canDoLegendsQuest(ctx) {
        return false; // TODO
    },
    canDoYama(ctx) {
        return false; // TODO
    },
    canTrainHunter(ctx) {
        return canTrainHunter(ctx);
    },
    canCompleteTheDigSite(ctx) {
        return canCompleteTheDigSite(ctx);
    },
    canCompleteAnimalMagnetism(ctx) {
        return canCompleteAnimalMagnetism(ctx);
    },
    hasSteelArrow(ctx) {
        return has(ctx, 886);
    },
    hasMithrilArrow(ctx) {
        return has(ctx, 888);
    },
    canDoGodWarsDungeon(ctx) {
        return false; // TODO
    },
    canDoCommanderZilyana(ctx) {
        return canDoCommanderZilyana(ctx);
    },
    canDoGeneralGraardor(ctx) {
        return canDoGeneralGraardor(ctx);
    },
    canDoKreearra(ctx) {
        return canDoKreearra(ctx);
    },
    canDoKrilTsustaroth(ctx) {
        return canDoKrilTsustaroth(ctx);
    },
    canDoNex(ctx) {
        return canDoNex(ctx);
    }
};

function canDoCommanderZilyana(ctx) {
    return false; // TODO
}

function canDoGeneralGraardor(ctx) {
    return false; // TODO
}

function canDoKreearra(ctx) {
    return false; // TODO
}

function canDoKrilTsustaroth(ctx) {
    return false; // TODO
}

function canDoNex(ctx) {
    return false; // TODO
}

function canEnterKalphiteLair(ctx) {
    return has(ctx, 954); // Rope
}

function canEnterAncientCavern(ctx) {
    return canCompleteBarbarianFiremaking(ctx);
}

function canCompleteBarbarianFiremaking(ctx) {
    return has(ctx, 1521) // Oak logs
            && ( //
                has(ctx, 841) // Shortbow
                || has(ctx, 839) // Longbow
                || has(ctx, 843) // Oak shortbow
                || has(ctx, 845) // Oak longbow
                || has(ctx, 849) // Willow shortbow
                || has(ctx, 847) // Willow longbow
                || has(ctx, 853) // Maple shortbow
                || has(ctx, 851) // Maple longbow
                || has(ctx, 857) // Yew shortbow
                || has(ctx, 855) // Yew longbow
                || has(ctx, 861) // Magic shortbow
                || has(ctx, 859) // Magic longbow
            );
}

function canSailToTheNorthernOcean(ctx) {
    return canCompletePandemonium(ctx) //
            && false; // TODO sailing stuff
}

function canSailToTheWesternOcean(ctx) {
    return canCompletePandemonium(ctx) //
            && false; // TODO sailing stuff
}

function canSailToYnysdail(ctx) {
    return canSailToTheWesternOcean(ctx);
}

function canSailToBrittleIsle(ctx) {
    return canSailToTheNorthernOcean(ctx);
}

function canEnterTheCharredDungeon(ctx) {
    return canCompletePandemonium(ctx) //
            && has(ctx, 954); // Rope
}

function canLongrange(ctx) {
    return ((has(ctx, 841) || has(ctx, 839)) // Shortbow or Longbow
                && (has(ctx, 882) || has(ctx, 884))) // Bronze arrow or Iron arrow
            || ((has(ctx, 837) || has(ctx, 9174)) // Crossbow or Bronze crossbow
                && has(ctx, 877)) // Bronze bolts
            || ((has(ctx, 556) || has(ctx, 4696) || has(ctx, 1381) || has(ctx, 1397)) // Air rune, Dust rune, Staff of air or Air battlestaff
                && (has(ctx, 558) || has(ctx, 562) || has(ctx, 560) || has(ctx, 565))) // Mind rune, Chaos rune, Death rune or Blood rune
}

function canShortrange(ctx) {
    return canLongrange(ctx) //
            || has(ctx, 864) // Bronze knife
            || has(ctx, 870) // Bronze knife(p)
            || has(ctx, 863) // Iron knife
            || has(ctx, 865) // Steel knife
            || has(ctx, 869) // Black knife
            || has(ctx, 866) // Mithril knife
            || has(ctx, 867) // Adamant knife
            || has(ctx, 868) // Rune knife
            || has(ctx, 5667) // Rune knife(p++)
            || has(ctx, 806) // Bronze dart
            || has(ctx, 807) // Iron dart
            || has(ctx, 813) // Iron dart(p)
            || has(ctx, 808) // Steel dart
            || has(ctx, 3093) // Black dart
            || has(ctx, 809) // Mithril dart
            || has(ctx, 810) // Adamant dart
            || has(ctx, 816) // Adamant dart(p)
            || has(ctx, 811) // Rune dart
            || has(ctx, 817) // Rune dart(p)
            || has(ctx, 6522) // Toktz-xil-ul
            || has(ctx, 10033) // Chinchompa
            || has(ctx, 10034) // Red chinchompa
            || has(ctx, 11959) // Black chinchompa
            || has(ctx, 800) // Bronze thrownaxe
            || has(ctx, 801) // Iron thrownaxe
            || has(ctx, 802) // Steel thrownaxe
            || has(ctx, 803) // Mithril thrownaxe
            || has(ctx, 804) // Adamant thrownaxe
            || has(ctx, 805); // Rune thrownaxe
}

function canKillGargoyles(ctx) {
    return has(ctx, 4162)       // Rock hammer
            || has(ctx, 21754); // Rock thrownhammer
}

function canKillDifficultDragons(ctx) {
    return false; // TODO: need to implement quest points
}

function canEnterKaruulmSlayerDungeon(ctx) {
    return has(ctx, 23037) // Boots of stone
            || (canKillFossilIslandWyverns(ctx) && has(ctx, 21643)); // Granite boots
}

function canKillFossilIslandWyverns(ctx) {
    return canCompleteBoneVoyage(ctx) && hasAccessToWyvernProtection(ctx);
}

function hasAccessToWyvernProtection(ctx) {
    return canCompleteElementalWorkshopI(ctx) //
                && (has(ctx, 2890) // Elemental shield
                    || (has(ctx, 9731) && canCompleteElementalWorkshopII(ctx)) // Mind shield
                    );
}

function canCompleteAnimalMagnetism(ctx) {
    return canCompleteErnestTheChicken(ctx) //
            && canCompletePriestInPeril(ctx) //
            && has(ctx, 1355) // Mithril axe
            && has(ctx, 2351) // Iron bar
            && has(ctx, 2347) // Hammer
            && has(ctx, 1743) // Hard leather
            && has(ctx, 1718) // Holy symbol
            && has(ctx, 10496) // Polished buttons
            && has(ctx, 1931) // Pot
            && ( // Bones for Ecto-tokens
                has(ctx, 534)      // Babydragon bones
                || has(ctx, 530)   // Bat bones
                || has(ctx, 532)   // Big bones
                || has(ctx, 526)   // Bones
                || has(ctx, 528)   // Burnt bones
                || has(ctx, 6729)  // Dagannoth bones
                || has(ctx, 536)   // Dragon bones
                || has(ctx, 22783) // Drake bones
                || has(ctx, 31729) // Frost dragon bones
                || has(ctx, 22786) // Hydra bones
                || has(ctx, 3125)  // Jogre bones
                || has(ctx, 11943) // Lava dragon bones
                || has(ctx, 3183)  // Monkey bones
                || has(ctx, 4834)  // Ourg bones
                || has(ctx, 4832)  // Raurg bones
                || has(ctx, 3123)  // Shaikahan bones
                || has(ctx, 31726) // Strykewyrm bones
                || has(ctx, 22124) // Superior dragon bones
                || has(ctx, 2859)  // Wolf bones
                || has(ctx, 22780) // Wyrm bones
                || has(ctx, 28899) // Wyrmling bones
                || has(ctx, 6812)  // Wyvern bones
                || has(ctx, 4812)  // Zogre bones
            );
}

function canCompleteEnterTheAbyss(ctx) {
    return canCompleteRuneMysteries(ctx);
}

function canCompleteRuneMysteries(ctx) {
    return has(ctx, 1438); // Air talisman
}

function canCompleteFairytaleIGrowingPains(ctx) {
    return canCompleteLostCity(ctx) //
            && canCompleteNatureSpirit(ctx) //
            && has(ctx, 5329) // Secateurs
            && has(ctx, 952)  // Spade
            // TODO other item reqs?
            ;
}

function canCompleteLostCity(ctx) {
    return has(ctx, 1351)     // Bronze axe
            && has(ctx, 946)  // Knife
            && canTrainCrafting(ctx);
}

function canCompleteNatureSpirit(ctx) {
    return has(ctx, 2961)     // Silver sickle
            && has(ctx, 2355) // Silver bar
            && has(ctx, 2976) // Sickle mould
            && canTrainCrafting(ctx);
}

function canCompleteTempleOfTheEye(ctx) {
    return has(ctx, 1929)     // Bucket of water
            && has(ctx, 1755) // Chisel
            && (has(ctx, 1265) || has(ctx, 1267)) // A bronze or iron pickaxe
            && canTrainRunecraft(ctx);
}

function canCompleteDeathPlateau(ctx) {
    return has(ctx, 2309)      // Bread
            && has(ctx, 333)   // Trout
            && has(ctx, 2351)  // Iron bar
            && has(ctx, 1905)  // Asgarnian ale
            && has(ctx, 3105); // Climbing boots
}

function canCompleteRoyalTrouble(ctx) {
    return canCompleteThroneOfMiscellania(ctx) //
            && has(ctx, 954) // Rope
            && has(ctx, 453) // Coal
            && has(ctx, 960); // Plank
}

function canCompleteTouristTrap(ctx) {
    return canTrainFletching(ctx) //
            && canTrainSmithing(ctx) //
            && has(ctx, 1833) // Desert shirt
            && has(ctx, 1835) // Desert robe
            && has(ctx, 1837) // Desert boots
            && has(ctx, 2347) // Hammer
            && has(ctx, 2349) // Bronze bar
            && has(ctx, 314); // Feather
}

function canCompleteThroneOfMiscellania(ctx) {
    return canCompleteHeroesQuest(ctx) //
            && canCompleteTheFremennikTrials(ctx) //
            && has(ctx, 2351)      // Iron bar
            && (has(ctx, 1635)     // Gold ring
                || has(ctx, 1637)  // Sapphire ring
                || has(ctx, 1639)  // Emerald ring
                || has(ctx, 1641)  // Ruby ring
                || has(ctx, 1643)) // Diamond ring
            && has(ctx, 1511); // Logs
}

function canCompleteHeroesQuest(ctx) { // TODO quest points
    return canCompleteLostCity(ctx) //
            && canCompleteMerlinsCrystal(ctx) //
            && canCompleteDragonSlayerI(ctx) //
            && canTrainMining(ctx) //
            && canTrainHerblore(ctx) //
            && canTrainFishing(ctx) //
            && canTrainCooking(ctx) //
            && has(ctx, 307) // Fishing rod
            && has(ctx, 313) // Fishing bait
            && has(ctx, 97)  // Harralander potion (unf)
            && has(ctx, 255) // Harralander
            && has(ctx, 227); // Vial of water
}

function canCompleteTheDigSite(ctx) {
    return canCompleteDruidicRitual(ctx) //
            && has(ctx, 233) // Pestle and mortar
            && has(ctx, 229) // Vial
            && has(ctx, 590) // Tinderbox
            && (has(ctx, 1978) || has(ctx, 1921)) // Cup of tea or Bowl of water (for nettle tea)
            && has(ctx, 954) // Rope
            && (has(ctx, 1609) || has(ctx, 1625)) // Opal or Uncut opal
            && has(ctx, 973); // Charcoal
}

function canCompleteMerlinsCrystal(ctx) {
    return has(ctx, 2309)     // Bread
            && has(ctx, 590)  // Tinderbox
            && has(ctx, 30)   // Bucket of wax
            && has(ctx, 1925) // Bucket
            && has(ctx, 28)   // Insect repellent
            && has(ctx, 530); // Bat bones
}

function canCompleteDragonSlayerI(ctx) { // TODO quest points
    return has(ctx, 1791)      // Unfired bowl
            && has(ctx, 1761)  // Soft clay
            && has(ctx, 1907)  // Wizards mind bomb
            && has(ctx, 301)   // Lobster pot
            && has(ctx, 950)   // Silk
            && has(ctx, 1540)  // Anti-dragon shield
            && has(ctx, 2347)  // Hammer
            && has(ctx, 1539)  // Steel nails
            && has(ctx, 960);  // Plank
}

function canCompleteDwarfCannon(ctx) {
    return has(ctx, 2347); // Hammer
}

function canCompleteTroubledTortugans(ctx) {
    return canTrainCrafting(ctx) //
            && canTrainHunter(ctx) //
            && canTrainWoodcutting(ctx) //
            && canTrainConstruction(ctx) //
            && canCompletePandemonium(ctx) //
            && has(ctx, 401);     // Seaweed
}

function canCompleteTheFremennikTrials(ctx) {
    return has(ctx, 1917)      // Beer
            && has(ctx, 590)   // Tinderbox
            && (has(ctx, 383) // Raw shark
                || (canTrainFishing(ctx) && (has(ctx, 389) || has(ctx, 395))))  // Raw manta ray or Raw sea turtle
}

function canCompleteDruidicRitual(ctx) {
    return has(ctx, 2136)      // Raw bear meat
            && has(ctx, 2134)  // Raw rat meat
            && has(ctx, 2132)  // Raw beef
            && has(ctx, 2138); // Raw chicken
}

function canCompletePandemonium(ctx) {
    return has(ctx, 2347)      // Hammer
            && has(ctx, 8794); // Saw
}

function canCompleteTheHeartOfDarkness(ctx) {
    return canTrainMining(ctx);
}

function canCompletePriestInPeril(ctx) {
    return has(ctx, 1925)      // Bucket
            && (has(ctx, 7936) // Pure essence
                || has(ctx, 1436) // or Rune essence
                );
}

function canCompleteBoneVoyage(ctx) {
    return false; // TODO
}

function canCompleteElementalWorkshopI(ctx) {
    return canTrainMining(ctx) //
            && canTrainCrafting(ctx) //
            && has(ctx, 2347) // Hammer
            && has(ctx, 1733) // Needle
            && has(ctx, 1734) // Thread
            && has(ctx, 1741) // Leather
            && has(ctx, 453); // Coal
}

function canCompleteElementalWorkshopII(ctx) {
    return canCompleteElementalWorkshopI(ctx);
}

function canCompleteZogreFleshEaters(ctx) {
    return canCompleteBigChompyBirdHunting(ctx) //
            && canCompleteJunglePotion(ctx) //
            && canTrainSmithing(ctx);
}

function canCompleteJunglePotion(ctx) {
    return canCompleteDruidicRitual(ctx);
}

function canCompleteBigChompyBirdHunting(ctx) {
    return canTrainFletching(ctx) //
            && canTrainCooking(ctx) //
            && canTrainWoodcutting(ctx) //
            && has(ctx, 314)  // Feather
            && has(ctx, 946)  // Knife
            && has(ctx, 1755) // Chisel
            && has(ctx, 1965) // Cabbage
            && has(ctx, 1982) // Tomato
            && has(ctx, 1957) // Onion
            && has(ctx, 1942) // Potato
            && has(ctx, 2128) // Equa leaves
            && has(ctx, 1573) // Doogle leaves
            && has(ctx, 2862) // Achey tree logs
            && has(ctx, 2864) // Ogre arrow shaft
            && has(ctx, 2865) // Flighted ogre arrow
            && has(ctx, 2859) // Wolf bones
            && has(ctx, 2861) // Wolfbone arrowtips
            && has(ctx, 2866) // Ogre arrow
            && has(ctx, 2876);// Raw chompy
}

function canTrainCrafting(ctx) {
    return true; // TODO implement this beast (true because lamps and buttons)
}

function canTrainRunecraft(ctx) {
    return canCompleteRuneMysteries(ctx) &&
            (
                has(ctx, 5525)    // Tiara
                || has(ctx, 1436) // Rune essence
                || has(ctx, 7936) // Pure essence
            );
}

function canTrainWoodcutting(ctx) {
    return has(ctx, 1351)      // Bronze axe
            || has(ctx, 1349)  // Iron axe
            || has(ctx, 1353); // Steel axe
}

function canTrainMining(ctx) {
    return has(ctx, 1265)      // Bronze pickaxe
            || has(ctx, 1267)  // Iron pickaxe
            || has(ctx, 1269); // Steel pickaxe
}

function canTrainHerblore(ctx) {
    return canCompleteDruidicRitual(ctx) //
            && has(ctx, 199)  // Grimy guam leaf
            && has(ctx, 201)  // Grimy marrentill
            && has(ctx, 203); // Grimy tarromin
}

function canTrainFishing(ctx) {
    return has(ctx, 303)     // Small fishing net
            && has(ctx, 305) // Big fishing net
            && (has(ctx, 307) && has(ctx, 313)); // Fishing rod & Fishing bait
}

function canTrainHunter(ctx) {
    return has(ctx, 10006)     // Bird snare
            && has(ctx, 10150) // Noose wand
            && has(ctx, 10010) // Butterfly net
            ; // TODO or the player's lvl allows for barehanding butterflies (lvl 25)
}

function canTrainCooking(ctx) {
    return has(ctx, 25833)    // Raw boar meat
            && has(ctx, 2132) // Raw beef
            && has(ctx, 2136) // Raw bear meat
            && has(ctx, 2134) // Raw rat meat
            && has(ctx, 2138) // Raw chicken
            && has(ctx, 317)  // Raw shrimps
            && has(ctx, 3226) // Raw rabbit
            && has(ctx, 327)  // Raw sardine
            && has(ctx, 321)  // Raw anchovies
            && has(ctx, 1859) // Raw ugthanki meat
            && has(ctx, 2307) // Bread dough
            && has(ctx, 345); // Raw herring
}

function canTrainFarming(ctx) {
    return has(ctx, 5341)     // Rake
            || has(ctx, 8431) // Bagged plant 1
}

function canTrainConstruction(ctx) {
    return has(ctx, 8431) // Bagged plant 1
            && (
                (has(ctx, 2347) && has(ctx, 8794)) // Hammer and Saw
                (has(ctx, 2351) || has(ctx, 960))  // Iron bar or Plank and any nails
            );
}

function canTrainFletching(ctx) {
    return (has(ctx, 946) && has(ctx, 1511)) // Knife & Logs
            || (has(ctx, 52) && has(ctx, 314)) // Arrow shaft & Feather
            || (has(ctx, 53) && has(ctx, 39)) // Headless arrow & Bronze arrowtip
}

function canTrainFiremaking(ctx) {
    return has(ctx, 590); // Tinderbox
}

function canTrainSmithing(ctx) {
    return has(ctx, 2347); // Hammer
}

function canDoGnomeRestaurant(ctx) {
    return canTrainCooking(ctx) //
            && ( //
                ( // Crunchies
                    (has(ctx, 2171) && has(ctx, 2165) && has(ctx, 2169)) // Gianne dough, Crunchy tray & Gnome spice
                    && (
                        (has(ctx, 2128) && has(ctx, 2217)) // Toad crunchies
                        || (has(ctx, 2128) && has(ctx, 2213)) // Spicy crunchies
                        || (has(ctx, 2128) && has(ctx, 2162) && has(ctx, 2205)) // Worm crunchies
                        || (has(ctx, 1973) && has(ctx, 1975) && has(ctx, 2209)) // Chocchip crunchies
                    )
                ) //
                || ( // Battas
                    (has(ctx, 2171) && has(ctx, 2164) && has(ctx, 2128)) // Gianne dough, Batta tin & Equa leaves
                    && (
                        (has(ctx, 2120) && has(ctx, 2122) && has(ctx, 2108) && has(ctx, 2110) && has(ctx, 2114) && has(ctx, 2116) && has(ctx, 2169) && has(ctx, 2277)) // Fruit batta
                        || (has(ctx, 2169) && has(ctx, 1985) && has(ctx, 2152) && has(ctx, 2255)) // Toad Batta
                        || (has(ctx, 2169) && has(ctx, 1985) && has(ctx, 2162) && has(ctx, 2253)) // Worm Batta
                        || (has(ctx, 1982) && has(ctx, 2126) && has(ctx, 1957) && has(ctx, 1985) && has(ctx, 1965) && has(ctx, 2281)) // Vegetable Batta
                        || (has(ctx, 1982) && has(ctx, 1985) && has(ctx, 2259)) // Cheese+tom batta
                    )
                )
                || ( // Gnomebowls
                    (has(ctx, 2171) && has(ctx, 2166) && has(ctx, 2128)) // Gianne dough, Gnomebowl & Equa leaves
                    && (
                        (has(ctx, 2162) && has(ctx, 1957) && has(ctx, 2169) && has(ctx, 2191)) // Worm hole
                        || (has(ctx, 1957) && has(ctx, 1942) && has(ctx, 2152) && has(ctx, 2195)) // Veg bowl
                        || (has(ctx, 2152) && has(ctx, 2169) && has(ctx, 1985) && has(ctx, 2126) && has(ctx, 2187)) // Tangled toad's legs
                        || (has(ctx, 1973) && has(ctx, 1975) && has(ctx, 2130) && has(ctx, 2185)) // Chocolate bomb
                    )
                )
                || ( // Cocktails
                    (has(ctx, 2025) && has(ctx, 2026)) // Cocktail shaker & Cocktail glass
                    && (
                        (has(ctx, 2114) && has(ctx, 2102) && has(ctx, 2108) && has(ctx, 2106) && has(ctx, 2084)) // Fruit blast
                        || (has(ctx, 2114) && has(ctx, 2102) && has(ctx, 2108) && has(ctx, 2120) && has(ctx, 2122) && has(ctx, 2116) && has(ctx, 2112) && has(ctx, 2048)) // Pineapple punch
                        || (has(ctx, 2015) && has(ctx, 2019) && has(ctx, 2120) && has(ctx, 2102) && has(ctx, 2114) && has(ctx, 2108) && has(ctx, 2116) && has(ctx, 2124) && has(ctx, 2054)) // Wizard blizzard
                        || (has(ctx, 2015) && has(ctx, 2120) && has(ctx, 2124) && has(ctx, 2128) && has(ctx, 2080)) // Short green guy
                        || (has(ctx, 2015) && has(ctx, 2019) && has(ctx, 2126) && has(ctx, 2114) && has(ctx, 2116) && has(ctx, 2130) && has(ctx, 2092)) // Drunk dragon
                        || (has(ctx, 2017) && has(ctx, 1973) && has(ctx, 2128) && has(ctx, 1927) && has(ctx, 1975) && has(ctx, 2130) && has(ctx, 2074)) // Choc saturday
                        || (has(ctx, 2015) && has(ctx, 2021) && has(ctx, 2019) && has(ctx, 2102) && has(ctx, 2104) && has(ctx, 2108) && has(ctx, 2110) && has(ctx, 2128) && has(ctx, 2120) && has(ctx, 2124) && has(ctx, 2064)) // Blurberry special
                    )
                )
            );
}

function canDoValeTotems(ctx) {
    return canTrainFletching(ctx) //
            && has(ctx, 946) // Knife
            || ((
                has(ctx, 843) // Oak shortbow
                || has(ctx, 845) // Oak longbow
                || has(ctx, 9442) // Oak stock
                || has(ctx, 22251) // Oak shield
                || (has(ctx, 1521) && (has(ctx, 54) || has(ctx, 56))) // Oak logs & either Oak shortbow (u) or Oak longbow (u)
            ) //
            || (
                has(ctx, 849) // Willow shortbow
                || has(ctx, 847) // Willow longbow
                || has(ctx, 9444) // Willow stock
                || (has(ctx, 1519) && (has(ctx, 60) || has(ctx, 58) || has(ctx, 22254))) // Willow logs & either Willow shortbow (u), Willow longbow (u) or Willow shield
            ) //
            || (
                has(ctx, 853) // Maple shortbow
                || has(ctx, 851) // Maple longbow
                || has(ctx, 9448) // Maple stock
                || (has(ctx, 1517) && (has(ctx, 64) || has(ctx, 62) || has(ctx, 22257))) // Maple logs & either Maple shortbow (u), Maple longbow (u) or Maple shield
            ) //
            || (
                has(ctx, 857) // Yew shortbow
                || has(ctx, 855) // Yew longbow
                || (has(ctx, 1515) && (has(ctx, 68) || has(ctx, 66) || has(ctx, 22260) || has(ctx, 9452))) // Yew logs & either Yew shortbow (u), Yew longbow (u), Yew shield or Yew stock
            ) //
            || (has(ctx, 1513) && (has(ctx, 72) || has(ctx, 70) || has(ctx, 22263) || has(ctx, 21952))) // Magic logs & either Magic shortbow (u), Magic longbow (u), Magic shield or Magic stock
            || (canTrainWoodcutting(ctx) && has(ctx, 19669) && (has(ctx, 31049) || has(ctx, 22266)))); // Redwood logs & either Redwood hiking staff or Redwood shield
}

function canDoWintertodt(ctx) {
    return canTrainFiremaking(ctx) //
            && canTrainWoodcutting(ctx);
}

function canDoSalvaging(ctx) {
    return canCompletePandemonium(ctx) && false; // TODO add different salvaging hooks requirements
}

function canDoSailingCombat(ctx) {
    return canCompletePandemonium(ctx) && false; // TODO sailing combat
}

function canDoShadesOfMortton(ctx) {
    return false; // TODO
}