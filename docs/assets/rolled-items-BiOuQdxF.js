import{C as $,a as A}from"./config-BS53vI6F.js";import{f as q}from"./index-BCs-xkYc.js";let p=null;function u(e){return Number(e||0).toLocaleString()}function y(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function Y(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function G(){const e=await fetch(`${$}/functions/v1/chancebook-public-data`,{headers:{apikey:A}}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||`Chancebook request failed (${e.status}).`);return n}function J(e,n,i){const b=new Map((n||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const r=b.get(Number(t.id))||0,h=i>0?r/i*100:0;return{...t,playerCount:r,percentage:h}}).map(t=>`
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
                <strong>${u(t.playerCount)} / ${u(i)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function te(){return`
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
    `}async function oe(){Q();const e=document.getElementById("app");if(!e)return;let n=!0;p=()=>{n=!1};const i=e.querySelector("#chancebook-rolled-items-status"),b=e.querySelector("#chancebook-rolled-items-content"),k=e.querySelector("#chancebook-rolled-items-search"),t=e.querySelector("#chancebook-rolled-items-sort"),r=e.querySelector("#chancebook-rolled-items-hide-full"),h=e.querySelector("#chancebook-rolled-items-only-zero"),v=e.querySelector("#chancebook-rolled-items-hide-itemsets"),w=e.querySelector("#chancebook-rolled-items-hide-flatpacks"),S=e.querySelector("#chancebook-rolled-items-hide-poisoned"),P=e.querySelector("#chancebook-rolled-items-summary"),s=e.querySelector("#chancebook-rolled-items-list"),C=e.querySelector("#chancebook-rolled-items-only-personal"),I=e.querySelector("#chancebook-rolled-items-highlight-personal");try{let a=function(){const O=k.value.trim().toLowerCase(),j=t.value,z=r.checked,B=h.checked,F=v.checked,M=w.checked,U=S.checked,_=C.checked,K=I.checked;[...x].sort((o,l)=>{const d=Number(o.dataset.count),m=Number(l.dataset.count);return d!==m?j==="asc"?d-m:m-d:o.dataset.itemName.localeCompare(l.dataset.itemName)}).forEach(o=>{const l=Number(o.dataset.count),d=o.dataset.itemName.includes(O),m=f>0&&l>=f,Z=l===0,L=H.has(Number(o.getAttribute("href").match(/[?&]id=(\d+)/)?.[1]));o.classList.toggle("is-personal-item",K&&L);const T=o.dataset.itemset==="true",D=o.dataset.flatpack==="true",W=d&&!(z&&m)&&!(B&&!Z)&&!(F&&T)&&!(M&&D)&&!(U&&o.dataset.poisoned==="true")&&(!_||L);o.hidden=!W,s.appendChild(o)});const E=x.filter(o=>!o.hidden).length;P.textContent=`Showing ${u(E)} of ${u(x.length)} items`;let c=s.querySelector(".chancebook-item-count-empty");E===0?c||(c=document.createElement("p"),c.className="chancebook-item-count-empty",c.textContent="No items match your filters.",s.appendChild(c)):c&&c.remove()};const[g,N]=await Promise.all([Y(),G()]);if(!n)return;const f=Number(N.contributorCount||0),H=new Set((Array.isArray(q.rolled)?q.rolled:[]).map(Number).filter(Number.isFinite)),R=J(g,N.rolledItemCounts,f);s.innerHTML=R;const x=[...s.querySelectorAll(".chancebook-item-count-row")];k.addEventListener("input",a),t.addEventListener("change",a),r.addEventListener("change",a),h.addEventListener("change",a),v.addEventListener("change",a),w.addEventListener("change",a),S.addEventListener("change",a),C.addEventListener("change",a),I.addEventListener("change",a),a(),b.hidden=!1,i.hidden=!0}catch(g){if(!n)return;i.innerHTML=`
            <span class="chancebook-error">
                ${y(g.message||"Could not load rolled item statistics.")}
            </span>
        `}}function Q(){typeof p=="function"&&(p(),p=null)}export{te as default,oe as init,Q as teardown};
