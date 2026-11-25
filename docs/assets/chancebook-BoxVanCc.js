import{f}from"./index-Dvr92Gy_.js";import{C as L,a as N}from"./config-BS53vI6F.js";import{g as _}from"./client-CN5-tXB9.js";const U=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],D="chancebookRulesets",Y="chancebookCommunityStatsCache",F=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],B=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Watch Maclay's Youtube series for an explanation."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Watch LuckOfShuk's Youtube series for an explanation."]}];function K(){try{const e=JSON.parse(localStorage.getItem(D)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function W(e){try{localStorage.setItem(D,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function T(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(o=>{o.checked&&t[o.dataset.rulesetGroup].push(o.value)}),t}function G(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${l(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function H(e,t){return e.map(o=>`
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${t}"
                    value="${o.id}"
                >
                ${l(o.label)}
            </label>
            ${G(o.info)}
        </div>
    `).join("")}function V(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],o=Array.isArray(e.customRules)?e.customRules:[],a=F.filter(c=>t.includes(c.id)),i=B.filter(c=>o.includes(c.id));if(!a.length&&!i.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const n=c=>c.length?c.map(u=>`
            <div class="chancebook-profile-rule">
                <span>${l(u.label)}</span>
                ${G(u.info)}
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
                    ${n(i)}
                </div>
            </div>
        </div>
    `}let A=null,v=new Map;function l(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function m(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}async function M(){if(v.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();v=new Map(t.map(o=>[Number(o.id),o]))}function Q(e,t,o){const a=v.get(Number(e));return a?`
        <a class="chancebook-item" data-link href="/item?id=${Number(a.id)}" title="${l(a.name)}">
            <img src="/images/${encodeURIComponent(a.image)}" alt="" loading="lazy">
            <span>${l(a.name)}</span>
            <strong>${m(t)}</strong>
        </a>
    `:`<div class="chancebook-item"><span>Item #${l(e)}</span><strong>${m(t)}</strong></div>`}function I(e,t,o,a,i){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?Q(t.itemId,t.count):`<p class="chancebook-muted">${o}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${m(t.tiedCount-1)} other items tied for this spot</small>`:""}
            `:""}
            <a data-link href="${a}" class="chancebook-item-stat-link">
                ${i} →
            </a>
        </section>
    `}let S=0,R=!1;function z(e){const o={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!o?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${o}"
            alt=""
            aria-hidden="true"
            title="${l(e.accountType.replaceAll("_"," "))}"
        >
    `}function P(e,t=[]){const o=R?t.filter(d=>d.freeToPlayOnly===!0):t,a=10,i=Math.ceil(o.length/a),n=Math.min(S,Math.max(0,i-1));S=n;const c=n*a,u=o.slice(c,c+a);e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Each chancer has their own ruleset, so feel free to click into their profile and have a look!</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${R?"checked":""}>
                Free to Play
            </label>
        </div>

        ${u.length?`
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
                        ${u.map((d,r)=>`
                            <tr>
                                <td>${c+r+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${d.profileUrl?`<a data-link href="${l(d.profileUrl)}">${l(d.name)}</a>`:l(d.name||"Anonymous")}
                                        ${z(d)}
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

        ${i>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${n===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${n+1} of ${i}</span>
                <button type="button" class="chancebook-page-next" ${n>=i-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",d=>{R=d.target.checked,S=0,P(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,P(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,P(e,t)})}function X(){const e=Array.isArray(f.rolled)&&Array.isArray(f.obtained)&&f.player,t=f.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${l(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${H(F,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${H(B,"customRules")}
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
    `}async function de(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
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
    `}async function he(){se();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),o=t.startsWith("/chancebook/");let a=!0;if(A=()=>{a=!1},o){const n=e.querySelector("#chancebook-profile-content"),c=t.slice(12).split("/").filter(Boolean),u=decodeURIComponent(c[0]||""),d=c[1]==="item-history";if(!n)return;try{const[,r]=await Promise.all([M().catch(h=>{console.warn("Chancebook item data could not be loaded.",h)}),E({profile:u})]);if(!a)return;if(!r.profile){n.innerHTML=`
                    <h1>Player not found</h1>
                    <p>This profile may be private or may no longer be contributing.</p>
                `;return}n.innerHTML=d?ae(r.profile,u):oe(r.profile,u)}catch(r){if(!a)return;n.innerHTML=`
                <h1>Player profile</h1>
                <p class="chancebook-error">
                    ${l(r.message||"Could not load this profile.")}
                </p>
            `}return}const i=e.querySelector("#chancebook-load-status");try{if(!(!L||!N)){const[,n]=await Promise.all([M().catch(u=>{console.warn("Chancebook item data could not be loaded.",u)}),te()]);if(!a)return;i.hidden=!0,e.querySelector("#chancebook-statistics").hidden=!1;const c=document.createElement("p");c.className="chancebook-muted chancebook-small",c.textContent=`${m(n.contributorCount)} chancers currently contribute statistics.`,e.querySelector("#chancebook-statistics").prepend(c),e.querySelector("#chancebook-stat-grid").innerHTML=[I("Most commonly rolled item",n.itemHighlights?.mostRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),I("Most commonly obtained item",n.itemHighlights?.mostObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items"),I("Least commonly rolled item",n.itemHighlights?.leastRolled,"No rolled items yet.","/chancebook/rolled-items","View all rolled items"),I("Least commonly obtained item",n.itemHighlights?.leastObtained,"No obtained items yet.","/chancebook/obtained-items","View all obtained items")].join(""),P(e.querySelector("#chancebook-hiscores"),n.hiscores)}}catch(n){a&&i&&(i.innerHTML=`
                <span class="chancebook-error">
                    ${l(n.message||"Could not load Chancebook statistics.")}
                </span>
            `)}a&&ne(e)}function Z(){try{const e=JSON.parse(localStorage.getItem(Y)||"null");if(e&&e.version!==void 0&&e.data&&typeof e.data=="object")return e}catch(e){console.warn("Could not read cached Chancebook statistics.",e)}return null}function ee(e){if(!(!e||e.version===void 0))try{localStorage.setItem(Y,JSON.stringify({version:e.version,updatedAt:e.updatedAt??null,data:e}))}catch(t){console.warn("Could not cache Chancebook statistics.",t)}}async function E(e={}){const t=new URLSearchParams(e),o=`${L}/functions/v1/chancebook-public-data${t.toString()?`?${t}`:""}`,a=await fetch(o,{headers:{apikey:N}}),i=await a.json().catch(()=>({}));if(!a.ok)throw new Error(i.error||`Chancebook request failed (${a.status}).`);return i}async function te(e={}){if(e.profile||Object.keys(e).length>0)return E(e);const t=Z();if(t)try{const o=await E({versionOnly:"true"});if(String(t.version)===String(o.version))return t.data}catch(o){return console.warn("Could not check the Chancebook statistics version.",o),t.data}try{const o=await E();return ee(o),o}catch(o){if(t)return console.warn("Could not refresh Chancebook statistics. Using cached data.",o),t.data;throw o}}function oe(e,t){const o=e.player||{},a=o.levels||{},i=new Set((e.rolledIds||[]).map(Number)),n=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],c=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(o.recentRolls)?o.recentRolls:[],u=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(o.recentObtained)?o.recentObtained:[],d=U.reduce((r,h)=>r+(Number(a[h])||0),0);return`
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
                ${n.map(r=>{const{label:h,itemIds:k,alternativeItemIds:$}=r;let p,y="";if($){const s=i.has(1925),b=$.some(g=>i.has(g));p=s&&b,p||(s?y="Bucket rolled, missing essence":b?y="Essence rolled, bucket missing":y="0/2 requirements rolled")}else{const s=k.filter(b=>i.has(b)).length;p=s===k.length,p||(y=`${s}/${k.length} items rolled`)}const O=p?h:h.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <div>
                                <div><span>${p?"✓":"○"}</span>${O}</div>
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
            ${V(e.chancebookRulesets)}
        </section>
        <div class="chancebook-history-link">
            <a data-link href="/chancebook/${encodeURIComponent(t)}/item-history">
                View full item history →
            </a>
        </div>
        <div class="chancebook-recent-grid">
        <section class="chancebook-panel">
            <h2>Recently obtained</h2>
            ${u.length?`
                <div class="chancebook-recent-items">
                    ${u.slice(0,3).map(r=>{const h=v.get(Number(r));return h?`
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
                ${U.map(r=>`<div class="chancebook-skill"><img src="/images/skills/${r.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${l(r)}</span><strong>${m(a[r]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function j(e,t){const o=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${m(o.length)})</small></h2>

            ${o.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${o.map((a,i)=>{const n=v.get(Number(a));return`
                            <a
                                data-link
                                href="/item?id=${Number(a)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${i+1}.</span>
                                ${n?`
                                    <img
                                        src="/images/${encodeURIComponent(n.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${l(n.name)}</span>
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
    `}function ae(e,t){const o=Array.isArray(e.obtainedIds)?e.obtainedIds:[],a=Array.isArray(e.rolledIds)?e.rolledIds:[];return`
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
            ${j("Obtained items",o)}
            ${j("Rolled items",a)}
        </div>
    `}function ne(e){const t=e.querySelector("#cb-share"),o=e.querySelector("#cb-name"),a=e.querySelector("#cb-hiscores"),i=e.querySelector("#cb-submit"),n=e.querySelector("#cb-submit-status"),c=e.querySelector("#cb-manage");if(c&&(c.hidden=!0),!t||!o||!a||!i)return;const u=K();e.querySelectorAll("[data-ruleset-group]").forEach(s=>{s.checked=u[s.dataset.rulesetGroup].includes(s.value),s.addEventListener("change",()=>{W(T(e))})});const d="chancebookPreferences";function r(){try{return JSON.parse(localStorage.getItem(d)||"{}")}catch{return{}}}function h(){try{localStorage.setItem(d,JSON.stringify({share:t.checked,name:o.checked,hiscores:a.checked}))}catch(s){console.warn("Could not save Chancebook preferences.",s)}}const k=r();t.checked=k.share===!0,o.checked=k.name===!0,a.checked=k.hiscores===!0;const $=()=>{o.disabled=!t.checked,a.disabled=!t.checked,t.checked||(o.checked=!1,a.checked=!1),i.disabled=!t.checked,h()};t.addEventListener("change",$),o.addEventListener("change",h),a.addEventListener("change",h),$();const p=async()=>{i.disabled=!0,n.textContent="Submitting...";try{const s=await _();if(!s)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:b,error:g}=await s.auth.getSession();if(g)throw g;let w=b.session;if(!w){const{data:J,error:q}=await s.auth.signInAnonymously();if(q)throw q;w=J.session}const C=JSON.parse(f.playerBlobText||""),{data:ie,error:x}=await s.functions.invoke("submit-player-data",{body:{rolledIds:f.rolled,obtainedIds:f.obtained,profile:C,chancebookRulesets:T(e),shareStats:!0,showUsername:o.checked,leaderboardOptIn:a.checked}});if(x)throw x;n.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(s){if(console.error("Chancebook submission failed:",s),s?.context)try{const b=await s.context.clone().text();console.error("Chancebook Edge Function response:",s.context.status,b)}catch(b){console.error("Could not read submission error response:",b)}n.textContent=s.message||"Could not submit your statistics."}finally{i.disabled=!t.checked}},y=async()=>{const s=e.querySelector("#cb-withdraw");s.disabled=!0;try{const b=await _(),{error:g}=await b.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(g)throw g;n.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(b){n.textContent=b.message||"Could not withdraw your contribution."}finally{s.disabled=!1}};(async()=>{try{const s=await _();if(!s||!c)return;const{data:b,error:g}=await s.auth.getSession();if(g)throw g;if(!b.session)return;const{data:w,error:C}=await s.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(C)throw C;c.hidden=w?.hasContribution!==!0}catch(s){console.warn("Could not check Chancebook contribution status:",s),n.textContent="Could not check your existing contribution. Please refresh the page."}})(),i.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",y)}function se(){typeof A=="function"&&A(),A=null}export{de as default,he as init,se as teardown};
