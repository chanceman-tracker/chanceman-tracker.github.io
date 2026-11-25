import{C as h,a as m}from"./config-BS53vI6F.js";let l=null;function t(a){return Number(a||0).toLocaleString()}function s(a){return String(a??"").replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}async function f(){const a=await fetch(`${h}/functions/v1/chancebook-public-data`,{headers:{apikey:m}}),o=await a.json().catch(()=>({}));if(!a.ok)throw new Error(o.error||`Chancebook request failed (${a.status}).`);return o}function i(a,o,n=""){return`
        <section class="chancebook-stat-card">
            <h3>${s(a)}</h3>
            <p class="chancebook-fun-stat-value">${s(o)}</p>
            ${n?`<small>${s(n)}</small>`:""}
        </section>
    `}function v(a,o){return!a||!a.itemId?`
            <div class="chancebook-tool-card">
                <div class="chancebook-tool-name">
                    ${s(a?.name||"Unknown tool")}
                </div>
                <small class="chancebook-muted">Item data unavailable</small>
            </div>
        `:`
        <div class="chancebook-tool-card">
            ${a.image?`
            <img
                class="chancebook-tool-image"
                src="/images/${encodeURIComponent(a.image)}"
                alt="${s(a.name)}"
                loading="lazy"
                onerror="this.hidden = true"
            >
        `:""}
            <div class="chancebook-tool-name">
                ${s(a.name)}
            </div>
            <div class="chancebook-tool-percentage">
                ${Number(a.percentage||0).toFixed(1)}%
            </div>
            <small class="chancebook-muted">
                ${t(a.count)} / ${t(o)} chancers
            </small>
        </div>
    `}function g(a){const o=a.toolWithoutOtherTool||{};return`
        <section class="chancebook-panel">
            <h2>Sad tool sounds</h2>
            <div class="chancebook-stat-grid">
                ${Object.entries({rakeWithoutSpade:"Rakes without a Spade",sawWithoutHammer:"Saws without a Hammer",herbloreWithoutVial:"Herblore without a Vial",plantpotWithoutTrowel:"Plant Pots without a Gardening Trowel",trowelWithoutPlantpot:"Gardening Trowels without a Plant Pot"}).map(([c,r])=>i(r,t(o[c]||0),"Chancers are very sad")).join("")}
            </div>
        </section>
    `}function d(a,o,n,e){return i(`${a} unlocked`,`${t(o)} / ${t(n)}`,`${Number(e||0).toFixed(1)}% of chancers`)}function $(a){const o=Number(a.contributorCount||0),n=a.funStats||{},e=Number(n.totalRolls||0),c=Number(n.ironmanCount||0),r=n.unlockCounts||{},u=n.unlockPercentages||{},b=(a.tools||[]).map(p=>v(p,o)).join(""),k=[d("Herblore",Number(r.herblore||0),o,u.herblore),d("Sailing",Number(r.sailing||0),o,u.sailing),d("Morytania",Number(r.morytania||0),o,u.morytania)].join("");return`
        <div class="chancebook-stat-grid chancebook-fun-summary">
            ${i("Participating chancers",t(o))}
            ${i("Total community rolls",t(e),"Includes duplicate rolls")}
            ${i("Ironman chancers",`${t(c)} / ${t(o)}`,o>0?`${Number(n.ironmanPercentage||0).toFixed(1)}% of chancers`:"No participating chancers yet")}
        </div>

        <section class="chancebook-panel">
            <h2>Community Unlocks</h2>
            <p class="chancebook-muted">
                How many participating chancers have unlocked areas/skills.
            </p>
            <div class="chancebook-stat-grid">
                ${k}
            </div>
        </section>

        <section class="chancebook-panel">
            <h2>Tool Collection</h2>
            <p class="chancebook-muted">
                Percentage of chancers who have rolled each tool.
            </p>
            <div class="chancebook-tool-grid">
                ${b}
            </div>
            ${g(n)}
        </section>
    `}async function y(){return`
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
    `}async function S(){C();const a=document.getElementById("app");if(!a)return;let o=!0;l=()=>{o=!1};const n=a.querySelector("#chancebook-fun-stats-status"),e=a.querySelector("#chancebook-fun-stats-content");try{const c=await f();if(!o)return;e.innerHTML=$(c),e.hidden=!1,n.hidden=!0}catch(c){if(!o)return;n.innerHTML=`
            <span class="chancebook-error">
                ${s(c.message||"Could not load Fun Stats.")}
            </span>
        `}}function C(){typeof l=="function"&&(l(),l=null)}export{y as default,S as init,C as teardown};
