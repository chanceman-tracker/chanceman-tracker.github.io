(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const M={"Abyssal demon (standard)":["isNotSlayerLocked"],"Abyssal demon (Wilderness Slayer Cave)":["isNotSlayerLocked"],"Abyssal Sire":{all:["isNotSlayerLocked","canReachAbyssalSire"]},"Greater abyssal demon":["isNotSlayerLocked"],"Rewards Guardian":["canDoGuardiansOfTheRift"],Unsired:{all:["isNotSlayerLocked","canReachAbyssalSire"]},Vorkath:["canCompleteDragonSlayer2"]};function s(e,n){return e.includes(n)}const _={canCompleteDragonSlayer2(e){return!1},canReachAbyssalSire(e){return A(e)||q(e)},canDoGuardiansOfTheRift(e){return F(e)},canTrainWoodcutting(e){return Q(e)},canTrainMining(e){return J(e)},isNotSlayerLocked(e){return!0}};function A(e){return E(e)}function E(e){return s(e.unlocked,1438)}function q(e){return z(e)&&H(e)&&s(e.unlocked,5329)&&s(e.unlocked,952)}function z(e){return s(e.unlocked,1351)&&s(e.unlocked,946)&&O()}function H(e){return s(e.unlocked,2961)&&s(e.unlocked,2355)&&s(e.unlocked,2976)&&O()}function F(e){return s(e.unlocked,1929)&&s(e.unlocked,1755)&&(s(e.unlocked,1265)||s(e.unlocked,1267))&&G(e)}function O(e){return!0}function G(e){return E(e)&&(s(e.unlocked,5525)||s(e.unlocked,1436)||s(e.unlocked,7936))}function Q(e){return s(e.unlocked,1351)||s(e.unlocked,1349)||s(e.unlocked,1353)}function J(e){return s(e.unlocked,1265)||s(e.unlocked,1267)||s(e.unlocked,1269)}function R(e,n){const t=M[e];return t?b(t,n):!0}function j(e,n){return b(e,n)}function b(e,n){if(!e)return!0;if(typeof e=="string"){const t=_[e];return t?t(n):(console.warn("Unknown rule:",e),!1)}return Array.isArray(e)?e.some(t=>b(t,n)):e.has?n.unlocked.includes(e.has):e.any?e.any.some(t=>b(t,n)):e.all?e.all.every(t=>b(t,n)):(console.warn("Unknown rule structure:",e),!1)}function $(e,n){const t=e.sources||{};if(t.shops||t.spawns)return!0;if(t.drops){for(const o of Object.keys(t.drops))if(R(o,n))return!0}if(t.other)for(const o of Object.keys(t.other)){const r=t.other[o].rule;if(j(r,n))return!0}return!1}function L(e,n){const t=e.sources||{};return $(e,n)?t.shops?{rank:1,type:"shop",name:e.name.toLowerCase()}:t.spawns?{rank:2,type:"spawn",name:e.name.toLowerCase()}:t.drops?{rank:3,type:"drop",name:e.name.toLowerCase()}:t.other?{rank:4,type:"other",name:e.name.toLowerCase()}:{rank:10,type:"other",name:e.name.toLowerCase()}:{rank:99,type:"zzz",name:e.name.toLowerCase()}}function W(){return`
        <nav class="header">
            <a data-link href="/items">Items</a> |
            <a data-link href="/quests">Quests</a> |
            <a data-link href="/reupload">Reupload</a>
        </nav>
    `}const K="chanceman",k="files";let m={rolled:null,unlocked:null};function P(){return new Promise((e,n)=>{const t=indexedDB.open(K,1);t.onupgradeneeded=function(){t.result.createObjectStore(k)},t.onsuccess=()=>e(t.result),t.onerror=()=>n(t.error)})}async function I(e,n){const o=(await P()).transaction(k,"readwrite");return o.objectStore(k).put(n,e),o.complete}async function C(e){const n=await P();return new Promise(t=>{const r=n.transaction(k,"readonly").objectStore(k).get(e);r.onsuccess=()=>t(r.result),r.onerror=()=>t(null)})}const i={async init(){m.rolled=await C("rolled"),m.unlocked=await C("unlocked")},async setRolled(e){m.rolled=e,await I("rolled",e)},async setUnlocked(e){m.unlocked=e,await I("unlocked",e)},get rolled(){return m.rolled},get unlocked(){return m.unlocked}};async function V(){const e=i.rolled,n=i.unlocked;if(!e||!n)return"<h1>Please upload your files on the Home page first.</h1>";const o=new URLSearchParams(window.location.search).get("id");if(!o)return"<h1>No item selected</h1>";const r=await fetch("/data/items.json").then(c=>c.json()),a=r.find(c=>c.id==o);return a?`
        <h1>${a.name}</h1>

        <div class="item-header">
            <img src="/images/${a.image}" style="margin: 1rem" />
            <a href="https://oldschool.runescape.wiki/w/${a.name}" target="_blank">
                <img src="/images/wiki.png" style="width: 32px" />
            </a>
        </div>

        <h2>Where to get it</h2>
        ${X(a.sources)}

        <h2>Processable into:</h2>
        ${x(a.processable,r)}
    `:"<h1>Item not found</h1>"}function X(e={}){return["drops","other"].map(t=>`
        <div class="source-section">
            <h3>${Y(t)}</h3>
            ${Z(t,e[t])}
        </div>
    `).join("")}function Y(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Z(e,n){if(!n||Object.keys(n).length===0)return"<p><em>No data.</em></p>";if(e==="drops")return`
            <table class="osrs-table">
                <tr>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${Object.entries(n).map(([t,o])=>{const r=R(t,i)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td><a href="${o.url}" target="_blank">${t}</a></td>
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
                ${Object.entries(n).map(([t,o])=>{const{notes:r,rule:a}=o,c=j(a,i)?'<span class="obtainable yes">✔</span>':'<span class="obtainable no">✘</span>';return`
                        <tr>
                            <td>${t}</td>
                            <td>${r}</td>
                            <td>${c}</td>
                        </tr>
                    `}).join("")}
            </table>
        `}function x(e={},n){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr>
                <th>Creates</th>
                <th>Ingredients</th>
            </tr>
            ${Object.entries(e).map(([t,o])=>{const r=n.find(u=>u.id==t),c=o.split(",").map(u=>{const f=n.find(g=>g.id==u);return f?`<a onclick="navigate('/item?id=${u}')">${f.name}</a>`:u}).join(", ");return`
                    <tr>
                        <td>
                            <a onclick="navigate('/item?id=${t}')">${r.name}</a>
                        </td>
                        <td>${c}</td>
                    </tr>
                `}).join("")}
        </table>
    `}async function ee(){const e=await fetch("/data/items.json").then(o=>o.json()),n=i.rolled||[],t=i.unlocked||[];return window.__itemsPageData={items:e,rolled:n,unlocked:t},`
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
    `}function te(){return"<h1>404 - Page Not Found</h1>"}function ne(){return`
        <h1>Quests</h1>
        <p>Quest integration coming later!</p>
    `}function re(){return`
        <h1>Reupload Files</h1>

        <p>Replace your chanceman_rolled.json and chanceman_unlocked.json files.</p>

        <input type="file" id="rolledInput" accept=".json"><br><br>
        <input type="file" id="unlockedInput" accept=".json"><br><br>

        <button id="saveBtn">Save</button>

        <p id="status"></p>
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const n=document.getElementById("app"),t=n.querySelector("#rolledInput"),o=n.querySelector("#unlockedInput"),r=n.querySelector("#status");try{if(t.files[0]){const a=JSON.parse(await t.files[0].text());await i.setRolled(a)}if(o.files[0]){const a=JSON.parse(await o.files[0].text());await i.setUnlocked(a)}r.textContent="Updated!"}catch{r.textContent="Error!"}});function ae(){return`
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
    `}document.addEventListener("click",async e=>{if(e.target.id!=="saveBtn")return;const n=document.getElementById("app"),t=n.querySelector("#rolledInput"),o=n.querySelector("#unlockedInput"),r=n.querySelector("#status");try{if(t.files[0]){const a=JSON.parse(await t.files[0].text());await i.setRolled(a)}if(o.files[0]){const a=JSON.parse(await o.files[0].text());await i.setUnlocked(a)}r.textContent="Files saved! Redirecting...",history.pushState(null,"","/items"),window.dispatchEvent(new PopStateEvent("popstate"))}catch(a){console.error(a),r.textContent="Error reading files!"}});async function oe(e){history.pushState({},"",e),d()}window.navigate=oe;async function d(){const n=window.location.pathname.split("?")[0],o={"/":ae,"/items":ee,"/item":V,"/quests":ne,"/reupload":re}[n]||te,r=document.getElementById("app");n!=="/"?r.innerHTML=W()+await o():r.innerHTML=await o(),se()}window.addEventListener("popstate",d);window.addEventListener("DOMContentLoaded",async()=>{await i.init(),d()});window.addEventListener("DOMContentLoaded",d);window.addEventListener("popstate",d);document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),d())});function v(){const e=document.querySelectorAll("img.lazy-img"),n=new IntersectionObserver((t,o)=>{for(const r of t)if(r.isIntersecting){const a=r.target;a.src=a.dataset.src,a.classList.remove("lazy-img"),o.unobserve(a)}});e.forEach(t=>n.observe(t))}window.initItemsPage=function(){const e=window.__itemsPageData;if(!e)return;const{items:n,rolled:t,unlocked:o}=e,r=document.getElementById("itemSearch"),a=document.getElementById("hideRolled");a.checked=!0;const c=document.getElementById("onlyUnlocked"),u=document.getElementById("onlyObtainable"),f=document.getElementById("hideClueRewardOnly");f.checked=!0;const g=document.getElementById("itemGrid");if(!g)return;function h(){const N=r?.value.toLowerCase()||"",U=a?.checked||!1,T=c?.checked||!1,B=u?.checked||!1,D=f?.checked||!1;let S=n.filter(l=>{if(!l.name.toLowerCase().includes(N))return!1;const p=t.includes(l.id),y=o.includes(l.id);return!(U&&p||T&&!y||B&&!$(l,i)||D&&l.tags?.includes("clue-reward-only"))});S=S.sort((l,w)=>{const p=L(l,i),y=L(w,i);return p.rank!==y.rank?p.rank-y.rank:p.name.localeCompare(y.name)}),g.innerHTML=S.map(l=>{const w=t.includes(l.id),p=o.includes(l.id);return`
                <div class="item-card" onclick="navigate('/item?id=${l.id}')">

                    ${w?'<span class="badge rolled">Rolled</span>':""}
                    ${p?'<span class="badge unlocked">Unlocked</span>':""}

                    <img
                        class="lazy-img item-image"
                        data-src="/images/${l.image}"
                        src="/images/placeholder.png"
                    >

                    ${l.name}
                </div>
            `}).join(""),setTimeout(()=>v(),0)}r?.addEventListener("input",h),a?.addEventListener("input",h),c?.addEventListener("input",h),u?.addEventListener("input",h),f?.addEventListener("input",h),h()};window.addEventListener("DOMContentLoaded",async()=>{await i.init(),d()});window.addEventListener("popstate",()=>{d(),setTimeout(v,0)});document.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),history.pushState(null,"",e.target.href),d(),setTimeout(v,0))});function se(){v(),typeof initItemsPage=="function"&&initItemsPage()}
