import{f}from"./index-CiylponZ.js";import{C as D,a as G}from"./config-BS53vI6F.js";import{g as w}from"./client-BOBhvtuL.js";const U=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],H="chancebookRulesets",j=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],B=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Watch Maclay's Youtube series for an explanation."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Watch LuckOfShuk's Youtube series for an explanation."]}];function K(){try{const e=JSON.parse(localStorage.getItem(H)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function W(e){try{localStorage.setItem(H,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function q(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function F(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${u(t)}</p>`).join("")}
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
                ${u(o.label)}
            </label>
            ${F(o.info)}
        </div>
    `).join("")}function J(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],n=j.filter(c=>t.includes(c.id)),s=B.filter(c=>o.includes(c.id));if(!n.length&&!s.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const a=c=>c.length?c.map(r=>`
            <div class="chancebook-profile-rule">
                <span>${u(r.label)}</span>
                ${F(r.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${a(n)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${a(s)}
                </div>
            </div>
        </div>
    `}let P=null,v=new Map;function u(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function m(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}async function Q(){if(v.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();v=new Map(t.map(o=>[Number(o.id),o]))}function z(e,t,o){const n=v.get(Number(e));return n?`
        <a class="chancebook-item" data-link href="/item?id=${Number(n.id)}" title="${u(n.name)}">
            <img src="/images/${encodeURIComponent(n.image)}" alt="" loading="lazy">
            <span>${u(n.name)}</span>
            <strong>${m(t)}</strong>
        </a>
    `:`<div class="chancebook-item"><span>Item #${u(e)}</span><strong>${m(t)}</strong></div>`}function R(e,t,o){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?z(t.itemId,t.count):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${m(t.tiedCount-1)} other items tied for this spot for ${m(t.count)} players</small>`:""}
                <small>${m(t.count)} contributing players</small>
            `:""}
        </section>
    `}function A(e=[],t="max"){const o=e.filter(r=>v.has(Number(r.itemId))&&Number(r.count)>0);if(!o.length)return null;const n=t==="max"?Math.max(...o.map(r=>Number(r.count))):Math.min(...o.map(r=>Number(r.count))),s=o.filter(r=>Number(r.count)===n),a=Math.floor(Math.random()*s.length);return{...s[a],count:n,tiedCount:s.length}}let S=0,E=!1;function V(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${u(e.accountType.replaceAll("_"," "))}"
        >
    `}function N(e,t=[]){const o=E?t.filter(h=>h.freeToPlayOnly===!0):t,n=10,s=Math.ceil(o.length/n),a=Math.min(S,Math.max(0,s-1));S=a;const c=a*n,r=o.slice(c,c+n);e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Players who have opted into the hiscores. Up to 10 entries are shown.</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${E?"checked":""}>
                Free to Play
            </label>
        </div>

        ${r.length?`
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
                        ${r.map((h,l)=>`
                            <tr>
                                <td>${c+l+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${h.profileUrl?`<a data-link href="${u(h.profileUrl)}">${u(h.name)}</a>`:u(h.name||"Anonymous")}
                                        ${V(h)}
                                    </span>
                                </td>
                                <td>${m(h.rolledCount)}</td>
                                <td>${m(h.obtainedCount)}</td>
                                <td>${m(h.questPoints)}</td>
                                <td>${m(h.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `:`<p class="chancebook-muted">No players found${E?" with Free to Play selected":""}.</p>`}

        ${s>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${a===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${a+1} of ${s}</span>
                <button type="button" class="chancebook-page-next" ${a>=s-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",h=>{E=h.target.checked,S=0,N(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,N(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,N(e,t)})}function X(){const e=Array.isArray(f.rolled)&&Array.isArray(f.obtained)&&f.player,t=f.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${u(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${O(j,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${O(B,"customRules")}
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
    `}async function ce(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
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
    `}async function re(){oe();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let n=!0;try{await Q()}catch(a){console.warn("Chancebook item data could not be loaded.",a)}if(o){const a=e.querySelector("#chancebook-profile-content"),c=t.slice(12).split("/").filter(Boolean),r=decodeURIComponent(c[0]||""),h=c[1]==="item-history";if(!a)return;try{const l=await w();if(!l)throw new Error("Chancebook is not configured yet.");const d=await T(l,{profile:r});if(!n)return;if(!d.profile){a.innerHTML="<h1>Player not found</h1><p>This profile may be private or may no longer be contributing.</p>";return}a.innerHTML=h?ee(d.profile,r):Z(d.profile,r)}catch(l){a.innerHTML=`<h1>Player profile</h1><p class="chancebook-error">${u(l.message||"Could not load this profile.")}</p>`}return}const s=e.querySelector("#chancebook-load-status");try{const a=await w();if(!a)s.innerHTML="Chancebook needs its Supabase project settings. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your local <code>.env.local</code> file before building.";else{const c=await T(a);if(!n)return;s.hidden=!0,e.querySelector("#chancebook-statistics").hidden=!1;const r=document.createElement("p");r.className="chancebook-muted chancebook-small",r.textContent=`${m(c.contributorCount)} players currently contribute statistics.`,e.querySelector("#chancebook-statistics").prepend(r),e.querySelector("#chancebook-stat-grid").innerHTML=[R("Most commonly rolled item",A(c.rolledItemCounts,"max"),"No rolled items yet."),R("Most commonly obtained item",A(c.obtainedItemCounts,"max"),"No obtained items yet."),R("Least commonly rolled item",A(c.rolledItemCounts,"min"),"No rolled items yet."),R("Least commonly obtained item",A(c.obtainedItemCounts,"min"),"No obtained items yet.")].join(""),N(e.querySelector("#chancebook-hiscores"),c.hiscores)}}catch(a){s&&(s.innerHTML=`<span class="chancebook-error">${u(a.message||"Could not load Chancebook statistics.")}</span>`)}te(e),P=()=>{n=!1}}async function T(e,t={}){const o=new URLSearchParams(t),n=`${D}/functions/v1/chancebook-public-data${o.toString()?`?${o}`:""}`,s=await fetch(n,{headers:{apikey:G}}),a=await s.json().catch(()=>({}));if(!s.ok)throw new Error(a.error||`Chancebook request failed (${s.status}).`);return a}function Z(e,t){const o=e.player||{},n=o.levels||{},s=new Set((e.rolledIds||[]).map(Number)),a=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],c=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(o.recentRolls)?o.recentRolls:[],r=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(o.recentObtained)?o.recentObtained:[],h=U.reduce((l,d)=>l+(Number(n[d])||0),0);return`
        <div class="chancebook-profile-heading">
            <div>
                <h1>${u(e.name)}</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${u(new Date(e.lastUpdated).toLocaleDateString())}
                    </p>
                `:""}
            </div>
        </div>
        <div class="chancebook-profile-stats">
            <div><strong>${m(e.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${m(e.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${m(o.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${m(h)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${a.map(l=>{const{label:d,itemIds:k,alternativeItemIds:$}=l;let p,y="";if($){const i=s.has(1925),b=$.some(g=>s.has(g));p=i&&b,p||(i?y="Bucket rolled, missing essence":b?y="Essence rolled, bucket missing":y="0/2 requirements rolled")}else{const i=k.filter(b=>s.has(b)).length;p=i===k.length,p||(y=`${i}/${k.length} items rolled`)}const _=p?d:d.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <div>
                                <div><span>${p?"✓":"○"}</span>${_}</div>
                                ${p?"":`
                                    <small class="chancebook-muted">${y}</small>
                                `}
                            </div>
                        </div>
                    `}).join("")}
            </div>
        </section>
        <section class="chancebook-panel">
            <h2>Rules of this account</h2>
            ${J(e.chancebookRulesets)}
        </section>
        <div class="chancebook-history-link">
            <a data-link href="/chancebook/${encodeURIComponent(t)}/item-history">
                View full item history →
            </a>
        </div>
        <div class="chancebook-recent-grid">
        <section class="chancebook-panel">
            <h2>Recently obtained</h2>
            ${r.length?`
                <div class="chancebook-recent-items">
                    ${r.slice(0,3).map(l=>{const d=v.get(Number(l));return d?`
                            <a data-link href="/item?id=${Number(l)}">
                                <img src="/images/${encodeURIComponent(d.image)}" alt="">
                                <span>${u(d.name)}</span>
                            </a>
                        `:""}).join("")}
                </div>
            `:'<p class="chancebook-muted">Recent obtained history is not available for this submission yet.</p>'}
        </section>
        <section class="chancebook-panel">
            <h2>Recently rolled</h2>
            ${c.length?`<div class="chancebook-recent-items">${c.slice(0,3).map(l=>{const d=v.get(Number(l));return d?`<a data-link href="/item?id=${Number(l)}"><img src="/images/${encodeURIComponent(d.image)}" alt=""><span>${u(d.name)}</span></a>`:""}).join("")}</div>`:'<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>'}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${U.map(l=>`<div class="chancebook-skill"><img src="/images/skills/${l.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${u(l)}</span><strong>${m(n[l]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function M(e,t){const o=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${m(o.length)})</small></h2>

            ${o.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${o.map((n,s)=>{const a=v.get(Number(n));return`
                            <a
                                data-link
                                href="/item?id=${Number(n)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${s+1}.</span>
                                ${a?`
                                    <img
                                        src="/images/${encodeURIComponent(a.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${u(a.name)}</span>
                                `:`
                                    <span>Pressed roll button</span>
                                `}
                            </a>
                        `}).join("")}
                </div>
            `:`
                <p class="chancebook-muted">No item history available.</p>
            `}
        </section>
    `}function ee(e,t){const o=Array.isArray(e.obtainedIds)?e.obtainedIds:[],n=Array.isArray(e.rolledIds)?e.rolledIds:[];return`
        <div class="chancebook-profile-heading">
            <div>
                <h1>${u(e.name)} - Item History</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${u(new Date(e.lastUpdated).toLocaleDateString())}
                    </p>
                `:""}
            </div>
        </div>

        <div class="chancebook-history-link">
            <a data-link href="/chancebook/${encodeURIComponent(t)}">
                ← Back to player profile
            </a>
        </div>

        <div class="chancebook-recent-grid">
            ${M("Obtained items",o)}
            ${M("Rolled items",n)}
        </div>
    `}function te(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),n=e.querySelector("#cb-hiscores"),s=e.querySelector("#cb-submit"),a=e.querySelector("#cb-submit-status"),c=e.querySelector("#cb-manage");if(c&&(c.hidden=!0),!t||!o||!n||!s)return;const r=K();e.querySelectorAll("[data-ruleset-group]").forEach(i=>{i.checked=r[i.dataset.rulesetGroup].includes(i.value),i.addEventListener("change",()=>{W(q(e))})});const h="chancebookPreferences";function l(){try{return JSON.parse(localStorage.getItem(h)||"{}")}catch{return{}}}function d(){try{localStorage.setItem(h,JSON.stringify({share:t.checked,name:o.checked,hiscores:n.checked}))}catch(i){console.warn("Could not save Chancebook preferences.",i)}}const k=l();t.checked=k.share===!0,o.checked=k.name===!0,n.checked=k.hiscores===!0;const $=()=>{o.disabled=!t.checked,n.disabled=!t.checked,t.checked||(o.checked=!1,n.checked=!1),s.disabled=!t.checked,d()};t.addEventListener("change",$),o.addEventListener("change",d),n.addEventListener("change",d),$();const p=async()=>{s.disabled=!0,a.textContent="Submitting...";try{const i=await w();if(!i)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:b,error:g}=await i.auth.getSession();if(g)throw g;let C=b.session;if(!C){const{data:Y,error:x}=await i.auth.signInAnonymously();if(x)throw x;C=Y.session}const I=JSON.parse(f.playerBlobText||""),{data:ae,error:L}=await i.functions.invoke("submit-player-data",{body:{rolledIds:f.rolled,obtainedIds:f.obtained,profile:I,chancebookRulesets:q(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:n.checked}});if(L)throw L;a.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(i){if(console.error("Chancebook submission failed:",i),i?.context)try{const b=await i.context.clone().text();console.error("Chancebook Edge Function response:",i.context.status,b)}catch(b){console.error("Could not read submission error response:",b)}a.textContent=i.message||"Could not submit your statistics."}finally{s.disabled=!t.checked}},y=async()=>{const i=e.querySelector("#cb-withdraw");i.disabled=!0;try{const b=await w(),{error:g}=await b.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(g)throw g;a.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(b){a.textContent=b.message||"Could not withdraw your contribution."}finally{i.disabled=!1}};(async()=>{try{const i=await w();if(!i||!c)return;const{data:b,error:g}=await i.auth.getSession();if(g)throw g;if(!b.session)return;const{data:C,error:I}=await i.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(I)throw I;c.hidden=C?.hasContribution!==!0}catch(i){console.warn("Could not check Chancebook contribution status:",i),a.textContent="Could not check your existing contribution. Please refresh the page."}})(),s.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",y)}function oe(){typeof P=="function"&&P(),P=null}export{ce as default,re as init,oe as teardown};
