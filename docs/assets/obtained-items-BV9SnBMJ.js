import{C as $,a as H}from"./config-BS53vI6F.js";import{f as O}from"./index-Wf63KP9t.js";let S=null;const F="chancebookObtainedItemsFilters";function te(){const e={search:"",sort:"desc",hideAll:!1,hideZero:!1,onlyZero:!1,hideItemsets:!1,hideFlatpacks:!1,hidePoisoned:!1,hideClue:!1,onlyPersonal:!1,highlightPersonal:!1};try{const a=JSON.parse(localStorage.getItem(F)||"{}");return{...e,...a}}catch{return e}}function oe(e){try{localStorage.setItem(F,JSON.stringify(e))}catch{}}function I(e){return Number(e||0).toLocaleString()}function N(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function ae(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function ne(){const e=await fetch(`${$}/functions/v1/chancebook-public-data`,{headers:{apikey:H}}),a=await e.json().catch(()=>({}));if(!e.ok)throw new Error(a.error||`Chancebook request failed (${e.status}).`);return a}function ce(e){e.querySelectorAll("img[data-src]").forEach(c=>{c.dataset.src&&(c.src=c.dataset.src,delete c.dataset.src)})}function ie(e,a,c){const C=new Map((a||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>{const s=C.get(Number(t.id))||0,d=c>0?s/c*100:0;return{...t,playerCount:s,percentage:d}}).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${N(String(t.name||"").toLowerCase())}"
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
                ${N(t.name)}
            </span>

            <span class="chancebook-item-count-details">
                <strong>${I(t.playerCount)} / ${I(c)}</strong>
                <small>${t.percentage.toFixed(1)}%</small>
            </span>
        </a>
    `).join("")}async function he(){return`
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
                                id="chancebook-obtained-items-hide-zero"
                                type="checkbox"
                            >
                            Hide items obtained by 0% of players
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
    `}async function me(){se();const e=document.getElementById("app");if(!e)return;let a=!0;S=()=>{a=!1};const c=e.querySelector("#chancebook-obtained-items-status"),C=e.querySelector("#chancebook-obtained-items-content"),m=e.querySelector("#chancebook-obtained-items-search"),t=e.querySelector("#chancebook-obtained-items-sort"),s=e.querySelector("#chancebook-obtained-items-hide-full"),d=e.querySelector("#chancebook-obtained-items-hide-zero"),b=e.querySelector("#chancebook-obtained-items-only-zero"),k=e.querySelector("#chancebook-obtained-items-hide-itemsets"),g=e.querySelector("#chancebook-obtained-items-hide-flatpacks"),y=e.querySelector("#chancebook-obtained-items-hide-poisoned"),Z=e.querySelector("#chancebook-obtained-items-summary"),l=e.querySelector("#chancebook-obtained-items-list"),f=e.querySelector("#chancebook-obtained-items-only-personal"),x=e.querySelector("#chancebook-obtained-items-highlight-personal"),v=e.querySelector("#chancebook-obtained-items-hide-clue"),i=te();m.value=i.search,t.value=i.sort,s.checked=i.hideAll,d.checked=i.hideZero,b.checked=i.onlyZero,k.checked=i.hideItemsets,g.checked=i.hideFlatpacks,y.checked=i.hidePoisoned,v.checked=i.hideClue,f.checked=i.onlyPersonal,x.checked=i.highlightPersonal;try{let n=function(){const B=m.value.trim().toLowerCase(),R=t.value,_=s.checked,M=d.checked,U=b.checked,K=k.checked,T=g.checked,D=y.checked,J=f.checked,Y=x.checked,V=v.checked;oe({search:m.value,sort:t.value,hideAll:s.checked,hideZero:d.checked,onlyZero:b.checked,hideItemsets:k.checked,hideFlatpacks:g.checked,hidePoisoned:y.checked,hideClue:v.checked,onlyPersonal:f.checked,highlightPersonal:x.checked}),[...P].sort((o,h)=>{const p=Number(o.dataset.count),u=Number(h.dataset.count);return p!==u?R==="asc"?p-u:u-p:o.dataset.itemName.localeCompare(h.dataset.itemName)}).forEach(o=>{const h=Number(o.dataset.count),p=o.dataset.itemName.includes(B),u=w>0&&h>=w,W=w>0&&h===0,G=h===0,A=z.has(Number(o.getAttribute("href").match(/[?&]id=(\d+)/)?.[1]));o.classList.toggle("is-personal-item",Y&&A);const Q=o.dataset.itemset==="true",X=o.dataset.flatpack==="true",ee=p&&!(_&&u)&&!(M&&W)&&!(U&&!G)&&!(K&&Q)&&!(T&&X)&&!(D&&o.dataset.poisoned==="true")&&(!J||!A)&&!(V&&o.dataset.clueOnly==="true");o.hidden=!ee,l.appendChild(o)}),ce(l);const q=P.filter(o=>!o.hidden).length;Z.textContent=`Showing ${I(q)} of ${I(P.length)} items`;let r=l.querySelector(".chancebook-item-count-empty");q===0?r||(r=document.createElement("p"),r.className="chancebook-item-count-empty",r.textContent="No items match your filters.",l.appendChild(r)):r&&r.remove()};const[E,L]=await Promise.all([ae(),ne()]);if(!a)return;const w=Number(L.contributorCount||0),z=new Set((Array.isArray(O.obtained)?O.obtained:[]).map(Number).filter(Number.isFinite)),j=ie(E,L.obtainedItemCounts,w);l.innerHTML=j;const P=[...l.querySelectorAll(".chancebook-item-count-row")];m.addEventListener("input",n),t.addEventListener("change",n),s.addEventListener("change",n),d.addEventListener("change",n),b.addEventListener("change",n),k.addEventListener("change",n),g.addEventListener("change",n),y.addEventListener("change",n),f.addEventListener("change",n),x.addEventListener("change",n),v.addEventListener("change",n),n(),C.hidden=!1,c.hidden=!0}catch(E){if(!a)return;c.innerHTML=`
            <span class="chancebook-error">
                ${N(E.message||"Could not load obtained item statistics.")}
            </span>
        `}}function se(){typeof S=="function"&&(S(),S=null)}export{he as default,me as init,se as teardown};
