import{C as A,a as H}from"./config-BS53vI6F.js";import{f as $}from"./index-OkH0wE2r.js";let p=null;function u(e){return Number(e||0).toLocaleString()}function x(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function G(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function J(){const e=await fetch(`${A}/functions/v1/chancebook-public-data`,{headers:{apikey:H}}),a=await e.json().catch(()=>({}));if(!e.ok)throw new Error(a.error||`Chancebook request failed (${e.status}).`);return a}function Q(e){e.querySelectorAll("img[data-src]").forEach(n=>{n.dataset.src&&(n.src=n.dataset.src,delete n.dataset.src)})}function X(e,a,n){const b=new Map((a||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const r=b.get(Number(t.id))||0,h=n>0?r/n*100:0;return{...t,playerCount:r,percentage:h}}).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${x(String(t.name||"").toLowerCase())}"
            data-itemset="${(t.tags||[]).includes("itemset")}"
            data-flatpack="${(t.tags||[]).includes("flatpack")}"
            data-clue-only="${(t.tags||[]).includes("clue-reward-only")}"
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
                ${x(t.name)}
            </span>

            <span class="chancebook-item-count-details">
                <strong>${u(t.playerCount)} / ${u(n)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function ne(){return`
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
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-itemsets"
                                type="checkbox"
                            >
                            Hide item sets
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-hide-flatpacks"
                                type="checkbox"
                            >
                            Hide flatpacks
                        </label>
                        
                        <label>
                            <input
                                id="chancebook-obtained-items-hide-poisoned"
                                type="checkbox"
                            >
                            Hide poisoned weapons
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-hide-clue"
                                type="checkbox"
                            >
                            Hide clue rewards
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-only-personal"
                                type="checkbox"
                            >
                            Only show items I haven't obtained
                        </label>

                        <label>
                            <input
                                id="chancebook-obtained-items-highlight-personal"
                                type="checkbox"
                            >
                            Highlight items I've obtained
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
    `}async function ce(){ee();const e=document.getElementById("app");if(!e)return;let a=!0;p=()=>{a=!1};const n=e.querySelector("#chancebook-obtained-items-status"),b=e.querySelector("#chancebook-obtained-items-content"),k=e.querySelector("#chancebook-obtained-items-search"),t=e.querySelector("#chancebook-obtained-items-sort"),r=e.querySelector("#chancebook-obtained-items-hide-full"),h=e.querySelector("#chancebook-obtained-items-only-zero"),v=e.querySelector("#chancebook-obtained-items-hide-itemsets"),w=e.querySelector("#chancebook-obtained-items-hide-flatpacks"),S=e.querySelector("#chancebook-obtained-items-hide-poisoned"),O=e.querySelector("#chancebook-obtained-items-summary"),s=e.querySelector("#chancebook-obtained-items-list"),C=e.querySelector("#chancebook-obtained-items-only-personal"),I=e.querySelector("#chancebook-obtained-items-highlight-personal"),E=e.querySelector("#chancebook-obtained-items-hide-clue");try{let c=function(){const z=k.value.trim().toLowerCase(),B=t.value,F=r.checked,R=h.checked,M=v.checked,U=w.checked,_=S.checked,K=C.checked,Z=I.checked,T=E.checked;[...f].sort((o,d)=>{const l=Number(o.dataset.count),m=Number(d.dataset.count);return l!==m?B==="asc"?l-m:m-l:o.dataset.itemName.localeCompare(d.dataset.itemName)}).forEach(o=>{const d=Number(o.dataset.count),l=o.dataset.itemName.includes(z),m=y>0&&d>=y,D=d===0,N=P.has(Number(o.getAttribute("href").match(/[?&]id=(\d+)/)?.[1]));o.classList.toggle("is-personal-item",Z&&N);const V=o.dataset.itemset==="true",W=o.dataset.flatpack==="true",Y=l&&!(F&&m)&&!(R&&!D)&&!(M&&V)&&!(U&&W)&&!(_&&o.dataset.poisoned==="true")&&(!K||!N)&&!(T&&o.dataset.clueOnly==="true");o.hidden=!Y,s.appendChild(o)}),Q(s);const L=f.filter(o=>!o.hidden).length;O.textContent=`Showing ${u(L)} of ${u(f.length)} items`;let i=s.querySelector(".chancebook-item-count-empty");L===0?i||(i=document.createElement("p"),i.className="chancebook-item-count-empty",i.textContent="No items match your filters.",s.appendChild(i)):i&&i.remove()};const[g,q]=await Promise.all([G(),J()]);if(!a)return;const y=Number(q.contributorCount||0),P=new Set((Array.isArray($.obtained)?$.obtained:[]).map(Number).filter(Number.isFinite)),j=X(g,q.obtainedItemCounts,y);s.innerHTML=j;const f=[...s.querySelectorAll(".chancebook-item-count-row")];k.addEventListener("input",c),t.addEventListener("change",c),r.addEventListener("change",c),h.addEventListener("change",c),v.addEventListener("change",c),w.addEventListener("change",c),S.addEventListener("change",c),C.addEventListener("change",c),I.addEventListener("change",c),E.addEventListener("change",c),c(),b.hidden=!1,n.hidden=!0}catch(g){if(!a)return;n.innerHTML=`
            <span class="chancebook-error">
                ${x(g.message||"Could not load obtained item statistics.")}
            </span>
        `}}function ee(){typeof p=="function"&&(p(),p=null)}export{ne as default,ce as init,ee as teardown};
