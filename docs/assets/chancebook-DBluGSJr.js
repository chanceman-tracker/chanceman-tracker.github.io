import{_ as D,f as p}from"./index-BDFR3YA_.js";import{C as x,a as M}from"./config-BS53vI6F.js";const q=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],U="chancebookRulesets",H=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],j=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Completing a quest grants one (1) quest item roll.","Completing 5 combat achievements grants one (1) quest item roll (OR 10, 15 or 1 tier (Easy, Medium, Hard etc) depending on your wanted skill lvl).","For untradeable combination items that require one or more tradable items, those tradable items are listed individually (for hangover cure: snape grass, chocolate dust and bucket of milk are on the list).","For tradable combination items, only the combination item is listed (Potatoes(10) is listed instead of potato and sack).","When a non-specified item is needed (for instance, an axe), the lowest tier version of the item is listed (e.g. bronze axe).","When eventually Jagex adds more quests they might need another quest item roll, then it is added to the list to be rolled."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Unlock Herblore, Morytania and Sailing by default."]}];function K(){try{const e=JSON.parse(localStorage.getItem(U)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function W(e){try{localStorage.setItem(U,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function L(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function F(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${d(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function O(e,t){return e.map(o=>`
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${t}"
                    value="${o.id}"
                >
                ${d(o.label)}
            </label>
            ${F(o.info)}
        </div>
    `).join("")}function J(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],i=H.filter(r=>t.includes(r.id)),c=j.filter(r=>o.includes(r.id));if(!i.length&&!c.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const a=r=>r.length?r.map(n=>`
            <div class="chancebook-profile-rule">
                <span>${d(n.label)}</span>
                ${F(n.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${a(i)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${a(c)}
                </div>
            </div>
        </div>
    `}let P=null,R=null,g=new Map;function d(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function u(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}function f(){return D(async()=>{const{createClient:e}=await import("https://esm.sh/@supabase/supabase-js@2");return{createClient:e}},[]).then(({createClient:e})=>(P||(P=e(x,M,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}})),P))}async function z(){if(g.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();g=new Map(t.map(o=>[Number(o.id),o]))}function Q(e,t,o){const i=g.get(Number(e));return i?`
        <a class="chancebook-item" data-link href="/item?id=${Number(i.id)}" title="${d(i.name)}">
            <img src="/images/${encodeURIComponent(i.image)}" alt="" loading="lazy">
            <span>${d(i.name)}</span>
            <strong>${u(t)}</strong>
        </a>
    `:`<div class="chancebook-item"><span>Item #${d(e)}</span><strong>${u(t)}</strong></div>`}function $(e,t,o){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?Q(t.itemId,t.count):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${u(t.tiedCount-1)} other items tied for this spot for ${u(t.count)} players</small>`:""}
                <small>${u(t.count)} contributing players</small>
            `:""}
        </section>
    `}function w(e=[],t="max"){const o=e.filter(n=>g.has(Number(n.itemId))&&Number(n.count)>0);if(!o.length)return null;const i=t==="max"?Math.max(...o.map(n=>Number(n.count))):Math.min(...o.map(n=>Number(n.count))),c=o.filter(n=>Number(n.count)===i),a=Math.floor(Math.random()*c.length);return{...c[a],count:i,tiedCount:c.length}}let y=0,C=!1;function V(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${d(e.accountType.replaceAll("_"," "))}"
        >
    `}function I(e,t=[]){const o=C?t.filter(s=>s.freeToPlayOnly===!0):t,i=10,c=Math.ceil(o.length/i),a=Math.min(y,Math.max(0,c-1));y=a;const r=a*i,n=o.slice(r,r+i);e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Players who have opted into the hiscores. Up to 10 entries are shown.</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${C?"checked":""}>
                Free to Play
            </label>
        </div>

        ${n.length?`
            <div class="chancebook-table-wrap">
                <table class="osrs-table chancebook-hiscores">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player</th>
                            <th>Rolled</th>
                            <th>Obtained</th>
                            <th>QP</th>
                            <th>Total level</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${n.map((s,b)=>`
                            <tr>
                                <td>${r+b+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${s.profileUrl?`<a data-link href="${d(s.profileUrl)}">${d(s.name)}</a>`:d(s.name||"Anonymous")}
                                        ${V(s)}
                                    </span>
                                </td>
                                <td>${u(s.rolledCount)}</td>
                                <td>${u(s.obtainedCount)}</td>
                                <td>${u(s.questPoints)}</td>
                                <td>${u(s.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `:`<p class="chancebook-muted">No players found${C?" with Free to Play selected":""}.</p>`}

        ${c>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${a===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${a+1} of ${c}</span>
                <button type="button" class="chancebook-page-next" ${a>=c-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",s=>{C=s.target.checked,y=0,I(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{y--,I(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{y++,I(e,t)})}function X(){const e=Array.isArray(p.rolled)&&Array.isArray(p.obtained)&&p.player,t=p.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${d(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${O(H,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${O(j,"customRules")}
                    </div>
                </div>
                <label class="chancebook-check"><input type="checkbox" id="cb-share"> I agree to share my statistics with Chancebook.</label>
                <label class="chancebook-check"><input type="checkbox" id="cb-name" disabled> Display my RuneScape username publicly.</label>
                <label class="chancebook-check"><input type="checkbox" id="cb-hiscores" disabled> Include me in the community hiscores.</label>
                <p class="chancebook-muted chancebook-small">The username and hiscores options are independent. You can contribute anonymously. You can change these preferences or withdraw your contribution later.</p>
                <div class="chancebook-actions">
                    <button type="button" id="cb-submit" disabled>Submit statistics</button>
                    <span id="cb-submit-status" role="status" aria-live="polite"></span>
                </div>
            `:`
                <p class="chancebook-muted">Upload your rolled, obtained and player profile files on the <a data-link href="/upload">Upload page</a> first. Your existing local tracker data will remain unchanged.</p>
            `}
            <div id="cb-manage" hidden>
                <button type="button" class="chancebook-danger" id="cb-withdraw">Remove my statistics</button>
            </div>
        </section>
    `}async function ie(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
            <div class="chancebook-page">
                <div class="chancebook-profile-back"><a data-link href="/chancebook">← Chancebook</a></div>
                <div id="chancebook-profile-content"><p>Loading player profile...</p></div>
            </div>
        `:`
        <div class="chancebook-page">
            <div class="chancebook-heading">
                <div>
                    <h1>Chancebook</h1>
                    <p>Community statistics for all you nerds.</p>
                </div>
            </div>
            <div id="chancebook-load-status" class="chancebook-muted" role="status">Loading community statistics...</div>
            <div id="chancebook-statistics" hidden>
                <div class="chancebook-stat-grid" id="chancebook-stat-grid"></div>
                <div class="chancebook-fun-stats-link">
                    <a data-link href="/chancebook/fun-stats">
                        <span>
                            <strong>Fun Stats!</strong>
                            <small>Explore community totals, tool ownership and more.</small>
                        </span>
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
                <section class="chancebook-panel">
                    <h2>Community Hiscores</h2>
                    <div id="chancebook-hiscores"></div>
                </section>
            </div>
            ${X()}
        </div>
    `}async function ce(){te();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let i=!0;try{await z()}catch(a){console.warn("Chancebook item data could not be loaded.",a)}if(o){const a=e.querySelector("#chancebook-profile-content"),r=decodeURIComponent(t.slice(12));if(!a)return;try{const n=await f();if(!n)throw new Error("Chancebook is not configured yet.");const s=await T(n,{profile:r});if(!i)return;if(!s.profile){a.innerHTML="<h1>Player not found</h1><p>This profile may be private or may no longer be contributing.</p>";return}a.innerHTML=Z(s.profile)}catch(n){a.innerHTML=`<h1>Player profile</h1><p class="chancebook-error">${d(n.message||"Could not load this profile.")}</p>`}return}const c=e.querySelector("#chancebook-load-status");try{const a=await f();if(!a)c.innerHTML="Chancebook needs its Supabase project settings. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your local <code>.env.local</code> file before building.";else{const r=await T(a);if(!i)return;c.hidden=!0,e.querySelector("#chancebook-statistics").hidden=!1;const n=document.createElement("p");n.className="chancebook-muted chancebook-small",n.textContent=`${u(r.contributorCount)} players currently contribute statistics.`,e.querySelector("#chancebook-statistics").prepend(n),e.querySelector("#chancebook-stat-grid").innerHTML=[$("Most commonly rolled item",w(r.rolledItemCounts,"max"),"No rolled items yet."),$("Most commonly obtained item",w(r.obtainedItemCounts,"max"),"No obtained items yet."),$("Least commonly rolled item",w(r.rolledItemCounts,"min"),"No rolled items yet."),$("Least commonly obtained item",w(r.obtainedItemCounts,"min"),"No obtained items yet.")].join(""),I(e.querySelector("#chancebook-hiscores"),r.hiscores)}}catch(a){c&&(c.innerHTML=`<span class="chancebook-error">${d(a.message||"Could not load Chancebook statistics.")}</span>`)}ee(e),R=()=>{i=!1}}async function T(e,t={}){const o=new URLSearchParams(t),i=`${x}/functions/v1/chancebook-public-data${o.toString()?`?${o}`:""}`,c=await fetch(i,{headers:{apikey:M}}),a=await c.json().catch(()=>({}));if(!c.ok)throw new Error(a.error||`Chancebook request failed (${c.status}).`);return a}function Z(e){const t=e.player||{},o=t.levels||{},i=[["Herblore unlocked","Druidic Ritual"],["Sailing unlocked","Pandemonium"],["Morytania unlocked","Priest in Peril"]],c=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(t.recentRolls)?t.recentRolls:[],a=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(t.recentObtained)?t.recentObtained:[],r=q.reduce((n,s)=>n+(Number(o[s])||0),0);return`
        <div class="chancebook-profile-heading">
            <div><h1>${d(e.name)}</h1></div>
        </div>
        <div class="chancebook-profile-stats">
            <div><strong>${u(e.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${u(e.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${u(t.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${u(r)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${i.map(([n,s])=>{const b=Number(t.quests?.[s])>=2,k=b?n:n.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${b?"is-unlocked":"is-locked"}">
                            <span>${b?"✓":"○"}</span>
                            ${k}
                        </div>
                    `}).join("")}
            </div>
        </section>
        <section class="chancebook-panel">
            <h2>Rules of this account</h2>
            ${J(e.chancebookRulesets)}
        </section>
        <div class="chancebook-recent-grid">
        <section class="chancebook-panel">
            <h2>Recently obtained</h2>
            ${a.length?`
                <div class="chancebook-recent-items">
                    ${a.slice(0,3).map(n=>{const s=g.get(Number(n));return s?`
                            <a data-link href="/item?id=${Number(n)}">
                                <img src="/images/${encodeURIComponent(s.image)}" alt="">
                                <span>${d(s.name)}</span>
                            </a>
                        `:""}).join("")}
                </div>
            `:'<p class="chancebook-muted">Recent obtained history is not available for this submission yet.</p>'}
        </section>
        <section class="chancebook-panel">
            <h2>Recently rolled</h2>
            ${c.length?`<div class="chancebook-recent-items">${c.slice(0,3).map(n=>{const s=g.get(Number(n));return s?`<a data-link href="/item?id=${Number(n)}"><img src="/images/${encodeURIComponent(s.image)}" alt=""><span>${d(s.name)}</span></a>`:""}).join("")}</div>`:'<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>'}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${q.map(n=>`<div class="chancebook-skill"><img src="/images/skills/${n.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${d(n)}</span><strong>${u(o[n]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function ee(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),i=e.querySelector("#cb-hiscores"),c=e.querySelector("#cb-submit"),a=e.querySelector("#cb-submit-status"),r=e.querySelector("#cb-manage");if(r&&(r.hidden=!0),!t||!o||!i||!c)return;const n=K();e.querySelectorAll("[data-ruleset-group]").forEach(l=>{l.checked=n[l.dataset.rulesetGroup].includes(l.value),l.addEventListener("change",()=>{W(L(e))})});const s="chancebookPreferences";function b(){try{return JSON.parse(localStorage.getItem(s)||"{}")}catch{return{}}}function k(){try{localStorage.setItem(s,JSON.stringify({share:t.checked,name:o.checked,hiscores:i.checked}))}catch(l){console.warn("Could not save Chancebook preferences.",l)}}const _=b();t.checked=_.share===!0,o.checked=_.name===!0,i.checked=_.hiscores===!0;const E=()=>{o.disabled=!t.checked,i.disabled=!t.checked,t.checked||(o.checked=!1,i.checked=!1),c.disabled=!t.checked,k()};t.addEventListener("change",E),o.addEventListener("change",k),i.addEventListener("change",k),E();const B=async()=>{c.disabled=!0,a.textContent="Submitting...";try{const l=await f();if(!l)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:m,error:h}=await l.auth.getSession();if(h)throw h;let v=m.session;if(!v){const{data:Y,error:N}=await l.auth.signInAnonymously();if(N)throw N;v=Y.session}const S=JSON.parse(p.playerBlobText||""),{data:ne,error:A}=await l.functions.invoke("submit-player-data",{body:{rolledIds:p.rolled,obtainedIds:p.obtained,profile:S,chancebookRulesets:L(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:i.checked}});if(A)throw A;a.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(l){a.textContent=l.message||"Could not submit your statistics."}finally{c.disabled=!t.checked}},G=async()=>{const l=e.querySelector("#cb-withdraw");l.disabled=!0;try{const m=await f(),{error:h}=await m.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(h)throw h;a.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(m){a.textContent=m.message||"Could not withdraw your contribution."}finally{l.disabled=!1}};(async()=>{try{const l=await f();if(!l||!r)return;const{data:m,error:h}=await l.auth.getSession();if(h)throw h;if(!m.session)return;const{data:v,error:S}=await l.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(S)throw S;r.hidden=v?.hasContribution!==!0}catch(l){console.warn("Could not check Chancebook contribution status:",l),a.textContent="Could not check your existing contribution. Please refresh the page."}})(),c.addEventListener("click",B),e.querySelector("#cb-withdraw")?.addEventListener("click",G)}function te(){typeof R=="function"&&R(),R=null}export{ie as default,ce as init,te as teardown};
