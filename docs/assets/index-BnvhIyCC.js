(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const ae={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Angry barbarian spirit":["canEnterAncientCavern"],Araxyte:["canCompletePriestInPeril"],"Ava's accumulator":{all:["canCompleteAnimalMagnetism","hasSteelArrow"]},"Ava's assembler":{all:["canCompleteAnimalMagnetism","hasMithrilArrow","canCompleteDragonSlayerII"]},"Ava's attractor":["canCompleteAnimalMagnetism"],Aviansie:["canShortrange"],"Balfrug Kreeyath":["canDoKrilTsutsaroth"],"Barrel (Shaman Caves)":["canCompleteLegendsQuest"],"Berserk barbarian spirit":["canEnterAncientCavern"],Basilisk:["hasMirrorShield"],"Basilisk Knight":["canCompleteTheFremennikExiles"],"Black Chest":["canDoShadesOfMortton"],Bree:["canDoCommanderZilyana"],"Bronze Chest":["canDoShadesOfMortton"],"Bronze dragon":["canKillDifficultDragons"],"Brutal blue dragon":["canKillDifficultDragons"],"Brutal black dragon":["canKillDifficultDragons"],"Brutal green dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Brutal red dragon":["canKillDifficultDragons"],"Bull shark":["canShortrange"],"Cannonball stall":["canCompletePandemonium"],"Cave horror":["canCompleteCabinFever"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Chest (Dorgesh-Kaan Average)":{all:["canCompleteDeathToTheDorgeshuun","hasLockpick"]},"Chewed bones":{all:["canKillDifficultDragons","canEnterAncientCavern"]},Cockatrice:["hasMirrorShield"],"Crystal impling":["canCompleteSongOfTheElves"],"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Commander Zilyana":["canDoCommanderZilyana"],"Dirty arrowtips":["canDoValeTotems"],"Dragon impling":["canTrainHunter"],"Duke Sucellus":["canCompleteDesertTreasureII"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],"Eclectic impling":["canTrainHunter"],"Enraged barbarian spirit":["canEnterAncientCavern"],"Ferocious barbarian spirit":{all:["canEnterAncientCavern","canTrainWoodcutting"]},"Flight Kilisa":["canDoKreearra"],"Flockleader Geerin":["canDoKreearra"],"Forgotten Lockbox":["canDoYama"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"General Graardor":["canDoGeneralGraardor"],"Giant Sea Snake":["canCompleteRoyalTrouble"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Gold Chest":["canDoShadesOfMortton"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],Growler:["canDoCommanderZilyana"],Gryphon:["canCompleteTroubledTortugans"],"Guard (H.A.M. Storerooms)":["canCompleteDeathToTheDorgeshuun"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"K'ril Tsutsaroth":["canDoKrilTsutsaroth"],"Kalphite Guardian":["canEnterKalphiteLair"],"Kalphite Worker":["canEnterKalphiteLair"],"Kree'arra":["canDoKreearra"],"Lava Strykewyrm":["canEnterTheCharredDungeon"],"Large salvage":["canDoSalvaging"],"Locust rider":["canCompleteIcthlarinsLittleHelper"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Lost mahogany crate":["canCompletePandemonium"],"Magpie impling":["canTrainHunter"],"Maniacal Monkey Archer":["canCompleteMonkeyMadnessII"],"Maniacal monkey":["canCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Mithril dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Moonlight Cockatrice":{all:["canStartPerilousMoons","hasMirrorShield"]},Narwhal:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Ninja impling":["canTrainHunter"],"Ogre Coffin":{all:["canCompleteZogreFleshEaters","hasOgreCoffinKey"]},"Plundered salvage":["canDoSalvaging"],"Pygmy kraken":["canDoSailingCombat"],"Reinforced chest":{any:["canSailToYnysdail","canSailToBrittleIsle"]},"Reward Chest (The Gauntlet)":["canCompleteSongOfTheElves"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Rusty chest":["canCompletePandemonium"],"Salarin the twisted":["canCastStrikeSpells"],"Scarab Mage":["canCompleteIcthlarinsLittleHelper"],"Sea Snake Hatchling":["canCompleteRoyalTrouble"],"Sea Snake Young":["canCompleteRoyalTrouble"],"Sergeant Grimspike":["canDoGeneralGraardor"],"Sergeant Steelwill":["canDoGeneralGraardor"],"Sergeant Strongstack":["canDoGeneralGraardor"],"Shadow warrior":["canCompleteLegendsQuest"],"Shellbane Gryphon":["canCompleteTroubledTortugans"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Skeleton brute":["canEnterAncientCavern"],"Skeleton heavy":["canEnterAncientCavern"],"Skeleton hero":["canEnterAncientCavern"],"Skeleton thug":["canEnterAncientCavern"],"Skeleton warlord":["canEnterAncientCavern"],"Smoke devil":["hasFacemask"],"Spined kraken":["canDoSailingCombat"],"Spitting Wyvern":["canKillFossilIslandWyverns"],Starlight:["canDoCommanderZilyana"],"Steel Chest":["canDoShadesOfMortton"],"Steel dragon":["canKillDifficultDragons"],"Storage crate":["canCompleteTheDigSite"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tarnished chest":["canCompletePandemonium"],"Thermonuclear smoke devil":["hasFacemask"],"Tiger shark":["canDoSailingCombat"],"Tormented Demon":["canCompleteWhileGuthixSleeps"],"Tortured gorilla":["canCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],"Tstanon Karlak":["canDoKrilTsutsaroth"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Vyrewatch:["canCompleteATasteOfHope"],"Vyrewatch Sentinel":["canCompleteSinsOfTheFather"],Waterfiend:{any:["canEnterAncientCavern","canCompleteSongOfTheElves"]},"Wingman Skree":["canDoKreearra"],Wyrm:["canEnterKaruulmSlayerDungeon"],"Zakl'n Gritch":["canDoKrilTsutsaroth"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"],"Zombie pirate (Harmony Island)":["canCompleteTheGreatBrainRobbery"],"Zombie Pirate's Locker":["hasZombiePirateKey"]};function n(e,a){const r=e.items.find(i=>i.id===a);return r?e.unlocked.includes(a)&&H(r,e,e.items):!1}function H(e,a,r,i=new Set){if(!e||i.has(e.id))return!1;if(i.add(e.id),a.rolled.includes(e.id))return!0;if(e.sources?.drops){for(const[o]of Object.entries(e.sources.drops))if(G(o,a))return!0}if(e.sources?.other){for(const[o,t]of Object.entries(e.sources.other))if(R(t.rule,a))return!0}if(e.processable)for(const[o,t]of Object.entries(e.processable)){if(Number(o)!==e.id)continue;const l=t.split(",");let d=!0;for(const f of l){const p=r.find(m=>m.id==f);if(!p||!H(p,a,r,i)){d=!1;break}}if(d)return!0}return!1}const oe={canCompleteDragonSlayerII(e){return!1},canCompleteDesertTreasureII(e){return!1},canCompleteSongOfTheElves(e){return!1},canCompleteWhileGuthixSleeps(e){return!1},canCompleteTheGreatBrainRobbery(e){return!1},canCompleteATasteOfHope(e){return!1},canCompleteSinsOfTheFather(e){return!1},canCompleteTheFremennikExiles(e){return!1},canCompleteCabinFever(e){return!1},canCompleteWanted(e){return!1},canCompleteThroneOfMiscellania(e){return _(e)},canCompleteDeathPlateau(e){return Ke(e)},canCompleteTheHeartOfDarkness(e){return $e(e)},canCompleteIcthlarinsLittleHelper(e){return Ue(e)},canReachAbyssalSire(e){return Le(e)||Oe(e)},canDoGuardiansOfTheRift(e){return Me(e)},canTrainFarming(e){return Je(e)},canTrainWoodcutting(e){return k(e)},canTrainMining(e){return D(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return Xe(e)},canDoValeTotems(e){return xe(e)},canDoWintertodt(e){return en(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return nn(e)},canDoShadesOfMortton(e){return an()},canCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return q(e)},canCompleteZogreFleshEaters(e){return qe(e)},canEnterKaruulmSlayerDungeon(e){return ke(e)},hasFacemask(e){return n(e,4164)},canKillGargoyles(e){return be(e)},canKillDifficultDragons(e){return Se()},canKillFossilIslandWyverns(e){return $()},hasAccessToWyvernProtection(e){return De(e)},canTrainFletching(e){return v(e)},canTrainSmithing(e){return A(e)},canCompleteDwarfCannon(e){return He(e)},canCompleteTroubledTortugans(e){return Ne(e)},canLongrange(e){return W(e)},canCastStrikeSpells(e){return Ce(e)},canShortrange(e){return ye(e)},canSailToTheNorthernOcean(e){return N(e)},canDoSailingCombat(e){return rn(e)},canEnterTheCharredDungeon(e){return ge(e)},canSailToBrittleIsle(e){return he(e)},canSailToYnysdail(e){return pe(e)},canEnterAncientCavern(e){return ce(e)},canEnterKalphiteLair(e){return de(e)},canCompleteRoyalTrouble(e){return Ae(e)},canCompleteTouristTrap(e){return Ge(e)},canCompletePandemonium(e){return g(e)},canCompleteLegendsQuest(e){return!1},canDoYama(e){return!1},canTrainHunter(e){return M(e)},canCompleteTheDigSite(e){return Be(e)},canCompleteAnimalMagnetism(e){return Te(e)},canCompleteDeathToTheDorgeshuun(e){return ve(e)},canCompleteTheLostTribe(e){return U(e)},canCompletePerilousMoons(e){return Ee(e)},hasSteelArrow(e){return n(e,886)},hasMithrilArrow(e){return n(e,888)},hasLockpick(e){return n(e,1523)},hasOgreCoffinKey(e){return n(e,4850)},hasZombiePirateKey(e){return n(e,29449)},hasMirrorShield(e){return n(e,4156)},canDoGodWarsDungeon(e){return!1},canDoCommanderZilyana(e){return te()},canDoGeneralGraardor(e){return ie()},canDoKreearra(e){return le()},canDoKrilTsutsaroth(e){return se()},canDoNex(e){return ue()}};function te(e){return!1}function ie(e){return!1}function le(e){return!1}function se(e){return!1}function ue(e){return!1}function de(e){return n(e,954)}function ce(e){return fe(e)}function fe(e){return n(e,1521)&&(n(e,841)||n(e,839)||n(e,843)||n(e,845)||n(e,849)||n(e,847)||n(e,853)||n(e,851)||n(e,857)||n(e,855)||n(e,861)||n(e,859))}function N(e){return g(e)&&!1}function me(e){return g(e)&&!1}function pe(e){return me(e)}function he(e){return N(e)}function ge(e){return g(e)&&n(e,954)}function W(e){return(n(e,841)||n(e,839))&&(n(e,882)||n(e,884))||(n(e,837)||n(e,9174))&&n(e,877)||(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&(n(e,558)||n(e,562)||n(e,560)||n(e,565))}function Ce(e){return(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&n(e,558)}function ye(e){return W(e)||n(e,864)||n(e,870)||n(e,863)||n(e,865)||n(e,869)||n(e,866)||n(e,867)||n(e,868)||n(e,5667)||n(e,806)||n(e,807)||n(e,813)||n(e,808)||n(e,3093)||n(e,809)||n(e,810)||n(e,816)||n(e,811)||n(e,817)||n(e,6522)||n(e,10033)||n(e,10034)||n(e,11959)||n(e,800)||n(e,801)||n(e,802)||n(e,803)||n(e,804)||n(e,805)}function be(e){return n(e,4162)||n(e,21754)}function Se(e){return!1}function ke(e){return n(e,23037)||$()}function $(e){return Ze()}function De(e){return z(e)&&(n(e,2890)||n(e,9731)&&_e(e))}function Te(e){return canCompleteErnestTheChicken(e)&&q(e)&&n(e,1355)&&n(e,2351)&&n(e,2347)&&n(e,1743)&&n(e,1718)&&n(e,10496)&&n(e,1931)&&(n(e,534)||n(e,530)||n(e,532)||n(e,526)||n(e,528)||n(e,6729)||n(e,536)||n(e,22783)||n(e,31729)||n(e,22786)||n(e,3125)||n(e,11943)||n(e,3183)||n(e,4834)||n(e,4832)||n(e,3123)||n(e,31726)||n(e,22124)||n(e,2859)||n(e,22780)||n(e,28899)||n(e,6812)||n(e,4812))}function ve(e){return U(e)&&n(e,4310)&&n(e,4304)&&n(e,4308)&&n(e,4302)&&n(e,4306)&&n(e,4300)&&n(e,4298)}function U(e){return we(e)&&E(e)&&D(e)}function we(e){return n(e,288)&&n(e,1769)&&n(e,1767)}function Ie(e){return canCompleteTwilightsPromise(e)&&M(e)&&P(e)&&Q(e)&&V(e)}function Ee(e){return Ie(e)&&n(e,946)&&n(e,305)&&n(e,954)&&n(e,233)}function Le(e){return E(e)}function E(e){return n(e,1438)}function Oe(e){return Z(e)&&Pe(e)&&n(e,5329)&&n(e,952)}function Z(e){return n(e,1351)&&n(e,946)&&O()}function Pe(e){return n(e,2961)&&n(e,2355)&&n(e,2976)&&O()}function Me(e){return n(e,1929)&&n(e,1755)&&(n(e,1265)||n(e,1267))&&Q(e)}function Ke(e){return n(e,2309)&&n(e,333)&&n(e,2351)&&n(e,1905)&&n(e,3105)}function Ae(e){return _(e)&&n(e,954)&&n(e,453)&&n(e,960)}function Ge(e){return v(e)&&A(e)&&n(e,1833)&&n(e,1835)&&n(e,1837)&&n(e,2347)&&n(e,2349)&&n(e,314)}function _(e){return Re(e)&&We(e)&&n(e,2351)&&(n(e,1635)||n(e,1637)||n(e,1639)||n(e,1641)||n(e,1643))&&n(e,1511)}function Re(e){return Z(e)&&Fe(e)&&je(e)&&D(e)&&Ve(e)&&P(e)&&K(e)&&n(e,307)&&n(e,313)&&n(e,97)&&n(e,255)&&n(e,227)}function Be(e){return L(e)&&n(e,233)&&n(e,229)&&n(e,590)&&(n(e,1978)||n(e,1921))&&n(e,954)&&(n(e,1609)||n(e,1625))&&n(e,973)}function Fe(e){return n(e,2309)&&n(e,590)&&n(e,30)&&n(e,1925)&&n(e,28)&&n(e,530)}function je(e){return n(e,1791)&&n(e,1761)&&n(e,1907)&&n(e,301)&&n(e,950)&&n(e,1540)&&n(e,2347)&&n(e,1539)&&n(e,960)}function He(e){return n(e,2347)}function Ne(e){return M(e)&&k(e)&&V(e)&&g(e)&&n(e,401)}function We(e){return n(e,1917)&&n(e,590)&&(n(e,383)||P(e)&&(n(e,389)||n(e,395)))}function L(e){return n(e,2136)&&n(e,2134)&&n(e,2132)&&n(e,2138)}function g(e){return n(e,2347)&&n(e,8794)}function $e(e){return D(e)}function Ue(e){return canCompleteGertrudesCat(e)&&n(e,590)&&n(e,1519)&&(n(e,4161)||n(e,1925)&&n(e,4689))&&n(e,4687)&&n(e,1823)&&n(e,4684)}function q(e){return n(e,1925)&&(n(e,7936)||n(e,1436))}function Ze(e){return!1}function z(e){return D(e)&&O()&&n(e,2347)&&n(e,1733)&&n(e,1734)&&n(e,1741)&&n(e,453)}function _e(e){return z(e)}function qe(e){return Qe(e)&&ze(e)&&A(e)}function ze(e){return L(e)}function Qe(e){return v(e)&&K(e)&&k(e)&&n(e,314)&&n(e,946)&&n(e,1755)&&n(e,1965)&&n(e,1982)&&n(e,1957)&&n(e,1942)&&n(e,2128)&&n(e,1573)&&n(e,2862)&&n(e,2864)&&n(e,2865)&&n(e,2859)&&n(e,2861)&&n(e,2866)&&n(e,2876)}function O(e){return!0}function Q(e){return E(e)&&(n(e,5525)||n(e,1436)||n(e,7936))}function k(e){return n(e,1351)||n(e,1349)||n(e,1353)}function D(e){return n(e,1265)||n(e,1267)||n(e,1269)}function Ve(e){return L(e)&&n(e,199)&&n(e,201)&&n(e,203)}function P(e){return n(e,303)&&n(e,305)&&n(e,307)&&n(e,313)}function M(e){return n(e,10006)&&n(e,10150)&&n(e,10010)}function K(e){return n(e,25833)&&n(e,2132)&&n(e,2136)&&n(e,2134)&&n(e,2138)&&n(e,317)&&n(e,3226)&&n(e,327)&&n(e,321)&&n(e,1859)&&n(e,2307)&&n(e,345)}function Je(e){return n(e,5341)||n(e,8431)}function V(e){return n(e,8431)&&(n(e,2347)&&n(e,8794))(n(e,2351)||n(e,960))}function v(e){return n(e,946)&&n(e,1511)||n(e,52)&&n(e,314)||n(e,53)&&n(e,39)}function Ye(e){return n(e,590)}function A(e){return n(e,2347)}function Xe(e){return K(e)&&(n(e,2171)&&n(e,2165)&&n(e,2169)&&(n(e,2128)&&n(e,2217)||n(e,2128)&&n(e,2213)||n(e,2128)&&n(e,2162)&&n(e,2205)||n(e,1973)&&n(e,1975)&&n(e,2209))||n(e,2171)&&n(e,2164)&&n(e,2128)&&(n(e,2120)&&n(e,2122)&&n(e,2108)&&n(e,2110)&&n(e,2114)&&n(e,2116)&&n(e,2169)&&n(e,2277)||n(e,2169)&&n(e,1985)&&n(e,2152)&&n(e,2255)||n(e,2169)&&n(e,1985)&&n(e,2162)&&n(e,2253)||n(e,1982)&&n(e,2126)&&n(e,1957)&&n(e,1985)&&n(e,1965)&&n(e,2281)||n(e,1982)&&n(e,1985)&&n(e,2259))||n(e,2171)&&n(e,2166)&&n(e,2128)&&(n(e,2162)&&n(e,1957)&&n(e,2169)&&n(e,2191)||n(e,1957)&&n(e,1942)&&n(e,2152)&&n(e,2195)||n(e,2152)&&n(e,2169)&&n(e,1985)&&n(e,2126)&&n(e,2187)||n(e,1973)&&n(e,1975)&&n(e,2130)&&n(e,2185))||n(e,2025)&&n(e,2026)&&(n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2106)&&n(e,2084)||n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2120)&&n(e,2122)&&n(e,2116)&&n(e,2112)&&n(e,2048)||n(e,2015)&&n(e,2019)&&n(e,2120)&&n(e,2102)&&n(e,2114)&&n(e,2108)&&n(e,2116)&&n(e,2124)&&n(e,2054)||n(e,2015)&&n(e,2120)&&n(e,2124)&&n(e,2128)&&n(e,2080)||n(e,2015)&&n(e,2019)&&n(e,2126)&&n(e,2114)&&n(e,2116)&&n(e,2130)&&n(e,2092)||n(e,2017)&&n(e,1973)&&n(e,2128)&&n(e,1927)&&n(e,1975)&&n(e,2130)&&n(e,2074)||n(e,2015)&&n(e,2021)&&n(e,2019)&&n(e,2102)&&n(e,2104)&&n(e,2108)&&n(e,2110)&&n(e,2128)&&n(e,2120)&&n(e,2124)&&n(e,2064)))}function xe(e){return v(e)&&n(e,946)||n(e,843)||n(e,845)||n(e,9442)||n(e,22251)||n(e,1521)&&(n(e,54)||n(e,56))||n(e,849)||n(e,847)||n(e,9444)||n(e,1519)&&(n(e,60)||n(e,58)||n(e,22254))||n(e,853)||n(e,851)||n(e,9448)||n(e,1517)&&(n(e,64)||n(e,62)||n(e,22257))||n(e,857)||n(e,855)||n(e,1515)&&(n(e,68)||n(e,66)||n(e,22260)||n(e,9452))||n(e,1513)&&(n(e,72)||n(e,70)||n(e,22263)||n(e,21952))||k(e)&&n(e,19669)&&(n(e,31049)||n(e,22266))}function en(e){return Ye(e)&&k(e)}function nn(e){return g(e)&&!1}function rn(e){return g(e)&&!1}function an(e){return!1}function G(e,a){const r=ae[e];return r?b(r,a):!0}function R(e,a){return b(e,a)}function b(e,a){if(!e)return!0;if(typeof e=="string"){const r=oe[e];return r?r(a):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(r=>b(r,a)):e.has?a.unlocked.includes(e.has):e.any?e.any.some(r=>b(r,a)):e.all?e.all.every(r=>b(r,a)):(console.warn("Unknown rule structure:",e),!1)}function J(e,a){const r=e.sources||{};if(r.shops||r.spawns)return!0;if(r.drops){for(const i of Object.keys(r.drops))if(G(i,a))return!0}if(r.other)for(const i of Object.keys(r.other)){const o=r.other[i].rule;if(R(o,a))return!0}return!1}function B(e,a){const r=e.sources||{};return J(e,a)?r.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:r.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:r.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:r.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function on(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const tn="chanceman",S="files";let C={rolled:null,unlocked:null};function Y(){return new Promise((e,a)=>{const r=indexedDB.open(tn,1);r.onupgradeneeded=function(){r.result.createObjectStore(S)},r.onsuccess=()=>e(r.result),r.onerror=()=>a(r.error)})}async function F(e,a){const i=(await Y()).transaction(S,"readwrite");return i.objectStore(S).put(a,e),i.complete}async function j(e){const a=await Y();return new Promise(r=>{const o=a.transaction(S,"readonly").objectStore(S).get(e);o.onsuccess=()=>r(o.result),o.onerror=()=>r(null)})}const s={async init(){C.rolled=await j("rolled"),C.unlocked=await j("unlocked")},async setRolled(e){C.rolled=e,await F("rolled",e)},async setUnlocked(e){C.unlocked=e,await F("unlocked",e)},get rolled(){return C.rolled},get unlocked(){return C.unlocked}};async function ln(){const e=s.rolled,a=s.unlocked;if(!e||!a)return"<h1>Please upload your files on the Home page first.</h1>";const i=new URLSearchParams(window.location.search).get("id");if(!i)return"<h1>No item selected</h1>";const o=await fetch("/data/items.json").then(l=>l.json()),t=o.find(l=>l.id==i);return t?`
        <h1>${t.name}</h1>

        <div class="item-header">
            <img src="/images/${t.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${t.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${sn(t.sources)}

        <h2>Processable into:</h2>
        ${cn(t.processable,o)}
    `:"<h1>Item not found</h1>"}function sn(e={}){return["drops","other"].map(r=>`
        <div class="source-section">
            <h3>${un(r)}</h3>
            ${dn(r,e[r])}
        </div>
    `).join("")}function un(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dn(e,a){if(!a||Object.keys(a).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(a).map(([r,i])=>{const o=G(r,s)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${i.url}" target="_blank">${r}</a></td>
                            <td>${i.droprate}</td>
                            <td>${o}</td>
                        </tr>
                    `}).join("")}
            </table>
        `;if(e==="other")return`
            <table class="osrs-table">
                <tr>
                    <th>How</th>
                    <th>Notes</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(a).map(([r,i])=>{const{notes:o,rule:t}=i,l=R(t,s)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${r}</td>
                            <td>${o}</td>
                            <td>${l}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function cn(e={},a){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([r,i])=>{const o=a.find(d=>d.id==r),l=i.split(",").map(d=>{const f=a.find(p=>p.id==d);return f?`<a onclick="navigate('/item?id=${d}')">${f.name}</a>`:d}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${r}')">${o.name}</a>
                        </td>
                        <td>${l}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function fn(){const e=await fetch("/data/items.json").then(i=>i.json());s.items=e;const a=s.rolled||[],r=s.unlocked||[];return window.__itemsPageData={items:e,rolled:a,unlocked:r},`
        <h1>Items</h1>

        <div class="item-filters">
            <input type="text" id="itemSearch" placeholder="Search items..." />

            <label>
                <input type="checkbox" id="hideRolled">
                Hide rolled
            </label>

            <label>
                <input type="checkbox" id="onlyUnlocked">
                Only unlocked
            </label>

            <label>
                <input type="checkbox" id="onlyObtainable">
                Only obtainable
            </label>

            <label>
                <input type="checkbox" id="hideClueRewardOnly">
                Hide clue items
            </label>
        </div>

        <div class="item-grid" id="itemGrid"></div>
    `}function mn(){return"<h1>404 - Page Not Found</h1>"}function pn(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function hn(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),i=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const t=JSON.parse(await r.files[0].text());await s.setRolled(t)}if(i.files[0]){const t=JSON.parse(await i.files[0].text());await s.setUnlocked(t)}o.textContent="Updated!"}catch{o.textContent="Error!"}});function gn(){return`
        <h1>Chanceman Tracker Setup</h1>

        <p><strong>Upload your chanceman_rolled.json and chanceman_unlocked.json files.</strong></p>

        <p>Location:<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_rolled.json<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_unlocked.json
        </p>

        <label>
            Rolled:<br>
            <input type="file" id="rolledInput" accept=".json">
        </label>
        <br><br>

        <label>
            Unlocked:<br>
            <input type="file" id="unlockedInput" accept=".json">
        </label>

        <br><br>
        <button id="saveBtn">Save & Continue</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),i=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const t=JSON.parse(await r.files[0].text());await s.setRolled(t)}if(i.files[0]){const t=JSON.parse(await i.files[0].text());await s.setUnlocked(t)}o.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(t){console.error(t),o.textContent="Error reading files!"}});async function Cn(e){history.pushState({},"",e),c()}window.navigate=Cn;async function c(){const a=window.location.pathname.split("?")[0],i={"/":gn,"/items":fn,"/item":ln,"/quests":pn,"/reupload":hn}[a]||mn,o=document.getElementById("app");a!=="/"?o.innerHTML=on()+await i():o.innerHTML=await i(),yn()}window.addEventListener("popstate",c);window.addEventListener("DOMContentLoaded",async()=>{await s.init(),c()});window.addEventListener("DOMContentLoaded",c);window.addEventListener("popstate",c);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c())});function w(){const e=document.querySelectorAll("img.lazy-img"),a=new IntersectionObserver((r,i)=>{for(const o of r)if(o.isIntersecting){const t=o.target;t.src=t.dataset.src,t.classList.remove("lazy-img"),i.unobserve(t)}});e.forEach(r=>a.observe(r))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:a,rolled:r,unlocked:i}=e,o=document.getElementById("itemSearch"),t=document.getElementById("hideRolled");t.checked=!0;const l=document.getElementById("onlyUnlocked"),d=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const p=document.getElementById("itemGrid");if(!p)return;function m(){const X=o?.value.toLowerCase()||"",x=t?.checked||!1,ee=l?.checked||!1,ne=d?.checked||!1,re=f?.checked||!1;let I=a.filter(u=>{if(!u.name.toLowerCase().includes(X))return!1;const h=r.includes(u.id),y=i.includes(u.id);return!(x&&h||ee&&!y||ne&&!J(u,s)||re&&u.tags?.includes("clue-reward-only"))});I=I.sort((u,T)=>{const h=B(u,s),y=B(T,s);return h.rank!==y.rank?h.rank-y.rank:h.name.localeCompare(y.name)}),p.innerHTML=I.map(u=>{const T=r.includes(u.id),h=i.includes(u.id);return`
                <div class="item-card" onclick="navigate('/item?id=${u.id}')">

                    ${T?'<span class="badge rolled">Rolled</span>':""}
                    ${h?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${u.image}"
                        src="/images/placeholder.png"
                    >

                    ${u.name}
                </div>
            `}).join(""),setTimeout(()=>w(),0)}o?.addEventListener("input",m),t?.addEventListener("input",m),l?.addEventListener("input",m),d?.addEventListener("input",m),f?.addEventListener("input",m),m()};window.addEventListener("DOMContentLoaded",async()=>{await s.init(),c()});window.addEventListener("popstate",()=>{c(),setTimeout(w,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c(),setTimeout(w,0))});function yn(){w(),typeof initItemsPage=="function"&&initItemsPage()}
