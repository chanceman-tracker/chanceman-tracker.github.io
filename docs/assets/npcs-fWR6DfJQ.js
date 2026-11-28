import{f as e,N as L,i as $}from"./index-Dao2Uj4N.js";import{b as T,g as k,a as P,f as B}from"./npcDropEntries-CZtuTWgN.js";function i(o){return String(o).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function D(o){return/^Reward casket \(/i.test(o||"")}async function H(){if(!e.player)return`
            <h1>NPC drops</h1>
            <p>Please upload your files and player name on the Upload page first.</p>
        `;await e.ensureItemsLoaded();const o=new URLSearchParams(window.location.search).get("npcSearch");o&&(await e.setFilters({...e.filters,npcSearch:o}),window.history.replaceState({},"",window.location.pathname));const a=e.filters||{},p=!!a.npcCollapseDrops,{entries:l,rolledSet:r}=await T({items:e.items||[],obtained:e.obtained||[],rolled:e.rolled||[],player:e.player,filters:a}),c=a.npcHideInaccessible?l.filter(t=>t.obtainable):l,d=c.map(t=>{const m=t.items.length,b=m===1?"item":"items",g=L[t.npcName]?.wiki,f=D(t.npcName)?'<span class="clue-step-info npc-drop-rate-info" tabindex="0" aria-label="Clue casket roll information" title="Chance for a new roll is per roll inside the casket, not per casket.">i</span>':"",h=g?`<a class="npc-drop-name-link" href="${g}" target="_blank" rel="noreferrer">${i(t.npcName)}</a>`:`<span class="npc-drop-name-text">${i(t.npcName)}</span>`;let N="";p||(N=t.items.sort((s,w)=>{const v=k(s.sources?.drops?.[t.npcName]),S=k(w.sources?.drops?.[t.npcName])-v;return S!==0?S:s.name.localeCompare(w.name)}).map(s=>{const w=s.sources?.drops?.[t.npcName],v=P(w),E=r.has(s.id);return`
                    <div class="npc-drop-item ${(e.obtained||[]).some(C=>Number(C.id??C)===Number(s.id))?"npc-drop-item--obtained":""}" onclick="navigate('/item?id=${s.id}')">
                        <img class="npc-drop-item-image" src="/images/${s.image}" alt="${i(s.name)}">
                        <span class="npc-drop-item-name">${i(s.name)}${i(v)}</span>
                        ${E?'<span class="badge rolled npc-drop-rolled">Rolled</span>':""}
                    </div>
                `}).join(""));const R=t.items.map(s=>s.name.toLowerCase()).join(" ");return`
            <article
                class="npc-drop-card"
                style="${t.obtainable?"":"border: 1px solid #dc2626; opacity: 0.8"}"
                data-name="${i(t.npcName.toLowerCase())}"
                data-items="${i(R)}"
            >
                <header class="npc-drop-card-header">
                    <div class="npc-drop-card-title">
                        <h2 class="npc-drop-name">${t.obtainable?"":"❌"} ${h}</h2>
                        
                    </div>
                    <span class="npc-drop-count">${m} ${b}</span>
                </header>
                <div class="npc-drop-rate">Chance to get a new roll: ${B(t.totalRateScore)}${f}</div>
                ${p?"":`
                    <div class="npc-drop-items">
                        ${N}
                    </div>
                `}
            </article>
        `}).join(""),u=c.length?"none":"";return`
        <h1>NPC drops</h1>
        <div class="npc-drop-filters">
            <label class="npc-drop-filter">
                <span>Search NPCs or items:</span>
                <input type="search" id="npcSearch" value="${i(a.npcSearch??"")}" placeholder="NPC or item name">
            </label>
            <label class="npc-drop-sort">
                <span class="npc-drop-sort-title">Sort by:</span>
                <span class="npc-drop-sort-label">Amount of new rolls</span>
                <span class="toggle-switch npc-sort-toggle">
                    <input type="checkbox" id="npcSortToggle" aria-label="Toggle NPC sort order">
                    <span class="toggle-slider" aria-hidden="true"></span>
                </span>
                <span class="npc-drop-sort-label">Chance for new roll</span>
            </label>
            <label class="npc-drop-filter npc-drop-filter--checkbox">
                <input type="checkbox" id="npcOnlyRolledToggle">
                <span>Show only rolled items</span>
            </label>
            <label class="npc-drop-filter npc-drop-filter--checkbox">
                <input type="checkbox" id="npcCollapseDropsToggle">
                <span>Collapse drops</span>
            </label>
            <label class="npc-drop-filter npc-drop-filter--checkbox">
                <input type="checkbox" id="npcHideInaccessibleToggle">
                <span>Hide inaccessible NPCs</span>
            </label>
            <label class="npc-drop-filter npc-drop-filter--checkbox">
                <input type="checkbox" id="npcShowObtainedToggle">
                <span>Show obtained items</span>
            </label>
            <div class="npc-filter" id="npcFilter">
                <button type="button" id="npcFilterToggle">Hide specific NPCs</button>
                <div class="npc-filter-panel" id="npcFilterPanel">
                    <input type="search" id="npcFilterSearch" placeholder="Search NPCs...">
                    <div class="npc-filter-actions">
                        <button type="button" id="npcFilterAll">All</button>
                        <button type="button" id="npcFilterNone">None</button>
                    </div>
                    <div class="npc-filter-list" id="npcFilterList"></div>
                    <div class="npc-filter-actions npc-filter-actions--apply">
                        <button type="button" id="npcFilterApply">Apply</button>
                    </div>
                </div>
            </div>
        </div>
        <p class="empty-state" id="npcEmptyState" style="display: ${u};">No NPCs with remaining drops for your current filters.</p>
        <section class="npc-drop-list" id="npcDropList">
            ${d}
        </section>
    `}function I(o){const a=(e.filters?.npcSearch||"").trim().toLowerCase(),p=o.querySelectorAll(".npc-drop-card");let l=0;for(const c of p){if(!a){c.style.display="",l+=1;continue}const d=c.dataset.name||"",u=c.dataset.items||"",t=d.includes(a)||u.includes(a);c.style.display=t?"":"none",t&&(l+=1)}const r=document.getElementById("npcEmptyState");r&&(r.style.display=l?"none":"")}let y=null;function A(){F();const o=document.getElementById("npcDropList");o&&I(o);const a=document.getElementById("npcSortToggle");a&&(a.checked=!!e.filters?.npcSortByRate);const p=document.getElementById("npcOnlyRolledToggle");p&&(p.checked=!!e.filters?.npcOnlyRolled);const l=document.getElementById("npcHideInaccessibleToggle");l&&(l.checked=!!e.filters?.npcHideInaccessible);const r=document.getElementById("npcShowObtainedToggle");r&&(r.checked=!!e.filters?.npcShowObtained);const c=document.getElementById("npcCollapseDropsToggle");c&&(c.checked=!!e.filters?.npcCollapseDrops),$(()=>window.dispatchEvent(new PopStateEvent("popstate")));const d=async n=>{n.target.id==="npcHideInaccessibleToggle"&&(await e.setFilters({...e.filters,npcHideInaccessible:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))},u=async n=>{n.target.id==="npcShowObtainedToggle"&&(await e.setFilters({...e.filters,npcShowObtained:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))},t=n=>{if(n.target.id!=="npcSearch")return;const f={...e.filters,npcSearch:n.target.value};e.setFilters(f);const h=document.getElementById("npcDropList");h&&I(h)},m=async n=>{if(n.target.id!=="npcSortToggle")return;const f=!e.filters?.npcSortByRate;await e.setFilters({...e.filters,npcSortByRate:f}),window.dispatchEvent(new PopStateEvent("popstate"))},b=async n=>{n.target.id==="npcOnlyRolledToggle"&&(await e.setFilters({...e.filters,npcOnlyRolled:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))},g=async n=>{n.target.id==="npcCollapseDropsToggle"&&(await e.setFilters({...e.filters,npcCollapseDrops:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))};document.addEventListener("input",t),document.addEventListener("input",m),document.addEventListener("input",b),document.addEventListener("input",d),document.addEventListener("input",u),document.addEventListener("input",g),y=()=>{document.removeEventListener("input",t),document.removeEventListener("input",m),document.removeEventListener("input",b),document.removeEventListener("input",d),document.removeEventListener("input",u),document.removeEventListener("input",g)}}function F(){typeof y=="function"&&y(),y=null}export{H as default,A as init,F as teardown};
