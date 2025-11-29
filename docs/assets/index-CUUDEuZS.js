(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();function S(){return`
        <nav style="padding: 10px; border-bottom: 1px solid #ccc;">
            <a data-link href="#/items">Items</a> |
            <a data-link href="#/quests">Quests</a> |
            <a data-link href="#/reupload">Reupload</a>
        </nav>
    `}const L={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Greater abyssal demon":["isNotSlayerLocked"],"Rewards Guardian":["canDoGuardiansOfTheRift"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayer2"]};function s(e,n){return e.includes(n)}const E={canCompleteDragonSlayer2(e){return!1},canReachAbyssalSire(e){return j(e)||I(e)},canDoGuardiansOfTheRift(e){return $(e)},isNotSlayerLocked(e){return!0}};function j(e){return b(e)}function b(e){return s(e.unlocked,1438)}function I(e){return C(e)&&O(e)&&s(e.unlocked,5329)&&s(e.unlocked,952)}function C(e){return s(e.unlocked,1351)&&s(e.unlocked,946)&&w()}function O(e){return s(e.unlocked,2961)&&s(e.unlocked,2355)&&s(e.unlocked,2976)&&w()}function $(e){return s(e.unlocked,1929)&&s(e.unlocked,1755)&&(s(e.unlocked,1265)||s(e.unlocked,1267))&&N(e)}function w(e){return!0}function N(e){return b(e)&&(s(e.unlocked,5525)||s(e.unlocked,1436)||s(e.unlocked,7936))}function R(e,n){const t=L[e];return t?f(t,n):!0}function P(e,n){f(e,n)}function f(e,n){if(!e)return!0;if(typeof e=="string"){const t=E[e];return t?t(n):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(t=>f(t,n)):e.has?n.unlocked.includes(e.has):e.any?e.any.some(t=>f(t,n)):e.all?e.all.every(t=>f(t,n)):(console.warn("Unknown rule structure:",e),!1)}const A="chanceman",h="files";let p={rolled:null,unlocked:null};function k(){return new Promise((e,n)=>{const t=indexedDB.open(A,1);t.onupgradeneeded=function(){t.result.createObjectStore(h)},t.onsuccess=()=>e(t.result),t.onerror=()=>n(t.error)})}async function g(e,n){const o=(await k()).transaction(h,"readwrite");return o.objectStore(h).put(n,e),o.complete}async function y(e){const n=await k();return new Promise(t=>{const a=n.transaction(h,"readonly").objectStore(h).get(e);a.onsuccess=()=>t(a.result),a.onerror=()=>t(null)})}const l={async init(){p.rolled=await y("rolled"),p.unlocked=await y("unlocked")},async setRolled(e){p.rolled=e,await g("rolled",e)},async setUnlocked(e){p.unlocked=e,await g("unlocked",e)},get rolled(){return p.rolled},get unlocked(){return p.unlocked}};async function D(){const e=l.rolled,n=l.unlocked;if(!e||!n)return"<h1>Please upload your files on the Home page first.</h1>";const o=window.location.hash.split("?")[1]||"",r=new URLSearchParams(o).get("id");if(!r)return"<h1>No item selected</h1>";const c=await fetch("data/items.json").then(u=>u.json()),i=c.find(u=>u.id==r);return i?`
        <h1>${i.name}</h1>

        <div class="item-header">
            <img src="images/${i.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${i.name}" target="_blank">
                <img src="images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${T(i.sources)}

        <h2>Processable into:</h2>
        ${B(i.processable,c)}
    `:"<h1>Item not found</h1>"}function T(e={}){return["drops","other"].map(t=>`
        <div class="source-section">
            <h3>${U(t)}</h3>
            ${q(t,e[t])}
        </div>
    `).join("")}function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(e,n){if(!n||Object.keys(n).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(n).map(([t,o])=>{const a=R(t,l)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${o.url}" target="_blank">${t}</a></td>
                            <td>${o.droprate}</td>
                            <td>${a}</td>
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
                ${Object.entries(n).map(([t,o])=>{const{notes:a,rule:r}=o,c=P(r,l)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${t}</td>
                            <td>${a}</td>
                            <td>${c}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function B(e={},n){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([t,o])=>{const a=n.find(i=>i.id==t),c=o.split(",").map(i=>{const u=n.find(v=>v.id==i);return u?`<a onclick="navigate('#/item?id=${i}')">${u.name}</a>`:i}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('#/item?id=${t}')">${a.name}</a>
                        </td>
                        <td>${c}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function _(){return`
        <h1>Items</h1>
        <div class="item-grid">
            ${(await fetch("data/items.json").then(n=>n.json())).map(n=>`
                    <div
                        class="item-card"
                        onclick="navigate('/item?id=${n.id}')"
                    >
                        <img
                            class="lazy-img"
                            data-src="images/${n.image}"
                            src="images/placeholder.png"
                        >
                        <strong>${n.name}</strong>
                    </div>
                `).join("")}
        </div>
    `}function M(){return"<h1>404 - Page Not Found</h1>"}function F(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function z(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const n=document.getElementById("app"),t=n.querySelector("#rolledInput"),o=n.querySelector("#unlockedInput"),a=n.querySelector("#status");try{if(t.files[0]){const r=JSON.parse(await t.files[0].text());await l.setRolled(r)}if(o.files[0]){const r=JSON.parse(await o.files[0].text());await l.setUnlocked(r)}a.textContent="Updated!"}catch{a.textContent="Error!"}});function H(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const n=document.getElementById("app"),t=n.querySelector("#rolledInput"),o=n.querySelector("#unlockedInput"),a=n.querySelector("#status");try{if(t.files[0]){const r=JSON.parse(await t.files[0].text());await l.setRolled(r)}if(o.files[0]){const r=JSON.parse(await o.files[0].text());await l.setUnlocked(r)}a.textContent="Files saved! Redirecting...",window.location.hash="/items",window.dispatchEvent(new PopStateEvent("popstate"))}catch(r){console.error(r),a.textContent="Error reading files!"}});async function G(e){window.location.hash=e}window.navigate=G;async function d(){const t=(window.location.hash||"#/").slice(1).split("?")[0],a={"/":H,"/items":_,"/item":D,"/quests":F,"/reupload":z}[t]||M,r=document.getElementById("app");t!=="/"?r.innerHTML=S()+await a():r.innerHTML=await a(),Q()}window.addEventListener("popstate",d);window.addEventListener("hashchange",d);window.addEventListener("DOMContentLoaded",async()=>{await l.init(),d()});window.addEventListener("DOMContentLoaded",d);window.addEventListener("popstate",d);window.addEventListener("hashchange",d);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),window.location.hash=e.target.getAttribute("href").replace("#",""))});function m(){const e=document.querySelectorAll("img.lazy-img"),n=new IntersectionObserver((t,o)=>{for(const a of t)if(a.isIntersecting){const r=a.target;r.src=r.dataset.src,r.classList.remove("lazy-img"),o.unobserve(r)}});e.forEach(t=>n.observe(t))}window.addEventListener("DOMContentLoaded",async()=>{await l.init(),d()});window.addEventListener("popstate",()=>{d(),setTimeout(m,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),window.location.hash=e.target.getAttribute("href").replace("#",""),d(),setTimeout(m,0))});function Q(){m()}
