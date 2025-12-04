(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const ee={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Angry barbarian spirit":["canEnterAncientCavern"],"Ava's accumulator":{all:["canCompleteAnimalMagnetism","hasSteelArrow"]},"Ava's assembler":{all:["canCompleteAnimalMagnetism","hasMithrilArrow","canCompleteDragonSlayerII"]},"Ava's attractor":["canCompleteAnimalMagnetism"],"Balfrug Kreeyath":["canDoKrilTsutsaroth"],"Barrel (Shaman Caves)":["canDoLegendsQuest"],"Berserk barbarian spirit":["canEnterAncientCavern"],"Black Chest":["canDoShadesOfMortton"],Bree:["canDoCommanderZilyana"],"Bronze dragon":["canKillDifficultDragons"],"Brutal blue dragon":["canKillDifficultDragons"],"Brutal black dragon":["canKillDifficultDragons"],"Brutal green dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Brutal red dragon":["canKillDifficultDragons"],"Bull shark":["canShortrange"],"Cannonball stall":["canCompletePandemonium"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Chewed bones":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Crystal impling":{all:["canTrainHunter","canCompleteSongOfTheElves"]},"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Commander Zilyana":["canDoCommanderZilyana"],"Dirty arrowtips":["canDoValeTotems"],"Dragon impling":["canTrainHunter"],"Duke Sucellus":["canCompleteDesertTreasureII"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],"Enraged barbarian spirit":["canEnterAncientCavern"],"Ferocious barbarian spirit":{all:["canEnterAncientCavern","canTrainWoodcutting"]},"Flight Kilisa":["canDoKreearra"],"Flockleader Geerin":["canDoKreearra"],"Forgotten Lockbox":["canDoYama"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"General Graardor":["canDoGeneralGraardor"],"Giant Sea Snake":["canCompleteRoyalTrouble"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Gold Chest":["canDoShadesOfMortton"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],Growler:["canDoCommanderZilyana"],Gryphon:["canCompleteTroubledTortugans"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"K'ril Tsutsaroth":["canDoKrilTsutsaroth"],"Kalphite Guardian":["canEnterKalphiteLair"],"Kree'arra":["canDoKreearra"],"Lava Strykewyrm":["canEnterTheCharredDungeon"],"Large salvage":["canDoSalvaging"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Maniacal Monkey Archer":["CanCompleteMonkeyMadnessII"],"Maniacal monkey":["CanCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Mithril dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},Narwhal:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Ninja impling":["canTrainHunter"],"Plundered salvage":["canDoSalvaging"],"Pygmy kraken":["canDoSailingCombat"],"Reinforced chest":{any:["canSailToYnysdail","canSailToBrittleIsle"]},"Reward Chest (The Gauntlet)":["canCompleteSongOfTheElves"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Sea Snake Hatchling":["canCompleteRoyalTrouble"],"Sea Snake Young":["canCompleteRoyalTrouble"],"Sergeant Grimspike":["canDoGeneralGraardor"],"Sergeant Steelwill":["canDoGeneralGraardor"],"Sergeant Strongstack":["canDoGeneralGraardor"],"Shellbane Gryphon":["canCompleteTroubledTortugans"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Skeleton brute":["canEnterAncientCavern"],"Skeleton heavy":["canEnterAncientCavern"],"Skeleton hero":["canEnterAncientCavern"],"Skeleton thug":["canEnterAncientCavern"],"Skeleton warlord":["canEnterAncientCavern"],"Spined kraken":["canDoSailingCombat"],"Spitting Wyvern":["canKillFossilIslandWyverns"],Starlight:["canDoCommanderZilyana"],"Steel Chest":["canDoShadesOfMortton"],"Steel dragon":["canKillDifficultDragons"],"Storage crate":["canCompleteTheDigSite"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tiger shark":["canDoSailingCombat"],"Tortured gorilla":["CanCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],"Tstanon Karlak":["canDoKrilTsutsaroth"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Waterfiend:{any:["canEnterAncientCavern","canCompleteSongOfTheElves"]},"Wingman Skree":["canDoKreearra"],Wyrm:["canEnterKaruulmSlayerDungeon"],"Zakl'n Gritch":["canDoKrilTsutsaroth"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"]};function n(e,a){const r=e.items.find(i=>i.id===a);return r?e.unlocked.includes(a)&&j(r,e,e.items):!1}function j(e,a,r,i=new Set){if(!e||i.has(e.id))return!1;if(i.add(e.id),a.rolled.includes(e.id))return!0;if(e.sources?.drops){for(const[o]of Object.entries(e.sources.drops))if(A(o,a))return!0}if(e.sources?.other){for(const[o,t]of Object.entries(e.sources.other))if(R(t.rule,a))return!0}if(e.processable)for(const[o,t]of Object.entries(e.processable)){if(Number(o)!==e.id)continue;const l=t.split(",");let d=!0;for(const f of l){const m=r.find(p=>p.id==f);if(!m||!j(m,a,r,i)){d=!1;break}}if(d)return!0}return!1}const ne={canCompleteDragonSlayerII(e){return!1},canCompleteDesertTreasureII(e){return!1},canCompleteSongOfTheElves(e){return!1},canCompleteThroneOfMiscellania(e){return W(e)},canCompleteDeathPlateau(e){return ve(e)},canCompleteTheHeartOfDarkness(e){return Me(e)},canReachAbyssalSire(e){return ke(e)||Se(e)},canDoGuardiansOfTheRift(e){return Te(e)},canTrainFarming(e){return We(e)},canTrainWoodcutting(e){return S(e)},canTrainMining(e){return T(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return qe(e)},canDoValeTotems(e){return Ze(e)},canDoWintertodt(e){return ze(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return Qe(e)},canDoShadesOfMortton(e){return Ye()},CanCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return U(e)},canCompleteZogreFleshEaters(e){return Be(e)},canEnterKaruulmSlayerDungeon(e){return ye(e)},hasFacemask(e){return n(e,4164)},canKillGargoyles(e){return he(e)},canKillDifficultDragons(e){return ge()},canKillFossilIslandWyverns(e){return F()},hasAccessToWyvernProtection(e){return be(e)},canTrainFletching(e){return v(e)},canTrainSmithing(e){return P(e)},canCompleteDwarfCannon(e){return Ae(e)},canCompleteTroubledTortugans(e){return Re(e)},canLongrange(e){return N(e)},canShortrange(e){return me(e)},canSailToTheNorthernOcean(e){return B(e)},canDoSailingCombat(e){return Je(e)},canEnterTheCharredDungeon(e){return pe(e)},canSailToBrittleIsle(e){return fe(e)},canSailToYnysdail(e){return ce(e)},canEnterAncientCavern(e){return se(e)},canEnterKalphiteLair(e){return le(e)},canCompleteRoyalTrouble(e){return we(e)},canCompleteTouristTrap(e){return Ie(e)},canCompletePandemonium(e){return g(e)},canDoLegendsQuest(e){return!1},canDoYama(e){return!1},canTrainHunter(e){return Z(e)},canCompleteTheDigSite(e){return Oe(e)},canCompleteAnimalMagnetism(e){return Ce(e)},hasSteelArrow(e){return n(e,886)},hasMithrilArrow(e){return n(e,888)},canDoGodWarsDungeon(e){return!1},canDoCommanderZilyana(e){return re()},canDoGeneralGraardor(e){return ae()},canDoKreearra(e){return oe()},canDoKrilTsustaroth(e){return te()},canDoNex(e){return ie()}};function re(e){return!1}function ae(e){return!1}function oe(e){return!1}function te(e){return!1}function ie(e){return!1}function le(e){return n(e,954)}function se(e){return ue(e)}function ue(e){return n(e,1521)&&(n(e,841)||n(e,839)||n(e,843)||n(e,845)||n(e,849)||n(e,847)||n(e,853)||n(e,851)||n(e,857)||n(e,855)||n(e,861)||n(e,859))}function B(e){return g(e)&&!1}function de(e){return g(e)&&!1}function ce(e){return de(e)}function fe(e){return B(e)}function pe(e){return g(e)&&n(e,954)}function N(e){return(n(e,841)||n(e,839))&&(n(e,882)||n(e,884))||(n(e,837)||n(e,9174))&&n(e,877)||(n(e,556)||n(e,4696)||n(e,1381)||n(e,1397))&&(n(e,558)||n(e,562)||n(e,560)||n(e,565))}function me(e){return N(e)||n(e,864)||n(e,870)||n(e,863)||n(e,865)||n(e,869)||n(e,866)||n(e,867)||n(e,868)||n(e,5667)||n(e,806)||n(e,807)||n(e,813)||n(e,808)||n(e,3093)||n(e,809)||n(e,810)||n(e,816)||n(e,811)||n(e,817)||n(e,6522)||n(e,10033)||n(e,10034)||n(e,11959)||n(e,800)||n(e,801)||n(e,802)||n(e,803)||n(e,804)||n(e,805)}function he(e){return n(e,4162)||n(e,21754)}function ge(e){return!1}function ye(e){return n(e,23037)||F()}function F(e){return Ge()}function be(e){return _(e)&&(n(e,2890)||n(e,9731)&&je(e))}function Ce(e){return canCompleteErnestTheChicken(e)&&U(e)&&n(e,1355)&&n(e,2351)&&n(e,2347)&&n(e,1743)&&n(e,1718)&&n(e,10496)&&n(e,1931)&&(n(e,534)||n(e,530)||n(e,532)||n(e,526)||n(e,528)||n(e,6729)||n(e,536)||n(e,22783)||n(e,31729)||n(e,22786)||n(e,3125)||n(e,11943)||n(e,3183)||n(e,4834)||n(e,4832)||n(e,3123)||n(e,31726)||n(e,22124)||n(e,2859)||n(e,22780)||n(e,28899)||n(e,6812)||n(e,4812))}function ke(e){return $(e)}function $(e){return n(e,1438)}function Se(e){return H(e)&&De(e)&&n(e,5329)&&n(e,952)}function H(e){return n(e,1351)&&n(e,946)&&O()}function De(e){return n(e,2961)&&n(e,2355)&&n(e,2976)&&O()}function Te(e){return n(e,1929)&&n(e,1755)&&(n(e,1265)||n(e,1267))&&$e(e)}function ve(e){return n(e,2309)&&n(e,333)&&n(e,2351)&&n(e,1905)&&n(e,3105)}function we(e){return W(e)&&n(e,954)&&n(e,453)&&n(e,960)}function Ie(e){return v(e)&&P(e)&&n(e,1833)&&n(e,1835)&&n(e,1837)&&n(e,2347)&&n(e,2349)&&n(e,314)}function W(e){return Ee(e)&&Ke(e)&&n(e,2351)&&(n(e,1635)||n(e,1637)||n(e,1639)||n(e,1641)||n(e,1643))&&n(e,1511)}function Ee(e){return H(e)&&Le(e)&&Pe(e)&&T(e)&&He(e)&&q(e)&&L(e)&&n(e,307)&&n(e,313)&&n(e,97)&&n(e,255)&&n(e,227)}function Oe(e){return E(e)&&n(e,233)&&n(e,229)&&n(e,590)&&(n(e,1978)||n(e,1921))&&n(e,954)&&(n(e,1609)||n(e,1625))&&n(e,973)}function Le(e){return n(e,2309)&&n(e,590)&&n(e,30)&&n(e,1925)&&n(e,28)&&n(e,530)}function Pe(e){return n(e,1791)&&n(e,1761)&&n(e,1907)&&n(e,301)&&n(e,950)&&n(e,1540)&&n(e,2347)&&n(e,1539)&&n(e,960)}function Ae(e){return n(e,2347)}function Re(e){return Z(e)&&S(e)&&Ue(e)&&g(e)&&n(e,401)}function Ke(e){return n(e,1917)&&n(e,590)&&(n(e,383)||q(e)&&(n(e,389)||n(e,395)))}function E(e){return n(e,2136)&&n(e,2134)&&n(e,2132)&&n(e,2138)}function g(e){return n(e,2347)&&n(e,8794)}function Me(e){return T(e)}function U(e){return n(e,1925)&&(n(e,7936)||n(e,1436))}function Ge(e){return!1}function _(e){return T(e)&&O()&&n(e,2347)&&n(e,1733)&&n(e,1734)&&n(e,1741)&&n(e,453)}function je(e){return _(e)}function Be(e){return Fe(e)&&Ne(e)&&P(e)}function Ne(e){return E(e)}function Fe(e){return v(e)&&L(e)&&S(e)&&n(e,314)&&n(e,946)&&n(e,1755)&&n(e,1965)&&n(e,1982)&&n(e,1957)&&n(e,1942)&&n(e,2128)&&n(e,1573)&&n(e,2862)&&n(e,2864)&&n(e,2865)&&n(e,2859)&&n(e,2861)&&n(e,2866)&&n(e,2876)}function O(e){return!0}function $e(e){return $(e)&&(n(e,5525)||n(e,1436)||n(e,7936))}function S(e){return n(e,1351)||n(e,1349)||n(e,1353)}function T(e){return n(e,1265)||n(e,1267)||n(e,1269)}function He(e){return E(e)&&n(e,199)&&n(e,201)&&n(e,203)}function q(e){return n(e,303)&&n(e,305)&&n(e,307)&&n(e,313)}function Z(e){return n(e,10006)&&n(e,10150)&&n(e,10010)}function L(e){return n(e,25833)&&n(e,2132)&&n(e,2136)&&n(e,2134)&&n(e,2138)&&n(e,317)&&n(e,3226)&&n(e,327)&&n(e,321)&&n(e,1859)&&n(e,2307)&&n(e,345)}function We(e){return n(e,5341)||n(e,8431)}function Ue(e){return n(e,8431)&&(n(e,2347)&&n(e,8794))(n(e,2351)||n(e,960))}function v(e){return n(e,946)&&n(e,1511)||n(e,52)&&n(e,314)||n(e,53)&&n(e,39)}function _e(e){return n(e,590)}function P(e){return n(e,2347)}function qe(e){return L(e)&&(n(e,2171)&&n(e,2165)&&n(e,2169)&&(n(e,2128)&&n(e,2217)||n(e,2128)&&n(e,2213)||n(e,2128)&&n(e,2162)&&n(e,2205)||n(e,1973)&&n(e,1975)&&n(e,2209))||n(e,2171)&&n(e,2164)&&n(e,2128)&&(n(e,2120)&&n(e,2122)&&n(e,2108)&&n(e,2110)&&n(e,2114)&&n(e,2116)&&n(e,2169)&&n(e,2277)||n(e,2169)&&n(e,1985)&&n(e,2152)&&n(e,2255)||n(e,2169)&&n(e,1985)&&n(e,2162)&&n(e,2253)||n(e,1982)&&n(e,2126)&&n(e,1957)&&n(e,1985)&&n(e,1965)&&n(e,2281)||n(e,1982)&&n(e,1985)&&n(e,2259))||n(e,2171)&&n(e,2166)&&n(e,2128)&&(n(e,2162)&&n(e,1957)&&n(e,2169)&&n(e,2191)||n(e,1957)&&n(e,1942)&&n(e,2152)&&n(e,2195)||n(e,2152)&&n(e,2169)&&n(e,1985)&&n(e,2126)&&n(e,2187)||n(e,1973)&&n(e,1975)&&n(e,2130)&&n(e,2185))||n(e,2025)&&n(e,2026)&&(n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2106)&&n(e,2084)||n(e,2114)&&n(e,2102)&&n(e,2108)&&n(e,2120)&&n(e,2122)&&n(e,2116)&&n(e,2112)&&n(e,2048)||n(e,2015)&&n(e,2019)&&n(e,2120)&&n(e,2102)&&n(e,2114)&&n(e,2108)&&n(e,2116)&&n(e,2124)&&n(e,2054)||n(e,2015)&&n(e,2120)&&n(e,2124)&&n(e,2128)&&n(e,2080)||n(e,2015)&&n(e,2019)&&n(e,2126)&&n(e,2114)&&n(e,2116)&&n(e,2130)&&n(e,2092)||n(e,2017)&&n(e,1973)&&n(e,2128)&&n(e,1927)&&n(e,1975)&&n(e,2130)&&n(e,2074)||n(e,2015)&&n(e,2021)&&n(e,2019)&&n(e,2102)&&n(e,2104)&&n(e,2108)&&n(e,2110)&&n(e,2128)&&n(e,2120)&&n(e,2124)&&n(e,2064)))}function Ze(e){return v(e)&&n(e,946)||n(e,843)||n(e,845)||n(e,9442)||n(e,22251)||n(e,1521)&&(n(e,54)||n(e,56))||n(e,849)||n(e,847)||n(e,9444)||n(e,1519)&&(n(e,60)||n(e,58)||n(e,22254))||n(e,853)||n(e,851)||n(e,9448)||n(e,1517)&&(n(e,64)||n(e,62)||n(e,22257))||n(e,857)||n(e,855)||n(e,1515)&&(n(e,68)||n(e,66)||n(e,22260)||n(e,9452))||n(e,1513)&&(n(e,72)||n(e,70)||n(e,22263)||n(e,21952))||S(e)&&n(e,19669)&&(n(e,31049)||n(e,22266))}function ze(e){return _e(e)&&S(e)}function Qe(e){return g(e)&&!1}function Je(e){return g(e)&&!1}function Ye(e){return!1}function A(e,a){const r=ee[e];return r?C(r,a):!0}function R(e,a){return C(e,a)}function C(e,a){if(!e)return!0;if(typeof e=="string"){const r=ne[e];return r?r(a):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(r=>C(r,a)):e.has?a.unlocked.includes(e.has):e.any?e.any.some(r=>C(r,a)):e.all?e.all.every(r=>C(r,a)):(console.warn("Unknown rule structure:",e),!1)}function z(e,a){const r=e.sources||{};if(r.shops||r.spawns)return!0;if(r.drops){for(const i of Object.keys(r.drops))if(A(i,a))return!0}if(r.other)for(const i of Object.keys(r.other)){const o=r.other[i].rule;if(R(o,a))return!0}return!1}function K(e,a){const r=e.sources||{};return z(e,a)?r.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:r.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:r.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:r.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function Ve(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const Xe="chanceman",k="files";let y={rolled:null,unlocked:null};function Q(){return new Promise((e,a)=>{const r=indexedDB.open(Xe,1);r.onupgradeneeded=function(){r.result.createObjectStore(k)},r.onsuccess=()=>e(r.result),r.onerror=()=>a(r.error)})}async function M(e,a){const i=(await Q()).transaction(k,"readwrite");return i.objectStore(k).put(a,e),i.complete}async function G(e){const a=await Q();return new Promise(r=>{const o=a.transaction(k,"readonly").objectStore(k).get(e);o.onsuccess=()=>r(o.result),o.onerror=()=>r(null)})}const s={async init(){y.rolled=await G("rolled"),y.unlocked=await G("unlocked")},async setRolled(e){y.rolled=e,await M("rolled",e)},async setUnlocked(e){y.unlocked=e,await M("unlocked",e)},get rolled(){return y.rolled},get unlocked(){return y.unlocked}};async function xe(){const e=s.rolled,a=s.unlocked;if(!e||!a)return"<h1>Please upload your files on the Home page first.</h1>";const i=new URLSearchParams(window.location.search).get("id");if(!i)return"<h1>No item selected</h1>";const o=await fetch("/data/items.json").then(l=>l.json()),t=o.find(l=>l.id==i);return t?`
        <h1>${t.name}</h1>

        <div class="item-header">
            <img src="/images/${t.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${t.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${en(t.sources)}

        <h2>Processable into:</h2>
        ${an(t.processable,o)}
    `:"<h1>Item not found</h1>"}function en(e={}){return["drops","other"].map(r=>`
        <div class="source-section">
            <h3>${nn(r)}</h3>
            ${rn(r,e[r])}
        </div>
    `).join("")}function nn(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rn(e,a){if(!a||Object.keys(a).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(a).map(([r,i])=>{const o=A(r,s)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
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
        `}function an(e={},a){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([r,i])=>{const o=a.find(d=>d.id==r),l=i.split(",").map(d=>{const f=a.find(m=>m.id==d);return f?`<a onclick="navigate('/item?id=${d}')">${f.name}</a>`:d}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${r}')">${o.name}</a>
                        </td>
                        <td>${l}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function on(){const e=await fetch("/data/items.json").then(i=>i.json());s.items=e;const a=s.rolled||[],r=s.unlocked||[];return window.__itemsPageData={items:e,rolled:a,unlocked:r},`
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
    `}function tn(){return"<h1>404 - Page Not Found</h1>"}function ln(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function sn(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),i=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const t=JSON.parse(await r.files[0].text());await s.setRolled(t)}if(i.files[0]){const t=JSON.parse(await i.files[0].text());await s.setUnlocked(t)}o.textContent="Updated!"}catch{o.textContent="Error!"}});function un(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const a=document.getElementById("app"),r=a.querySelector("#rolledInput"),i=a.querySelector("#unlockedInput"),o=a.querySelector("#status");try{if(r.files[0]){const t=JSON.parse(await r.files[0].text());await s.setRolled(t)}if(i.files[0]){const t=JSON.parse(await i.files[0].text());await s.setUnlocked(t)}o.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(t){console.error(t),o.textContent="Error reading files!"}});async function dn(e){history.pushState({},"",e),c()}window.navigate=dn;async function c(){const a=window.location.pathname.split("?")[0],i={"/":un,"/items":on,"/item":xe,"/quests":ln,"/reupload":sn}[a]||tn,o=document.getElementById("app");a!=="/"?o.innerHTML=Ve()+await i():o.innerHTML=await i(),cn()}window.addEventListener("popstate",c);window.addEventListener("DOMContentLoaded",async()=>{await s.init(),c()});window.addEventListener("DOMContentLoaded",c);window.addEventListener("popstate",c);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c())});function w(){const e=document.querySelectorAll("img.lazy-img"),a=new IntersectionObserver((r,i)=>{for(const o of r)if(o.isIntersecting){const t=o.target;t.src=t.dataset.src,t.classList.remove("lazy-img"),i.unobserve(t)}});e.forEach(r=>a.observe(r))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:a,rolled:r,unlocked:i}=e,o=document.getElementById("itemSearch"),t=document.getElementById("hideRolled");t.checked=!0;const l=document.getElementById("onlyUnlocked"),d=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const m=document.getElementById("itemGrid");if(!m)return;function p(){const J=o?.value.toLowerCase()||"",Y=t?.checked||!1,V=l?.checked||!1,X=d?.checked||!1,x=f?.checked||!1;let I=a.filter(u=>{if(!u.name.toLowerCase().includes(J))return!1;const h=r.includes(u.id),b=i.includes(u.id);return!(Y&&h||V&&!b||X&&!z(u,s)||x&&u.tags?.includes("clue-reward-only"))});I=I.sort((u,D)=>{const h=K(u,s),b=K(D,s);return h.rank!==b.rank?h.rank-b.rank:h.name.localeCompare(b.name)}),m.innerHTML=I.map(u=>{const D=r.includes(u.id),h=i.includes(u.id);return`
                <div class="item-card" onclick="navigate('/item?id=${u.id}')">

                    ${D?'<span class="badge rolled">Rolled</span>':""}
                    ${h?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${u.image}"
                        src="/images/placeholder.png"
                    >

                    ${u.name}
                </div>
            `}).join(""),setTimeout(()=>w(),0)}o?.addEventListener("input",p),t?.addEventListener("input",p),l?.addEventListener("input",p),d?.addEventListener("input",p),f?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await s.init(),c()});window.addEventListener("popstate",()=>{c(),setTimeout(w,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c(),setTimeout(w,0))});function cn(){w(),typeof initItemsPage=="function"&&initItemsPage()}
