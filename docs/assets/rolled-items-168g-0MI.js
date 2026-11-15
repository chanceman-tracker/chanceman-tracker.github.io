import{C as d,a as u}from"./config-BS53vI6F.js";let c=null;function b(e){return Number(e||0).toLocaleString()}function r(e){return String(e??"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}async function f(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function k(){const e=await fetch(`${d}/functions/v1/chancebook-public-data`,{headers:{apikey:u}}),o=await e.json().catch(()=>({}));if(!e.ok)throw new Error(o.error||`Chancebook request failed (${e.status}).`);return o}function y(e,o){const n=new Map((o||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>({...t,playerCount:n.get(Number(t.id))||0})).sort((t,a)=>a.playerCount-t.playerCount||t.name.localeCompare(a.name)).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${r(t.name.toLowerCase())}"
        >
            <img
                src="/images/${encodeURIComponent(t.image)}"
                alt="${r(t.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
            <span class="chancebook-item-count-name">
                ${r(t.name)}
            </span>
            <strong class="chancebook-item-count-value">
                ${b(t.playerCount)}
            </strong>
        </a>
    `).join("")}async function g(){return`
        <div class="chancebook-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Most Rolled Items</h1>
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
                <input
                    id="chancebook-rolled-items-search"
                    type="search"
                    placeholder="Search items..."
                    aria-label="Search rolled items"
                >

                <div
                    id="chancebook-rolled-items-list"
                    class="chancebook-item-count-list"
                ></div>
            </div>
        </div>
    `}async function w(){v();const e=document.getElementById("app");if(!e)return;let o=!0;c=()=>{o=!1};const n=e.querySelector("#chancebook-rolled-items-status"),i=e.querySelector("#chancebook-rolled-items-content"),t=e.querySelector("#chancebook-rolled-items-search"),a=e.querySelector("#chancebook-rolled-items-list");try{const[s,m]=await Promise.all([f(),k()]);if(!o)return;const h=y(s,m.rolledItemCounts);a.innerHTML=h,i.hidden=!1,n.hidden=!0,t.addEventListener("input",()=>{if(!o)return;const p=t.value.trim().toLowerCase();a.querySelectorAll(".chancebook-item-count-row").forEach(l=>{l.hidden=!l.dataset.itemName.includes(p)})})}catch(s){if(!o)return;n.innerHTML=`
            <span class="chancebook-error">
                ${r(s.message||"Could not load rolled item statistics.")}
            </span>
        `}}function v(){typeof c=="function"&&(c(),c=null)}export{g as default,w as init,v as teardown};
