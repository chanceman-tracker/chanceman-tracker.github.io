import{f as $}from"./index-DYnYne-s.js";import{C as N,a as q}from"./config-BS53vI6F.js";import{g as L}from"./client-BHTf7wdt.js";const M=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],B="chancebookRulesets",E="chancebookCommunityStatsCacheV2",x=[{id:"freeToPlayOnly",label:"Free to play only"},{id:"itemSets",label:"Item sets"},{id:"flatpacks",label:"Flatpacks"},{id:"weaponPoisonRequirements",label:"Weapon Poison Requirements"},{id:"toolRollGuarantee",label:"Tool Roll Guarantee"},{id:"questItemRolls",label:"Quest Item Rolls"}],O=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Watch Maclay's Youtube series for an explanation."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Watch LuckOfShuk's Youtube series for an explanation."]}];function K(){try{const e=JSON.parse(localStorage.getItem(B)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function V(e){try{localStorage.setItem(B,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function j(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function J(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${d(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function F(e,t){return e.map(o=>`
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${t}"
                    value="${o.id}"
                >
                ${d(o.label)}
            </label>
            ${J(o.info)}
        </div>
    `).join("")}function Q(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],n=x.filter(r=>t.includes(r.id)),s=O.filter(r=>o.includes(r.id));if(!n.length&&!s.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const c=r=>r.length?r.map(b=>`
            <div class="chancebook-profile-rule">
                <span>${d(b.label)}</span>
                ${J(b.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <p>Check your Chanceman plugin settings and select all options that you also have checked there.</p> 
                <div class="chancebook-profile-rules">
                    ${c(n)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${c(s)}
                </div>
            </div>
        </div>
    `}let P=null,C=new Map;function d(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function g(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}async function z(){if(C.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();C=new Map(t.map(o=>[Number(o.id),o]))}function X(e,t,o=null){const n=o?.name?o:C.get(Number(e));return n?`
        <a class="chancebook-item" data-link href="/item?id=${Number(e)}" title="${d(n.name)}">
            ${n.image?`
                <img src="/images/${encodeURIComponent(n.image)}" alt="" loading="lazy">
            `:""}
            <span>${d(n.name)}</span>
            <strong>${g(t)}</strong>
        </a>
    `:`
            <div class="chancebook-item">
                <span>Item #${d(e)}</span>
                <strong>${g(t)}</strong>
            </div>
        `}function A(e,t,o,n,s){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?X(t.itemId,t.count,t):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${g(t.tiedCount-1)} other items tied for this spot</small>`:""}
            `:""}
            <a data-link href="${n}" class="chancebook-item-stat-link">
                ${s} →
            </a>
        </section>
    `}let S=0,v={pluginSettings:[],customRules:[]};function Z(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${d(e.accountType.replaceAll("_"," "))}"
        >
    `}function w(e,t=[]){const o=t.filter(a=>{const u=a.chancebookRulesets||{},k=u.pluginSettings||[],p=u.customRules||[];return v.pluginSettings.every(m=>k.includes(m))&&v.customRules.every(m=>p.includes(m))}),n=(a,u,k,p)=>`
        <div class="chancebook-hiscores-filter-group">
            <strong>${a}</strong>
            <div class="chancebook-hiscores-filter-options">
                ${u.map(m=>`
                    <label class="chancebook-check">
                        <input
                            type="checkbox"
                            data-filter-group="${k}"
                            value="${d(m.id)}"
                            ${p.includes(m.id)?"checked":""}
                        >
                        ${d(m.label)}
                    </label>
                `).join("")}
            </div>
        </div>
    `,s=10,c=Math.ceil(o.length/s),r=Math.min(S,Math.max(0,c-1));S=r;const b=r*s,f=o.slice(b,b+s),l=e.querySelector(".chancebook-hiscores-filters")?.open??!1;e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">
                Each chancer has their own ruleset, so feel free to click into their profile and have a look!
            </p>
        </div>

        <details class="chancebook-hiscores-filters" ${l?"open":""}>
            <summary>
                Filters
                <span class="chancebook-muted chancebook-small">
                    (${v.pluginSettings.length+v.customRules.length} selected)
                </span>
            </summary>

            <div class="chancebook-hiscores-filter-content">
                ${n("Plugin settings",x,"pluginSettings",v.pluginSettings)}

                ${n("Custom rules",O,"customRules",v.customRules)}

                <button type="button" class="chancebook-hiscores-clear-filters">
                    Clear filters
                </button>
            </div>
        </details>

        ${f.length?`
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
                        ${f.map((a,u)=>`
                            <tr>
                                <td>${b+u+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${a.profileUrl?`<a data-link href="${d(a.profileUrl)}">${d(a.name)}</a>`:d(a.name||"Anonymous")}
                                        ${Z(a)}
                                    </span>
                                </td>
                                <td>${g(a.rolledCount)}</td>
                                <td>${g(a.obtainedCount)}</td>
                                <td>${g(a.questPoints)}</td>
                                <td>${g(a.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `:`
            <p class="chancebook-muted">
                No chancers found matching the selected filters.
            </p>
        `}

        ${c>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev"
                    ${r===0?"disabled":""}
                    aria-label="Previous page">←</button>
                <span>Page ${r+1} of ${c}</span>
                <button type="button" class="chancebook-page-next"
                    ${r>=c-1?"disabled":""}
                    aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelectorAll("[data-filter-group]").forEach(a=>{a.addEventListener("change",()=>{const u=a.dataset.filterGroup;v[u]=Array.from(e.querySelectorAll(`[data-filter-group="${u}"]:checked`)).map(k=>k.value),S=0,w(e,t)})}),e.querySelector(".chancebook-hiscores-clear-filters").addEventListener("click",()=>{v={pluginSettings:[],customRules:[]},S=0,w(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,w(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,w(e,t)})}function ee(){const e=Array.isArray($.rolled)&&Array.isArray($.obtained)&&$.player,t=$.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${d(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <p>Select which options you have selected in the Chanceman plugin settings.</p>
                    <div class="chancebook-ruleset-grid">
                        ${F(x,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${F(O,"customRules")}
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
    `}function D(e,t){const o=e.querySelector("#chancebook-load-status"),n=e.querySelector("#chancebook-statistics");if(!n)return;o.hidden=!0,n.hidden=!1,n.querySelector(".chancebook-contributor-note")?.remove();const s=document.createElement("p");s.className="chancebook-muted chancebook-small chancebook-contributor-note",s.textContent=`${g(t.contributorCount)} chancers currently contribute statistics.`,n.prepend(s),e.querySelector("#chancebook-stat-grid").innerHTML=[A("Most commonly rolled item",t.itemHighlights?.mostRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),A("Most commonly obtained item",t.itemHighlights?.mostObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items"),A("Least commonly rolled item",t.itemHighlights?.leastRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),A("Least commonly obtained item",t.itemHighlights?.leastObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items")].join(""),w(e.querySelector("#chancebook-hiscores"),t.hiscores)}async function he(){ie();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let n=!0;if(P=()=>{n=!1},o){const c=e.querySelector("#chancebook-profile-content"),r=t.slice(12).split("/").filter(Boolean),b=decodeURIComponent(r[0]||""),f=r[1]==="item-history";if(!c)return;try{const[,l]=await Promise.all([z().catch(a=>{console.warn("Chancebook item data could not be loaded.",a)}),_({profile:b})]);if(!n)return;if(!l.profile){c.innerHTML=`
                    <h1>Player not found</h1>
                    <p>This profile may be private or may no longer be contributing.</p>
                `;return}c.innerHTML=f?ae(l.profile,b):ne(l.profile,b)}catch(l){if(!n)return;c.innerHTML=`
                <h1>Player profile</h1>
                <p class="chancebook-error">
                    ${d(l.message||"Could not load this profile.")}
                </p>
            `}return}const s=e.querySelector("#chancebook-load-status");se(e);try{if(!(!N||!q)){const c=await oe(r=>{n&&D(e,r)});if(!n)return;D(e,c)}}catch(c){n&&s&&(s.innerHTML=`
                <span class="chancebook-error">
                    ${d(c.message||"Could not load Chancebook statistics.")}
                </span>
            `)}}function te(){try{const e=JSON.parse(localStorage.getItem(E)||"null");if(e&&e.version!==void 0&&e.data&&typeof e.data=="object")return e}catch(e){console.warn("Could not read cached Chancebook statistics.",e)}return null}function Y(e){if(!e||e.version===void 0)return;const t={...e};delete t.rolledItemCounts,delete t.obtainedItemCounts;try{localStorage.setItem(E,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:t}))}catch(o){console.warn("Could not cache Chancebook statistics.",o);try{localStorage.removeItem(E),localStorage.setItem(E,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:t}))}catch(n){console.warn("Could not save the reduced Chancebook cache.",n)}}}async function _(e={}){const t=new URLSearchParams(e),o=`${N}/functions/v1/chancebook-public-data${t.toString()?`?${t}`:""}`,n=await fetch(o,{headers:{apikey:q}}),s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.error||`Chancebook request failed (${n.status}).`);return s}async function oe(e){const t=te();if(t)return(async()=>{try{const n=await _({versionOnly:"true"});if(String(t.version)===String(n.version))return;const s=await _();Y(s),typeof e=="function"&&e(s)}catch(n){console.warn("Could not refresh Chancebook statistics in the background.",n)}})(),t.data;const o=await _();return Y(o),o}function ne(e,t){const o=e.player||{},n=o.levels||{},s=new Set((e.rolledIds||[]).map(Number)),c=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],r=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(o.recentRolls)?o.recentRolls:[],b=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(o.recentObtained)?o.recentObtained:[],f=M.reduce((l,a)=>l+(Number(n[a])||0),0);return`
        <div class="chancebook-profile-heading">
            <div>
                <h1>${d(e.name)}</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${d(new Date(e.lastUpdated).toLocaleDateString())}
                    </p>
                `:""}
            </div>
        </div>
        <div class="chancebook-profile-stats">
            <div><strong>${g(e.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${g(e.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${g(o.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${g(f)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${c.map(l=>{const{label:a,itemIds:u,alternativeItemIds:k}=l;let p,m="";if(k){const i=s.has(1925),h=k.some(y=>s.has(y));p=i&&h,p||(i?m="Bucket rolled, missing essence":h?m="Essence rolled, bucket missing":m="0/2 requirements rolled")}else{const i=u.filter(h=>s.has(h)).length;p=i===u.length,p||(m=`${i}/${u.length} items rolled`)}const H=p?a:a.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <div>
                                <div><span>${p?"✓":"○"}</span>${H}</div>
                                ${p?"":`
                                    <small class="chancebook-muted">${m}</small>
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
                    ${b.slice(0,3).map(l=>{const a=C.get(Number(l));return a?`
                            <a data-link href="/item?id=${Number(l)}">
                                <img src="/images/${encodeURIComponent(a.image)}" alt="">
                                <span>${d(a.name)}</span>
                            </a>
                        `:""}).join("")}
                </div>
            `:'<p class="chancebook-muted">Recent obtained history is not available for this submission yet.</p>'}
        </section>
        <section class="chancebook-panel">
            <h2>Recently rolled</h2>
            ${r.length?`<div class="chancebook-recent-items">${r.slice(0,3).map(l=>{const a=C.get(Number(l));return a?`<a data-link href="/item?id=${Number(l)}"><img src="/images/${encodeURIComponent(a.image)}" alt=""><span>${d(a.name)}</span></a>`:""}).join("")}</div>`:'<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>'}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${M.map(l=>`<div class="chancebook-skill"><img src="/images/skills/${l.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${d(l)}</span><strong>${g(n[l]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function G(e,t){const o=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${g(o.length)})</small></h2>

            ${o.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${o.map((n,s)=>{const c=C.get(Number(n));return`
                            <a
                                data-link
                                href="/item?id=${Number(n)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${s+1}.</span>
                                ${c?`
                                    <img
                                        src="/images/${encodeURIComponent(c.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${d(c.name)}</span>
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
    `}function ae(e,t){const o=Array.isArray(e.obtainedIds)?e.obtainedIds:[],n=Array.isArray(e.rolledIds)?e.rolledIds:[];return`
        <div class="chancebook-profile-heading">
            <div>
                <h1>${d(e.name)} - Item History</h1>
                ${e.lastUpdated?`
                    <p class="chancebook-muted chancebook-small">
                        Last updated: ${d(new Date(e.lastUpdated).toLocaleDateString())}
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
            ${G("Obtained items",o)}
            ${G("Rolled items",n)}
        </div>
    `}function se(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),n=e.querySelector("#cb-hiscores"),s=e.querySelector("#cb-submit"),c=e.querySelector("#cb-submit-status"),r=e.querySelector("#cb-manage");if(r&&(r.hidden=!0),!t||!o||!n||!s)return;const b=K();e.querySelectorAll("[data-ruleset-group]").forEach(i=>{i.checked=b[i.dataset.rulesetGroup].includes(i.value),i.addEventListener("change",()=>{V(j(e))})});const f="chancebookPreferences";function l(){try{return JSON.parse(localStorage.getItem(f)||"{}")}catch{return{}}}function a(){try{localStorage.setItem(f,JSON.stringify({share:t.checked,name:o.checked,hiscores:n.checked}))}catch(i){console.warn("Could not save Chancebook preferences.",i)}}const u=l();t.checked=u.share===!0,o.checked=u.name===!0,n.checked=u.hiscores===!0;const k=()=>{o.disabled=!t.checked,n.disabled=!t.checked,t.checked||(o.checked=!1,n.checked=!1),s.disabled=!t.checked,a()};t.addEventListener("change",k),o.addEventListener("change",a),n.addEventListener("change",a),k();const p=async()=>{s.disabled=!0,c.textContent="Submitting...";try{const i=await L();if(!i)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:h,error:y}=await i.auth.getSession();if(y)throw y;let R=h.session;if(!R){const{data:W,error:T}=await i.auth.signInAnonymously();if(T)throw T;R=W.session}const I=JSON.parse($.playerBlobText||""),{data:ce,error:U}=await i.functions.invoke("submit-player-data",{body:{rolledIds:$.rolled,obtainedIds:$.obtained,profile:I,chancebookRulesets:j(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:n.checked}});if(U)throw U;c.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(i){if(console.error("Chancebook submission failed:",i),i?.context)try{const h=await i.context.clone().text();console.error("Chancebook Edge Function response:",i.context.status,h)}catch(h){console.error("Could not read submission error response:",h)}c.textContent=i.message||"Could not submit your statistics."}finally{s.disabled=!t.checked}},m=async()=>{const i=e.querySelector("#cb-withdraw");i.disabled=!0;try{const h=await L(),{error:y}=await h.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(y)throw y;c.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(h){c.textContent=h.message||"Could not withdraw your contribution."}finally{i.disabled=!1}};(async()=>{try{const i=await L();if(!i||!r)return;const{data:h,error:y}=await i.auth.getSession();if(y)throw y;if(!h.session)return;const{data:R,error:I}=await i.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(I)throw I;r.hidden=R?.hasContribution!==!0}catch(i){console.warn("Could not check Chancebook contribution status:",i),c.textContent="Could not check your existing contribution. Please refresh the page."}})(),s.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",m)}function ie(){typeof P=="function"&&P(),P=null}export{ue as default,he as init,ie as teardown};
