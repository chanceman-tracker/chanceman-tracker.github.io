(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const ie="chanceman",k="files";let C={rolled:null,unlocked:null};function W(){return new Promise((e,r)=>{const a=indexedDB.open(ie,1);a.onupgradeneeded=function(){a.result.createObjectStore(k)},a.onsuccess=()=>e(a.result),a.onerror=()=>r(a.error)})}async function B(e,r){const t=(await W()).transaction(k,"readwrite");return t.objectStore(k).put(r,e),t.complete}async function F(e){const r=await W();return new Promise(a=>{const i=r.transaction(k,"readonly").objectStore(k).get(e);i.onsuccess=()=>a(i.result),i.onerror=()=>a(null)})}const s={async init(){C.rolled=await F("rolled"),C.unlocked=await F("unlocked")},async setRolled(e){C.rolled=e,await B("rolled",e)},async setUnlocked(e){C.unlocked=e,await B("unlocked",e)},get rolled(){return C.rolled},get unlocked(){return C.unlocked}},le={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Ancient Wyvern":["canKillFossilIslandWyverns"],"Angry barbarian spirit":["canEnterAncientCavern"],Araxyte:["canCompletePriestInPeril"],"Ava's accumulator":{all:["canCompleteAnimalMagnetism","hasSteelArrow"]},"Ava's assembler":{all:["canCompleteAnimalMagnetism","hasMithrilArrow","canCompleteDragonSlayerII"]},"Ava's attractor":["canCompleteAnimalMagnetism"],Aviansie:["canShortrange"],"Balfrug Kreeyath":["canDoKrilTsutsaroth"],"Barrel (Shaman Caves)":["canCompleteLegendsQuest"],"Berserk barbarian spirit":["canEnterAncientCavern"],Basilisk:["hasMirrorShield"],"Basilisk Knight":["canCompleteTheFremennikExiles"],"Black Chest":["canDoShadesOfMortton"],Bree:["canDoCommanderZilyana"],"Bronze Chest":["canDoShadesOfMortton"],"Bronze dragon":["canKillDifficultDragons"],"Brutal blue dragon":["canKillDifficultDragons"],"Brutal black dragon":["canKillDifficultDragons"],"Brutal green dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Brutal red dragon":["canKillDifficultDragons"],"Bull shark":["canShortrange"],"Cannonball stall":["canCompletePandemonium"],"Cave horror":["canCompleteCabinFever"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Chest (Dorgesh-Kaan Average)":{all:["canCompleteDeathToTheDorgeshuun","hasLockpick"]},"Chest (moon key)":{any:["canTrainMining","canTrainWoodcutting","canTrainFishing"]},"Chewed bones":{all:["canKillDifficultDragons","canEnterAncientCavern"]},Cockatrice:["hasMirrorShield"],"Crystal impling":["canCompleteSongOfTheElves"],"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Commander Zilyana":["canDoCommanderZilyana"],"Deranged archaeologist":["canCompleteBoneVoyage"],"Dirty arrowtips":["canDoValeTotems"],"Doom of Mokhaiotl":["canCompleteTheFinalDawn"],"Dragon impling":["canTrainHunter"],"Duke Sucellus":["canCompleteDesertTreasureII"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],"Eclectic impling":["canTrainHunter"],"Enraged barbarian spirit":["canEnterAncientCavern"],"Ferocious barbarian spirit":{all:["canEnterAncientCavern","canTrainWoodcutting"]},"Flight Kilisa":["canDoKreearra"],"Flockleader Geerin":["canDoKreearra"],"Forgotten Lockbox":["canDoYama"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"General Graardor":["canDoGeneralGraardor"],"Giant Sea Snake":["canCompleteRoyalTrouble"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Gold Chest":["canDoShadesOfMortton"],"Great white shark":["canCompletePandemonium"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],Growler:["canDoCommanderZilyana"],Gryphon:["canCompleteTroubledTortugans"],"Guard (H.A.M. Storerooms)":["canCompleteDeathToTheDorgeshuun"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"K'ril Tsutsaroth":["canDoKrilTsutsaroth"],"Kalphite Guardian":["canEnterKalphiteLair"],"Kalphite Worker":["canEnterKalphiteLair"],"Kree'arra":["canDoKreearra"],"Lava Strykewyrm":["canEnterTheCharredDungeon"],"Large salvage":["canDoSalvaging"],"Locust rider":["canCompleteIcthlarinsLittleHelper"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Lost camphor crate":["canCompletePandemonium"],"Lost ironwood crate":["canCompletePandemonium"],"Lost mahogany crate":["canCompletePandemonium"],"Lost oak crate":["canCompletePandemonium"],"Lost wooden crate":["canCompletePandemonium"],"Magpie impling":["canTrainHunter"],"Maniacal Monkey Archer":["canCompleteMonkeyMadnessII"],"Maniacal monkey":["canCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Mithril dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Moonlight Cockatrice":{all:["canStartPerilousMoons","hasMirrorShield"]},Narwhal:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Ninja impling":["canTrainHunter"],Orca:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Ogre Coffin":{all:["canCompleteZogreFleshEaters","hasOgreCoffinKey"]},"Plundered salvage":["canDoSalvaging"],"Pygmy kraken":["canDoSailingCombat"],"Reinforced chest":{any:["canSailToYnysdail","canSailToBrittleIsle"]},"Reward Chest (The Gauntlet)":["canCompleteSongOfTheElves"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Rusty chest":["canCompletePandemonium"],"Salarin the twisted":["canCastStrikeSpells"],"Scarab Mage":["canCompleteIcthlarinsLittleHelper"],"Sea Snake Hatchling":["canCompleteRoyalTrouble"],"Sea Snake Young":["canCompleteRoyalTrouble"],"Sergeant Grimspike":["canDoGeneralGraardor"],"Sergeant Steelwill":["canDoGeneralGraardor"],"Sergeant Strongstack":["canDoGeneralGraardor"],"Shadow warrior":["canCompleteLegendsQuest"],"Shellbane Gryphon":["canCompleteTroubledTortugans"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Skeleton brute":["canEnterAncientCavern"],"Skeleton heavy":["canEnterAncientCavern"],"Skeleton hero":["canEnterAncientCavern"],"Skeleton thug":["canEnterAncientCavern"],"Skeleton warlord":["canEnterAncientCavern"],"Small salvage":["canDoSalvaging"],"Smoke devil":["hasFacemask"],"Spined kraken":["canDoSailingCombat"],"Spitting Wyvern":["canKillFossilIslandWyverns"],Starlight:["canDoCommanderZilyana"],"Steel Chest":["canDoShadesOfMortton"],"Steel dragon":["canKillDifficultDragons"],"Storage crate":["canCompleteTheDigSite"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tarnished chest":["canCompletePandemonium"],"Thermonuclear smoke devil":["hasFacemask"],"Tiger shark":["canDoSailingCombat"],"Tormented Demon":["canCompleteWhileGuthixSleeps"],"Tortured gorilla":["canCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],"Tstanon Karlak":["canDoKrilTsutsaroth"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Vyrewatch:["canCompleteATasteOfHope"],"Vyrewatch Sentinel":["canCompleteSinsOfTheFather"],Waterfiend:{any:["canEnterAncientCavern","canCompleteSongOfTheElves"]},"Wingman Skree":["canDoKreearra"],Wyrm:["canEnterKaruulmSlayerDungeon"],"Zakl'n Gritch":["canDoKrilTsutsaroth"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"],"Zombie pirate (Harmony Island)":["canCompleteTheGreatBrainRobbery"],"Zombie Pirate's Locker":["hasZombiePirateKey"]};function n(e,r){const a=e.items.find(t=>t.id===r);return a?e.unlocked.includes(r)&&$(a,e,e.items):!1}function $(e,r,a,t=new Set){if(!e||t.has(e.id))return!1;if(t.add(e.id),r.rolled.includes(e.id))return!0;if(e.sources?.drops){for(const[i]of Object.entries(e.sources.drops))if(G(i,r))return!0}if(e.sources?.other){for(const[i,o]of Object.entries(e.sources.other))if(c(o.rule,r))return!0}if(e.processable)for(const[i,o]of Object.entries(e.processable)){if(Number(i)!==e.id)continue;const l=o.split(",");let d=!0;for(const f of l){const h=a.find(p=>p.id==f);if(!h||!$(h,r,a,t)){d=!1;break}}if(d)return!0}return!1}const se={canCompleteDragonSlayerII(e){return!1},canCompleteDesertTreasureII(e){return!1},canCompleteSongOfTheElves(e){return!1},canCompleteWhileGuthixSleeps(e){return!1},canCompleteTheGreatBrainRobbery(e){return!1},canCompleteATasteOfHope(e){return!1},canCompleteSinsOfTheFather(e){return!1},canCompleteTheFremennikExiles(e){return!1},canCompleteCabinFever(e){return!1},canCompleteWanted(e){return!1},canCompleteTheFinalDawn(e){return!1},canCompleteBoneVoyage(e){return J()},canCompleteThroneOfMiscellania(e){return V(e)},canCompleteDeathPlateau(e){return Ue(e)},canCompleteTheHeartOfDarkness(e){return xe(e)},canCompleteIcthlarinsLittleHelper(e){return en(e)},canReachAbyssalSire(e){return Ne(e)||He(e)},canDoGuardiansOfTheRift(e){return $e(e)},canTrainFarming(e){return sn(e)},canTrainWoodcutting(e){return T(e)},canTrainMining(e){return D(e)},canTrainCooking(e){return E(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return dn(e)},canDoValeTotems(e){return cn(e)},canDoWintertodt(e){return fn(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return mn(e)},canDoShadesOfMortton(e){return hn()},canCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return M(e)},canCompleteZogreFleshEaters(e){return an(e)},canEnterKaruulmSlayerDungeon(e){return Re(e)},hasFacemask(e){return n(e,4164)},canKillGargoyles(e){return Le(e)},canKillDifficultDragons(e){return Pe()},canKillFossilIslandWyverns(e){return _()},hasAccessToWyvernProtection(e){return Me(e)},canTrainFletching(e){return O(e)},canTrainSmithing(e){return j(e)},canCompleteDwarfCannon(e){return Je(e)},canCompleteTroubledTortugans(e){return Ye(e)},canLongrange(e){return Z(e)},canCastStrikeSpells(e){return Ee(e)},canShortrange(e){return Oe(e)},canSailToTheNorthernOcean(e){return q(e)},canDoSailingCombat(e){return pn(e)},canEnterTheCharredDungeon(e){return Ie(e)},canSailToBrittleIsle(e){return ve(e)},canSailToYnysdail(e){return we(e)},canEnterAncientCavern(e){return be(e)},canEnterKalphiteLair(e){return Ce(e)},canCompleteRoyalTrouble(e){return qe(e)},canCompleteTouristTrap(e){return Ze(e)},canCompletePandemonium(e){return y(e)},canCompleteEnchantedKey(e){return Te(e)},canCompleteLegendsQuest(e){return!1},canDoYama(e){return!1},canTrainHunter(e){return K(e)},canCompleteTheDigSite(e){return ze(e)},canCompleteAnimalMagnetism(e){return Ae(e)},canCompleteDeathToTheDorgeshuun(e){return je(e)},canCompleteTheLostTribe(e){return z(e)},canCompletePerilousMoons(e){return Fe(e)},hasSteelArrow(e){return n(e,886)},hasMithrilArrow(e){return n(e,888)},hasLockpick(e){return n(e,1523)},hasOgreCoffinKey(e){return n(e,4850)},hasZombiePirateKey(e){return n(e,29449)},hasMirrorShield(e){return n(e,4156)},hasAirRuneSource(e){return ue(e)},hasWaterRuneSource(e){return de(e)},hasEarthRuneSource(e){return ce(e)},hasFireRuneSource(e){return fe(e)},canDoGodWarsDungeon(e){return!1},canDoCommanderZilyana(e){return me()},canDoGeneralGraardor(e){return pe()},canDoKreearra(e){return he()},canDoKrilTsutsaroth(e){return ge()},canDoNex(e){return ye()},canCompleteBarbarianHerblore(e){return ke(e)}};function ue(e){return n(e,556)||n(e,4696)||n(e,4697)||n(e,4695)||n(e,1381)||n(e,1397)||n(e,1405)||n(e,20736)||n(e,20739)||n(e,11998)||n(e,12e3)||n(e,20730)||n(e,20733)}function de(e){return n(e,555)||n(e,4698)||n(e,4694)||n(e,4695)||n(e,1383)||n(e,1395)||n(e,1403)||n(e,6562)||n(e,6563)||n(e,11787)||n(e,11789)||n(e,20730)||n(e,20733)||n(e,25576)&&n(e,25578)}function ce(e){return n(e,557)||n(e,4696)||n(e,4698)||n(e,4699)||n(e,1385)||n(e,1399)||n(e,1407)||n(e,20736)||n(e,20739)||n(e,6562)||n(e,6563)||n(e,3053)||n(e,3054)||n(e,30066)&&n(e,30068)}function fe(e){return n(e,554)||n(e,4699)||n(e,4697)||n(e,4694)||n(e,28929)||n(e,1387)||n(e,1393)||n(e,1401)||n(e,3053)||n(e,3054)||n(e,11998)||n(e,12e3)||n(e,11787)||n(e,11789)||n(e,20716)&&n(e,20718)}function me(e){return!1}function pe(e){return!1}function he(e){return!1}function ge(e){return!1}function ye(e){return!1}function Ce(e){return n(e,954)}function be(e){return U(e)}function U(e){return n(e,1521)&&(n(e,841)||n(e,839)||n(e,843)||n(e,845)||n(e,849)||n(e,847)||n(e,853)||n(e,851)||n(e,857)||n(e,855)||n(e,861)||n(e,859))}function Se(e){return I(e)}function ke(e){return v(e)&&U(e)&&Se(e)&&n(e,123)&&(n(e,11324)||n(e,11326))}function Te(e){return M(e)&&n(e,1694)&&n(e,952)}function q(e){return y(e)&&!1}function De(e){return y(e)&&!1}function we(e){return De(e)}function ve(e){return q(e)}function Ie(e){return y(e)&&n(e,954)}function Z(e){return(n(e,841)||n(e,839))&&(n(e,882)||n(e,884))||(n(e,837)||n(e,9174))&&n(e,877)||(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&(n(e,558)||n(e,562)||n(e,560)||n(e,565))}function Ee(e){return(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&n(e,558)}function Oe(e){return Z(e)||n(e,864)||n(e,870)||n(e,863)||n(e,865)||n(e,869)||n(e,866)||n(e,867)||n(e,868)||n(e,5667)||n(e,806)||n(e,807)||n(e,813)||n(e,808)||n(e,3093)||n(e,809)||n(e,810)||n(e,816)||n(e,811)||n(e,817)||n(e,6522)||n(e,10033)||n(e,10034)||n(e,11959)||n(e,800)||n(e,801)||n(e,802)||n(e,803)||n(e,804)||n(e,805)}function Le(e){return n(e,4162)||n(e,21754)}function Pe(e){return!1}function Re(e){return n(e,23037)||_()}function _(e){return J()}function Me(e){return Y(e)&&(n(e,2890)||n(e,9731)&&rn(e))}function Ae(e){return Ke(e)&&M(e)&&n(e,1355)&&n(e,2351)&&n(e,2347)&&n(e,1743)&&n(e,1718)&&n(e,10496)&&n(e,1931)&&(n(e,534)||n(e,530)||n(e,532)||n(e,526)||n(e,528)||n(e,6729)||n(e,536)||n(e,22783)||n(e,31729)||n(e,22786)||n(e,3125)||n(e,11943)||n(e,3183)||n(e,4834)||n(e,4832)||n(e,3123)||n(e,31726)||n(e,22124)||n(e,2859)||n(e,22780)||n(e,28899)||n(e,6812)||n(e,4812))}function Ke(e){return n(e,952)&&n(e,272)&&n(e,273)}function je(e){return z(e)&&n(e,4310)&&n(e,4304)&&n(e,4308)&&n(e,4302)&&n(e,4306)&&n(e,4300)&&n(e,4298)}function z(e){return Ge(e)&&R(e)&&D(e)}function Ge(e){return n(e,288)&&n(e,1769)&&n(e,1767)}function Be(e){return canCompleteTwilightsPromise(e)&&K(e)&&I(e)&&X(e)&&x(e)}function Fe(e){return Be(e)&&n(e,946)&&n(e,305)&&n(e,954)&&n(e,233)}function Ne(e){return R(e)}function R(e){return n(e,1438)}function He(e){return Q(e)&&We(e)&&n(e,5329)&&n(e,952)}function Q(e){return n(e,1351)&&n(e,946)&&A()}function We(e){return n(e,2961)&&n(e,2355)&&n(e,2976)&&A()}function $e(e){return n(e,1929)&&n(e,1755)&&(n(e,1265)||n(e,1267))&&X(e)}function Ue(e){return n(e,2309)&&n(e,333)&&n(e,2351)&&n(e,1905)&&n(e,3105)}function qe(e){return V(e)&&n(e,954)&&n(e,453)&&n(e,960)}function Ze(e){return O(e)&&j(e)&&n(e,1833)&&n(e,1835)&&n(e,1837)&&n(e,2347)&&n(e,2349)&&n(e,314)}function V(e){return _e(e)&&Xe(e)&&n(e,2351)&&(n(e,1635)||n(e,1637)||n(e,1639)||n(e,1641)||n(e,1643))&&n(e,1511)}function _e(e){return Q(e)&&Qe(e)&&Ve(e)&&D(e)&&ln(e)&&I(e)&&E(e)&&n(e,307)&&n(e,313)&&n(e,97)&&n(e,255)&&n(e,227)}function ze(e){return v(e)&&n(e,233)&&n(e,229)&&n(e,590)&&(n(e,1978)||n(e,1921))&&n(e,954)&&(n(e,1609)||n(e,1625))&&n(e,973)}function Qe(e){return n(e,2309)&&n(e,590)&&n(e,30)&&n(e,1925)&&n(e,28)&&n(e,530)}function Ve(e){return n(e,1791)&&n(e,1761)&&n(e,1907)&&n(e,301)&&n(e,950)&&n(e,1540)&&n(e,2347)&&n(e,1539)&&n(e,960)}function Je(e){return n(e,2347)}function Ye(e){return K(e)&&T(e)&&x(e)&&y(e)&&n(e,401)}function Xe(e){return n(e,1917)&&n(e,590)&&(n(e,383)||I(e)&&(n(e,389)||n(e,395)))}function v(e){return n(e,2136)&&n(e,2134)&&n(e,2132)&&n(e,2138)}function y(e){return n(e,2347)&&n(e,8794)}function xe(e){return D(e)}function en(e){return nn(e)&&n(e,590)&&n(e,1519)&&(n(e,4161)||n(e,1925)&&n(e,4689))&&n(e,4687)&&n(e,1823)&&n(e,4684)}function nn(e){return n(e,1927)&&n(e,1552)}function M(e){return n(e,1925)&&(n(e,7936)||n(e,1436))}function J(e){return!1}function Y(e){return D(e)&&A()&&n(e,2347)&&n(e,1733)&&n(e,1734)&&n(e,1741)&&n(e,453)}function rn(e){return Y(e)}function an(e){return tn(e)&&on(e)&&j(e)}function on(e){return v(e)}function tn(e){return O(e)&&E(e)&&T(e)&&n(e,314)&&n(e,946)&&n(e,1755)&&n(e,1965)&&n(e,1982)&&n(e,1957)&&n(e,1942)&&n(e,2128)&&n(e,1573)&&n(e,2862)&&n(e,2864)&&n(e,2865)&&n(e,2859)&&n(e,2861)&&n(e,2866)&&n(e,2876)}function A(e){return!0}function X(e){return R(e)&&(n(e,5525)||n(e,1436)||n(e,7936))}function T(e){return n(e,1351)||n(e,1349)||n(e,1353)}function D(e){return n(e,1265)||n(e,1267)||n(e,1269)}function ln(e){return v(e)&&n(e,199)&&n(e,201)&&n(e,203)}function I(e){return n(e,303)&&n(e,305)&&n(e,307)&&n(e,313)}function K(e){return n(e,10006)&&n(e,10150)&&n(e,10010)}function E(e){return n(e,25833)&&n(e,2132)&&n(e,2136)&&n(e,2134)&&n(e,2138)&&n(e,317)&&n(e,3226)&&n(e,327)&&n(e,321)&&n(e,1859)&&n(e,2307)&&n(e,345)}function sn(e){return n(e,5341)||n(e,8431)}function x(e){return n(e,8431)&&(n(e,2347)&&n(e,8794))(n(e,2351)||n(e,960))}function O(e){return n(e,946)&&n(e,1511)||n(e,52)&&n(e,314)||n(e,53)&&n(e,39)}function un(e){return n(e,590)}function j(e){return n(e,2347)}function dn(e){return E(e)&&(n(e,2171)&&n(e,2165)&&n(e,2169)&&(n(e,2128)&&n(e,2217)||n(e,2128)&&n(e,2213)||n(e,2128)&&n(e,2162)&&n(e,2205)||n(e,1973)&&n(e,1975)&&n(e,2209))||n(e,2171)&&n(e,2164)&&n(e,2128)&&(n(e,2120)&&n(e,2122)&&n(e,2108)&&n(e,2110)&&n(e,2114)&&n(e,2116)&&n(e,2169)&&n(e,2277)||n(e,2169)&&n(e,1985)&&n(e,2152)&&n(e,2255)||n(e,2169)&&n(e,1985)&&n(e,2162)&&n(e,2253)||n(e,1982)&&n(e,2126)&&n(e,1957)&&n(e,1985)&&n(e,1965)&&n(e,2281)||n(e,1982)&&n(e,1985)&&n(e,2259))||n(e,2171)&&n(e,2166)&&n(e,2128)&&(n(e,2162)&&n(e,1957)&&n(e,2169)&&n(e,2191)||n(e,1957)&&n(e,1942)&&n(e,2152)&&n(e,2195)||n(e,2152)&&n(e,2169)&&n(e,1985)&&n(e,2126)&&n(e,2187)||n(e,1973)&&n(e,1975)&&n(e,2130)&&n(e,2185))||n(e,2025)&&n(e,2026)&&(n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2106)&&n(e,2084)||n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2120)&&n(e,2122)&&n(e,2116)&&n(e,2112)&&n(e,2048)||n(e,2015)&&n(e,2019)&&n(e,2120)&&n(e,2102)&&n(e,2114)&&n(e,2108)&&n(e,2116)&&n(e,2124)&&n(e,2054)||n(e,2015)&&n(e,2120)&&n(e,2124)&&n(e,2128)&&n(e,2080)||n(e,2015)&&n(e,2019)&&n(e,2126)&&n(e,2114)&&n(e,2116)&&n(e,2130)&&n(e,2092)||n(e,2017)&&n(e,1973)&&n(e,2128)&&n(e,1927)&&n(e,1975)&&n(e,2130)&&n(e,2074)||n(e,2015)&&n(e,2021)&&n(e,2019)&&n(e,2102)&&n(e,2104)&&n(e,2108)&&n(e,2110)&&n(e,2128)&&n(e,2120)&&n(e,2124)&&n(e,2064)))}function cn(e){return O(e)&&n(e,946)||n(e,843)||n(e,845)||n(e,9442)||n(e,22251)||n(e,1521)&&(n(e,54)||n(e,56))||n(e,849)||n(e,847)||n(e,9444)||n(e,1519)&&(n(e,60)||n(e,58)||n(e,22254))||n(e,853)||n(e,851)||n(e,9448)||n(e,1517)&&(n(e,64)||n(e,62)||n(e,22257))||n(e,857)||n(e,855)||n(e,1515)&&(n(e,68)||n(e,66)||n(e,22260)||n(e,9452))||n(e,1513)&&(n(e,72)||n(e,70)||n(e,22263)||n(e,21952))||T(e)&&n(e,19669)&&(n(e,31049)||n(e,22266))}function fn(e){return un(e)&&T(e)}function mn(e){return y(e)&&!1}function pn(e){return y(e)&&!1}function hn(e){return!1}function G(e,r){const a=le[e];return a?S(a,r):!0}function c(e,r){return S(e,r)}function S(e,r){if(!e)return!0;if(typeof e=="string"){const a=se[e];return a?a(r):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(a=>S(a,r)):e.has?r.unlocked.includes(e.has):e.any?e.any.some(a=>S(a,r)):e.all?e.all.every(a=>S(a,r)):(console.warn("Unknown rule structure:",e),!1)}function ee(e,r){const a=e.sources||{};if(s.unlocked.includes(e.id)){if(a.shops){for(const t of Object.values(a.shops))if(t==="No requirements"||typeof t=="string"&&c(t,r)||typeof t=="object"&&c(t,r))return!0}if(a.spawns){for(const t of Object.values(a.spawns))if(t==="No requirements"||typeof t=="string"&&c(t,r)||typeof t=="object"&&c(t,r))return!0}}if(a.drops){for(const t of Object.keys(a.drops))if(G(t,r))return!0}if(a.other){for(const t of Object.values(a.other))if(c(t.rule,r))return!0}return!1}function N(e,r){const a=e.sources||{};return ee(e,r)?a.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:a.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:a.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:a.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function gn(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}async function yn(){const e=s.rolled,r=s.unlocked;if(!e||!r)return"<h1>Please upload your files on the Home page first.</h1>";const t=new URLSearchParams(window.location.search).get("id");if(!t)return"<h1>No item selected</h1>";const i=await fetch("/data/items.json").then(l=>l.json()),o=i.find(l=>l.id==t);return o?`
        <h1>${o.name}</h1>

        <div class="item-header">
            <img src="/images/${o.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${o.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${Cn(o.sources)}

        <h2>Processable into:</h2>
        ${kn(o.processable,i)}
    `:"<h1>Item not found</h1>"}function Cn(e={}){return["drops","other","shops","spawns"].map(a=>`
        <div class="source-section">
            <h3>${bn(a)}</h3>
            ${Sn(a,e[a])}
        </div>
    `).join("")}function bn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Sn(e,r){const a=new URLSearchParams(window.location.search),t=Number(a.get("id"));if(!r||Object.keys(r).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(r).map(([i,o])=>{const l=G(i,s)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${o.url}" target="_blank">${i}</a></td>
                            <td>${o.droprate}</td>
                            <td>${l}</td>
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
                ${Object.entries(r).map(([i,o])=>{const{notes:l,rule:d}=o,f=c(d,s)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${i}</td>
                            <td>${l}</td>
                            <td>${f}</td>
                        </tr>
                    `}).join("")}
            </table>
        `;if(e==="shops")return`
            <table class="osrs-table">
                <tr>
                    <th>Requirement</th>
                    <th>Obtainable?</th>
                </tr>

                ${Object.entries(r).map(([i,o])=>{let l=!1;return s.unlocked.includes(t)?typeof o=="string"&&(o==="No requirements"?l=!0:l=c(o,s)):typeof o=="object"&&(l=c(o,s)),`
                        <tr>
                            <td>${H(o)}</td>
                            <td>
                                ${l?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>'}
                            </td>
                        </tr>
                    `}).join("")}
            </table>
        `;if(e==="spawns")return`
            <table class="osrs-table">
                <tr>
                    <th>Requirement</th>
                    <th>Obtainable?</th>
                </tr>

                ${Object.entries(r).map(([i,o])=>{let l=!1;return s.unlocked.includes(t)&&(typeof o=="string"?o==="No requirements"?l=!0:l=c(o,s):typeof o=="object"&&(l=c(o,s))),`
                        <tr>
                            <td>${H(o)}</td>
                            <td>
                                ${l?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>'}
                            </td>
                        </tr>
                    `}).join("")}
            </table>
        `}function kn(e={},r){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([a,t])=>{const i=r.find(d=>d.id==a),l=t.split(",").map(d=>{const f=r.find(h=>h.id==d);return f?`<a onclick="navigate('/item?id=${d}')">${f.name}</a>`:d}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${a}')">${i.name}</a>
                        </td>
                        <td>${l}</td>
                    </tr>
                `}).join("")}
        </table>
    `}function H(e){return e?typeof e=="string"?e:e.any?"Any: "+e.any.join(", "):e.all?"All: "+e.all.map(r=>typeof r=="object"?JSON.stringify(r):r).join(", "):JSON.stringify(e):""}async function Tn(){const e=await fetch("/data/items.json").then(t=>t.json());s.items=e;const r=s.rolled||[],a=s.unlocked||[];return window.__itemsPageData={items:e,rolled:r,unlocked:a},`
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
    `}function Dn(){return"<h1>404 - Page Not Found</h1>"}function wn(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function vn(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const r=document.getElementById("app"),a=r.querySelector("#rolledInput"),t=r.querySelector("#unlockedInput"),i=r.querySelector("#status");try{if(a.files[0]){const o=JSON.parse(await a.files[0].text());await s.setRolled(o)}if(t.files[0]){const o=JSON.parse(await t.files[0].text());await s.setUnlocked(o)}i.textContent="Updated!"}catch{i.textContent="Error!"}});function In(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const r=document.getElementById("app"),a=r.querySelector("#rolledInput"),t=r.querySelector("#unlockedInput"),i=r.querySelector("#status");try{if(a.files[0]){const o=JSON.parse(await a.files[0].text());await s.setRolled(o)}if(t.files[0]){const o=JSON.parse(await t.files[0].text());await s.setUnlocked(o)}i.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(o){console.error(o),i.textContent="Error reading files!"}});async function En(e){history.pushState({},"",e),m()}window.navigate=En;async function m(){const r=window.location.pathname.split("?")[0],t={"/":In,"/items":Tn,"/item":yn,"/quests":wn,"/reupload":vn}[r]||Dn,i=document.getElementById("app");r!=="/"?i.innerHTML=gn()+await t():i.innerHTML=await t(),On()}window.addEventListener("popstate",m);window.addEventListener("DOMContentLoaded",async()=>{await s.init(),m()});window.addEventListener("DOMContentLoaded",m);window.addEventListener("popstate",m);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),m())});function L(){const e=document.querySelectorAll("img.lazy-img"),r=new IntersectionObserver((a,t)=>{for(const i of a)if(i.isIntersecting){const o=i.target;o.src=o.dataset.src,o.classList.remove("lazy-img"),t.unobserve(o)}});e.forEach(a=>r.observe(a))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const r=document.getElementById("itemSearch"),a=document.getElementById("hideRolled"),t=document.getElementById("onlyUnlocked"),i=document.getElementById("onlyObtainable"),o=document.getElementById("hideClueRewardOnly"),l=document.getElementById("itemGrid");if(!r||!a||!t||!i||!o||!l){setTimeout(initItemsPage,0);return}a.checked=!0,o.checked=!0;const{items:d,rolled:f,unlocked:h}=e;function p(){const ne=r?.value.toLowerCase()||"",re=a?.checked||!1,ae=t?.checked||!1,oe=i?.checked||!1,te=o?.checked||!1;let P=d.filter(u=>{if(!u.name.toLowerCase().includes(ne))return!1;const g=f.includes(u.id),b=h.includes(u.id);return!(re&&g||ae&&!b||oe&&!ee(u,s)||te&&u.tags?.includes("clue-reward-only"))});P=P.sort((u,w)=>{const g=N(u,s),b=N(w,s);return g.rank!==b.rank?g.rank-b.rank:g.name.localeCompare(b.name)}),l.innerHTML=P.map(u=>{const w=f.includes(u.id),g=h.includes(u.id);return`
                <div class="item-card" onclick="navigate('/item?id=${u.id}')">

                    ${w?'<span class="badge rolled">Rolled</span>':""}
                    ${g?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${u.image}"
                        src="/images/placeholder.png"
                    >

                    ${u.name}
                </div>
            `}).join(""),setTimeout(()=>L(),0)}r?.addEventListener("input",p),a?.addEventListener("input",p),t?.addEventListener("input",p),i?.addEventListener("input",p),o?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await s.init(),m()});window.addEventListener("popstate",()=>{m(),setTimeout(L,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),m(),setTimeout(L,0))});function On(){L(),typeof initItemsPage=="function"&&initItemsPage()}
