import{f as l,k as Y,l as Z,R as N,m as ee,n as te,r as se}from"./index-CwfsyrcD.js";import{b as le,f as ae}from"./npcDropEntries-DUQ5hiZN.js";const ne=["Beginner","Easy","Medium","Hard","Elite","Master"];function f(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ie(e,t,i){if(e?.ignoreSkillLevels)return ee(e,t);const a=e.player?.levels?.[t];return typeof a=="number"&&a>=i?!0:te(e,t,i)}function re(e,t,i){const a=e.player?.quests?.[t]??0;return i==="completed"?a===2:i==="started"?a>0:!1}function J(e,t){if(!t?.id)return!1;const i=e.obtained||[],a=e.rolled||[];return i.includes(t.id)&&a.includes(t.id)}function U(e,t){return e?.name?e.name:e?.id&&t?.has(e.id)?t.get(e.id):typeof e=="number"&&t?.has(e)?t.get(e):e?.id?`Item ${e.id}`:"Unknown item"}function oe(e){return(e||[]).map(t=>typeof t=="number"?{id:t}:typeof t=="object"?t:{name:String(t)})}async function B(e,t,i){const a={skills:[],quests:[],items:[],itemGroups:[],rules:[],untracked:[]};let s=!0;for(const[n,r]of Object.entries(e?.skills||{}))ie(t,n,r)||(a.skills.push(`${n} ${r}`),s=!1);for(const[n,r]of Object.entries(e?.quests||{}))if(!re(t,n,r)){const d=r==="completed"?"completed":"started";a.quests.push(`${n} (${d})`),s=!1}for(const n of e?.items||[])J(t,n)||(a.items.push(U(n,i)),s=!1);for(const n of e?.itemsAny||[]){const r=oe(n);if(!r.some(o=>J(t,o))){const o=r.map(h=>U(h,i));a.itemGroups.push(`Any of: ${o.join(" / ")}`),s=!1}}const c=(e?.rulesAll||[]).filter(Y),y=new Set(c);c.length&&(Z(t,c,{trackMissing:!1})||(a.rules.push(c.join(" + ")),s=!1));for(const n of e?.rulesAll||[]){if(y.has(n))continue;const r=N[n];if(!r){a.rules.push(`${n} (missing)`),s=!1;continue}try{await r(t)||(a.rules.push(n),s=!1)}catch{a.rules.push(`${n} (error)`),s=!1}}const u=e?.rulesAny||[];if(u.length){let n=!1;const r=[];for(const d of u){const o=N[d];if(!o){r.push(`${d} (missing)`);continue}try{await o(t)?n=!0:r.push(d)}catch{r.push(`${d} (error)`)}}n||(a.rules.push(`Any of: ${r.join(" / ")}`),s=!1)}return e?.untracked?.length&&(a.untracked=[...e.untracked],s=!1),{met:s,missing:a}}function ce(e){const t=[];return e.skills.length&&t.push(`Missing levels: ${e.skills.join(", ")}.`),e.quests.length&&t.push(`Missing quests: ${e.quests.join(", ")}.`),e.items.length&&t.push(`Missing items: ${e.items.join(", ")}.`),e.itemGroups.length&&t.push(`Missing item options: ${e.itemGroups.join("; ")}.`),e.rules.length&&t.push(`Missing rules: ${e.rules.join(", ")}.`),e.untracked.length&&t.push(`Untracked requirements: ${e.untracked.join(", ")}.`),t.map(i=>`<div class="clue-missing">${f(i)}</div>`).join("")}function O(e={}){return{items:l.items,player:l.player,obtained:l.obtained||[],rolled:l.rolled||[],filters:l.filters,ignoreSkillLevels:!!e.ignoreSkillLevels,missing:{items:new Set}}}function ue(e){return String(e||"").trim().toLowerCase()}function de(e,t){if(!e?.countWhenAvailableOnly)return!0;const i=e.requirements?.quests||{};for(const[a,s]of Object.entries(i)){const c=t?.quests?.[a]??0;if(s==="completed"&&c!==2||s==="started"&&c<=0)return!1}return!0}async function pe(){try{const e=await fetch("/data/clue_steps.json");return e.ok?await e.json():null}catch{return null}}async function be(){const e=!!l.player,t=await pe();l.items===null&&await l.ensureItemsLoaded();const i=new Map((l.items||[]).map(o=>[o.id,o.name])),a=O(),s=t?.tiers||{},c=[],{entries:y}=await le({items:l.items||[],obtained:l.obtained||[],rolled:l.rolled||[],player:l.player,filters:{...l.filters,hideClue:!1}}),u={Beginner:"Reward casket (beginner)",Easy:"Reward casket (easy) Standard",Medium:"Reward casket (medium) Standard",Hard:"Reward casket (hard)",Elite:"Reward casket (elite)",Master:"Reward casket (master)"},n=new Map(y.map(o=>[o.npcName,o]));for(const o of ne){const h=s?.[o]||[];if(!h.length)continue;let g=0,L=0;const H=[],k=new Map,M=n.get(u[o]),G=M?`· Chance to get a new roll: ${ae(M.totalRateScore)} · Potential rolls: ${M.items.length}`:"· Chance to get a new roll: 0%";for(const p of h){const v=!e||de(p,l.player);v&&(L+=1);const C=p.description||p.name||"Untitled step",S=p.type||"Unknown",A=p.specialInfo||"",F=!!A,K=F?`<span class="clue-step-info" tabindex="0" aria-label="Special clue information" title="${f(A)}">i</span>`:"";let q=!1,T=!1,w="clue-status-blocked",b="Incompletable",D="";const W=C.startsWith("Buried beneath the ground, who knows where it's found.")&&l.filters?.ignoreMakingHistoryJorral,z=o==="Master"&&p.type==="Cryptic clues"&&l.filters?.juggleMasterCryptics,V=o==="Elite"&&C.startsWith("Show this to Sherlock.")&&l.filters?.juggleSherlockClues;if(e)if(V||z)w="clue-status-ready",b="Completable",q=!0,v&&(g+=1);else{let m=p.requirements;W&&m.quests?.["Making History"]&&(m={...m,quests:Object.fromEntries(Object.entries(m.quests).filter(([R])=>R!=="Making History"))});const{met:_,missing:Q}=await B(m,a,i);if(_)w="clue-status-ready",b="Completable",q=!0,v&&(g+=1);else{const R=O({ignoreSkillLevels:!0}),{met:X}=await B(m,R,i);X&&(w="clue-status-trainable",b="Train levels",T=!0),D=ce(Q)}}e||(b="Requires player data"),k.has(S)||(k.set(S,[]),H.push(S)),k.get(S).push(`
                <div class="clue-step ${w}${F?" clue-step-special":""}"
                    data-doable="${q?"true":"false"}"
                    data-trainable="${T?"true":"false"}"
                    data-description="${f(C).toLowerCase()}">
                    <div class="clue-step-name">${f(C)}</div>
                    <div class="clue-step-status">${f(b)}${K}</div>
                    ${D}
                </div>
            `)}const j=L,P=j?Math.round(g/j*100):0;c.push(`
            <section class="clue-tier" data-tier="${o}">
                <h3 class="clue-tier-header">
                    <button class="clue-toggle clue-tier-toggle" type="button" aria-expanded="true">Hide</button>
                    <span>${o}</span>
                    <span class="clue-tier-counts">
                        (${P}% completable, ${g}/${j} steps ${G})
                    </span>
                </h3>
                <div class="clue-tier-body">
                    <div class="clue-step-list">
                        ${H.map(p=>`
                            <section class="clue-type" data-type="${f(p)}">
                                <h4 class="clue-type-header">${f(p)}</h4>
                                ${k.get(p).join("")}
                            </section>
                        `).join("")}
                    </div>
                </div>
            </section>
        `)}const r=(l.filters?.clueSearch??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;");return`
        <h1>Clue steps</h1>
        ${e?"":'<p class="clue-warning">Upload your player data on the Upload page to evaluate requirements.</p>'}
        <div class="clue-filters">
            <label class="clue-filter">
                <span>Search clue steps</span>
                <input type="search" id="clueSearch" value="${r}" placeholder="Step description">
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="hideCompletableClues" ${l.filters?.hideCompletableClues?"checked":""}>
                Hide completable steps
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="hideIncompletableClues" ${l.filters?.hideIncompletableClues?"checked":""}>
                Hide incompletable steps
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="hasDoneEasterEvent" ${l.filters?.hasDoneEasterEvent?"checked":""}>
                Has done Easter event (Eastfloor spade)
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="juggleSherlockClues" ${l.filters?.juggleSherlockClues?"checked":""}>
                I want to juggle good Sherlock clues (Elite clues only)
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="juggleMasterCryptics" ${l.filters?.juggleMasterCryptics?"checked":""}>
                I want to juggle good Cryptic clues (Master clues only)
            </label>
            <label class="clue-filter">
                <input type="checkbox" id="ignoreMakingHistoryJorral" ${l.filters?.ignoreMakingHistoryJorral?"checked":""}>
                I want to dig in all available Jorral spots manually
            </label>
        </div>
        <div class="clue-list" id="clueList">
            ${c.length?c.join(""):"<p>No clue data loaded yet.</p>"}
        </div>
    `}function x(e){const t=l.filters?.hideCompletableClues,i=l.filters?.hideIncompletableClues,a=ue(l.filters?.clueSearch),s=e.querySelectorAll(".clue-step");for(const u of s){const n=u.dataset.doable==="true",r=u.dataset.trainable==="true",d=u.dataset.description||"",o=!a||d.includes(a),g=t&&n||i&&(!n&&!r)||!o;u.style.display=g?"none":""}const c=e.querySelectorAll(".clue-type");for(const u of c){const n=Array.from(u.querySelectorAll(".clue-step")).some(r=>r.style.display!=="none");u.style.display=n?"":"none"}const y=e.querySelectorAll(".clue-tier");for(const u of y){const n=Array.from(u.querySelectorAll(".clue-step")).some(r=>r.style.display!=="none");u.style.display=n?"":"none"}}async function I(e,t={}){const i={...l.filters,...e};t.immediate?l.setFilters(i):await l.setFilters(i);const a=document.getElementById("clueList");a&&x(a)}async function $(e){const t={...l.filters,...e};await l.setFilters(t),await se()}function fe(e,t){e.textContent=t?"Show":"Hide",e.setAttribute("aria-expanded",t?"false":"true")}function he(e,t){e.classList.toggle("is-collapsed",t);const i=e.querySelector(".clue-tier-toggle");i&&fe(i,t)}let E=null;function ke(){ge();const e=document.getElementById("clueList");e&&x(e);const t=async s=>{s.target.id==="hideCompletableClues"&&await I({hideCompletableClues:s.target.checked}),s.target.id==="hideIncompletableClues"&&await I({hideIncompletableClues:s.target.checked}),s.target.id==="hasDoneEasterEvent"&&await $({hasDoneEasterEvent:s.target.checked}),s.target.id==="juggleSherlockClues"&&await $({juggleSherlockClues:s.target.checked}),s.target.id==="juggleMasterCryptics"&&await $({juggleMasterCryptics:s.target.checked}),s.target.id==="ignoreMakingHistoryJorral"&&await $({ignoreMakingHistoryJorral:s.target.checked})},i=s=>{s.target.id==="clueSearch"&&I({clueSearch:s.target.value},{immediate:!0})},a=async s=>{if(!s.target.classList.contains("clue-tier-toggle"))return;const c=s.target.closest(".clue-tier");c&&he(c,!c.classList.contains("is-collapsed"))};document.addEventListener("change",t),document.addEventListener("input",i),document.addEventListener("click",a),E=()=>{document.removeEventListener("change",t),document.removeEventListener("input",i),document.removeEventListener("click",a)}}function ge(){typeof E=="function"&&E(),E=null}export{be as default,ke as init,ge as teardown};
