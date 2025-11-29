(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function S(){return`
        <nav style="padding: 10px; border-bottom: 1px solid #ccc;">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const L={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Greater abyssal demon":["isNotSlayerLocked"],"Rewards Guardian":["canDoGuardiansOfTheRift"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayer2"]};function s(e,t){return e.includes(t)}const j={canCompleteDragonSlayer2(e){return!1},canReachAbyssalSire(e){return E(e)||I(e)},canDoGuardiansOfTheRift(e){return $(e)},isNotSlayerLocked(e){return!0}};function E(e){return b(e)}function b(e){return s(e.unlocked,1438)}function I(e){return C(e)&&O(e)&&s(e.unlocked,5329)&&s(e.unlocked,952)}function C(e){return s(e.unlocked,1351)&&s(e.unlocked,946)&&k()}function O(e){return s(e.unlocked,2961)&&s(e.unlocked,2355)&&s(e.unlocked,2976)&&k()}function $(e){return s(e.unlocked,1929)&&s(e.unlocked,1755)&&(s(e.unlocked,1265)||s(e.unlocked,1267))&&N(e)}function k(e){return!0}function N(e){return b(e)&&(s(e.unlocked,5525)||s(e.unlocked,1436)||s(e.unlocked,7936))}function R(e,t){const n=L[e];return n?p(n,t):!0}function P(e,t){p(e,t)}function p(e,t){if(!e)return!0;if(typeof e=="string"){const n=j[e];return n?n(t):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(n=>p(n,t)):e.has?t.unlocked.includes(e.has):e.any?e.any.some(n=>p(n,t)):e.all?e.all.every(n=>p(n,t)):(console.warn("Unknown rule structure:",e),!1)}const D="chanceman",f="files";let d={rolled:null,unlocked:null};function w(){return new Promise((e,t)=>{const n=indexedDB.open(D,1);n.onupgradeneeded=function(){n.result.createObjectStore(f)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function y(e,t){const o=(await w()).transaction(f,"readwrite");return o.objectStore(f).put(t,e),o.complete}async function g(e){const t=await w();return new Promise(n=>{const r=t.transaction(f,"readonly").objectStore(f).get(e);r.onsuccess=()=>n(r.result),r.onerror=()=>n(null)})}const c={async init(){d.rolled=await g("rolled"),d.unlocked=await g("unlocked")},async setRolled(e){d.rolled=e,await y("rolled",e)},async setUnlocked(e){d.unlocked=e,await y("unlocked",e)},get rolled(){return d.rolled},get unlocked(){return d.unlocked}};async function T(){const e=c.rolled,t=c.unlocked;if(!e||!t)return"<h1>Please upload your files on the Home page first.</h1>";const o=new URLSearchParams(window.location.search).get("id");if(!o)return"<h1>No item selected</h1>";const r=await fetch("/data/items.json").then(i=>i.json()),a=r.find(i=>i.id==o);return a?`
        <h1>${a.name}</h1>

        <div class="item-header">
            <img src="/images/${a.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${a.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${U(a.sources)}

        <h2>Processable into:</h2>
        ${B(a.processable,r)}
    `:"<h1>Item not found</h1>"}function U(e={}){return["drops","other"].map(n=>`
        <div class="source-section">
            <h3>${A(n)}</h3>
            ${q(n,e[n])}
        </div>
    `).join("")}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}function q(e,t){if(!t||Object.keys(t).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(t).map(([n,o])=>{const r=R(n,c)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${o.url}" target="_blank">${n}</a></td>
                            <td>${o.droprate}</td>
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
                ${Object.entries(t).map(([n,o])=>{const{notes:r,rule:a}=o,i=P(a,c)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${n}</td>
                            <td>${r}</td>
                            <td>${i}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function B(e={},t){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([n,o])=>{const r=t.find(u=>u.id==n),i=o.split(",").map(u=>{const h=t.find(v=>v.id==u);return h?`<a onclick="navigate('/item?id=${u}')">${h.name}</a>`:u}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${n}')">${r.name}</a>
                        </td>
                        <td>${i}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function _(){return`
        <h1>Items</h1>
        <div class="item-grid">
            ${(await fetch("/data/items.json").then(t=>t.json())).map(t=>`
                    <div
                        class="item-card"
                        onclick="navigate('/item?id=${t.id}')"
                    >
                        <img
                            class="lazy-img"
                            data-src="/images/${t.image}"
                            src="/images/placeholder.png"
                        >
                        <strong>${t.name}</strong>
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const t=document.getElementById("app"),n=t.querySelector("#rolledInput"),o=t.querySelector("#unlockedInput"),r=t.querySelector("#status");try{if(n.files[0]){const a=JSON.parse(await n.files[0].text());await c.setRolled(a)}if(o.files[0]){const a=JSON.parse(await o.files[0].text());await c.setUnlocked(a)}r.textContent="Updated!"}catch{r.textContent="Error!"}});function H(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const t=document.getElementById("app"),n=t.querySelector("#rolledInput"),o=t.querySelector("#unlockedInput"),r=t.querySelector("#status");try{if(n.files[0]){const a=JSON.parse(await n.files[0].text());await c.setRolled(a)}if(o.files[0]){const a=JSON.parse(await o.files[0].text());await c.setUnlocked(a)}r.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(a){console.error(a),r.textContent="Error reading files!"}});async function G(e){history.pushState({},"",e),l()}window.navigate=G;async function l(){const t=window.location.pathname.split("?")[0],o={"/":H,"/items":_,"/item":T,"/quests":F,"/reupload":z}[t]||M,r=document.getElementById("app");t!=="/"?r.innerHTML=S()+await o():r.innerHTML=await o(),Q()}window.addEventListener("popstate",l);window.addEventListener("DOMContentLoaded",async()=>{await c.init(),l()});window.addEventListener("DOMContentLoaded",l);window.addEventListener("popstate",l);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),l())});function m(){const e=document.querySelectorAll("img.lazy-img"),t=new IntersectionObserver((n,o)=>{for(const r of n)if(r.isIntersecting){const a=r.target;a.src=a.dataset.src,a.classList.remove("lazy-img"),o.unobserve(a)}});e.forEach(n=>t.observe(n))}window.addEventListener("DOMContentLoaded",async()=>{await c.init(),l()});window.addEventListener("popstate",()=>{l(),setTimeout(m,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),l(),setTimeout(m,0))});function Q(){m()}
