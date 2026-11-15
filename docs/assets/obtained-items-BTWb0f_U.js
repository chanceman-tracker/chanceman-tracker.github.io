import{C as l,a as u}from"./config-BS53vI6F.js";let c=null;function p(e){return Number(e||0).toLocaleString()}function i(e){return String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function f(){const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");return e.json()}async function k(){const e=await fetch(`${l}/functions/v1/chancebook-public-data`,{headers:{apikey:u}}),a=await e.json().catch(()=>({}));if(!e.ok)throw new Error(a.error||`Chancebook request failed (${e.status}).`);return a}function y(e,a){const o=new Map((a||[]).map(t=>[Number(t.itemId),Number(t.count||0)]));return e.map(t=>({...t,playerCount:o.get(Number(t.id))||0})).sort((t,n)=>n.playerCount-t.playerCount||t.name.localeCompare(n.name)).map(t=>`
        <a
            class="chancebook-item-count-row"
            data-link
            href="/item?id=${encodeURIComponent(t.id)}"
            data-item-name="${i(t.name.toLowerCase())}"
        >
            <img
                src="/images/${encodeURIComponent(t.image)}"
                alt="${i(t.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
            <span class="chancebook-item-count-name">
                ${i(t.name)}
            </span>
            <strong class="chancebook-item-count-value">
                ${p(t.playerCount)}
            </strong>
        </a>
    `).join("")}async function g(){return`
        <div class="chancebook-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Most Obtained Items</h1>
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
                <input
                    id="chancebook-obtained-items-search"
                    type="search"
                    placeholder="Search items..."
                    aria-label="Search obtained items"
                >

                <div
                    id="chancebook-obtained-items-list"
                    class="chancebook-item-count-list"
                ></div>
            </div>
        </div>
    `}async function w(){v();const e=document.getElementById("app");if(!e)return;let a=!0;c=()=>{a=!1};const o=e.querySelector("#chancebook-obtained-items-status"),r=e.querySelector("#chancebook-obtained-items-content"),t=e.querySelector("#chancebook-obtained-items-search"),n=e.querySelector("#chancebook-obtained-items-list");try{const[s,m]=await Promise.all([f(),k()]);if(!a)return;const h=y(s,m.obtainedItemCounts);n.innerHTML=h,r.hidden=!1,o.hidden=!0,t.addEventListener("input",()=>{if(!a)return;const b=t.value.trim().toLowerCase();n.querySelectorAll(".chancebook-item-count-row").forEach(d=>{d.hidden=!d.dataset.itemName.includes(b)})})}catch(s){if(!a)return;o.innerHTML=`
            <span class="chancebook-error">
                ${i(s.message||"Could not load obtained item statistics.")}
            </span>
        `}}function v(){typeof c=="function"&&(c(),c=null)}export{g as default,w as init,v as teardown};
