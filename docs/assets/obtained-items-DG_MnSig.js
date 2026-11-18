import{C,a as S}from"./config-BS53vI6F.js";let u=null;function h(e){return Number(e||0).toLocaleString()}function y(e){return String(e??"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}async function O(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function j(){const e=await fetch(`${C}/functions/v1/chancebook-public-data`,{headers:{apikey:S}}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||`Chancebook request failed (${e.status}).`);return o}function z(e,o,c){const b=new Map((o||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const i=b.get(Number(t.id))||0,p=c>0?i/c*100:0;return{...t,playerCount:i,percentage:p}}).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${y(String(t.name||"").toLowerCase())}"
            data-count="${t.playerCount}"
            data-percentage="${t.percentage}"
        >
            <span class="chancebook-item-count-image-wrap">
                <img
                    src="/images/${encodeURIComponent(t.image||"")}"
                    alt=""
                    loading="lazy"
                    onerror="this.hidden = true"
                >
            </span>

            <span class="chancebook-item-count-name">
                ${y(t.name)}
            </span>

            <span class="chancebook-item-count-details">
                <strong>${h(t.playerCount)} / ${h(c)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function P(){return`
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
        </style>

        <div class="chancebook-page chancebook-item-count-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Obtained Items</h1>
                    <p>How many participating chancers have obtained each item.</p>
                </div>
            </div>

            <div
                id="chancebook-obtained-items-status"
                class="chancebook-muted"
                role="status"
            >
                Loading obtained item statistics...
            </div>

            <div id="chancebook-obtained-items-content" hidden>
                <div class="chancebook-item-count-controls">
                    <input
                        id="chancebook-obtained-items-search"
                        class="chancebook-item-count-search"
                        type="search"
                        placeholder="Search items..."
                        aria-label="Search items"
                    >

                    <label class="chancebook-item-count-sort">
                        <span>Sort:</span>
                        <select id="chancebook-obtained-items-sort">
                            <option value="desc">Most to least</option>
                            <option value="asc">Least to most</option>
                        </select>
                    </label>

                    <div class="chancebook-item-count-filters">
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-full"
                                type="checkbox"
                            >
                            Hide items obtained by 100% of players
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-only-zero"
                                type="checkbox"
                            >
                            Only show items obtained by 0 players
                        </label>
                    </div>
                </div>

                <p
                    id="chancebook-obtained-items-summary"
                    class="chancebook-item-count-summary"
                ></p>

                <div
                    id="chancebook-obtained-items-list"
                    class="chancebook-item-count-list"
                ></div>
            </div>
        </div>
    `}async function U(){H();const e=document.getElementById("app");if(!e)return;let o=!0;u=()=>{o=!1};const c=e.querySelector("#chancebook-obtained-items-status"),b=e.querySelector("#chancebook-obtained-items-content"),g=e.querySelector("#chancebook-obtained-items-search"),t=e.querySelector("#chancebook-obtained-items-sort"),i=e.querySelector("#chancebook-obtained-items-hide-full"),p=e.querySelector("#chancebook-obtained-items-only-zero"),N=e.querySelector("#chancebook-obtained-items-summary"),r=e.querySelector("#chancebook-obtained-items-list");try{let s=function(){const $=g.value.trim().toLowerCase(),q=t.value,L=i.checked,I=p.checked;[...f].sort((n,d)=>{const l=Number(n.dataset.count),m=Number(d.dataset.count);return l!==m?q==="asc"?l-m:m-l:n.dataset.itemName.localeCompare(d.dataset.itemName)}).forEach(n=>{const d=Number(n.dataset.count),l=n.dataset.itemName.includes($),m=x>0&&d>=x,A=l&&!(L&&m)&&!(I&&!(d===0));n.hidden=!A,r.appendChild(n)});const v=f.filter(n=>!n.hidden).length;N.textContent=`Showing ${h(v)} of ${h(f.length)} items`;let a=r.querySelector(".chancebook-item-count-empty");v===0?a||(a=document.createElement("p"),a.className="chancebook-item-count-empty",a.textContent="No items match your filters.",r.appendChild(a)):a&&a.remove()};const[k,w]=await Promise.all([O(),j()]);if(!o)return;const x=Number(w.contributorCount||0),E=z(k,w.obtainedItemCounts,x);r.innerHTML=E;const f=[...r.querySelectorAll(".chancebook-item-count-row")];g.addEventListener("input",s),t.addEventListener("change",s),i.addEventListener("change",s),p.addEventListener("change",s),s(),b.hidden=!1,c.hidden=!0}catch(k){if(!o)return;c.innerHTML=`
            <span class="chancebook-error">
                ${y(k.message||"Could not load obtained item statistics.")}
            </span>
        `}}function H(){typeof u=="function"&&(u(),u=null)}export{P as default,U as init,H as teardown};
