(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const J={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Adamant dragon":["canCompleteDragonSlayerII"],"Black Chest":["canDoShadesOfMortton"],"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Dirty arrowtips":["canDoValeTotems"],"Dust devil":["hasFacemask"],"Dust devil (Wilderness Slayer Cave)":["hasFacemask"],Gargoyle:["canCompletePriestInPeril","canKillGargoyles"],"Gnome Restaurant Tips":["canDoGnomeRestaurant"],"Greater abyssal demon":["isNotSlayerLocked"],"Grotesque Guardians":["canCompletePriestInPeril","canKillGargoyles"],"Hallowed sack":["canDoHallowedSepulchre"],"Iron dragon":["canKillDifficultDragons"],"K'ril Tsutsaroth":["canDoGodWarsDungeon"],"Long-tailed Wyvern":["canKillFossilIslandWyverns"],"Maniacal Monkey Archer":["CanCompleteMonkeyMadnessII"],"Maniacal monkey":["CanCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Silver Chest":["canDoShadesOfMortton"],"Skeletal wyvern":["hasAccessToWyvernProtection"],"Spitting Wyvern":["canKillFossilIslandWyverns"],"Taloned Wyvern":["canKillFossilIslandWyverns"],"Tortured gorilla":["CanCompleteMonkeyMadnessII"],"Tree spirit":["canCompleteFairytaleIGrowingPains"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayerII"],Wyrm:["canEnterKaruulmSlayerDungeon"],"Zombie (Tarn's Lair)":["canCompletePriestInPeril"]};function n(e,l){return e.includes(l)}const Q={canCompleteDragonSlayerII(e){return!1},canCompleteThroneOfMiscellania(e){return le(e)},canCompleteTheHeartOfDarkness(e){return se(e)},canReachAbyssalSire(e){return x(e)||ee(e)},canDoGuardiansOfTheRift(e){return oe(e)},canTrainFarming(e){return ge(e)},canTrainWoodcutting(e){return C(e)},canTrainMining(e){return v(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return we(e)},canDoValeTotems(e){return Ce(e)},canDoWintertodt(e){return ve(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return Ie(e)},canDoShadesOfMortton(e){return Se()},canDoGodWarsDungeon(e){return!1},CanCompleteMonkeyMadnessII(e){return!1},canCompletePriestInPeril(e){return ie(e)},canCompleteZogreFleshEaters(e){return fe(e)},canEnterKaruulmSlayerDungeon(e){return X(e)},hasFacemask(e){return n(e.unlocked,4164)},canKillGargoyles(e){return V(e)},canKillDifficultDragons(e){return Z()},canKillFossilIslandWyverns(e){return R()},hasAccessToWyvernProtection(e){return Y(e)},canTrainFletching(e){return L(e)},canTrainSmithing(e){return U(e)}};function V(e){return n(e.unlocked,4162)||n(e.unlocked,21754)}function Z(e){return!1}function X(e){return n(e.unlocked,23037)||R()}function R(e){return ce()}function Y(e){return F(e)&&(n(e.unlocked,2890)||n(e.unlocked,9731)&&ke(e))}function x(e){return M(e)}function M(e){return n(e.unlocked,1438)}function ee(e){return j(e)&&ne(e)&&n(e.unlocked,5329)&&n(e.unlocked,952)}function j(e){return n(e.unlocked,1351)&&n(e.unlocked,946)&&D()}function ne(e){return n(e.unlocked,2961)&&n(e.unlocked,2355)&&n(e.unlocked,2976)&&D()}function oe(e){return n(e.unlocked,1929)&&n(e.unlocked,1755)&&(n(e.unlocked,1265)||n(e.unlocked,1267))&&he(e)}function le(e){return re(e)&&ue(e)&&n(e.unlocked,2351)&&(n(e.unlocked,1635)||n(e.unlocked,1637)||n(e.unlocked,1639)||n(e.unlocked,1641)||n(e.unlocked,1643))&&n(e.unlocked,1511)}function re(e){return j(e)&&ae(e)&&te(e)&&v(e)&&ye(e)&&N(e)&&T(e)&&n(e.unlocked,307)&&n(e.unlocked,313)&&n(e.unlocked,97)&&n(e.unlocked,255)&&n(e.unlocked,227)}function ae(e){return n(e.unlocked,2309)&&n(e.unlocked,590)&&n(e.unlocked,30)&&n(e.unlocked,1925)&&n(e.unlocked,28)&&n(e.unlocked,530)}function te(e){return n(e.unlocked,1791)&&n(e.unlocked,1761)&&n(e.unlocked,1907)&&n(e.unlocked,301)&&n(e.unlocked,950)&&n(e.unlocked,1540)&&n(e.unlocked,2347)&&n(e.unlocked,1539)&&n(e.unlocked,960)}function ue(e){return n(e.unlocked,1917)&&n(e.unlocked,590)&&(n(e.unlocked,383)||N(e)&&(n(e.unlocked,389)||n(e.unlocked,395)))}function $(e){return n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2132)&&n(e.unlocked,2138)}function de(e){return n(e.unlocked,2347)&&n(e.unlocked,8794)}function se(e){return v(e)}function ie(e){return n(e.unlocked,1925)&&(n(e.unlocked,7936)||n(e.unlocked,1436))}function ce(e){return!1}function F(e){return v(e)&&D()&&n(e.unlocked,2347)&&n(e.unlocked,1733)&&n(e.unlocked,1734)&&n(e.unlocked,1741)&&n(e.unlocked,453)}function ke(e){return F(e)}function fe(e){return me(e)&&pe(e)&&U(e)}function pe(e){return $(e)}function me(e){return L(e)&&T(e)&&C(e)&&n(e.unlocked,314)&&n(e.unlocked,946)&&n(e.unlocked,1755)&&n(e.unlocked,1965)&&n(e.unlocked,1982)&&n(e.unlocked,1957)&&n(e.unlocked,1942)&&n(e.unlocked,2128)&&n(e.unlocked,1573)&&n(e.unlocked,2862)&&n(e.unlocked,2864)&&n(e.unlocked,2865)&&n(e.unlocked,2859)&&n(e.unlocked,2861)&&n(e.unlocked,2866)&&n(e.unlocked,2876)}function D(e){return!0}function he(e){return M(e)&&(n(e.unlocked,5525)||n(e.unlocked,1436)||n(e.unlocked,7936))}function C(e){return n(e.unlocked,1351)||n(e.unlocked,1349)||n(e.unlocked,1353)}function v(e){return n(e.unlocked,1265)||n(e.unlocked,1267)||n(e.unlocked,1269)}function ye(e){return $(e)&&n(e.unlocked,199)&&n(e.unlocked,201)&&n(e.unlocked,203)}function N(e){return n(e.unlocked,303)&&n(e.unlocked,305)&&n(e.unlocked,307)&&n(e.unlocked,313)}function T(e){return n(e.unlocked,25833)&&n(e.unlocked,2132)&&n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2138)&&n(e.unlocked,317)&&n(e.unlocked,3226)&&n(e.unlocked,327)&&n(e.unlocked,321)&&n(e.unlocked,1859)&&n(e.unlocked,2307)&&n(e.unlocked,345)}function ge(e){return n(e.unlocked,5341)}function L(e){return n(e.unlocked,946)&&n(e.unlocked,1511)||n(e.unlocked,52)&&n(e.unlocked,314)||n(e.unlocked,53)&&n(e.unlocked,39)}function be(e){return n(e.unlocked,590)}function U(e){return n(e.unlocked,2347)}function we(e){return T(e)&&(n(e.unlocked,2171)&&n(e.unlocked,2165)&&n(e.unlocked,2169)&&(n(e.unlocked,2128)&&n(e.unlocked,2217)||n(e.unlocked,2128)&&n(e.unlocked,2213)||n(e.unlocked,2128)&&n(e.unlocked,2162)&&n(e.unlocked,2205)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2209))||n(e.unlocked,2171)&&n(e.unlocked,2164)&&n(e.unlocked,2128)&&(n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2169)&&n(e.unlocked,2277)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2152)&&n(e.unlocked,2255)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2162)&&n(e.unlocked,2253)||n(e.unlocked,1982)&&n(e.unlocked,2126)&&n(e.unlocked,1957)&&n(e.unlocked,1985)&&n(e.unlocked,1965)&&n(e.unlocked,2281)||n(e.unlocked,1982)&&n(e.unlocked,1985)&&n(e.unlocked,2259))||n(e.unlocked,2171)&&n(e.unlocked,2166)&&n(e.unlocked,2128)&&(n(e.unlocked,2162)&&n(e.unlocked,1957)&&n(e.unlocked,2169)&&n(e.unlocked,2191)||n(e.unlocked,1957)&&n(e.unlocked,1942)&&n(e.unlocked,2152)&&n(e.unlocked,2195)||n(e.unlocked,2152)&&n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2126)&&n(e.unlocked,2187)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2185))||n(e.unlocked,2025)&&n(e.unlocked,2026)&&(n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2106)&&n(e.unlocked,2084)||n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2116)&&n(e.unlocked,2112)&&n(e.unlocked,2048)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2120)&&n(e.unlocked,2102)&&n(e.unlocked,2114)&&n(e.unlocked,2108)&&n(e.unlocked,2116)&&n(e.unlocked,2124)&&n(e.unlocked,2054)||n(e.unlocked,2015)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2128)&&n(e.unlocked,2080)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2126)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2130)&&n(e.unlocked,2092)||n(e.unlocked,2017)&&n(e.unlocked,1973)&&n(e.unlocked,2128)&&n(e.unlocked,1927)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2074)||n(e.unlocked,2015)&&n(e.unlocked,2021)&&n(e.unlocked,2019)&&n(e.unlocked,2102)&&n(e.unlocked,2104)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2128)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2064)))}function Ce(e){return L(e)&&n(e.unlocked,946)&&(n(e.unlocked,843)||n(e.unlocked,845)||n(e.unlocked,9442)||n(e.unlocked,22251)||n(e.unlocked,946)&&(n(e.unlocked,54)||n(e.unlocked,56)))&&(n(e.unlocked,849)||n(e.unlocked,847)||n(e.unlocked,9444)||n(e.unlocked,1519)&&(n(e.unlocked,60)||n(e.unlocked,58)||n(e.unlocked,22254)))&&(n(e.unlocked,853)||n(e.unlocked,851)||n(e.unlocked,9448)||n(e.unlocked,1517)&&(n(e.unlocked,64)||n(e.unlocked,62)||n(e.unlocked,22257)))&&(n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,1515)&&(n(e.unlocked,68)||n(e.unlocked,66)||n(e.unlocked,22260)||n(e.unlocked,9452)))&&(n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,1515)&&(n(e.unlocked,68)||n(e.unlocked,66)||n(e.unlocked,22260)||n(e.unlocked,9452)))&&n(e.unlocked,1513)&&(n(e.unlocked,72)||n(e.unlocked,70)||n(e.unlocked,22263)||n(e.unlocked,21952))&&C(e)&&n(e.unlocked,19669)&&(n(e.unlocked,31049)||n(e.unlocked,22266))}function ve(e){return be(e)&&C(e)}function Ie(e){return de(e)}function Se(e){return!1}function W(e,l){const o=J[e];return o?y(o,l):!0}function B(e,l){return y(e,l)}function y(e,l){if(!e)return!0;if(typeof e=="string"){const o=Q[e];return o?o(l):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(o=>y(o,l)):e.has?l.unlocked.includes(e.has):e.any?e.any.some(o=>y(o,l)):e.all?e.all.every(o=>y(o,l)):(console.warn("Unknown rule structure:",e),!1)}function G(e,l){const o=e.sources||{};if(o.shops||o.spawns)return!0;if(o.drops){for(const t of Object.keys(o.drops))if(W(t,l))return!0}if(o.other)for(const t of Object.keys(o.other)){const r=o.other[t].rule;if(B(r,l))return!0}return!1}function O(e,l){const o=e.sources||{};return G(e,l)?o.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:o.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:o.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:o.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function De(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const Te="chanceman",g="files";let m={rolled:null,unlocked:null};function H(){return new Promise((e,l)=>{const o=indexedDB.open(Te,1);o.onupgradeneeded=function(){o.result.createObjectStore(g)},o.onsuccess=()=>e(o.result),o.onerror=()=>l(o.error)})}async function E(e,l){const t=(await H()).transaction(g,"readwrite");return t.objectStore(g).put(l,e),t.complete}async function P(e){const l=await H();return new Promise(o=>{const r=l.transaction(g,"readonly").objectStore(g).get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})}const u={async init(){m.rolled=await P("rolled"),m.unlocked=await P("unlocked")},async setRolled(e){m.rolled=e,await E("rolled",e)},async setUnlocked(e){m.unlocked=e,await E("unlocked",e)},get rolled(){return m.rolled},get unlocked(){return m.unlocked}};async function Le(){const e=u.rolled,l=u.unlocked;if(!e||!l)return"<h1>Please upload your files on the Home page first.</h1>";const t=new URLSearchParams(window.location.search).get("id");if(!t)return"<h1>No item selected</h1>";const r=await fetch("/data/items.json").then(d=>d.json()),a=r.find(d=>d.id==t);return a?`
        <h1>${a.name}</h1>

        <div class="item-header">
            <img src="/images/${a.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${a.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${Oe(a.sources)}

        <h2>Processable into:</h2>
        ${Re(a.processable,r)}
    `:"<h1>Item not found</h1>"}function Oe(e={}){return["drops","other"].map(o=>`
        <div class="source-section">
            <h3>${Ee(o)}</h3>
            ${Pe(o,e[o])}
        </div>
    `).join("")}function Ee(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Pe(e,l){if(!l||Object.keys(l).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(l).map(([o,t])=>{const r=W(o,u)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${t.url}" target="_blank">${o}</a></td>
                            <td>${t.droprate}</td>
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
                ${Object.entries(l).map(([o,t])=>{const{notes:r,rule:a}=t,d=B(a,u)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${o}</td>
                            <td>${r}</td>
                            <td>${d}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function Re(e={},l){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([o,t])=>{const r=l.find(c=>c.id==o),d=t.split(",").map(c=>{const f=l.find(b=>b.id==c);return f?`<a onclick="navigate('/item?id=${c}')">${f.name}</a>`:c}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${o}')">${r.name}</a>
                        </td>
                        <td>${d}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function Me(){const e=await fetch("/data/items.json").then(t=>t.json()),l=u.rolled||[],o=u.unlocked||[];return window.__itemsPageData={items:e,rolled:l,unlocked:o},`
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
    `}function je(){return"<h1>404 - Page Not Found</h1>"}function $e(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function Fe(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),t=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const a=JSON.parse(await o.files[0].text());await u.setRolled(a)}if(t.files[0]){const a=JSON.parse(await t.files[0].text());await u.setUnlocked(a)}r.textContent="Updated!"}catch{r.textContent="Error!"}});function Ne(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),t=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const a=JSON.parse(await o.files[0].text());await u.setRolled(a)}if(t.files[0]){const a=JSON.parse(await t.files[0].text());await u.setUnlocked(a)}r.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(a){console.error(a),r.textContent="Error reading files!"}});async function Ue(e){history.pushState({},"",e),i()}window.navigate=Ue;async function i(){const l=window.location.pathname.split("?")[0],t={"/":Ne,"/items":Me,"/item":Le,"/quests":$e,"/reupload":Fe}[l]||je,r=document.getElementById("app");l!=="/"?r.innerHTML=De()+await t():r.innerHTML=await t(),We()}window.addEventListener("popstate",i);window.addEventListener("DOMContentLoaded",async()=>{await u.init(),i()});window.addEventListener("DOMContentLoaded",i);window.addEventListener("popstate",i);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),i())});function I(){const e=document.querySelectorAll("img.lazy-img"),l=new IntersectionObserver((o,t)=>{for(const r of o)if(r.isIntersecting){const a=r.target;a.src=a.dataset.src,a.classList.remove("lazy-img"),t.unobserve(a)}});e.forEach(o=>l.observe(o))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:l,rolled:o,unlocked:t}=e,r=document.getElementById("itemSearch"),a=document.getElementById("hideRolled");a.checked=!0;const d=document.getElementById("onlyUnlocked"),c=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const b=document.getElementById("itemGrid");if(!b)return;function p(){const A=r?.value.toLowerCase()||"",K=a?.checked||!1,_=d?.checked||!1,q=c?.checked||!1,z=f?.checked||!1;let S=l.filter(s=>{if(!s.name.toLowerCase().includes(A))return!1;const k=o.includes(s.id),h=t.includes(s.id);return!(K&&k||_&&!h||q&&!G(s,u)||z&&s.tags?.includes("clue-reward-only"))});S=S.sort((s,w)=>{const k=O(s,u),h=O(w,u);return k.rank!==h.rank?k.rank-h.rank:k.name.localeCompare(h.name)}),b.innerHTML=S.map(s=>{const w=o.includes(s.id),k=t.includes(s.id);return`
                <div class="item-card" onclick="navigate('/item?id=${s.id}')">

                    ${w?'<span class="badge rolled">Rolled</span>':""}
                    ${k?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${s.image}"
                        src="/images/placeholder.png"
                    >

                    ${s.name}
                </div>
            `}).join(""),setTimeout(()=>I(),0)}r?.addEventListener("input",p),a?.addEventListener("input",p),d?.addEventListener("input",p),c?.addEventListener("input",p),f?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await u.init(),i()});window.addEventListener("popstate",()=>{i(),setTimeout(I,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),i(),setTimeout(I,0))});function We(){I(),typeof initItemsPage=="function"&&initItemsPage()}
