import{C as E,a as N}from"./config-BS53vI6F.js";let u=null;function h(e){return Number(e||0).toLocaleString()}function y(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function U(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function _(){const e=await fetch(`${E}/functions/v1/chancebook-public-data`,{headers:{apikey:N}}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||`Chancebook request failed (${e.status}).`);return n}function K(e,n,i){const b=new Map((n||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const s=b.get(Number(t.id))||0,p=i>0?s/i*100:0;return{...t,playerCount:s,percentage:p}}).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${y(String(t.name||"").toLowerCase())}"
            data-itemset="${(t.tags||[]).includes("itemset")}"
            data-flatpack="${(t.tags||[]).includes("flatpack")}"
            data-poisoned="${/\((?:p\+{0,2}|kp)\)$/i.test(String(t.name||"").trim())}"
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
                <strong>${h(t.playerCount)} / ${h(i)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function W(){return`
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
    `}async function Y(){Z();const e=document.getElementById("app");if(!e)return;let n=!0;u=()=>{n=!1};const i=e.querySelector("#chancebook-rolled-items-status"),b=e.querySelector("#chancebook-rolled-items-content"),k=e.querySelector("#chancebook-rolled-items-search"),t=e.querySelector("#chancebook-rolled-items-sort"),s=e.querySelector("#chancebook-rolled-items-hide-full"),p=e.querySelector("#chancebook-rolled-items-only-zero"),w=e.querySelector("#chancebook-rolled-items-hide-itemsets"),v=e.querySelector("#chancebook-rolled-items-hide-flatpacks"),S=e.querySelector("#chancebook-rolled-items-hide-poisoned"),q=e.querySelector("#chancebook-rolled-items-summary"),r=e.querySelector("#chancebook-rolled-items-list");try{let a=function(){const L=k.value.trim().toLowerCase(),H=t.value,A=s.checked,R=p.checked,j=w.checked,z=v.checked,P=S.checked;[...f].sort((o,l)=>{const d=Number(o.dataset.count),m=Number(l.dataset.count);return d!==m?H==="asc"?d-m:m-d:o.dataset.itemName.localeCompare(l.dataset.itemName)}).forEach(o=>{const l=Number(o.dataset.count),d=o.dataset.itemName.includes(L),m=x>0&&l>=x,B=l===0,O=o.dataset.itemset==="true",F=o.dataset.flatpack==="true",M=d&&!(A&&m)&&!(R&&!B)&&!(j&&O)&&!(z&&F)&&!(P&&o.dataset.poisoned==="true");o.hidden=!M,r.appendChild(o)});const $=f.filter(o=>!o.hidden).length;q.textContent=`Showing ${h($)} of ${h(f.length)} items`;let c=r.querySelector(".chancebook-item-count-empty");$===0?c||(c=document.createElement("p"),c.className="chancebook-item-count-empty",c.textContent="No items match your filters.",r.appendChild(c)):c&&c.remove()};const[g,C]=await Promise.all([U(),_()]);if(!n)return;const x=Number(C.contributorCount||0),I=K(g,C.rolledItemCounts,x);r.innerHTML=I;const f=[...r.querySelectorAll(".chancebook-item-count-row")];k.addEventListener("input",a),t.addEventListener("change",a),s.addEventListener("change",a),p.addEventListener("change",a),w.addEventListener("change",a),v.addEventListener("change",a),S.addEventListener("change",a),a(),b.hidden=!1,i.hidden=!0}catch(g){if(!n)return;i.innerHTML=`
            <span class="chancebook-error">
                ${y(g.message||"Could not load rolled item statistics.")}
            </span>
        `}}function Z(){typeof u=="function"&&(u(),u=null)}export{W as default,Y as init,Z as teardown};
