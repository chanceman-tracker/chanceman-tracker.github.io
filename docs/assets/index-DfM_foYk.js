(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const Y={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Black Chest":["canDoShadesOfMortton"],"Bronze dragon":["canKillDifficultDragons"],"Brutal blue dragon":["canKillDifficultDragons"],"Brutal green dragon":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Brutal red dragon":["canKillDifficultDragons"],"Bull shark":["canShortrange"],"Cannonball stall":["canCompletePandemonium"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Chewed bones":{all:["canKillDifficultDragons","canEnterAncientCavern"]},"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Dirty arrowtips":["canDoValeTotems"],"Duke Sucellus":["canCompleteDesertTreasureII"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],"Ferocious barbarian spirit":["canEnterAncientCavern"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"Giant Sea Snake":["canCompleteRoyalTrouble"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Gold Chest":["canDoShadesOfMortton"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],Gryphon:["canCompleteTroubledTortugans"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"Kalphite Guardian":["canEnterKalphiteLair"],"K'ril Tsutsaroth":["canDoGodWarsDungeon"],"Lava Strykewyrm":["canEnterTheCharredDungeon"],"Large salvage":["canDoSalvaging"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Maniacal Monkey Archer":["CanCompleteMonkeyMadnessII"],"Maniacal monkey":["CanCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],Narwhal:{all:["canDoSailingCombat","canSailToTheNorthernOcean"]},"Plundered salvage":["canDoSalvaging"],"Pygmy kraken":["canDoSailingCombat"],"Reinforced chest":{any:["canSailToYnysdail","canSailToBrittleIsle"]},"Reward Chest (The Gauntlet)":["canCompleteSongOfTheElves"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Sea Snake Hatchling":["canCompleteRoyalTrouble"],"Sea Snake Young":["canCompleteRoyalTrouble"],"Shellbane Gryphon":["canCompleteTroubledTortugans"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Spined kraken":["canDoSailingCombat"],"Spitting Wyvern":["canKillFossilIslandWyverns"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tiger shark":["canDoSailingCombat"],"Tortured gorilla":["CanCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Waterfiend:{any:["canEnterAncientCavern","canCompleteSongOfTheElves"]},Wyrm:["canEnterKaruulmSlayerDungeon"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"]};function n(e,l){return e.includes(l)}const Z={canCompleteDragonSlayerII(e){return!1},canCompleteDesertTreasureII(e){return!1},canCompleteSongOfTheElves(e){return!1},canCompleteThroneOfMiscellania(e){return G(e)},canCompleteDeathPlateau(e){return pe(e)},canCompleteTheHeartOfDarkness(e){return we(e)},canReachAbyssalSire(e){return ce(e)||se(e)},canDoGuardiansOfTheRift(e){return fe(e)},canTrainFarming(e){return je(e)},canTrainWoodcutting(e){return C(e)},canTrainMining(e){return w(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return Fe(e)},canDoValeTotems(e){return Ge(e)},canDoWintertodt(e){return Ke(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return $e(e)},canDoShadesOfMortton(e){return We()},canDoGodWarsDungeon(e){return!1},CanCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return ve(e)},canCompleteZogreFleshEaters(e){return Ee(e)},canEnterKaruulmSlayerDungeon(e){return de(e)},hasFacemask(e){return n(e.unlocked,4164)},canKillGargoyles(e){return ue(e)},canKillDifficultDragons(e){return te()},canKillFossilIslandWyverns(e){return B()},hasAccessToWyvernProtection(e){return ie(e)},canTrainFletching(e){return v(e)},canTrainSmithing(e){return L(e)},canCompleteDwarfCannon(e){return Ce(e)},canCompleteTroubledTortugans(e){return Se(e)},canLongrange(e){return ae(e)},canShortrange(e){return canShortrange(e)},canSailToTheNorthernOcean(e){return j(e)},canDoSailingCombat(e){return Ae(e)},canEnterTheCharredDungeon(e){return re(e)},canSailToBrittleIsle(e){return le(e)},canSailToYnysdail(e){return oe(e)},canEnterAncientCavern(e){return x(e)},canEnterKalphiteLair(e){return X(e)},canCompleteRoyalTrouble(e){return me(e)},canCompleteTouristTrap(e){return he(e)}};function X(e){return n(e.unlocked,954)}function x(e){return ee(e)}function ee(e){return n(e.unlocked,1521)&&(n(e.unlocked,841)||n(e.unlocked,839)||n(e.unlocked,843)||n(e.unlocked,845)||n(e.unlocked,849)||n(e.unlocked,847)||n(e.unlocked,853)||n(e.unlocked,851)||n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,861)||n(e.unlocked,859))}function j(e){return h(e)&&!1}function ne(e){return h(e)&&!1}function oe(e){return ne(e)}function le(e){return j(e)}function re(e){return h(e)&&n(e.unlocked,954)}function ae(e){return(n(e.unlocked,841)||n(e.unlocked,839))&&(n(e.unlocked,882)||n(e.unlocked,884))||(n(e.unlocked,837)||n(e.unlocked,9174)&&n(e.unlocked,9454)&&n(e.unlocked,9440)&&n(e.unlocked,9420)&&n(e.unlocked,9438)&&(n(e.unlocked,6043)||n(e.unlocked,6045)||n(e.unlocked,9436)&&(n(e.unlocked,2132)||n(e.unlocked,2136)||n(e.unlocked,25833))))&&(n(e.unlocked,877)||n(e.unlocked,884))||(n(e.unlocked,556)||n(e.unlocked,4696)||n(e.unlocked,1381)||n(e.unlocked,1397))&&(n(e.unlocked,558)||n(e.unlocked,562)||n(e.unlocked,560)||n(e.unlocked,565))}function ue(e){return n(e.unlocked,4162)||n(e.unlocked,21754)}function te(e){return!1}function de(e){return n(e.unlocked,23037)||B()}function B(e){return De()}function ie(e){return $(e)&&(n(e.unlocked,2890)||n(e.unlocked,9731)&&Ie(e))}function ce(e){return N(e)}function N(e){return n(e.unlocked,1438)}function se(e){return F(e)&&ke(e)&&n(e.unlocked,5329)&&n(e.unlocked,952)}function F(e){return n(e.unlocked,1351)&&n(e.unlocked,946)&&E()}function ke(e){return n(e.unlocked,2961)&&n(e.unlocked,2355)&&n(e.unlocked,2976)&&E()}function fe(e){return n(e.unlocked,1929)&&n(e.unlocked,1755)&&(n(e.unlocked,1265)||n(e.unlocked,1267))&&Pe(e)}function pe(e){return n(e.unlocked,2309)&&n(e.unlocked,333)&&n(e.unlocked,2351)&&n(e.unlocked,1905)&&n(e.unlocked,3105)}function me(e){return G(e)&&n(e.unlocked,954)&&n(e.unlocked,453)&&n(e.unlocked,960)}function he(e){return v(e)&&L(e)&&n(e.unlocked,1833)&&n(e.unlocked,1835)&&n(e.unlocked,1837)&&n(e.unlocked,2347)&&n(e.unlocked,2349)&&n(e.unlocked,314)}function G(e){return ge(e)&&Te(e)&&n(e.unlocked,2351)&&(n(e.unlocked,1635)||n(e.unlocked,1637)||n(e.unlocked,1639)||n(e.unlocked,1641)||n(e.unlocked,1643))&&n(e.unlocked,1511)}function ge(e){return F(e)&&ye(e)&&be(e)&&w(e)&&Re(e)&&A(e)&&O(e)&&n(e.unlocked,307)&&n(e.unlocked,313)&&n(e.unlocked,97)&&n(e.unlocked,255)&&n(e.unlocked,227)}function ye(e){return n(e.unlocked,2309)&&n(e.unlocked,590)&&n(e.unlocked,30)&&n(e.unlocked,1925)&&n(e.unlocked,28)&&n(e.unlocked,530)}function be(e){return n(e.unlocked,1791)&&n(e.unlocked,1761)&&n(e.unlocked,1907)&&n(e.unlocked,301)&&n(e.unlocked,950)&&n(e.unlocked,1540)&&n(e.unlocked,2347)&&n(e.unlocked,1539)&&n(e.unlocked,960)}function Ce(e){return n(e.unlocked,2347)}function Se(e){return Me(e)&&C(e)&&Be(e)&&h(e)&&n(e.unlocked,401)}function Te(e){return n(e.unlocked,1917)&&n(e.unlocked,590)&&(n(e.unlocked,383)||A(e)&&(n(e.unlocked,389)||n(e.unlocked,395)))}function K(e){return n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2132)&&n(e.unlocked,2138)}function h(e){return n(e.unlocked,2347)&&n(e.unlocked,8794)}function we(e){return w(e)}function ve(e){return n(e.unlocked,1925)&&(n(e.unlocked,7936)||n(e.unlocked,1436))}function De(e){return!1}function $(e){return w(e)&&E()&&n(e.unlocked,2347)&&n(e.unlocked,1733)&&n(e.unlocked,1734)&&n(e.unlocked,1741)&&n(e.unlocked,453)}function Ie(e){return $(e)}function Ee(e){return Le(e)&&Oe(e)&&L(e)}function Oe(e){return K(e)}function Le(e){return v(e)&&O(e)&&C(e)&&n(e.unlocked,314)&&n(e.unlocked,946)&&n(e.unlocked,1755)&&n(e.unlocked,1965)&&n(e.unlocked,1982)&&n(e.unlocked,1957)&&n(e.unlocked,1942)&&n(e.unlocked,2128)&&n(e.unlocked,1573)&&n(e.unlocked,2862)&&n(e.unlocked,2864)&&n(e.unlocked,2865)&&n(e.unlocked,2859)&&n(e.unlocked,2861)&&n(e.unlocked,2866)&&n(e.unlocked,2876)}function E(e){return!0}function Pe(e){return N(e)&&(n(e.unlocked,5525)||n(e.unlocked,1436)||n(e.unlocked,7936))}function C(e){return n(e.unlocked,1351)||n(e.unlocked,1349)||n(e.unlocked,1353)}function w(e){return n(e.unlocked,1265)||n(e.unlocked,1267)||n(e.unlocked,1269)}function Re(e){return K(e)&&n(e.unlocked,199)&&n(e.unlocked,201)&&n(e.unlocked,203)}function A(e){return n(e.unlocked,303)&&n(e.unlocked,305)&&n(e.unlocked,307)&&n(e.unlocked,313)}function Me(e){return n(e.unlocked,10006)&&n(e.unlocked,10150)&&n(e.unlocked,10010)}function O(e){return n(e.unlocked,25833)&&n(e.unlocked,2132)&&n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2138)&&n(e.unlocked,317)&&n(e.unlocked,3226)&&n(e.unlocked,327)&&n(e.unlocked,321)&&n(e.unlocked,1859)&&n(e.unlocked,2307)&&n(e.unlocked,345)}function je(e){return n(e.unlocked,5341)||n(e.unlocked,8431)}function Be(e){return n(e.unlocked,8431)&&(n(e.unlocked,2347)&&n(e.unlocked,8794))(n(e.unlocked,2351)||n(e.unlocked,960))}function v(e){return n(e.unlocked,946)&&n(e.unlocked,1511)||n(e.unlocked,52)&&n(e.unlocked,314)||n(e.unlocked,53)&&n(e.unlocked,39)}function Ne(e){return n(e.unlocked,590)}function L(e){return n(e.unlocked,2347)}function Fe(e){return O(e)&&(n(e.unlocked,2171)&&n(e.unlocked,2165)&&n(e.unlocked,2169)&&(n(e.unlocked,2128)&&n(e.unlocked,2217)||n(e.unlocked,2128)&&n(e.unlocked,2213)||n(e.unlocked,2128)&&n(e.unlocked,2162)&&n(e.unlocked,2205)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2209))||n(e.unlocked,2171)&&n(e.unlocked,2164)&&n(e.unlocked,2128)&&(n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2169)&&n(e.unlocked,2277)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2152)&&n(e.unlocked,2255)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2162)&&n(e.unlocked,2253)||n(e.unlocked,1982)&&n(e.unlocked,2126)&&n(e.unlocked,1957)&&n(e.unlocked,1985)&&n(e.unlocked,1965)&&n(e.unlocked,2281)||n(e.unlocked,1982)&&n(e.unlocked,1985)&&n(e.unlocked,2259))||n(e.unlocked,2171)&&n(e.unlocked,2166)&&n(e.unlocked,2128)&&(n(e.unlocked,2162)&&n(e.unlocked,1957)&&n(e.unlocked,2169)&&n(e.unlocked,2191)||n(e.unlocked,1957)&&n(e.unlocked,1942)&&n(e.unlocked,2152)&&n(e.unlocked,2195)||n(e.unlocked,2152)&&n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2126)&&n(e.unlocked,2187)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2185))||n(e.unlocked,2025)&&n(e.unlocked,2026)&&(n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2106)&&n(e.unlocked,2084)||n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2116)&&n(e.unlocked,2112)&&n(e.unlocked,2048)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2120)&&n(e.unlocked,2102)&&n(e.unlocked,2114)&&n(e.unlocked,2108)&&n(e.unlocked,2116)&&n(e.unlocked,2124)&&n(e.unlocked,2054)||n(e.unlocked,2015)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2128)&&n(e.unlocked,2080)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2126)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2130)&&n(e.unlocked,2092)||n(e.unlocked,2017)&&n(e.unlocked,1973)&&n(e.unlocked,2128)&&n(e.unlocked,1927)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2074)||n(e.unlocked,2015)&&n(e.unlocked,2021)&&n(e.unlocked,2019)&&n(e.unlocked,2102)&&n(e.unlocked,2104)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2128)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2064)))}function Ge(e){return v(e)&&n(e.unlocked,946)||n(e.unlocked,843)||n(e.unlocked,845)||n(e.unlocked,9442)||n(e.unlocked,22251)||n(e.unlocked,1521)&&(n(e.unlocked,54)||n(e.unlocked,56))||n(e.unlocked,849)||n(e.unlocked,847)||n(e.unlocked,9444)||n(e.unlocked,1519)&&(n(e.unlocked,60)||n(e.unlocked,58)||n(e.unlocked,22254))||n(e.unlocked,853)||n(e.unlocked,851)||n(e.unlocked,9448)||n(e.unlocked,1517)&&(n(e.unlocked,64)||n(e.unlocked,62)||n(e.unlocked,22257))||n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,1515)&&(n(e.unlocked,68)||n(e.unlocked,66)||n(e.unlocked,22260)||n(e.unlocked,9452))||n(e.unlocked,1513)&&(n(e.unlocked,72)||n(e.unlocked,70)||n(e.unlocked,22263)||n(e.unlocked,21952))||C(e)&&n(e.unlocked,19669)&&(n(e.unlocked,31049)||n(e.unlocked,22266))}function Ke(e){return Ne(e)&&C(e)}function $e(e){return h(e)&&!1}function Ae(e){return h(e)&&!1}function We(e){return!1}function W(e,l){const o=Y[e];return o?y(o,l):!0}function U(e,l){return y(e,l)}function y(e,l){if(!e)return!0;if(typeof e=="string"){const o=Z[e];return o?o(l):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(o=>y(o,l)):e.has?l.unlocked.includes(e.has):e.any?e.any.some(o=>y(o,l)):e.all?e.all.every(o=>y(o,l)):(console.warn("Unknown rule structure:",e),!1)}function H(e,l){const o=e.sources||{};if(o.shops||o.spawns)return!0;if(o.drops){for(const u of Object.keys(o.drops))if(W(u,l))return!0}if(o.other)for(const u of Object.keys(o.other)){const r=o.other[u].rule;if(U(r,l))return!0}return!1}function P(e,l){const o=e.sources||{};return H(e,l)?o.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:o.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:o.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:o.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function Ue(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const He="chanceman",b="files";let m={rolled:null,unlocked:null};function _(){return new Promise((e,l)=>{const o=indexedDB.open(He,1);o.onupgradeneeded=function(){o.result.createObjectStore(b)},o.onsuccess=()=>e(o.result),o.onerror=()=>l(o.error)})}async function R(e,l){const u=(await _()).transaction(b,"readwrite");return u.objectStore(b).put(l,e),u.complete}async function M(e){const l=await _();return new Promise(o=>{const r=l.transaction(b,"readonly").objectStore(b).get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})}const t={async init(){m.rolled=await M("rolled"),m.unlocked=await M("unlocked")},async setRolled(e){m.rolled=e,await R("rolled",e)},async setUnlocked(e){m.unlocked=e,await R("unlocked",e)},get rolled(){return m.rolled},get unlocked(){return m.unlocked}};async function _e(){const e=t.rolled,l=t.unlocked;if(!e||!l)return"<h1>Please upload your files on the Home page first.</h1>";const u=new URLSearchParams(window.location.search).get("id");if(!u)return"<h1>No item selected</h1>";const r=await fetch("/data/items.json").then(d=>d.json()),a=r.find(d=>d.id==u);return a?`
        <h1>${a.name}</h1>

        <div class="item-header">
            <img src="/images/${a.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${a.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${qe(a.sources)}

        <h2>Processable into:</h2>
        ${Qe(a.processable,r)}
    `:"<h1>Item not found</h1>"}function qe(e={}){return["drops","other"].map(o=>`
        <div class="source-section">
            <h3>${ze(o)}</h3>
            ${Je(o,e[o])}
        </div>
    `).join("")}function ze(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Je(e,l){if(!l||Object.keys(l).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(l).map(([o,u])=>{const r=W(o,t)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${u.url}" target="_blank">${o}</a></td>
                            <td>${u.droprate}</td>
                            <td>${r}</td>
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
                ${Object.entries(l).map(([o,u])=>{const{notes:r,rule:a}=u,d=U(a,t)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${o}</td>
                            <td>${r}</td>
                            <td>${d}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function Qe(e={},l){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([o,u])=>{const r=l.find(s=>s.id==o),d=u.split(",").map(s=>{const f=l.find(S=>S.id==s);return f?`<a onclick="navigate('/item?id=${s}')">${f.name}</a>`:s}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${o}')">${r.name}</a>
                        </td>
                        <td>${d}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function Ve(){const e=await fetch("/data/items.json").then(u=>u.json()),l=t.rolled||[],o=t.unlocked||[];return window.__itemsPageData={items:e,rolled:l,unlocked:o},`
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
    `}function Ye(){return"<h1>404 - Page Not Found</h1>"}function Ze(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function Xe(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),u=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const a=JSON.parse(await o.files[0].text());await t.setRolled(a)}if(u.files[0]){const a=JSON.parse(await u.files[0].text());await t.setUnlocked(a)}r.textContent="Updated!"}catch{r.textContent="Error!"}});function xe(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),u=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const a=JSON.parse(await o.files[0].text());await t.setRolled(a)}if(u.files[0]){const a=JSON.parse(await u.files[0].text());await t.setUnlocked(a)}r.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(a){console.error(a),r.textContent="Error reading files!"}});async function en(e){history.pushState({},"",e),c()}window.navigate=en;async function c(){const l=window.location.pathname.split("?")[0],u={"/":xe,"/items":Ve,"/item":_e,"/quests":Ze,"/reupload":Xe}[l]||Ye,r=document.getElementById("app");l!=="/"?r.innerHTML=Ue()+await u():r.innerHTML=await u(),nn()}window.addEventListener("popstate",c);window.addEventListener("DOMContentLoaded",async()=>{await t.init(),c()});window.addEventListener("DOMContentLoaded",c);window.addEventListener("popstate",c);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c())});function D(){const e=document.querySelectorAll("img.lazy-img"),l=new IntersectionObserver((o,u)=>{for(const r of o)if(r.isIntersecting){const a=r.target;a.src=a.dataset.src,a.classList.remove("lazy-img"),u.unobserve(a)}});e.forEach(o=>l.observe(o))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:l,rolled:o,unlocked:u}=e,r=document.getElementById("itemSearch"),a=document.getElementById("hideRolled");a.checked=!0;const d=document.getElementById("onlyUnlocked"),s=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const S=document.getElementById("itemGrid");if(!S)return;function p(){const q=r?.value.toLowerCase()||"",z=a?.checked||!1,J=d?.checked||!1,Q=s?.checked||!1,V=f?.checked||!1;let I=l.filter(i=>{if(!i.name.toLowerCase().includes(q))return!1;const k=o.includes(i.id),g=u.includes(i.id);return!(z&&k||J&&!g||Q&&!H(i,t)||V&&i.tags?.includes("clue-reward-only"))});I=I.sort((i,T)=>{const k=P(i,t),g=P(T,t);return k.rank!==g.rank?k.rank-g.rank:k.name.localeCompare(g.name)}),S.innerHTML=I.map(i=>{const T=o.includes(i.id),k=u.includes(i.id);return`
                <div class="item-card" onclick="navigate('/item?id=${i.id}')">

                    ${T?'<span class="badge rolled">Rolled</span>':""}
                    ${k?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${i.image}"
                        src="/images/placeholder.png"
                    >

                    ${i.name}
                </div>
            `}).join(""),setTimeout(()=>D(),0)}r?.addEventListener("input",p),a?.addEventListener("input",p),d?.addEventListener("input",p),s?.addEventListener("input",p),f?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await t.init(),c()});window.addEventListener("popstate",()=>{c(),setTimeout(D,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),c(),setTimeout(D,0))});function nn(){D(),typeof initItemsPage=="function"&&initItemsPage()}
