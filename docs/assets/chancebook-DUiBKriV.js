import{f}from"./index-B6dtEf43.js";import{C as K,a as J}from"./config-BS53vI6F.js";import{g as C}from"./client-puFhRs_f.js";const U=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],j="chancebookRulesets",Y="chancebookCommunityStatsCache",B=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],D=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Watch Maclay's Youtube series for an explanation."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Watch LuckOfShuk's Youtube series for an explanation."]}];function V(){try{const e=JSON.parse(localStorage.getItem(j)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function W(e){try{localStorage.setItem(j,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function q(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function F(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${u(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function T(e,t){return e.map(o=>`
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
    `).join("")}function Q(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],a=B.filter(c=>t.includes(c.id)),s=D.filter(c=>o.includes(c.id));if(!a.length&&!s.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const n=c=>c.length?c.map(r=>`
            <div class="chancebook-profile-rule">
                <span>${u(r.label)}</span>
                ${F(r.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${n(a)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${n(s)}
                </div>
            </div>
        </div>
    `}let N=null,v=new Map;function u(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function m(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}async function z(){if(v.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();v=new Map(t.map(o=>[Number(o.id),o]))}function X(e,t,o){const a=v.get(Number(e));return a?`
        <a class="chancebook-item" data-link href="/item?id=${Number(a.id)}" title="${u(a.name)}">
            <img src="/images/${encodeURIComponent(a.image)}" alt="" loading="lazy">
            <span>${u(a.name)}</span>
            <strong>${m(t)}</strong>
        </a>
    `:`<div class="chancebook-item"><span>Item #${u(e)}</span><strong>${m(t)}</strong></div>`}function R(e,t,o,a,s){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?X(t.itemId,t.count):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${m(t.tiedCount-1)} other items tied for this spot</small>`:""}
            `:""}
            <a data-link href="${a}" class="chancebook-item-stat-link">
                ${s} →
            </a>
        </section>
    `}function A(e=[],t="max"){const o=e.filter(r=>v.has(Number(r.itemId))&&Number(r.count)>0);if(!o.length)return null;const a=t==="max"?Math.max(...o.map(r=>Number(r.count))):Math.min(...o.map(r=>Number(r.count))),s=o.filter(r=>Number(r.count)===a),n=Math.floor(Math.random()*s.length);return{...s[n],count:a,tiedCount:s.length}}let S=0,E=!1;function Z(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${u(e.accountType.replaceAll("_"," "))}"
        >
    `}function P(e,t=[]){const o=E?t.filter(h=>h.freeToPlayOnly===!0):t,a=10,s=Math.ceil(o.length/a),n=Math.min(S,Math.max(0,s-1));S=n;const c=n*a,r=o.slice(c,c+a);e.innerHTML=`
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
                                        ${Z(h)}
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
                <button type="button" class="chancebook-page-prev" ${n===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${n+1} of ${s}</span>
                <button type="button" class="chancebook-page-next" ${n>=s-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",h=>{E=h.target.checked,S=0,P(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,P(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,P(e,t)})}function ee(){const e=Array.isArray(f.rolled)&&Array.isArray(f.obtained)&&f.player,t=f.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${u(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${T(B,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${T(D,"customRules")}
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
    `}async function ue(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
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
            ${ee()}
        </div>
    `}async function he(){ie();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let a=!0;try{await z()}catch(n){console.warn("Chancebook item data could not be loaded.",n)}if(o){const n=e.querySelector("#chancebook-profile-content"),c=t.slice(12).split("/").filter(Boolean),r=decodeURIComponent(c[0]||""),h=c[1]==="item-history";if(!n)return;try{const l=await C();if(!l)throw new Error("Chancebook is not configured yet.");const d=await M(l,{profile:r});if(!a)return;if(!d.profile){n.innerHTML="<h1>Player not found</h1><p>This profile may be private or may no longer be contributing.</p>";return}n.innerHTML=h?ne(d.profile,r):ae(d.profile,r)}catch(l){n.innerHTML=`<h1>Player profile</h1><p class="chancebook-error">${u(l.message||"Could not load this profile.")}</p>`}return}const s=e.querySelector("#chancebook-load-status");try{const n=await C();if(!n)s.innerHTML="Chancebook needs its Supabase project settings. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your local <code>.env.local</code> file before building.";else{const c=await M(n);if(!a)return;s.hidden=!0,e.querySelector("#chancebook-statistics").hidden=!1;const r=document.createElement("p");r.className="chancebook-muted chancebook-small",r.textContent=`${m(c.contributorCount)} players currently contribute statistics.`,e.querySelector("#chancebook-statistics").prepend(r),e.querySelector("#chancebook-stat-grid").innerHTML=[R("Most commonly rolled item",A(c.rolledItemCounts,"max"),"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),R("Most commonly obtained item",A(c.obtainedItemCounts,"max"),"No obtained items yet.","/chancebook/obtained-items","View all obtained items"),R("Least commonly rolled item",A(c.rolledItemCounts,"min"),"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),R("Least commonly obtained item",A(c.obtainedItemCounts,"min"),"No obtained items yet.","/chancebook/obtained-items","View all obtained items")].join(""),P(e.querySelector("#chancebook-hiscores"),c.hiscores)}}catch(n){s&&(s.innerHTML=`<span class="chancebook-error">${u(n.message||"Could not load Chancebook statistics.")}</span>`)}se(e),N=()=>{a=!1}}function te(){try{const e=JSON.parse(localStorage.getItem(Y)||"null");if(e&&e.version!==void 0&&e.data&&typeof e.data=="object")return e}catch(e){console.warn("Could not read cached Chancebook statistics.",e)}return null}function oe(e){if(!(!e||e.version===void 0))try{localStorage.setItem(Y,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:e}))}catch(t){console.warn("Could not cache Chancebook statistics.",t)}}async function _(e={}){const t=new URLSearchParams(e),o=`${K}/functions/v1/chancebook-public-data${t.toString()?`?${t}`:""}`,a=await fetch(o,{headers:{apikey:J}}),s=await a.json().catch(()=>({}));if(!a.ok)throw new Error(s.error||`Chancebook request failed (${a.status}).`);return s}async function M(e,t={}){if(t.profile||Object.keys(t).length>0)return _(t);const o=te();try{const a=await _({versionOnly:"true"});if(o&&String(o.version)===String(a.version))return o.data}catch(a){if(console.warn("Could not check the Chancebook statistics version.",a),o)return o.data}try{const a=await _();return oe(a),a}catch(a){if(o)return console.warn("Could not refresh Chancebook statistics. Using cached data.",a),o.data;throw a}}function ae(e,t){const o=e.player||{},a=o.levels||{},s=new Set((e.rolledIds||[]).map(Number)),n=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],c=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(o.recentRolls)?o.recentRolls:[],r=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(o.recentObtained)?o.recentObtained:[],h=U.reduce((l,d)=>l+(Number(a[d])||0),0);return`
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
                ${n.map(l=>{const{label:d,itemIds:k,alternativeItemIds:$}=l;let p,y="";if($){const i=s.has(1925),b=$.some(g=>s.has(g));p=i&&b,p||(i?y="Bucket rolled, missing essence":b?y="Essence rolled, bucket missing":y="0/2 requirements rolled")}else{const i=k.filter(b=>s.has(b)).length;p=i===k.length,p||(y=`${i}/${k.length} items rolled`)}const L=p?d:d.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <div>
                                <div><span>${p?"✓":"○"}</span>${L}</div>
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
            ${Q(e.chancebookRulesets)}
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
                ${U.map(l=>`<div class="chancebook-skill"><img src="/images/skills/${l.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${u(l)}</span><strong>${m(a[l]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function H(e,t){const o=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${m(o.length)})</small></h2>

            ${o.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${o.map((a,s)=>{const n=v.get(Number(a));return`
                            <a
                                data-link
                                href="/item?id=${Number(a)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${s+1}.</span>
                                ${n?`
                                    <img
                                        src="/images/${encodeURIComponent(n.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${u(n.name)}</span>
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
    `}function ne(e,t){const o=Array.isArray(e.obtainedIds)?e.obtainedIds:[],a=Array.isArray(e.rolledIds)?e.rolledIds:[];return`
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
            ${H("Obtained items",o)}
            ${H("Rolled items",a)}
        </div>
    `}function se(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),a=e.querySelector("#cb-hiscores"),s=e.querySelector("#cb-submit"),n=e.querySelector("#cb-submit-status"),c=e.querySelector("#cb-manage");if(c&&(c.hidden=!0),!t||!o||!a||!s)return;const r=V();e.querySelectorAll("[data-ruleset-group]").forEach(i=>{i.checked=r[i.dataset.rulesetGroup].includes(i.value),i.addEventListener("change",()=>{W(q(e))})});const h="chancebookPreferences";function l(){try{return JSON.parse(localStorage.getItem(h)||"{}")}catch{return{}}}function d(){try{localStorage.setItem(h,JSON.stringify({share:t.checked,name:o.checked,hiscores:a.checked}))}catch(i){console.warn("Could not save Chancebook preferences.",i)}}const k=l();t.checked=k.share===!0,o.checked=k.name===!0,a.checked=k.hiscores===!0;const $=()=>{o.disabled=!t.checked,a.disabled=!t.checked,t.checked||(o.checked=!1,a.checked=!1),s.disabled=!t.checked,d()};t.addEventListener("change",$),o.addEventListener("change",d),a.addEventListener("change",d),$();const p=async()=>{s.disabled=!0,n.textContent="Submitting...";try{const i=await C();if(!i)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:b,error:g}=await i.auth.getSession();if(g)throw g;let w=b.session;if(!w){const{data:G,error:O}=await i.auth.signInAnonymously();if(O)throw O;w=G.session}const I=JSON.parse(f.playerBlobText||""),{data:ce,error:x}=await i.functions.invoke("submit-player-data",{body:{rolledIds:f.rolled,obtainedIds:f.obtained,profile:I,chancebookRulesets:q(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:a.checked}});if(x)throw x;n.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(i){if(console.error("Chancebook submission failed:",i),i?.context)try{const b=await i.context.clone().text();console.error("Chancebook Edge Function response:",i.context.status,b)}catch(b){console.error("Could not read submission error response:",b)}n.textContent=i.message||"Could not submit your statistics."}finally{s.disabled=!t.checked}},y=async()=>{const i=e.querySelector("#cb-withdraw");i.disabled=!0;try{const b=await C(),{error:g}=await b.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(g)throw g;n.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(b){n.textContent=b.message||"Could not withdraw your contribution."}finally{i.disabled=!1}};(async()=>{try{const i=await C();if(!i||!c)return;const{data:b,error:g}=await i.auth.getSession();if(g)throw g;if(!b.session)return;const{data:w,error:I}=await i.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(I)throw I;c.hidden=w?.hasContribution!==!0}catch(i){console.warn("Could not check Chancebook contribution status:",i),n.textContent="Could not check your existing contribution. Please refresh the page."}})(),s.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",y)}function ie(){typeof N=="function"&&N(),N=null}export{ue as default,he as init,ie as teardown};
