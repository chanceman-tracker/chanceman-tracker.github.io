import{_ as W,f}from"./index-r3Mf_0VA.js";import{C as j,a as B}from"./config-BS53vI6F.js";const U=["Attack","Hitpoints","Mining","Strength","Agility","Smithing","Defence","Herblore","Fishing","Ranged","Thieving","Cooking","Prayer","Crafting","Firemaking","Magic","Fletching","Woodcutting","Runecraft","Slayer","Farming","Construction","Hunter","Sailing"],F="chancebookRulesets",D=[{id:"freeToPlayOnly",label:"I am free to play only"},{id:"itemSets",label:"I play with item sets"},{id:"flatpacks",label:"I play with flatpacks"},{id:"weaponPoisonRequirements",label:'I play with "Weapon Poison Requirements"'},{id:"toolRollGuarantee",label:'I play with "Tool Roll Guarantee"'},{id:"questItemRolls",label:'I play with "Quest Item Rolls"'}],G=[{id:"skill99Rolls",label:"I roll an item when I reach level 99 in a skill"},{id:"petRolls",label:"I roll 5 items when I obtain a pet"},{id:"otherPlayersHouses",label:"I get rolls from other player's houses"},{id:"allowTelegrab",label:"I allow telegrab for rolls"},{id:"rerollThirdAge",label:"I reroll third age items"},{id:"rerollGilded",label:"I reroll gilded items"},{id:"rerollDivinePotions",label:"I reroll divine potions and barbarian mixes"},{id:"questOfChance",label:"I play with the Quest of Chance ruleset by Maclay",info:["Completing a quest grants one (1) quest item roll.","Completing 5 combat achievements grants one (1) quest item roll (OR 10, 15 or 1 tier (Easy, Medium, Hard etc) depending on your wanted skill lvl).","For untradeable combination items that require one or more tradable items, those tradable items are listed individually (for hangover cure: snape grass, chocolate dust and bucket of milk are on the list).","For tradable combination items, only the combination item is listed (Potatoes(10) is listed instead of potato and sack).","When a non-specified item is needed (for instance, an axe), the lowest tier version of the item is listed (e.g. bronze axe).","When eventually Jagex adds more quests they might need another quest item roll, then it is added to the list to be rolled."]},{id:"luckOfShuk",label:"I play with LuckOfShuk's ruleset",info:["Unlock Herblore, Morytania and Sailing by default."]}];function J(){try{const e=JSON.parse(localStorage.getItem(F)||"{}");return{pluginSettings:Array.isArray(e.pluginSettings)?e.pluginSettings:[],customRules:Array.isArray(e.customRules)?e.customRules:[]}}catch{return{pluginSettings:[],customRules:[]}}}function z(e){try{localStorage.setItem(F,JSON.stringify(e))}catch(t){console.warn("Could not save Chancebook ruleset preferences.",t)}}function O(e){const t={pluginSettings:[],customRules:[]};return e.querySelectorAll("[data-ruleset-group]").forEach(a=>{a.checked&&t[a.dataset.rulesetGroup].push(a.value)}),t}function Y(e){return e?.length?`
        <details class="chancebook-rule-info">
            <summary aria-label="Ruleset information" title="More information">ⓘ</summary>
            <div class="chancebook-rule-tooltip">
                ${e.map(t=>`<p>${u(t)}</p>`).join("")}
            </div>
        </details>
    `:""}function T(e,t){return e.map(a=>`
        <div class="chancebook-rule-option">
            <label class="chancebook-check">
                <input
                    type="checkbox"
                    data-ruleset-group="${t}"
                    value="${a.id}"
                >
                ${u(a.label)}
            </label>
            ${Y(a.info)}
        </div>
    `).join("")}function Q(e={}){const t=Array.isArray(e.pluginSettings)?e.pluginSettings:[],a=Array.isArray(e.customRules)?e.customRules:[],n=D.filter(i=>t.includes(i.id)),s=G.filter(i=>a.includes(i.id));if(!n.length&&!s.length)return'<p class="chancebook-muted">No additional rulesets specified.</p>';const o=i=>i.length?i.map(r=>`
            <div class="chancebook-profile-rule">
                <span>${u(r.label)}</span>
                ${Y(r.info)}
            </div>
        `).join(""):'<p class="chancebook-muted">None specified.</p>';return`
        <div class="chancebook-profile-rules-grid">
            <div>
                <h3>Plug-in settings</h3>
                <div class="chancebook-profile-rules">
                    ${o(n)}
                </div>
            </div>

            <div>
                <h3>Custom rule sets</h3>
                <div class="chancebook-profile-rules">
                    ${o(s)}
                </div>
            </div>
        </div>
    `}let N=null,E=null,v=new Map;function u(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function b(e){return Number.isFinite(Number(e))?Number(e).toLocaleString():"0"}function w(){return W(async()=>{const{createClient:e}=await import("https://esm.sh/@supabase/supabase-js@2");return{createClient:e}},[]).then(({createClient:e})=>(N||(N=e(j,B,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}})),N))}async function V(){if(v.size)return;const e=await fetch("/data/items.json");if(!e.ok)throw new Error("Could not load the item database.");const t=await e.json();v=new Map(t.map(a=>[Number(a.id),a]))}function X(e,t,a){const n=v.get(Number(e));return n?`
        <a class="chancebook-item" data-link href="/item?id=${Number(n.id)}" title="${u(n.name)}">
            <img src="/images/${encodeURIComponent(n.image)}" alt="" loading="lazy">
            <span>${u(n.name)}</span>
            <strong>${b(t)}</strong>
        </a>
    `:`<div class="chancebook-item"><span>Item #${u(e)}</span><strong>${b(t)}</strong></div>`}function R(e,t,a){return`
        <section class="chancebook-stat-card">
            <h3>${e}</h3>
            ${t?X(t.itemId,t.count):`<p class="chancebook-muted">${a}</p>`}
            ${t?`
                ${t.tiedCount>1?`<small>+ ${b(t.tiedCount-1)} other items tied for this spot for ${b(t.count)} players</small>`:""}
                <small>${b(t.count)} contributing players</small>
            `:""}
        </section>
    `}function A(e=[],t="max"){const a=e.filter(r=>v.has(Number(r.itemId))&&Number(r.count)>0);if(!a.length)return null;const n=t==="max"?Math.max(...a.map(r=>Number(r.count))):Math.min(...a.map(r=>Number(r.count))),s=a.filter(r=>Number(r.count)===n),o=Math.floor(Math.random()*s.length);return{...s[o],count:n,tiedCount:s.length}}let S=0,_=!1;function Z(e){const a={ironman:"Ironman_chat_badge.webp",hardcore_ironman:"Hardcore_ironman_chat_badge.webp",ultimate_ironman:"Ultimate_ironman_chat_badge.webp",group_ironman:"Group_ironman_chat_badge.webp",hardcore_group_ironman:"Hardcore_group_ironman_chat_badge.webp",unranked_group_ironman:"Unranked_group_ironman_chat_badge.webp"}[e.accountType];return!e.isIronman||!a?"":`
        <img
            class="chancebook-ironman-icon"
            src="/images/ironman/${a}"
            alt=""
            aria-hidden="true"
            title="${u(e.accountType.replaceAll("_"," "))}"
        >
    `}function P(e,t=[]){const a=_?t.filter(h=>h.freeToPlayOnly===!0):t,n=10,s=Math.ceil(a.length/n),o=Math.min(S,Math.max(0,s-1));S=o;const i=o*n,r=a.slice(i,i+n);e.innerHTML=`
        <div class="chancebook-hiscores-header">
            <p class="chancebook-muted chancebook-small">Players who have opted into the hiscores. Up to 10 entries are shown.</p>
            <label class="chancebook-check">
                <input type="checkbox" id="chancebook-f2p-filter"
                    ${_?"checked":""}>
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
                                <td>${i+l+1}</td>
                                <td>
                                    <span class="chancebook-hiscore-player">
                                        ${h.profileUrl?`<a data-link href="${u(h.profileUrl)}">${u(h.name)}</a>`:u(h.name||"Anonymous")}
                                        ${Z(h)}
                                    </span>
                                </td>
                                <td>${b(h.rolledCount)}</td>
                                <td>${b(h.obtainedCount)}</td>
                                <td>${b(h.questPoints)}</td>
                                <td>${b(h.totalLevel)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `:`<p class="chancebook-muted">No players found${_?" with Free to Play selected":""}.</p>`}

        ${s>1?`
            <div class="chancebook-hiscores-pagination">
                <button type="button" class="chancebook-page-prev" ${o===0?"disabled":""} aria-label="Previous page">←</button>
                <span>Page ${o+1} of ${s}</span>
                <button type="button" class="chancebook-page-next" ${o>=s-1?"disabled":""} aria-label="Next page">→</button>
            </div>
        `:""}
    `,e.querySelector("#chancebook-f2p-filter").addEventListener("change",h=>{_=h.target.checked,S=0,P(e,t)}),e.querySelector(".chancebook-page-prev")?.addEventListener("click",()=>{S--,P(e,t)}),e.querySelector(".chancebook-page-next")?.addEventListener("click",()=>{S++,P(e,t)})}function ee(){const e=Array.isArray(f.rolled)&&Array.isArray(f.obtained)&&f.player,t=f.player?.name||"";return`
        <section class="chancebook-panel" id="chancebook-contribute">
            <h2>Contribute to Chancebook</h2>
            <p>Share your tracker statistics to help build the community totals. Uploading is optional and does not change your local tracker files.</p>
            ${e?`
                <p class="chancebook-ready">Tracker data detected for <strong>${u(t)}</strong>.</p>
                <div class="chancebook-ruleset-settings">
                    <h3>Plug-in settings</h3>
                    <div class="chancebook-ruleset-grid">
                        ${T(D,"pluginSettings")}
                    </div>

                    <h3>Custom rule sets</h3>
                    <div class="chancebook-ruleset-grid">
                        ${T(G,"customRules")}
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
    `}async function re(){return window.location.pathname.replace(/\/+$/,"").startsWith("/chancebook/")?`
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
    `}async function le(){ne();const e=document.getElementById("app");if(!e)return;const t=window.location.pathname.replace(/\/+$/,""),a=t.startsWith("/chancebook/");let n=!0;try{await V()}catch(o){console.warn("Chancebook item data could not be loaded.",o)}if(a){const o=e.querySelector("#chancebook-profile-content"),i=t.slice(12).split("/").filter(Boolean),r=decodeURIComponent(i[0]||""),h=i[1]==="item-history";if(!o)return;try{const l=await w();if(!l)throw new Error("Chancebook is not configured yet.");const d=await M(l,{profile:r});if(!n)return;if(!d.profile){o.innerHTML="<h1>Player not found</h1><p>This profile may be private or may no longer be contributing.</p>";return}o.innerHTML=h?ae(d.profile,r):te(d.profile,r)}catch(l){o.innerHTML=`<h1>Player profile</h1><p class="chancebook-error">${u(l.message||"Could not load this profile.")}</p>`}return}const s=e.querySelector("#chancebook-load-status");try{const o=await w();if(!o)s.innerHTML="Chancebook needs its Supabase project settings. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your local <code>.env.local</code> file before building.";else{const i=await M(o);if(!n)return;s.hidden=!0,e.querySelector("#chancebook-statistics").hidden=!1;const r=document.createElement("p");r.className="chancebook-muted chancebook-small",r.textContent=`${b(i.contributorCount)} players currently contribute statistics.`,e.querySelector("#chancebook-statistics").prepend(r),e.querySelector("#chancebook-stat-grid").innerHTML=[R("Most commonly rolled item",A(i.rolledItemCounts,"max"),"No rolled items yet."),R("Most commonly obtained item",A(i.obtainedItemCounts,"max"),"No obtained items yet."),R("Least commonly rolled item",A(i.rolledItemCounts,"min"),"No rolled items yet."),R("Least commonly obtained item",A(i.obtainedItemCounts,"min"),"No obtained items yet.")].join(""),P(e.querySelector("#chancebook-hiscores"),i.hiscores)}}catch(o){s&&(s.innerHTML=`<span class="chancebook-error">${u(o.message||"Could not load Chancebook statistics.")}</span>`)}oe(e),E=()=>{n=!1}}async function M(e,t={}){const a=new URLSearchParams(t),n=`${j}/functions/v1/chancebook-public-data${a.toString()?`?${a}`:""}`,s=await fetch(n,{headers:{apikey:B}}),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||`Chancebook request failed (${s.status}).`);return o}function te(e,t){const a=e.player||{},n=a.levels||{},s=new Set((e.rolledIds||[]).map(Number)),o=[{label:"Herblore unlocked",itemIds:[2136,2134,2138,2132]},{label:"Sailing unlocked",itemIds:[8794,2347]},{label:"Morytania unlocked",itemIds:[1925],alternativeItemIds:[7936,1436]}],i=Array.isArray(e.recentRolls)?e.recentRolls:Array.isArray(a.recentRolls)?a.recentRolls:[],r=Array.isArray(e.recentObtained)?e.recentObtained:Array.isArray(a.recentObtained)?a.recentObtained:[],h=U.reduce((l,d)=>l+(Number(n[d])||0),0);return`
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
            <div><strong>${b(e.rolledCount)}</strong><span>Items rolled</span></div>
            <div><strong>${b(e.obtainedCount)}</strong><span>Items obtained</span></div>
            <div><strong>${b(a.questPoints)}</strong><span>Quest points</span></div>
            <div><strong>${b(h)}</strong><span>Total level</span></div>
        </div>
        <section class="chancebook-panel">
            <h2>Achievements</h2>
            <div class="chancebook-achievements">
                ${o.map(l=>{const{label:d,itemIds:k,alternativeItemIds:$}=l;let p,y="";if($){const c=s.has(1925),m=$.some(g=>s.has(g));p=c&&m,p||(c?y="Bucket rolled, missing essence":m?y="Essence rolled, bucket missing":y="0/2 requirements rolled")}else{const c=k.filter(m=>s.has(m)).length;p=c===k.length,p||(y=`${c}/${k.length} items rolled`)}const L=p?d:d.replace("unlocked","still locked");return`
                        <div class="chancebook-achievement ${p?"is-unlocked":"is-locked"}">
                            <span>${p?"✓":"○"}</span>
                            <div>
                                <div>${L}</div>
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
            ${i.length?`<div class="chancebook-recent-items">${i.slice(0,3).map(l=>{const d=v.get(Number(l));return d?`<a data-link href="/item?id=${Number(l)}"><img src="/images/${encodeURIComponent(d.image)}" alt=""><span>${u(d.name)}</span></a>`:""}).join("")}</div>`:'<p class="chancebook-muted">Recent roll history is not available for this submission yet.</p>'}
        </section>
        </div>
        <section class="chancebook-panel">
            <h2>Levels</h2>
            <div class="chancebook-skills">
                ${U.map(l=>`<div class="chancebook-skill"><img src="/images/skills/${l.toLowerCase().replace(/ /g,"_")}.png" alt=""><span>${u(l)}</span><strong>${b(n[l]||1)}</strong></div>`).join("")}
            </div>
        </section>
    `}function H(e,t){const a=Array.isArray(t)?t:[];return`
        <section class="chancebook-panel">
            <h2>${e} <small>(${b(a.length)})</small></h2>

            ${a.length?`
                <div style="display:grid; gap:8px; max-height:700px; overflow-y:auto;">
                    ${a.map((n,s)=>{const o=v.get(Number(n));return`
                            <a
                                data-link
                                href="/item?id=${Number(n)}"
                                class="chancebook-history-item"
                                style="display:flex; align-items:center; gap:10px; padding:6px 8px;"
                            >
                                <span class="chancebook-muted">${s+1}.</span>
                                ${o?`
                                    <img
                                        src="/images/${encodeURIComponent(o.image)}"
                                        alt=""
                                        style="width:32px; height:32px; object-fit:contain;"
                                    >
                                    <span>${u(o.name)}</span>
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
    `}function ae(e,t){const a=Array.isArray(e.obtainedIds)?e.obtainedIds:[],n=Array.isArray(e.rolledIds)?e.rolledIds:[];return`
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
            ${H("Obtained items",a)}
            ${H("Rolled items",n)}
        </div>
    `}function oe(e){const t=e.querySelector("#cb-share"),a=e.querySelector("#cb-name"),n=e.querySelector("#cb-hiscores"),s=e.querySelector("#cb-submit"),o=e.querySelector("#cb-submit-status"),i=e.querySelector("#cb-manage");if(i&&(i.hidden=!0),!t||!a||!n||!s)return;const r=J();e.querySelectorAll("[data-ruleset-group]").forEach(c=>{c.checked=r[c.dataset.rulesetGroup].includes(c.value),c.addEventListener("change",()=>{z(O(e))})});const h="chancebookPreferences";function l(){try{return JSON.parse(localStorage.getItem(h)||"{}")}catch{return{}}}function d(){try{localStorage.setItem(h,JSON.stringify({share:t.checked,name:a.checked,hiscores:n.checked}))}catch(c){console.warn("Could not save Chancebook preferences.",c)}}const k=l();t.checked=k.share===!0,a.checked=k.name===!0,n.checked=k.hiscores===!0;const $=()=>{a.disabled=!t.checked,n.disabled=!t.checked,t.checked||(a.checked=!1,n.checked=!1),s.disabled=!t.checked,d()};t.addEventListener("change",$),a.addEventListener("change",d),n.addEventListener("change",d),$();const p=async()=>{s.disabled=!0,o.textContent="Submitting...";try{const c=await w();if(!c)throw new Error("Chancebook is not configured yet. Please try again after the site configuration is added.");const{data:m,error:g}=await c.auth.getSession();if(g)throw g;let C=m.session;if(!C){const{data:K,error:x}=await c.auth.signInAnonymously();if(x)throw x;C=K.session}const I=JSON.parse(f.playerBlobText||""),{data:se,error:q}=await c.functions.invoke("submit-player-data",{body:{rolledIds:f.rolled,obtainedIds:f.obtained,profile:I,chancebookRulesets:O(e),shareStats:!0,showUsername:a.checked,leaderboardOptIn:n.checked}});if(q)throw q;o.textContent="Your statistics have been submitted.",e.querySelector("#cb-manage").hidden=!1}catch(c){o.textContent=c.message||"Could not submit your statistics."}finally{s.disabled=!t.checked}},y=async()=>{const c=e.querySelector("#cb-withdraw");c.disabled=!0;try{const m=await w(),{error:g}=await m.functions.invoke("withdraw-player-data",{body:{action:"withdraw"}});if(g)throw g;o.textContent="Your Chancebook contribution has been withdrawn.",e.querySelector("#cb-manage").hidden=!0}catch(m){o.textContent=m.message||"Could not withdraw your contribution."}finally{c.disabled=!1}};(async()=>{try{const c=await w();if(!c||!i)return;const{data:m,error:g}=await c.auth.getSession();if(g)throw g;if(!m.session)return;const{data:C,error:I}=await c.functions.invoke("withdraw-player-data",{body:{action:"status"}});if(I)throw I;i.hidden=C?.hasContribution!==!0}catch(c){console.warn("Could not check Chancebook contribution status:",c),o.textContent="Could not check your existing contribution. Please refresh the page."}})(),s.addEventListener("click",p),e.querySelector("#cb-withdraw")?.addEventListener("click",y)}function ne(){typeof E=="function"&&E(),E=null}export{re as default,le as init,ne as teardown};
