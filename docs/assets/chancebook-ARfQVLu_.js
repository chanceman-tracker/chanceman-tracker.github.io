import{f}from"./index-BZZG2Mrb.js";import{C as L,a as O}from"./config-BS53vI6F.js";import{g as N}from"./client-r61DLw1i.js";const H=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],F="chancebookRulesets",A="chancebookCommunityStatsCacheV2",B=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],G=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Watch Maclay's Youtube series for an explanation."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Watch LuckOfShuk's Youtube series for an explanation."]}];function W(){try{const e=JSON.parse(localStorage.getItem(F)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function V(e){try{localStorage.setItem(F,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function U(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function J(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${l(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function M(e,t){return e.map(o=>`
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${t}"
                    value="${o.id}"
                >
                ${l(o.label)}
            </label>
            ${J(o.info)}
        </div>
    `).join("")}function Q(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],a=B.filter(c=>t.includes(c.id)),n=G.filter(c=>o.includes(c.id));if(!a.length&&!n.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const i=c=>c.length?c.map(b=>`
            <div class="chancebook-profile-rule">
                <span>${l(b.label)}</span>
                ${J(b.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${i(a)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${i(n)}
                </div>
            </div>
        </div>
    `}let E=null,v=new Map;function l(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function m(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}async function z(){if(v.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();v=new Map(t.map(o=>[Number(o.id),o]))}function X(e,t,o=null){const a=o?.name?o:v.get(Number(e));return a?`
        <a class="chancebook-item" data-link href="/item?id=${Number(e)}" title="${l(a.name)}">
            ${a.image?`
                <img src="/images/${encodeURIComponent(a.image)}" alt="" loading="lazy">
            `:""}
            <span>${l(a.name)}</span>
            <strong>${m(t)}</strong>
        </a>
    `:`
            <div class="chancebook-item">
                <span>Item #${l(e)}</span>
                <strong>${m(t)}</strong>
            </div>
        `}function I(e,t,o,a,n){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?X(t.itemId,t.count,t):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${m(t.tiedCount-1)} other items tied for this spot</small>`:""}
            `:""}
            <a data-link href="${a}" class="chancebook-item-stat-link">
                ${n} →
            </a>
        </section>
    `}let S=0,R=!1;function Z(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${l(e.accountType.replaceAll("_"," "))}"
        >
    `}function P(e,t=[]){const o=R?t.filter(d=>d.freeToPlayOnly===!0):t,a=10,n=Math.ceil(o.length/a),i=Math.min(S,Math.max(0,n-1));S=i;const c=i*a,b=o.slice(c,c+a);e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Each chancer has their own ruleset, so feel free to click into their profile and have a look!</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${R?"checked":""}>
                Free to Play
            </label>
        </div>

        ${b.length?`
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
                        ${b.map((d,r)=>`
                            <tr>
                                <td>${c+r+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${d.profileUrl?`<a data-link href="${l(d.profileUrl)}">${l(d.name)}</a>`:l(d.name||"Anonymous")}
                                        ${Z(d)}
                                    </span>
                                </td>
                                <td>${m(d.rolledCount)}</td>
                                <td>${m(d.obtainedCount)}</td>
                                <td>${m(d.questPoints)}</td>
                                <td>${m(d.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `:`<p class="chancebook-muted">No chancers found${R?" with Free to Play selected":""}.</p>`}

        ${n>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${i===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${i+1} of ${n}</span>
                <button type="button" class="chancebook-page-next" ${i>=n-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",d=>{R=d.target.checked,S=0,P(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,P(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,P(e,t)})}function ee(){const e=Array.isArray(f.rolled)&&Array.isArray(f.obtained)&&f.player,t=f.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${l(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${M(B,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${M(G,"customRules")}
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
    `}async function he(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
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
    `}function j(e,t){const o=e.querySelector("#chancebook-load-status"),a=e.querySelector("#chancebook-statistics");if(!a)return;o.hidden=!0,a.hidden=!1,a.querySelector(".chancebook-contributor-note")?.remove();const n=document.createElement("p");n.className="chancebook-muted chancebook-small chancebook-contributor-note",n.textContent=`${m(t.contributorCount)} chancers currently contribute statistics.`,a.prepend(n),e.querySelector("#chancebook-stat-grid").innerHTML=[I("Most commonly rolled item",t.itemHighlights?.mostRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),I("Most commonly obtained item",t.itemHighlights?.mostObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items"),I("Least commonly rolled item",t.itemHighlights?.leastRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),I("Least commonly obtained item",t.itemHighlights?.leastObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items")].join(""),P(e.querySelector("#chancebook-hiscores"),t.hiscores)}async function ue(){ie();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let a=!0;if(E=()=>{a=!1},o){const i=e.querySelector("#chancebook-profile-content"),c=t.slice(12).split("/").filter(Boolean),b=decodeURIComponent(c[0]||""),d=c[1]==="item-history";if(!i)return;try{const[,r]=await Promise.all([z().catch(h=>{console.warn("Chancebook item data could not be loaded.",h)}),_({profile:b})]);if(!a)return;if(!r.profile){i.innerHTML=`
                    <h1>Player not found</h1>
                    <p>This profile may be private or may no longer be contributing.</p>
                `;return}i.innerHTML=d?ne(r.profile,b):ae(r.profile,b)}catch(r){if(!a)return;i.innerHTML=`
                <h1>Player profile</h1>
                <p class="chancebook-error">
                    ${l(r.message||"Could not load this profile.")}
                </p>
            `}return}const n=e.querySelector("#chancebook-load-status");se(e);try{if(!(!L||!O)){const i=await oe(c=>{a&&j(e,c)});if(!a)return;j(e,i)}}catch(i){a&&n&&(n.innerHTML=`
                <span class="chancebook-error">
                    ${l(i.message||"Could not load Chancebook statistics.")}
                </span>
            `)}}function te(){try{const e=JSON.parse(localStorage.getItem(A)||"null");if(e&&e.version!==void 0&&e.data&&typeof e.data=="object")return e}catch(e){console.warn("Could not read cached Chancebook statistics.",e)}return null}function D(e){if(!e||e.version===void 0)return;const t={...e};delete t.rolledItemCounts,delete t.obtainedItemCounts;try{localStorage.setItem(A,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:t}))}catch(o){console.warn("Could not cache Chancebook statistics.",o);try{localStorage.removeItem(A),localStorage.setItem(A,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:t}))}catch(a){console.warn("Could not save the reduced Chancebook cache.",a)}}}async function _(e={}){const t=new URLSearchParams(e),o=`${L}/functions/v1/chancebook-public-data${t.toString()?`?${t}`:""}`,a=await fetch(o,{headers:{apikey:O}}),n=await a.json().catch(()=>({}));if(!a.ok)throw new Error(n.error||`Chancebook request failed (${a.status}).`);return n}async function oe(e){const t=te();if(t)return(async()=>{try{const a=await _({versionOnly:"true"});if(String(t.version)===String(a.version))return;const n=await _();D(n),typeof e=="function"&&e(n)}catch(a){console.warn("Could not refresh Chancebook statistics in the background.",a)}})(),t.data;const o=await _();return D(o),o}function ae(e,t){const o=e.player||{},a=o.levels||{},n=new Set((e.rolledIds||[]).map(Number)),i=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],c=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(o.recentRolls)?o.recentRolls:[],b=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(o.recentObtained)?o.recentObtained:[],d=H.reduce((r,h)=>r+(Number(a[h])||0),0);return`
        <div class="chancebook-profile-heading">
            <div>
                <h1>${l(e.name)}</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${l(new Date(e.lastUpdated).toLocaleDateString())}
                    </p>
                `:""}
            </div>
        </div>
        <div class="chancebook-profile-stats">
            <div><strong>${m(e.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${m(e.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${m(o.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${m(d)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${i.map(r=>{const{label:h,itemIds:k,alternativeItemIds:$}=r;let p,y="";if($){const s=n.has(1925),u=$.some(g=>n.has(g));p=s&&u,p||(s?y="Bucket rolled, missing essence":u?y="Essence rolled, bucket missing":y="0/2 requirements rolled")}else{const s=k.filter(u=>n.has(u)).length;p=s===k.length,p||(y=`${s}/${k.length} items rolled`)}const x=p?h:h.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <div>
                                <div><span>${p?"✓":"○"}</span>${x}</div>
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
            ${b.length?`
                <div class="chancebook-recent-items">
                    ${b.slice(0,3).map(r=>{const h=v.get(Number(r));return h?`
                            <a data-link href="/item?id=${Number(r)}">
                                <img src="/images/${encodeURIComponent(h.image)}" alt="">
                                <span>${l(h.name)}</span>
                            </a>
                        `:""}).join("")}
                </div>
            `:'<p class="chancebook-muted">Recent obtained history is not available for this submission yet.</p>'}
        </section>
        <section class="chancebook-panel">
            <h2>Recently rolled</h2>
            ${c.length?`<div class="chancebook-recent-items">${c.slice(0,3).map(r=>{const h=v.get(Number(r));return h?`<a data-link href="/item?id=${Number(r)}"><img src="/images/${encodeURIComponent(h.image)}" alt=""><span>${l(h.name)}</span></a>`:""}).join("")}</div>`:'<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>'}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${H.map(r=>`<div class="chancebook-skill"><img src="/images/skills/${r.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${l(r)}</span><strong>${m(a[r]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function Y(e,t){const o=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${m(o.length)})</small></h2>

            ${o.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${o.map((a,n)=>{const i=v.get(Number(a));return`
                            <a
                                data-link
                                href="/item?id=${Number(a)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${n+1}.</span>
                                ${i?`
                                    <img
                                        src="/images/${encodeURIComponent(i.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${l(i.name)}</span>
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
                <h1>${l(e.name)} - Item History</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${l(new Date(e.lastUpdated).toLocaleDateString())}
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
            ${Y("Obtained items",o)}
            ${Y("Rolled items",a)}
        </div>
    `}function se(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),a=e.querySelector("#cb-hiscores"),n=e.querySelector("#cb-submit"),i=e.querySelector("#cb-submit-status"),c=e.querySelector("#cb-manage");if(c&&(c.hidden=!0),!t||!o||!a||!n)return;const b=W();e.querySelectorAll("[data-ruleset-group]").forEach(s=>{s.checked=b[s.dataset.rulesetGroup].includes(s.value),s.addEventListener("change",()=>{V(U(e))})});const d="chancebookPreferences";function r(){try{return JSON.parse(localStorage.getItem(d)||"{}")}catch{return{}}}function h(){try{localStorage.setItem(d,JSON.stringify({share:t.checked,name:o.checked,hiscores:a.checked}))}catch(s){console.warn("Could not save Chancebook preferences.",s)}}const k=r();t.checked=k.share===!0,o.checked=k.name===!0,a.checked=k.hiscores===!0;const $=()=>{o.disabled=!t.checked,a.disabled=!t.checked,t.checked||(o.checked=!1,a.checked=!1),n.disabled=!t.checked,h()};t.addEventListener("change",$),o.addEventListener("change",h),a.addEventListener("change",h),$();const p=async()=>{n.disabled=!0,i.textContent="Submitting...";try{const s=await N();if(!s)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:u,error:g}=await s.auth.getSession();if(g)throw g;let C=u.session;if(!C){const{data:K,error:T}=await s.auth.signInAnonymously();if(T)throw T;C=K.session}const w=JSON.parse(f.playerBlobText||""),{data:ce,error:q}=await s.functions.invoke("submit-player-data",{body:{rolledIds:f.rolled,obtainedIds:f.obtained,profile:w,chancebookRulesets:U(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:a.checked}});if(q)throw q;i.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(s){if(console.error("Chancebook submission failed:",s),s?.context)try{const u=await s.context.clone().text();console.error("Chancebook Edge Function response:",s.context.status,u)}catch(u){console.error("Could not read submission error response:",u)}i.textContent=s.message||"Could not submit your statistics."}finally{n.disabled=!t.checked}},y=async()=>{const s=e.querySelector("#cb-withdraw");s.disabled=!0;try{const u=await N(),{error:g}=await u.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(g)throw g;i.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(u){i.textContent=u.message||"Could not withdraw your contribution."}finally{s.disabled=!1}};(async()=>{try{const s=await N();if(!s||!c)return;const{data:u,error:g}=await s.auth.getSession();if(g)throw g;if(!u.session)return;const{data:C,error:w}=await s.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(w)throw w;c.hidden=C?.hasContribution!==!0}catch(s){console.warn("Could not check Chancebook contribution status:",s),i.textContent="Could not check your existing contribution. Please refresh the page."}})(),n.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",y)}function ie(){typeof E=="function"&&E(),E=null}export{he as default,ue as init,ie as teardown};
