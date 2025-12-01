(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const q={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Coffin (Hallowed Sepulchre)":["canDoHallowedSepulchre"],"Chilled Jelly":["canCompleteTheHeartOfDarkness"],"Greater abyssal demon":["isNotSlayerLocked"],"Hallowed sack":["canDoHallowedSepulchre"],"K'ril Tsutsaroth":["canDoGodWarsDungeon"],"Maniacal Monkey Archer":["CanCompleteMonkeyMadnessII"],"Maniacal monkey":["CanCompleteMonkeyMadnessII"],"Martial salvage":["canDoSalvaging"],"Rewards Guardian":["canDoGuardiansOfTheRift"],"Silver Chest":["canDoShadesOfMortton"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayer2"]};function n(e,l){return e.includes(l)}const G={canCompleteDragonSlayer2(e){return!1},canCompleteThroneOfMiscellania(e){return K(e)},canCompleteTheHeartOfDarkness(e){return ne(e)},canReachAbyssalSire(e){return z(e)||W(e)},canDoGuardiansOfTheRift(e){return J(e)},canTrainFarming(e){return re(e)},canTrainWoodcutting(e){return v(e)},canTrainMining(e){return I(e)},isNotSlayerLocked(e){return!0},canDoGnomeRestaurant(e){return ue(e)},canDoValeTotems(e){return de(e)},canDoWintertodt(e){return se(e)},canDoHallowedSepulchre(e){return!1},canDoSalvaging(e){return ie(e)},canDoShadesOfMortton(e){return ce()},canDoGodWarsDungeon(e){return!1},CanCompleteMonkeyMadnessII(e){return!1}};function z(e){return E(e)}function E(e){return n(e.unlocked,1438)}function W(e){return T(e)&&Q(e)&&n(e.unlocked,5329)&&n(e.unlocked,952)}function T(e){return n(e.unlocked,1351)&&n(e.unlocked,946)&&R()}function Q(e){return n(e.unlocked,2961)&&n(e.unlocked,2355)&&n(e.unlocked,2976)&&R()}function J(e){return n(e.unlocked,1929)&&n(e.unlocked,1755)&&(n(e.unlocked,1265)||n(e.unlocked,1267))&&oe(e)}function K(e){return V(e)&&Z(e)&&n(e.unlocked,2351)&&(n(e.unlocked,1635)||n(e.unlocked,1637)||n(e.unlocked,1639)||n(e.unlocked,1641)||n(e.unlocked,1643))&&n(e.unlocked,1511)}function V(e){return T(e)&&X(e)&&Y(e)&&I(e)&&le(e)&&j(e)&&M(e)&&n(e.unlocked,307)&&n(e.unlocked,313)&&n(e.unlocked,97)&&n(e.unlocked,255)&&n(e.unlocked,227)}function X(e){return n(e.unlocked,2309)&&n(e.unlocked,590)&&n(e.unlocked,30)&&n(e.unlocked,1925)&&n(e.unlocked,28)&&n(e.unlocked,530)}function Y(e){return n(e.unlocked,1791)&&n(e.unlocked,1761)&&n(e.unlocked,1907)&&n(e.unlocked,301)&&n(e.unlocked,950)&&n(e.unlocked,1540)&&n(e.unlocked,2347)&&n(e.unlocked,1539)&&n(e.unlocked,960)}function Z(e){return n(e.unlocked,1917)&&n(e.unlocked,590)&&(n(e.unlocked,383)||j(e)&&(n(e.unlocked,389)||n(e.unlocked,395)))}function x(e){return n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2132)&&n(e.unlocked,2138)}function ee(e){return n(e.unlocked,2347)&&n(e.unlocked,8794)}function ne(e){return I(e)}function R(e){return!0}function oe(e){return E(e)&&(n(e.unlocked,5525)||n(e.unlocked,1436)||n(e.unlocked,7936))}function v(e){return n(e.unlocked,1351)||n(e.unlocked,1349)||n(e.unlocked,1353)}function I(e){return n(e.unlocked,1265)||n(e.unlocked,1267)||n(e.unlocked,1269)}function le(e){return x(e)&&n(e.unlocked,199)&&n(e.unlocked,201)&&n(e.unlocked,203)}function j(e){return n(e.unlocked,303)&&n(e.unlocked,305)&&n(e.unlocked,307)&&n(e.unlocked,313)}function M(e){return n(e.unlocked,25833)&&n(e.unlocked,2132)&&n(e.unlocked,2136)&&n(e.unlocked,2134)&&n(e.unlocked,2138)&&n(e.unlocked,317)&&n(e.unlocked,3226)&&n(e.unlocked,327)&&n(e.unlocked,321)&&n(e.unlocked,1859)&&n(e.unlocked,2307)&&n(e.unlocked,345)}function re(e){return n(e.unlocked,5341)}function te(e){return n(e.unlocked,946)&&n(e.unlocked,1511)||n(e.unlocked,52)&&n(e.unlocked,314)||n(e.unlocked,53)&&n(e.unlocked,39)}function ae(e){return n(e.unlocked,590)}function ue(e){return M(e)&&(n(e.unlocked,2171)&&n(e.unlocked,2165)&&n(e.unlocked,2169)&&(n(e.unlocked,2128)&&n(e.unlocked,2217)||n(e.unlocked,2128)&&n(e.unlocked,2213)||n(e.unlocked,2128)&&n(e.unlocked,2162)&&n(e.unlocked,2205)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2209))||n(e.unlocked,2171)&&n(e.unlocked,2164)&&n(e.unlocked,2128)&&(n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2169)&&n(e.unlocked,2277)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2152)&&n(e.unlocked,2255)||n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2162)&&n(e.unlocked,2253)||n(e.unlocked,1982)&&n(e.unlocked,2126)&&n(e.unlocked,1957)&&n(e.unlocked,1985)&&n(e.unlocked,1965)&&n(e.unlocked,2281)||n(e.unlocked,1982)&&n(e.unlocked,1985)&&n(e.unlocked,2259))||n(e.unlocked,2171)&&n(e.unlocked,2166)&&n(e.unlocked,2128)&&(n(e.unlocked,2162)&&n(e.unlocked,1957)&&n(e.unlocked,2169)&&n(e.unlocked,2191)||n(e.unlocked,1957)&&n(e.unlocked,1942)&&n(e.unlocked,2152)&&n(e.unlocked,2195)||n(e.unlocked,2152)&&n(e.unlocked,2169)&&n(e.unlocked,1985)&&n(e.unlocked,2126)&&n(e.unlocked,2187)||n(e.unlocked,1973)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2185))||n(e.unlocked,2025)&&n(e.unlocked,2026)&&(n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2106)&&n(e.unlocked,2084)||n(e.unlocked,2114)&&n(e.unlocked,2102)&&n(e.unlocked,2108)&&n(e.unlocked,2120)&&n(e.unlocked,2122)&&n(e.unlocked,2116)&&n(e.unlocked,2112)&&n(e.unlocked,2048)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2120)&&n(e.unlocked,2102)&&n(e.unlocked,2114)&&n(e.unlocked,2108)&&n(e.unlocked,2116)&&n(e.unlocked,2124)&&n(e.unlocked,2054)||n(e.unlocked,2015)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2128)&&n(e.unlocked,2080)||n(e.unlocked,2015)&&n(e.unlocked,2019)&&n(e.unlocked,2126)&&n(e.unlocked,2114)&&n(e.unlocked,2116)&&n(e.unlocked,2130)&&n(e.unlocked,2092)||n(e.unlocked,2017)&&n(e.unlocked,1973)&&n(e.unlocked,2128)&&n(e.unlocked,1927)&&n(e.unlocked,1975)&&n(e.unlocked,2130)&&n(e.unlocked,2074)||n(e.unlocked,2015)&&n(e.unlocked,2021)&&n(e.unlocked,2019)&&n(e.unlocked,2102)&&n(e.unlocked,2104)&&n(e.unlocked,2108)&&n(e.unlocked,2110)&&n(e.unlocked,2128)&&n(e.unlocked,2120)&&n(e.unlocked,2124)&&n(e.unlocked,2064)))}function de(e){return te(e)&&n(e.unlocked,946)&&(n(e.unlocked,843)||n(e.unlocked,845)||n(e.unlocked,9442)||n(e.unlocked,22251)||n(e.unlocked,946)&&(n(e.unlocked,54)||n(e.unlocked,56)))&&(n(e.unlocked,849)||n(e.unlocked,847)||n(e.unlocked,9444)||n(e.unlocked,1519)&&(n(e.unlocked,60)||n(e.unlocked,58)||n(e.unlocked,22254)))&&(n(e.unlocked,853)||n(e.unlocked,851)||n(e.unlocked,9448)||n(e.unlocked,1517)&&(n(e.unlocked,64)||n(e.unlocked,62)||n(e.unlocked,22257)))&&(n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,1515)&&(n(e.unlocked,68)||n(e.unlocked,66)||n(e.unlocked,22260)||n(e.unlocked,9452)))&&(n(e.unlocked,857)||n(e.unlocked,855)||n(e.unlocked,1515)&&(n(e.unlocked,68)||n(e.unlocked,66)||n(e.unlocked,22260)||n(e.unlocked,9452)))&&n(e.unlocked,1513)&&(n(e.unlocked,72)||n(e.unlocked,70)||n(e.unlocked,22263)||n(e.unlocked,21952))&&v(e)&&n(e.unlocked,19669)&&(n(e.unlocked,31049)||n(e.unlocked,22266))}function se(e){return ae(e)&&v(e)}function ie(e){return ee(e)}function ce(e){return!1}function P(e,l){const o=q[e];return o?y(o,l):!0}function $(e,l){return y(e,l)}function y(e,l){if(!e)return!0;if(typeof e=="string"){const o=G[e];return o?o(l):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(o=>y(o,l)):e.has?l.unlocked.includes(e.has):e.any?e.any.some(o=>y(o,l)):e.all?e.all.every(o=>y(o,l)):(console.warn("Unknown rule structure:",e),!1)}function N(e,l){const o=e.sources||{};if(o.shops||o.spawns)return!0;if(o.drops){for(const a of Object.keys(o.drops))if(P(a,l))return!0}if(o.other)for(const a of Object.keys(o.other)){const r=o.other[a].rule;if($(r,l))return!0}return!1}function O(e,l){const o=e.sources||{};return N(e,l)?o.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:o.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:o.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:o.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function ke(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const fe="chanceman",g="files";let m={rolled:null,unlocked:null};function U(){return new Promise((e,l)=>{const o=indexedDB.open(fe,1);o.onupgradeneeded=function(){o.result.createObjectStore(g)},o.onsuccess=()=>e(o.result),o.onerror=()=>l(o.error)})}async function L(e,l){const a=(await U()).transaction(g,"readwrite");return a.objectStore(g).put(l,e),a.complete}async function D(e){const l=await U();return new Promise(o=>{const r=l.transaction(g,"readonly").objectStore(g).get(e);r.onsuccess=()=>o(r.result),r.onerror=()=>o(null)})}const u={async init(){m.rolled=await D("rolled"),m.unlocked=await D("unlocked")},async setRolled(e){m.rolled=e,await L("rolled",e)},async setUnlocked(e){m.unlocked=e,await L("unlocked",e)},get rolled(){return m.rolled},get unlocked(){return m.unlocked}};async function pe(){const e=u.rolled,l=u.unlocked;if(!e||!l)return"<h1>Please upload your files on the Home page first.</h1>";const a=new URLSearchParams(window.location.search).get("id");if(!a)return"<h1>No item selected</h1>";const r=await fetch("/data/items.json").then(d=>d.json()),t=r.find(d=>d.id==a);return t?`
        <h1>${t.name}</h1>

        <div class="item-header">
            <img src="/images/${t.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${t.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${me(t.sources)}

        <h2>Processable into:</h2>
        ${ge(t.processable,r)}
    `:"<h1>Item not found</h1>"}function me(e={}){return["drops","other"].map(o=>`
        <div class="source-section">
            <h3>${he(o)}</h3>
            ${ye(o,e[o])}
        </div>
    `).join("")}function he(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ye(e,l){if(!l||Object.keys(l).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(l).map(([o,a])=>{const r=P(o,u)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${a.url}" target="_blank">${o}</a></td>
                            <td>${a.droprate}</td>
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
                ${Object.entries(l).map(([o,a])=>{const{notes:r,rule:t}=a,d=$(t,u)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${o}</td>
                            <td>${r}</td>
                            <td>${d}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function ge(e={},l){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([o,a])=>{const r=l.find(c=>c.id==o),d=a.split(",").map(c=>{const f=l.find(b=>b.id==c);return f?`<a onclick="navigate('/item?id=${c}')">${f.name}</a>`:c}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${o}')">${r.name}</a>
                        </td>
                        <td>${d}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function be(){const e=await fetch("/data/items.json").then(a=>a.json()),l=u.rolled||[],o=u.unlocked||[];return window.__itemsPageData={items:e,rolled:l,unlocked:o},`
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
    `}function we(){return"<h1>404 - Page Not Found</h1>"}function Ce(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function Se(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),a=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const t=JSON.parse(await o.files[0].text());await u.setRolled(t)}if(a.files[0]){const t=JSON.parse(await a.files[0].text());await u.setUnlocked(t)}r.textContent="Updated!"}catch{r.textContent="Error!"}});function ve(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const l=document.getElementById("app"),o=l.querySelector("#rolledInput"),a=l.querySelector("#unlockedInput"),r=l.querySelector("#status");try{if(o.files[0]){const t=JSON.parse(await o.files[0].text());await u.setRolled(t)}if(a.files[0]){const t=JSON.parse(await a.files[0].text());await u.setUnlocked(t)}r.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(t){console.error(t),r.textContent="Error reading files!"}});async function Ie(e){history.pushState({},"",e),i()}window.navigate=Ie;async function i(){const l=window.location.pathname.split("?")[0],a={"/":ve,"/items":be,"/item":pe,"/quests":Ce,"/reupload":Se}[l]||we,r=document.getElementById("app");l!=="/"?r.innerHTML=ke()+await a():r.innerHTML=await a(),Oe()}window.addEventListener("popstate",i);window.addEventListener("DOMContentLoaded",async()=>{await u.init(),i()});window.addEventListener("DOMContentLoaded",i);window.addEventListener("popstate",i);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),i())});function C(){const e=document.querySelectorAll("img.lazy-img"),l=new IntersectionObserver((o,a)=>{for(const r of o)if(r.isIntersecting){const t=r.target;t.src=t.dataset.src,t.classList.remove("lazy-img"),a.unobserve(t)}});e.forEach(o=>l.observe(o))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:l,rolled:o,unlocked:a}=e,r=document.getElementById("itemSearch"),t=document.getElementById("hideRolled");t.checked=!0;const d=document.getElementById("onlyUnlocked"),c=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const b=document.getElementById("itemGrid");if(!b)return;function p(){const H=r?.value.toLowerCase()||"",B=t?.checked||!1,_=d?.checked||!1,A=c?.checked||!1,F=f?.checked||!1;let S=l.filter(s=>{if(!s.name.toLowerCase().includes(H))return!1;const k=o.includes(s.id),h=a.includes(s.id);return!(B&&k||_&&!h||A&&!N(s,u)||F&&s.tags?.includes("clue-reward-only"))});S=S.sort((s,w)=>{const k=O(s,u),h=O(w,u);return k.rank!==h.rank?k.rank-h.rank:k.name.localeCompare(h.name)}),b.innerHTML=S.map(s=>{const w=o.includes(s.id),k=a.includes(s.id);return`
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
            `}).join(""),setTimeout(()=>C(),0)}r?.addEventListener("input",p),t?.addEventListener("input",p),d?.addEventListener("input",p),c?.addEventListener("input",p),f?.addEventListener("input",p),p()};window.addEventListener("DOMContentLoaded",async()=>{await u.init(),i()});window.addEventListener("popstate",()=>{i(),setTimeout(C,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),i(),setTimeout(C,0))});function Oe(){C(),typeof initItemsPage=="function"&&initItemsPage()}
