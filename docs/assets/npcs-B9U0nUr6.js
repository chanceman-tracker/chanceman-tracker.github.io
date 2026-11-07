import{f as e,N as k,i as L}from"./index-Bb0iHhTT.js";import{b as $,g as N,a as P,f as D}from"./npcDropEntries-gP73rsMo.js";function i(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function T(s){return/^Reward casket \(/i.test(s||"")}async function H(){if(!e.player)return`
            <h1>NPC drops</h1>
            <p>Please upload your files and player name on the Upload page first.</p>
        `;await e.ensureItemsLoaded();const s=new URLSearchParams(window.location.search).get("npcSearch");s&&(await e.setFilters({...e.filters,npcSearch:s}),window.history.replaceState({},"",window.location.pathname));const a=e.filters||{},p=!!a.npcCollapseDrops,{entries:c,rolledSet:r}=await $({items:e.items||[],obtained:e.obtained||[],rolled:e.rolled||[],player:e.player,filters:a}),l=a.npcHideInaccessible?c.filter(t=>t.obtainable):c,d=l.map(t=>{const f=t.items.length,n=f===1?"item":"items",m=k[t.npcName]?.wiki,E=T(t.npcName)?'<span class="clue-step-info npc-drop-rate-info" tabindex="0" aria-label="Clue casket roll information" title="Chance for a new roll is per roll inside the casket, not per casket.">i</span>':"",R=m?`<a class="npc-drop-name-link" href="${m}" target="_blank" rel="noreferrer">${i(t.npcName)}</a>`:`<span class="npc-drop-name-text">${i(t.npcName)}</span>`;let v="";p||(v=t.items.sort((o,g)=>{const y=N(o.sources?.drops?.[t.npcName]),S=N(g.sources?.drops?.[t.npcName])-y;return S!==0?S:o.name.localeCompare(g.name)}).map(o=>{const g=o.sources?.drops?.[t.npcName],y=P(g),w=r.has(o.id);return`
                    <div class="npc-drop-item" onclick="navigate('/item?id=${o.id}')">
                        <img class="npc-drop-item-image" src="/images/${o.image}" alt="${i(o.name)}">
                        <span class="npc-drop-item-name">${i(o.name)}${i(y)}</span>
                        ${w?'<span class="badge rolled npc-drop-rolled">Rolled</span>':""}
                    </div>
                `}).join(""));const I=t.items.map(o=>o.name.toLowerCase()).join(" ");return`
            <article
                class="npc-drop-card"
                style="${t.obtainable?"":"border: 1px solid #dc2626; opacity: 0.8"}"
                data-name="${i(t.npcName.toLowerCase())}"
                data-items="${i(I)}"
            >
                <header class="npc-drop-card-header">
                    <div class="npc-drop-card-title">
                        <h2 class="npc-drop-name">${t.obtainable?"":"❌"} ${R}</h2>
                        
                    </div>
                    <span class="npc-drop-count">${f} ${n}</span>
                </header>
                <div class="npc-drop-rate">Chance to get a new roll: ${D(t.totalRateScore)}${E}</div>
                ${p?"":`
                    <div class="npc-drop-items">
                        ${v}
                    </div>
                `}
            </article>
        `}).join(""),u=l.length?"none":"";return`
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
    `}function C(s){const a=(e.filters?.npcSearch||"").trim().toLowerCase(),p=s.querySelectorAll(".npc-drop-card");let c=0;for(const l of p){if(!a){l.style.display="",c+=1;continue}const d=l.dataset.name||"",u=l.dataset.items||"",t=d.includes(a)||u.includes(a);l.style.display=t?"":"none",t&&(c+=1)}const r=document.getElementById("npcEmptyState");r&&(r.style.display=c?"none":"")}let h=null;function A(){B();const s=document.getElementById("npcDropList");s&&C(s);const a=document.getElementById("npcSortToggle");a&&(a.checked=!!e.filters?.npcSortByRate);const p=document.getElementById("npcOnlyRolledToggle");p&&(p.checked=!!e.filters?.npcOnlyRolled);const c=document.getElementById("npcHideInaccessibleToggle");c&&(c.checked=!!e.filters?.npcHideInaccessible);const r=document.getElementById("npcCollapseDropsToggle");r&&(r.checked=!!e.filters?.npcCollapseDrops),L(()=>window.dispatchEvent(new PopStateEvent("popstate")));const l=async n=>{n.target.id==="npcHideInaccessibleToggle"&&(await e.setFilters({...e.filters,npcHideInaccessible:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))},d=n=>{if(n.target.id!=="npcSearch")return;const m={...e.filters,npcSearch:n.target.value};e.setFilters(m);const b=document.getElementById("npcDropList");b&&C(b)},u=async n=>{if(n.target.id!=="npcSortToggle")return;const m=!e.filters?.npcSortByRate;await e.setFilters({...e.filters,npcSortByRate:m}),window.dispatchEvent(new PopStateEvent("popstate"))},t=async n=>{n.target.id==="npcOnlyRolledToggle"&&(await e.setFilters({...e.filters,npcOnlyRolled:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))},f=async n=>{n.target.id==="npcCollapseDropsToggle"&&(await e.setFilters({...e.filters,npcCollapseDrops:n.target.checked}),window.dispatchEvent(new PopStateEvent("popstate")))};document.addEventListener("input",d),document.addEventListener("input",u),document.addEventListener("input",t),document.addEventListener("input",l),document.addEventListener("input",f),h=()=>{document.removeEventListener("input",d),document.removeEventListener("input",u),document.removeEventListener("input",t),document.removeEventListener("input",l),document.removeEventListener("input",f)}}function B(){typeof h=="function"&&h(),h=null}export{H as default,A as init,B as teardown};
