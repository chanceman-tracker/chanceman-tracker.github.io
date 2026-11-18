import{C as b,a as k}from"./config-BS53vI6F.js";let m=new Map,l=null;const C=["Knife","Hammer","Saw","Tinderbox","Bucket","Spade","Chisel","Pestle and mortar","Vial of water","Rake","Lockpick","Gardening trowel","Secateurs","Watering can","Small fishing net","Big fishing net","Fishing rod","Fly fishing rod","Lobster pot","Bird snare","Box trap","Insect net","Net trap","Noose wand","Teasing stick"];function t(e){return Number(e||0).toLocaleString()}function s(e){return String(e??"").replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}async function S(){if(m.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const n=await e.json();m=new Map(n.map(o=>[Number(o.id),o]))}async function w(){const e=await fetch(`${b}/functions/v1/chancebook-public-data`,{headers:{apikey:k}}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error||`Chancebook request failed (${e.status}).`);return n}function f(e){return String(e||"").toLowerCase().replace(/[^a-z0-9]/g,"")}function y(e){const n=f(e);return[...m.values()].find(o=>f(o.name)===n)}function i(e,n,o=""){return`
        <section class="chancebook-stat-card">
            <h3>${s(e)}</h3>
            <p class="chancebook-fun-stat-value">${s(n)}</p>
            ${o?`<small>${s(o)}</small>`:""}
        </section>
    `}function N(e,n,o,a){if(!n)return`
            <div class="chancebook-tool-card">
                <div class="chancebook-tool-name">${s(e)}</div>
                <small class="chancebook-muted">Item data unavailable</small>
            </div>
        `;const c=a>0?o/a*100:0;return`
        <div class="chancebook-tool-card">
            <img
                class="chancebook-tool-image"
                src="/images/${encodeURIComponent(n.image)}"
                alt="${s(n.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
            <div class="chancebook-tool-name">
                ${s(n.name)}
            </div>
            <div class="chancebook-tool-percentage">
                ${c.toFixed(1)}%
            </div>
            <small class="chancebook-muted">
                ${t(o)} / ${t(a)} chancers
            </small>
        </div>
    `}function T(e){const n=e.toolWithoutOtherTool||[];return n.length?`
        <section class="chancebook-panel">
            <h2>Sad tool sounds</h2>
            <div class="chancebook-stat-grid">
                ${n.map(o=>i(o.name,t(o.count),"Chancers are very sad")).join("")}
            </div>
        </section>
    `:""}function h(e,n,o){const a=o>0?n/o*100:0;return i(`${e} unlocked`,`${t(n)} / ${t(o)}`,`${a.toFixed(1)}% of chancers`)}function I(e){const n=Number(e.contributorCount||0),o=e.funStats||{},a=Number(o.totalRolls||0),c=Number(o.ironmanCount||0),d=o.unlockCounts||{},p=new Map((e.rolledItemCounts||[]).map(r=>[Number(r.itemId),Number(r.count||0)])),g=C.map(r=>{const u=y(r),$=u&&p.get(Number(u.id))||0;return N(r,u,$,n)}).join(""),v=[h("Herblore",Number(d.herblore||0),n),h("Sailing",Number(d.sailing||0),n),h("Morytania",Number(d.morytania||0),n)].join("");return`
        <div class="chancebook-stat-grid chancebook-fun-summary">
            ${i("Participating chancers",t(n))}
            ${i("Total community rolls",t(a),"Includes duplicate rolls")}
            ${i("Ironman chancers",`${t(c)} / ${t(n)}`,n>0?`${(c/n*100).toFixed(1)}% of chancers`:"No participating chancers yet")}
        </div>

        <section class="chancebook-panel">
            <h2>Community Unlocks</h2>
            <p class="chancebook-muted">
                How many participating chancers have unlocked areas/skills.
            </p>
            <div class="chancebook-stat-grid">
                ${v}
            </div>
        </section>

        <section class="chancebook-panel">
            <h2>Tool Collection</h2>
            <p class="chancebook-muted">
                Percentage of chancers who have rolled each tool.
            </p>
            <div class="chancebook-tool-grid">
                ${g}
            </div>
            ${T(o)}
            
           
        </section>
    `}async function F(){return`
        <div class="chancebook-page">
            <div class="chancebook-profile-back">
                <a data-link href="/chancebook">← Chancebook</a>
            </div>

            <div class="chancebook-heading">
                <div>
                    <h1>Fun Stats!</h1>
                    <p>Some numbers from the Chanceman community.</p>
                </div>
            </div>

            <div
                id="chancebook-fun-stats-status"
                class="chancebook-muted"
                role="status"
            >
                Loading community statistics...
            </div>

            <div id="chancebook-fun-stats-content" hidden></div>
        </div>
    `}async function H(){B();const e=document.getElementById("app");if(!e)return;let n=!0;l=()=>{n=!1};const o=e.querySelector("#chancebook-fun-stats-status"),a=e.querySelector("#chancebook-fun-stats-content");try{if(await Promise.all([S()]),!n)return;const c=await w();if(!n)return;a.innerHTML=I(c),a.hidden=!1,o.hidden=!0}catch(c){if(!n)return;o.innerHTML=`
            <span class="chancebook-error">
                ${s(c.message||"Could not load Fun Stats.")}
            </span>
        `}}function B(){typeof l=="function"&&(l(),l=null)}export{F as default,H as init,B as teardown};
