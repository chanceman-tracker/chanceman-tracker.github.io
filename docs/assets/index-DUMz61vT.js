(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const te={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Angry barbarian spirit":["canEnterAncientCavern"],Araxyte:["canCompletePriestInPeril"],"Ava's accumulator":{all:["canCompleteAnimalMagnetism","hasSteelArrow"]},"Ava's assembler":{all:["canCompleteAnimalMagnetism","hasMithrilArrow","canCompleteDragonSlayerII"]},"Ava's attractor":["canCompleteAnimalMagnetism"],Aviansie:["canShortrange"],"Balfrug Kreeyath":["canDoKrilTsutsaroth"],"Barrel (Shaman Caves)":["canCompleteLegendsQuest"],"Berserk barbarian spirit":["canEnterAncientCavern"],Basilisk:["hasMirrorShield"],"Basilisk Knight":["canCompleteTheFremennikExiles"],"Black Chest":["canDoShadesOfMortton"],Bree:["canDoCommanderZilyana"],"Bronze Chest":["canDoShadesOfMortton"],"Bronze dragon":["canKillDifficultDragons"],"Brutal blue dragon":["canKillDifficultDragons"],"Brutal black dragon":["canKillDifficultDragons"],"Brutal green dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Brutal red dragon":["canKillDifficultDragons"],"Bull shark":["canShortrange"],"Cannonball stall":["canCompletePandemonium"],"Cave horror":["canCompleteCabinFever"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Chest (Dorgesh-Kaan Average)":{all:["canCompleteDeathToTheDorgeshuun","hasLockpick"]},"Chewed bones":{all:["canKillDifficultDragons","canEnterAncientCavern"]},Cockatrice:["hasMirrorShield"],"Crystal impling":["canCompleteSongOfTheElves"],"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Commander Zilyana":["canDoCommanderZilyana"],"Dirty arrowtips":["canDoValeTotems"],"Dragon impling":["canTrainHunter"],"Duke Sucellus":["canCompleteDesertTreasureII"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],"Eclectic impling":["canTrainHunter"],"Enraged barbarian spirit":["canEnterAncientCavern"],"Ferocious barbarian spirit":{all:["canEnterAncientCavern","canTrainWoodcutting"]},"Flight Kilisa":["canDoKreearra"],"Flockleader Geerin":["canDoKreearra"],"Forgotten Lockbox":["canDoYama"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"General Graardor":["canDoGeneralGraardor"],"Giant Sea Snake":["canCompleteRoyalTrouble"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Gold Chest":["canDoShadesOfMortton"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],Growler:["canDoCommanderZilyana"],Gryphon:["canCompleteTroubledTortugans"],"Guard (H.A.M. Storerooms)":["canCompleteDeathToTheDorgeshuun"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"K'ril Tsutsaroth":["canDoKrilTsutsaroth"],"Kalphite Guardian":["canEnterKalphiteLair"],"Kalphite Worker":["canEnterKalphiteLair"],"Kree'arra":["canDoKreearra"],"Lava Strykewyrm":["canEnterTheCharredDungeon"],"Large salvage":["canDoSalvaging"],"Locust rider":["canCompleteIcthlarinsLittleHelper"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Lost mahogany crate":["canCompletePandemonium"],"Magpie impling":["canTrainHunter"],"Maniacal Monkey Archer":["canCompleteMonkeyMadnessII"],"Maniacal monkey":["canCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Mithril dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Moonlight Cockatrice":{all:["canStartPerilousMoons","hasMirrorShield"]},Narwhal:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Ninja impling":["canTrainHunter"],"Ogre Coffin":{all:["canCompleteZogreFleshEaters","hasOgreCoffinKey"]},"Plundered salvage":["canDoSalvaging"],"Pygmy kraken":["canDoSailingCombat"],"Reinforced chest":{any:["canSailToYnysdail","canSailToBrittleIsle"]},"Reward Chest (The Gauntlet)":["canCompleteSongOfTheElves"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Rusty chest":["canCompletePandemonium"],"Salarin the twisted":["canCastStrikeSpells"],"Scarab Mage":["canCompleteIcthlarinsLittleHelper"],"Sea Snake Hatchling":["canCompleteRoyalTrouble"],"Sea Snake Young":["canCompleteRoyalTrouble"],"Sergeant Grimspike":["canDoGeneralGraardor"],"Sergeant Steelwill":["canDoGeneralGraardor"],"Sergeant Strongstack":["canDoGeneralGraardor"],"Shadow warrior":["canCompleteLegendsQuest"],"Shellbane Gryphon":["canCompleteTroubledTortugans"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Skeleton brute":["canEnterAncientCavern"],"Skeleton heavy":["canEnterAncientCavern"],"Skeleton hero":["canEnterAncientCavern"],"Skeleton thug":["canEnterAncientCavern"],"Skeleton warlord":["canEnterAncientCavern"],"Smoke devil":["hasFacemask"],"Spined kraken":["canDoSailingCombat"],"Spitting Wyvern":["canKillFossilIslandWyverns"],Starlight:["canDoCommanderZilyana"],"Steel Chest":["canDoShadesOfMortton"],"Steel dragon":["canKillDifficultDragons"],"Storage crate":["canCompleteTheDigSite"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tarnished chest":["canCompletePandemonium"],"Thermonuclear smoke devil":["hasFacemask"],"Tiger shark":["canDoSailingCombat"],"Tormented Demon":["canCompleteWhileGuthixSleeps"],"Tortured gorilla":["canCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],"Tstanon Karlak":["canDoKrilTsutsaroth"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Vyrewatch:["canCompleteATasteOfHope"],"Vyrewatch Sentinel":["canCompleteSinsOfTheFather"],Waterfiend:{any:["canEnterAncientCavern","canCompleteSongOfTheElves"]},"Wingman Skree":["canDoKreearra"],Wyrm:["canEnterKaruulmSlayerDungeon"],"Zakl'n Gritch":["canDoKrilTsutsaroth"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"],"Zombie pirate (Harmony Island)":["canCompleteTheGreatBrainRobbery"],"Zombie Pirate's Locker":["hasZombiePirateKey"]};function n(e,a){const r=e.items.find(t=>t.id===a);return r?e.unlocked.includes(a)&&H(r,e,e.items):!1}function H(e,a,r,t=new Set){if(!e||t.has(e.id))return!1;if(t.add(e.id),a.rolled.includes(e.id))return!0;if(e.sources?.drops){for(const[o]of Object.entries(e.sources.drops))if(j(o,a))return!0}if(e.sources?.other){for(const[o,i]of Object.entries(e.sources.other))if(d(i.rule,a))return!0}if(e.processable)for(const[o,i]of Object.entries(e.processable)){if(Number(o)!==e.id)continue;const s=i.split(",");let c=!0;for(const m of s){const h=r.find(p=>p.id==m);if(!h||!H(h,a,r,t)){c=!1;break}}if(c)return!0}return!1}const oe={canCompleteDragonSlayerII(e){return!1},canCompleteDesertTreasureII(e){return!1},canCompleteSongOfTheElves(e){return!1},canCompleteWhileGuthixSleeps(e){return!1},canCompleteTheGreatBrainRobbery(e){return!1},canCompleteATasteOfHope(e){return!1},canCompleteSinsOfTheFather(e){return!1},canCompleteTheFremennikExiles(e){return!1},canCompleteCabinFever(e){return!1},canCompleteWanted(e){return!1},canCompleteThroneOfMiscellania(e){return _(e)},canCompleteDeathPlateau(e){return Ke(e)},canCompleteTheHeartOfDarkness(e){return Ue(e)},canCompleteIcthlarinsLittleHelper(e){return qe(e)},canReachAbyssalSire(e){return Le(e)||Pe(e)},canDoGuardiansOfTheRift(e){return Ae(e)},canTrainFarming(e){return Xe(e)},canTrainWoodcutting(e){return D(e)},canTrainMining(e){return T(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return en(e)},canDoValeTotems(e){return nn(e)},canDoWintertodt(e){return rn(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return an(e)},canDoShadesOfMortton(e){return on()},canCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return z(e)},canCompleteZogreFleshEaters(e){return Qe(e)},canEnterKaruulmSlayerDungeon(e){return De(e)},hasFacemask(e){return n(e,4164)},canKillGargoyles(e){return Se(e)},canKillDifficultDragons(e){return ke()},canKillFossilIslandWyverns(e){return U()},hasAccessToWyvernProtection(e){return Te(e)},canTrainFletching(e){return w(e)},canTrainSmithing(e){return R(e)},canCompleteDwarfCannon(e){return He(e)},canCompleteTroubledTortugans(e){return $e(e)},canLongrange(e){return W(e)},canCastStrikeSpells(e){return be(e)},canShortrange(e){return Ce(e)},canSailToTheNorthernOcean(e){return $(e)},canDoSailingCombat(e){return tn(e)},canEnterTheCharredDungeon(e){return ye(e)},canSailToBrittleIsle(e){return ge(e)},canSailToYnysdail(e){return he(e)},canEnterAncientCavern(e){return fe(e)},canEnterKalphiteLair(e){return ce(e)},canCompleteRoyalTrouble(e){return Re(e)},canCompleteTouristTrap(e){return je(e)},canCompletePandemonium(e){return y(e)},canCompleteLegendsQuest(e){return!1},canDoYama(e){return!1},canTrainHunter(e){return A(e)},canCompleteTheDigSite(e){return Be(e)},canCompleteAnimalMagnetism(e){return ve(e)},canCompleteDeathToTheDorgeshuun(e){return we(e)},canCompleteTheLostTribe(e){return q(e)},canCompletePerilousMoons(e){return Ee(e)},hasSteelArrow(e){return n(e,886)},hasMithrilArrow(e){return n(e,888)},hasLockpick(e){return n(e,1523)},hasOgreCoffinKey(e){return n(e,4850)},hasZombiePirateKey(e){return n(e,29449)},hasMirrorShield(e){return n(e,4156)},canDoGodWarsDungeon(e){return!1},canDoCommanderZilyana(e){return ie()},canDoGeneralGraardor(e){return le()},canDoKreearra(e){return se()},canDoKrilTsutsaroth(e){return ue()},canDoNex(e){return de()}};function ie(e){return!1}function le(e){return!1}function se(e){return!1}function ue(e){return!1}function de(e){return!1}function ce(e){return n(e,954)}function fe(e){return pe(e)}function pe(e){return n(e,1521)&&(n(e,841)||n(e,839)||n(e,843)||n(e,845)||n(e,849)||n(e,847)||n(e,853)||n(e,851)||n(e,857)||n(e,855)||n(e,861)||n(e,859))}function $(e){return y(e)&&!1}function me(e){return y(e)&&!1}function he(e){return me(e)}function ge(e){return $(e)}function ye(e){return y(e)&&n(e,954)}function W(e){return(n(e,841)||n(e,839))&&(n(e,882)||n(e,884))||(n(e,837)||n(e,9174))&&n(e,877)||(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&(n(e,558)||n(e,562)||n(e,560)||n(e,565))}function be(e){return(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&n(e,558)}function Ce(e){return W(e)||n(e,864)||n(e,870)||n(e,863)||n(e,865)||n(e,869)||n(e,866)||n(e,867)||n(e,868)||n(e,5667)||n(e,806)||n(e,807)||n(e,813)||n(e,808)||n(e,3093)||n(e,809)||n(e,810)||n(e,816)||n(e,811)||n(e,817)||n(e,6522)||n(e,10033)||n(e,10034)||n(e,11959)||n(e,800)||n(e,801)||n(e,802)||n(e,803)||n(e,804)||n(e,805)}function Se(e){return n(e,4162)||n(e,21754)}function ke(e){return!1}function De(e){return n(e,23037)||U()}function U(e){return _e()}function Te(e){return Q(e)&&(n(e,2890)||n(e,9731)&&ze(e))}function ve(e){return canCompleteErnestTheChicken(e)&&z(e)&&n(e,1355)&&n(e,2351)&&n(e,2347)&&n(e,1743)&&n(e,1718)&&n(e,10496)&&n(e,1931)&&(n(e,534)||n(e,530)||n(e,532)||n(e,526)||n(e,528)||n(e,6729)||n(e,536)||n(e,22783)||n(e,31729)||n(e,22786)||n(e,3125)||n(e,11943)||n(e,3183)||n(e,4834)||n(e,4832)||n(e,3123)||n(e,31726)||n(e,22124)||n(e,2859)||n(e,22780)||n(e,28899)||n(e,6812)||n(e,4812))}function we(e){return q(e)&&n(e,4310)&&n(e,4304)&&n(e,4308)&&n(e,4302)&&n(e,4306)&&n(e,4300)&&n(e,4298)}function q(e){return Ie(e)&&E(e)&&T(e)}function Ie(e){return n(e,288)&&n(e,1769)&&n(e,1767)}function Oe(e){return canCompleteTwilightsPromise(e)&&A(e)&&M(e)&&J(e)&&V(e)}function Ee(e){return Oe(e)&&n(e,946)&&n(e,305)&&n(e,954)&&n(e,233)}function Le(e){return E(e)}function E(e){return n(e,1438)}function Pe(e){return Z(e)&&Me(e)&&n(e,5329)&&n(e,952)}function Z(e){return n(e,1351)&&n(e,946)&&P()}function Me(e){return n(e,2961)&&n(e,2355)&&n(e,2976)&&P()}function Ae(e){return n(e,1929)&&n(e,1755)&&(n(e,1265)||n(e,1267))&&J(e)}function Ke(e){return n(e,2309)&&n(e,333)&&n(e,2351)&&n(e,1905)&&n(e,3105)}function Re(e){return _(e)&&n(e,954)&&n(e,453)&&n(e,960)}function je(e){return w(e)&&R(e)&&n(e,1833)&&n(e,1835)&&n(e,1837)&&n(e,2347)&&n(e,2349)&&n(e,314)}function _(e){return Ge(e)&&We(e)&&n(e,2351)&&(n(e,1635)||n(e,1637)||n(e,1639)||n(e,1641)||n(e,1643))&&n(e,1511)}function Ge(e){return Z(e)&&Ne(e)&&Fe(e)&&T(e)&&Ye(e)&&M(e)&&K(e)&&n(e,307)&&n(e,313)&&n(e,97)&&n(e,255)&&n(e,227)}function Be(e){return L(e)&&n(e,233)&&n(e,229)&&n(e,590)&&(n(e,1978)||n(e,1921))&&n(e,954)&&(n(e,1609)||n(e,1625))&&n(e,973)}function Ne(e){return n(e,2309)&&n(e,590)&&n(e,30)&&n(e,1925)&&n(e,28)&&n(e,530)}function Fe(e){return n(e,1791)&&n(e,1761)&&n(e,1907)&&n(e,301)&&n(e,950)&&n(e,1540)&&n(e,2347)&&n(e,1539)&&n(e,960)}function He(e){return n(e,2347)}function $e(e){return A(e)&&D(e)&&V(e)&&y(e)&&n(e,401)}function We(e){return n(e,1917)&&n(e,590)&&(n(e,383)||M(e)&&(n(e,389)||n(e,395)))}function L(e){return n(e,2136)&&n(e,2134)&&n(e,2132)&&n(e,2138)}function y(e){return n(e,2347)&&n(e,8794)}function Ue(e){return T(e)}function qe(e){return Ze(e)&&n(e,590)&&n(e,1519)&&(n(e,4161)||n(e,1925)&&n(e,4689))&&n(e,4687)&&n(e,1823)&&n(e,4684)}function Ze(e){return n(e,1927)&&n(e,1552)}function z(e){return n(e,1925)&&(n(e,7936)||n(e,1436))}function _e(e){return!1}function Q(e){return T(e)&&P()&&n(e,2347)&&n(e,1733)&&n(e,1734)&&n(e,1741)&&n(e,453)}function ze(e){return Q(e)}function Qe(e){return Ve(e)&&Je(e)&&R(e)}function Je(e){return L(e)}function Ve(e){return w(e)&&K(e)&&D(e)&&n(e,314)&&n(e,946)&&n(e,1755)&&n(e,1965)&&n(e,1982)&&n(e,1957)&&n(e,1942)&&n(e,2128)&&n(e,1573)&&n(e,2862)&&n(e,2864)&&n(e,2865)&&n(e,2859)&&n(e,2861)&&n(e,2866)&&n(e,2876)}function P(e){return!0}function J(e){return E(e)&&(n(e,5525)||n(e,1436)||n(e,7936))}function D(e){return n(e,1351)||n(e,1349)||n(e,1353)}function T(e){return n(e,1265)||n(e,1267)||n(e,1269)}function Ye(e){return L(e)&&n(e,199)&&n(e,201)&&n(e,203)}function M(e){return n(e,303)&&n(e,305)&&n(e,307)&&n(e,313)}function A(e){return n(e,10006)&&n(e,10150)&&n(e,10010)}function K(e){return n(e,25833)&&n(e,2132)&&n(e,2136)&&n(e,2134)&&n(e,2138)&&n(e,317)&&n(e,3226)&&n(e,327)&&n(e,321)&&n(e,1859)&&n(e,2307)&&n(e,345)}function Xe(e){return n(e,5341)||n(e,8431)}function V(e){return n(e,8431)&&(n(e,2347)&&n(e,8794))(n(e,2351)||n(e,960))}function w(e){return n(e,946)&&n(e,1511)||n(e,52)&&n(e,314)||n(e,53)&&n(e,39)}function xe(e){return n(e,590)}function R(e){return n(e,2347)}function en(e){return K(e)&&(n(e,2171)&&n(e,2165)&&n(e,2169)&&(n(e,2128)&&n(e,2217)||n(e,2128)&&n(e,2213)||n(e,2128)&&n(e,2162)&&n(e,2205)||n(e,1973)&&n(e,1975)&&n(e,2209))||n(e,2171)&&n(e,2164)&&n(e,2128)&&(n(e,2120)&&n(e,2122)&&n(e,2108)&&n(e,2110)&&n(e,2114)&&n(e,2116)&&n(e,2169)&&n(e,2277)||n(e,2169)&&n(e,1985)&&n(e,2152)&&n(e,2255)||n(e,2169)&&n(e,1985)&&n(e,2162)&&n(e,2253)||n(e,1982)&&n(e,2126)&&n(e,1957)&&n(e,1985)&&n(e,1965)&&n(e,2281)||n(e,1982)&&n(e,1985)&&n(e,2259))||n(e,2171)&&n(e,2166)&&n(e,2128)&&(n(e,2162)&&n(e,1957)&&n(e,2169)&&n(e,2191)||n(e,1957)&&n(e,1942)&&n(e,2152)&&n(e,2195)||n(e,2152)&&n(e,2169)&&n(e,1985)&&n(e,2126)&&n(e,2187)||n(e,1973)&&n(e,1975)&&n(e,2130)&&n(e,2185))||n(e,2025)&&n(e,2026)&&(n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2106)&&n(e,2084)||n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2120)&&n(e,2122)&&n(e,2116)&&n(e,2112)&&n(e,2048)||n(e,2015)&&n(e,2019)&&n(e,2120)&&n(e,2102)&&n(e,2114)&&n(e,2108)&&n(e,2116)&&n(e,2124)&&n(e,2054)||n(e,2015)&&n(e,2120)&&n(e,2124)&&n(e,2128)&&n(e,2080)||n(e,2015)&&n(e,2019)&&n(e,2126)&&n(e,2114)&&n(e,2116)&&n(e,2130)&&n(e,2092)||n(e,2017)&&n(e,1973)&&n(e,2128)&&n(e,1927)&&n(e,1975)&&n(e,2130)&&n(e,2074)||n(e,2015)&&n(e,2021)&&n(e,2019)&&n(e,2102)&&n(e,2104)&&n(e,2108)&&n(e,2110)&&n(e,2128)&&n(e,2120)&&n(e,2124)&&n(e,2064)))}function nn(e){return w(e)&&n(e,946)||n(e,843)||n(e,845)||n(e,9442)||n(e,22251)||n(e,1521)&&(n(e,54)||n(e,56))||n(e,849)||n(e,847)||n(e,9444)||n(e,1519)&&(n(e,60)||n(e,58)||n(e,22254))||n(e,853)||n(e,851)||n(e,9448)||n(e,1517)&&(n(e,64)||n(e,62)||n(e,22257))||n(e,857)||n(e,855)||n(e,1515)&&(n(e,68)||n(e,66)||n(e,22260)||n(e,9452))||n(e,1513)&&(n(e,72)||n(e,70)||n(e,22263)||n(e,21952))||D(e)&&n(e,19669)&&(n(e,31049)||n(e,22266))}function rn(e){return xe(e)&&D(e)}function an(e){return y(e)&&!1}function tn(e){return y(e)&&!1}function on(e){return!1}function j(e,a){const r=te[e];return r?S(r,a):!0}function d(e,a){return S(e,a)}function S(e,a){if(!e)return!0;if(typeof e=="string"){const r=oe[e];return r?r(a):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(r=>S(r,a)):e.has?a.unlocked.includes(e.has):e.any?e.any.some(r=>S(r,a)):e.all?e.all.every(r=>S(r,a)):(console.warn("Unknown rule structure:",e),!1)}function Y(e,a){const r=e.sources||{};if(r.shops){for(const t of Object.values(r.shops))if(t==="No requirements"||typeof t=="string"&&d(t,a)||typeof t=="object"&&d(t,a))return!0}if(r.spawns){for(const t of Object.values(r.spawns))if(t==="No requirements"||typeof t=="string"&&d(t,a)||typeof t=="object"&&d(t,a))return!0}if(r.drops){for(const t of Object.keys(r.drops))if(j(t,a))return!0}if(r.other){for(const t of Object.values(r.other))if(d(t.rule,a))return!0}return!1}function G(e,a){const r=e.sources||{};return Y(e,a)?r.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:r.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:r.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:r.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function ln(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const sn="chanceman",k="files";let b={rolled:null,unlocked:null};function X(){return new Promise((e,a)=>{const r=indexedDB.open(sn,1);r.onupgradeneeded=function(){r.result.createObjectStore(k)},r.onsuccess=()=>e(r.result),r.onerror=()=>a(r.error)})}async function B(e,a){const t=(await X()).transaction(k,"readwrite");return t.objectStore(k).put(a,e),t.complete}async function N(e){const a=await X();return new Promise(r=>{const o=a.transaction(k,"readonly").objectStore(k).get(e);o.onsuccess=()=>r(o.result),o.onerror=()=>r(null)})}const l={async init(){b.rolled=await N("rolled"),b.unlocked=await N("unlocked")},async setRolled(e){b.rolled=e,await B("rolled",e)},async setUnlocked(e){b.unlocked=e,await B("unlocked",e)},get rolled(){return b.rolled},get unlocked(){return b.unlocked}};async function un(){const e=l.rolled,a=l.unlocked;if(!e||!a)return"<h1>Please upload your files on the Home page first.</h1>";const t=new URLSearchParams(window.location.search).get("id");if(!t)return"<h1>No item selected</h1>";const o=await fetch("/data/items.json").then(s=>s.json()),i=o.find(s=>s.id==t);return i?`
        <h1>${i.name}</h1>

        <div class="item-header">
            <img src="/images/${i.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${i.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${dn(i.sources)}

        <h2>Processable into:</h2>
        ${pn(i.processable,o)}
    `:"<h1>Item not found</h1>"}function dn(e={}){return["drops","other","shops","spawns"].map(r=>`
        <div class="source-section">
            <h3>${cn(r)}</h3>
            ${fn(r,e[r])}
        </div>
    `).join("")}function cn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function fn(e,a){if(!a||Object.keys(a).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(a).map(([r,t])=>{const o=j(r,l)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${t.url}" target="_blank">${r}</a></td>
                            <td>${t.droprate}</td>
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
                ${Object.entries(a).map(([r,t])=>{const{notes:o,rule:i}=t,s=d(i,l)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${r}</td>
                            <td>${o}</td>
                            <td>${s}</td>
                        </tr>
                    `}).join("")}
            </table>
        `;if(e==="shops")return`
            <table class="osrs-table">
                <tr>
                    <th>Requirement</th>
                    <th>Obtainable?</th>
                </tr>

                ${Object.entries(a).map(([r,t])=>{let o=!1;return typeof t=="string"?t==="No requirements"?o=!0:o=d(t,l):typeof t=="object"&&(o=d(t,l)),`
                        <tr>
                            <td>${F(t)}</td>
                            <td>
                                ${o?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>'}
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

                ${Object.entries(a).map(([r,t])=>{let o=!1;return typeof t=="string"?t==="No requirements"?o=!0:o=d(t,l):typeof t=="object"&&(o=d(t,l)),`
                        <tr>
                            <td>${F(t)}</td>
                            <td>
                                ${o?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>'}
                            </td>
                        </tr>
                    `}).join("")}
            </table>
        `}function pn(e={},a){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([r,t])=>{const o=a.find(c=>c.id==r),s=t.split(",").map(c=>{const m=a.find(h=>h.id==c);return m?`<a onclick="navigate('/item?id=${c}')">${m.name}</a>`:c}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${r}')">${o.name}</a>
                        </td>
                        <td>${s}</td>
                    </tr>
                `}).join("")}
        </table>
    `}function F(e){return e?typeof e=="string"?e:e.any?"Any: "+e.any.join(", "):e.all?"All: "+e.all.map(a=>typeof a=="object"?JSON.stringify(a):a).join(", "):JSON.stringify(e):""}async function mn(){const e=await fetch("/data/items.json").then(t=>t.json());l.items=e;const a=l.rolled||[],r=l.unlocked||[];return window.__itemsPageData={items:e,rolled:a,unlocked:r},`
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
    `}function hn(){return"<h1>404 - Page Not Found</h1>"}function gn(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function yn(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),t=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const i=JSON.parse(await r.files[0].text());await l.setRolled(i)}if(t.files[0]){const i=JSON.parse(await t.files[0].text());await l.setUnlocked(i)}o.textContent="Updated!"}catch{o.textContent="Error!"}});function bn(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),t=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const i=JSON.parse(await r.files[0].text());await l.setRolled(i)}if(t.files[0]){const i=JSON.parse(await t.files[0].text());await l.setUnlocked(i)}o.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(i){console.error(i),o.textContent="Error reading files!"}});async function Cn(e){history.pushState({},"",e),f()}window.navigate=Cn;async function f(){const a=window.location.pathname.split("?")[0],t={"/":bn,"/items":mn,"/item":un,"/quests":gn,"/reupload":yn}[a]||hn,o=document.getElementById("app");a!=="/"?o.innerHTML=ln()+await t():o.innerHTML=await t(),Sn()}window.addEventListener("popstate",f);window.addEventListener("DOMContentLoaded",async()=>{await l.init(),f()});window.addEventListener("DOMContentLoaded",f);window.addEventListener("popstate",f);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),f())});function I(){const e=document.querySelectorAll("img.lazy-img"),a=new IntersectionObserver((r,t)=>{for(const o of r)if(o.isIntersecting){const i=o.target;i.src=i.dataset.src,i.classList.remove("lazy-img"),t.unobserve(i)}});e.forEach(r=>a.observe(r))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const a=document.getElementById("itemSearch"),r=document.getElementById("hideRolled"),t=document.getElementById("onlyUnlocked"),o=document.getElementById("onlyObtainable"),i=document.getElementById("hideClueRewardOnly"),s=document.getElementById("itemGrid");if(!a||!r||!t||!o||!i||!s){setTimeout(initItemsPage,0);return}r.checked=!0,i.checked=!0;const{items:c,rolled:m,unlocked:h}=e;function p(){const x=a?.value.toLowerCase()||"",ee=r?.checked||!1,ne=t?.checked||!1,re=o?.checked||!1,ae=i?.checked||!1;let O=c.filter(u=>{if(!u.name.toLowerCase().includes(x))return!1;const g=m.includes(u.id),C=h.includes(u.id);return!(ee&&g||ne&&!C||re&&!Y(u,l)||ae&&u.tags?.includes("clue-reward-only"))});O=O.sort((u,v)=>{const g=G(u,l),C=G(v,l);return g.rank!==C.rank?g.rank-C.rank:g.name.localeCompare(C.name)}),s.innerHTML=O.map(u=>{const v=m.includes(u.id),g=h.includes(u.id);return`
                <div class="item-card" onclick="navigate('/item?id=${u.id}')">

                    ${v?'<span class="badge rolled">Rolled</span>':""}
                    ${g?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${u.image}"
                        src="/images/placeholder.png"
                    >

                    ${u.name}
                </div>
            `}).join(""),setTimeout(()=>I(),0)}a?.addEventListener("input",p),r?.addEventListener("input",p),t?.addEventListener("input",p),o?.addEventListener("input",p),i?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await l.init(),f()});window.addEventListener("popstate",()=>{f(),setTimeout(I,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),f(),setTimeout(I,0))});function Sn(){I(),typeof initItemsPage=="function"&&initItemsPage()}
