import{C as O,a as H}from"./config-BS53vI6F.js";import{f as q}from"./index-DTQ6dwaX.js";let I=null;const z="chancebookRolledItemsFilters";function Q(){const e={search:"",sort:"desc",hideFull:!1,onlyZero:!1,hideItemsets:!1,hideFlatpacks:!1,hidePoisoned:!1,onlyPersonal:!1,highlightPersonal:!1};try{const n=JSON.parse(localStorage.getItem(z)||"{}");return{...e,...n}}catch{return e}}function X(e){try{localStorage.setItem(z,JSON.stringify(e))}catch{}}function C(e){return Number(e||0).toLocaleString()}function R(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function ee(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function te(){const e=await fetch(`${O}/functions/v1/chancebook-public-data`,{headers:{apikey:H}}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||`Chancebook request failed (${e.status}).`);return n}function oe(e){e.querySelectorAll("img[data-src]").forEach(a=>{a.dataset.src&&(a.src=a.dataset.src,delete a.dataset.src)})}function ne(e,n,a){const E=new Map((n||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const r=E.get(Number(t.id))||0,d=a>0?r/a*100:0;return{...t,playerCount:r,percentage:d}}).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${R(String(t.name||"").toLowerCase())}"
            data-itemset="${(t.tags||[]).includes("itemset")}"
            data-flatpack="${(t.tags||[]).includes("flatpack")}"
            data-poisoned="${/\((?:p\+{0,2}|kp)\)$/i.test(String(t.name||"").trim())}"
            data-count="${t.playerCount}"
            data-percentage="${t.percentage}"
        >
            <span class="chancebook-item-count-image-wrap">
                <img
                    data-src="/images/${encodeURIComponent(t.image||"")}"
                    alt=""
                    loading="lazy"
                    onerror="this.hidden = true"
                >
            </span>

            <span class="chancebook-item-count-name">
                ${R(t.name)}
            </span>

            <span class="chancebook-item-count-details">
                <strong>${C(t.playerCount)} / ${C(a)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function re(){return`
        <style>
            .chancebook-item-count-page {
                width: 100%;
            }

            .chancebook-item-count-controls {
                display: grid;
                grid-template-columns: minmax(180px, 1fr) auto;
                gap: 12px 20px;
                align-items: center;
                margin: 20px 0;
                padding: 16px;
                border: 1px solid var(--border-color, #444);
                border-radius: 10px;
            }

            .chancebook-item-count-search {
                width: 100%;
                min-width: 0;
                box-sizing: border-box;
                padding: 10px 12px;
                border: 1px solid var(--border-color, #666);
                border-radius: 6px;
                background: var(--input-background, transparent);
                color: inherit;
                font: inherit;
            }

            .chancebook-item-count-filters {
                display: flex;
                flex-wrap: wrap;
                gap: 12px 20px;
                grid-column: 1 / -1;
            }

            .chancebook-item-count-filters label {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 0.9rem;
            }

            .chancebook-item-count-sort {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;
                white-space: nowrap;
            }

            .chancebook-item-count-sort select {
                max-width: 180px;
                padding: 9px 10px;
                border: 1px solid var(--border-color, #666);
                border-radius: 6px;
                background: var(--input-background, transparent);
                color: inherit;
                font: inherit;
            }

            .chancebook-item-count-summary {
                margin: 0 0 10px;
                font-size: 0.85rem;
                opacity: 0.75;
            }

            .chancebook-item-count-list {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .chancebook-item-count-row {
                display: grid;
                grid-template-columns: 42px minmax(0, 1fr) auto;
                align-items: center;
                gap: 12px;
                min-height: 54px;
                padding: 7px 12px;
                border: 1px solid transparent;
                border-radius: 7px;
                color: inherit;
                text-decoration: none;
                transition: background 0.15s, border-color 0.15s;
            }

            .chancebook-item-count-row:hover {
                background: var(--hover-background, rgba(128, 128, 128, 0.12));
                border-color: var(--border-color, #666);
            }

            .chancebook-item-count-image-wrap {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 42px;
                height: 42px;
            }

            .chancebook-item-count-image-wrap img {
                display: block;
                max-width: 36px;
                max-height: 36px;
                object-fit: contain;
                image-rendering: pixelated;
            }

            .chancebook-item-count-name {
                min-width: 0;
                overflow-wrap: anywhere;
            }

            .chancebook-item-count-details {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 2px;
                white-space: nowrap;
                font-variant-numeric: tabular-nums;
            }

            .chancebook-item-count-details strong {
                font-size: 0.95rem;
            }

            .chancebook-item-count-details small {
                font-size: 0.78rem;
                opacity: 0.7;
            }

            .chancebook-item-count-empty {
                padding: 24px 12px;
                text-align: center;
                opacity: 0.7;
            }

            .chancebook-item-count-row[hidden] {
                display: none !important;
            }

            @media (max-width: 600px) {
                .chancebook-item-count-controls {
                    grid-template-columns: 1fr;
                }

                .chancebook-item-count-sort {
                    justify-content: flex-start;
                }

                .chancebook-item-count-filters {
                    flex-direction: column;
                    gap: 12px;
                }

                .chancebook-item-count-row {
                    grid-template-columns: 36px minmax(0, 1fr) auto;
                    gap: 9px;
                    padding: 7px 8px;
                }

                .chancebook-item-count-image-wrap {
                    width: 36px;
                    height: 36px;
                }

                .chancebook-item-count-image-wrap img {
                    max-width: 32px;
                    max-height: 32px;
                }
            }

            .chancebook-item-count-row.is-personal-item {
                background: rgba(34, 197, 94, 0.10);
                border-color: rgba(34, 197, 94, 0.3);
            }

            .chancebook-item-count-row.is-personal-item:hover {
                background: rgba(34, 197, 94, 0.18);
            }
        </style>

        <div class="chancebook-page chancebook-item-count-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Rolled Items</h1>
                    <p>How many participating chancers have rolled each item.</p>
                </div>
            </div>

            <div
                id="chancebook-rolled-items-status"
                class="chancebook-muted"
                role="status"
            >
                Loading rolled item statistics...
            </div>

            <div id="chancebook-rolled-items-content" hidden>
                <div class="chancebook-item-count-controls">
                    <input
                        id="chancebook-rolled-items-search"
                        class="chancebook-item-count-search"
                        type="search"
                        placeholder="Search items..."
                        aria-label="Search items"
                    >

                    <label class="chancebook-item-count-sort">
                        <span>Sort:</span>
                        <select id="chancebook-rolled-items-sort">
                            <option value="desc">Most to least</option>
                            <option value="asc">Least to most</option>
                        </select>
                    </label>

                    <div class="chancebook-item-count-filters">
                        <label>
                            <input
                                id="chancebook-rolled-items-hide-full"
                                type="checkbox"
                            >
                            Hide items rolled by 100% of players
                        </label>

                        <label>
                            <input
                                id="chancebook-rolled-items-only-zero"
                                type="checkbox"
                            >
                            Only show items rolled by 0 players
                        </label>
                        <label>
                            <input
                                id="chancebook-rolled-items-hide-itemsets"
                                type="checkbox"
                            >
                            Hide item sets
                        </label>

                        <label>
                            <input
                                id="chancebook-rolled-items-hide-flatpacks"
                                type="checkbox"
                            >
                            Hide flatpacks
                        </label>
                        
                        <label>
                            <input
                                id="chancebook-rolled-items-hide-poisoned"
                                type="checkbox"
                            >
                            Hide poisoned weapons
                        </label>

                        <label>
                            <input
                                id="chancebook-rolled-items-only-personal"
                                type="checkbox"
                            >
                            Only show items I've rolled
                        </label>

                        <label>
                            <input
                                id="chancebook-rolled-items-highlight-personal"
                                type="checkbox"
                            >
                            Highlight items I've rolled
                        </label>
                    </div>
                </div>

                <p
                    id="chancebook-rolled-items-summary"
                    class="chancebook-item-count-summary"
                ></p>

                <div
                    id="chancebook-rolled-items-list"
                    class="chancebook-item-count-list"
                ></div>
            </div>
        </div>
    `}async function le(){ae();const e=document.getElementById("app");if(!e)return;let n=!0;I=()=>{n=!1};const a=e.querySelector("#chancebook-rolled-items-status"),E=e.querySelector("#chancebook-rolled-items-content"),m=e.querySelector("#chancebook-rolled-items-search"),t=e.querySelector("#chancebook-rolled-items-sort"),r=e.querySelector("#chancebook-rolled-items-hide-full"),d=e.querySelector("#chancebook-rolled-items-only-zero"),k=e.querySelector("#chancebook-rolled-items-hide-itemsets"),f=e.querySelector("#chancebook-rolled-items-hide-flatpacks"),y=e.querySelector("#chancebook-rolled-items-hide-poisoned"),j=e.querySelector("#chancebook-rolled-items-summary"),h=e.querySelector("#chancebook-rolled-items-list"),x=e.querySelector("#chancebook-rolled-items-only-personal"),v=e.querySelector("#chancebook-rolled-items-highlight-personal"),s=Q();m.value=s.search,t.value=s.sort,r.checked=s.hideFull,d.checked=s.onlyZero,k.checked=s.hideItemsets,f.checked=s.hideFlatpacks,y.checked=s.hidePoisoned,x.checked=s.onlyPersonal,v.checked=s.highlightPersonal;try{let c=function(){const i=m.value.trim().toLowerCase(),P=t.value,D=r.checked,M=d.checked,U=k.checked,Z=f.checked,K=y.checked,T=x.checked,J=v.checked;X({search:m.value,sort:t.value,hideFull:r.checked,onlyZero:d.checked,hideItemsets:k.checked,hideFlatpacks:f.checked,hidePoisoned:y.checked,onlyPersonal:x.checked,highlightPersonal:v.checked}),[...p].sort((o,u)=>{const b=Number(o.dataset.count),g=Number(u.dataset.count);return b!==g?P==="asc"?b-g:g-b:o.dataset.itemName.localeCompare(u.dataset.itemName)}).forEach(o=>{const u=Number(o.dataset.count),b=o.dataset.itemName.includes(i),g=L>0&&u>=L,Y=u===0,A=w.has(Number(o.getAttribute("href").match(/[?&]id=(\d+)/)?.[1]));o.classList.toggle("is-personal-item",J&&A);const V=o.dataset.itemset==="true",W=o.dataset.flatpack==="true",G=b&&!(D&&g)&&!(M&&!Y)&&!(U&&V)&&!(Z&&W)&&!(K&&o.dataset.poisoned==="true")&&(!T||A);o.hidden=!G,h.appendChild(o)}),oe(h);const $=p.filter(o=>!o.hidden).length;j.textContent=`Showing ${C($)} of ${C(p.length)} items`;let l=h.querySelector(".chancebook-item-count-empty");$===0?l||(l=document.createElement("p"),l.className="chancebook-item-count-empty",l.textContent="No items match your filters.",h.appendChild(l)):l&&l.remove()};const[N,F]=await Promise.all([ee(),te()]);if(!n)return;const L=Number(F.contributorCount||0),w=new Set((Array.isArray(q.rolled)?q.rolled:[]).map(Number).filter(Number.isFinite)),B=ne(N,F.rolledItemCounts,L);h.innerHTML=B;const p=[...h.querySelectorAll(".chancebook-item-count-row")],S=p.map(i=>Number(i.getAttribute("href").match(/[?&]id=(\d+)/)?.[1])),_=S.filter(i=>w.has(i));console.log("Rolled file entries:",q.rolled.length),console.log("Unique rolled IDs:",w.size),console.log("Rendered item rows:",p.length),console.log("Rows matching rolled IDs:",_.length),console.log("Rolled IDs missing from rendered rows:",[...w].filter(i=>!S.includes(i))),console.log("Rendered IDs duplicated:",S.filter((i,P)=>S.indexOf(i)!==P)),m.addEventListener("input",c),t.addEventListener("change",c),r.addEventListener("change",c),d.addEventListener("change",c),k.addEventListener("change",c),f.addEventListener("change",c),y.addEventListener("change",c),x.addEventListener("change",c),v.addEventListener("change",c),c(),E.hidden=!1,a.hidden=!0}catch(N){if(!n)return;a.innerHTML=`
            <span class="chancebook-error">
                ${R(N.message||"Could not load rolled item statistics.")}
            </span>
        `}}function ae(){typeof I=="function"&&(I(),I=null)}export{re as default,le as init,ae as teardown};
