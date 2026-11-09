import{f as l,k as Q,l as X,R as D,m as Y,n as Z,r as ee}from"./index-C1ItlMlK.js";import{b as te,f as se}from"./npcDropEntries-jSsx8I-9.js";const le=["Beginner","Easy","Medium","Hard","Elite","Master"];function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ae(e,t,i){if(e?.ignoreSkillLevels)return Y(e,t);const a=e.player?.levels?.[t];return typeof a=="number"&&a>=i?!0:Z(e,t,i)}function ne(e,t,i){const a=e.player?.quests?.[t]??0;return i==="completed"?a===2:i==="started"?a>0:!1}function N(e,t){if(!t?.id)return!1;const i=e.obtained||[],a=e.rolled||[];return i.includes(t.id)&&a.includes(t.id)}function J(e,t){return e?.name?e.name:e?.id&&t?.has(e.id)?t.get(e.id):typeof e=="number"&&t?.has(e)?t.get(e):e?.id?`Item ${e.id}`:"Unknown item"}function ie(e){return(e||[]).map(t=>typeof t=="number"?{id:t}:typeof t=="object"?t:{name:String(t)})}async function U(e,t,i){const a={skills:[],quests:[],items:[],itemGroups:[],rules:[],untracked:[]};let s=!0;for(const[n,o]of Object.entries(e?.skills||{}))ae(t,n,o)||(a.skills.push(`${n} ${o}`),s=!1);for(const[n,o]of Object.entries(e?.quests||{}))if(!ne(t,n,o)){const r=o==="completed"?"completed":"started";a.quests.push(`${n} (${r})`),s=!1}for(const n of e?.items||[])N(t,n)||(a.items.push(J(n,i)),s=!1);for(const n of e?.itemsAny||[]){const o=ie(n);if(!o.some(p=>N(t,p))){const p=o.map(f=>J(f,i));a.itemGroups.push(`Any of: ${p.join(" / ")}`),s=!1}}const c=(e?.rulesAll||[]).filter(Q),m=new Set(c);c.length&&(X(t,c,{trackMissing:!1})||(a.rules.push(c.join(" + ")),s=!1));for(const n of e?.rulesAll||[]){if(m.has(n))continue;const o=D[n];if(!o){a.rules.push(`${n} (missing)`),s=!1;continue}try{await o(t)||(a.rules.push(n),s=!1)}catch{a.rules.push(`${n} (error)`),s=!1}}const u=e?.rulesAny||[];if(u.length){let n=!1;const o=[];for(const r of u){const p=D[r];if(!p){o.push(`${r} (missing)`);continue}try{await p(t)?n=!0:o.push(r)}catch{o.push(`${r} (error)`)}}n||(a.rules.push(`Any of: ${o.join(" / ")}`),s=!1)}return e?.untracked?.length&&(a.untracked=[...e.untracked],s=!1),{met:s,missing:a}}function re(e){const t=[];return e.skills.length&&t.push(`Missing levels: ${e.skills.join(", ")}.`),e.quests.length&&t.push(`Missing quests: ${e.quests.join(", ")}.`),e.items.length&&t.push(`Missing items: ${e.items.join(", ")}.`),e.itemGroups.length&&t.push(`Missing item options: ${e.itemGroups.join("; ")}.`),e.rules.length&&t.push(`Missing rules: ${e.rules.join(", ")}.`),e.untracked.length&&t.push(`Untracked requirements: ${e.untracked.join(", ")}.`),t.map(i=>`<div class="clue-missing">${h(i)}</div>`).join("")}function oe(e={}){return{items:l.items,player:l.player,obtained:l.obtained||[],rolled:l.rolled||[],filters:l.filters,ignoreSkillLevels:!!e.ignoreSkillLevels,missing:{items:new Set}}}function ce(e){return String(e||"").trim().toLowerCase()}function ue(e,t){if(!e?.countWhenAvailableOnly)return!0;const i=e.requirements?.quests||{};for(const[a,s]of Object.entries(i)){const c=t?.quests?.[a]??0;if(s==="completed"&&c!==2||s==="started"&&c<=0)return!1}return!0}async function pe(){try{const e=await fetch("/data/clue_steps.json");return e.ok?await e.json():null}catch{return null}}async function ye(){const e=!!l.player,t=await pe();l.items===null&&await l.ensureItemsLoaded();const i=new Map((l.items||[]).map(r=>[r.id,r.name])),a=t?.tiers||{},s=[],{entries:c}=await te({items:l.items||[],obtained:l.obtained||[],rolled:l.rolled||[],player:l.player,filters:l.filters||{}}),m={Beginner:"Reward casket (beginner)",Easy:"Reward casket (easy)",Medium:"Reward casket (medium)",Hard:"Reward casket (hard)",Elite:"Reward casket (elite)",Master:"Reward casket (master)"},u=new Map(c.map(r=>[r.npcName,r]));for(const r of le){const p=a?.[r]||[];if(!p.length)continue;let f=0,b=0;const L=[],k=new Map,v=u.get(m[r]),O=v?`${se(v.totalRateScore)} · ${v.items.length} available drops`:"0% · 0 available drops";for(const d of p){const j=!e||ue(d,l.player);j&&(b+=1);const C=d.description||d.name||"Untitled step",S=d.type||"Unknown",H=d.specialInfo||"",A=!!H,G=A?`<span class="clue-step-info" tabindex="0" aria-label="Special clue information" title="${h(H)}">i</span>`:"";let q=!1,F=!1,$="clue-status-blocked",y="Incompletable",T="";const P=C.startsWith("Buried beneath the ground, who knows where it's found.")&&l.filters?.ignoreMakingHistoryJorral,K=r==="Master"&&d.type==="Cryptic clues"&&l.filters?.juggleMasterCryptics,W=r==="Elite"&&C.startsWith("Show this to Sherlock.")&&l.filters?.juggleSherlockClues;if(e)if(W||K)$="clue-status-ready",y="Completable",q=!0,j&&(f+=1);else{let g=d.requirements;P&&g.quests?.["Making History"]&&(g={...g,quests:Object.fromEntries(Object.entries(g.quests).filter(([R])=>R!=="Making History"))});const{met:z,missing:V}=await U(g,ctx,i);if(z)$="clue-status-ready",y="Completable",q=!0,j&&(f+=1);else{const R=oe({ignoreSkillLevels:!0}),{met:_}=await U(g,R,i);_&&($="clue-status-trainable",y="Train levels",F=!0),T=re(V)}}e||(y="Requires player data"),k.has(S)||(k.set(S,[]),L.push(S)),k.get(S).push(`
                <div class="clue-step ${$}${A?" clue-step-special":""}"
                    data-doable="${q?"true":"false"}"
                    data-trainable="${F?"true":"false"}"
                    data-description="${h(C).toLowerCase()}">
                    <div class="clue-step-name">${h(C)}</div>
                    <div class="clue-step-status">${h(y)}${G}</div>
                    ${T}
                </div>
            `)}const M=b,x=M?Math.round(f/M*100):0;s.push(`
            <section class="clue-tier" data-tier="${r}">
                <h3 class="clue-tier-header">
                    <button class="clue-toggle clue-tier-toggle" type="button" aria-expanded="true">Hide</button>
                    <span>${r}</span>
                    <span class="clue-tier-counts">
                        (${x}% completable, ${f}/${M})
                    </span>
                    <span class="clue-tier-drop-info">
                        ${O}
                    </span>
                </h3>
                <div class="clue-tier-body">
                    <div class="clue-step-list">
                        ${L.map(d=>`
                            <section class="clue-type" data-type="${h(d)}">
                                <h4 class="clue-type-header">${h(d)}</h4>
                                ${k.get(d).join("")}
                            </section>
                        `).join("")}
                    </div>
                </div>
            </section>
        `)}const n=(l.filters?.clueSearch??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;");return`
        <h1>Clue steps</h1>
        ${e?"":'<p class="clue-warning">Upload your player data on the Upload page to evaluate requirements.</p>'}
        <div class="clue-filters">
            <label class="clue-filter">
                <span>Search clue steps</span>
                <input type="search" id="clueSearch" value="${n}" placeholder="Step description">
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
            ${s.length?s.join(""):"<p>No clue data loaded yet.</p>"}
        </div>
    `}function B(e){const t=l.filters?.hideCompletableClues,i=l.filters?.hideIncompletableClues,a=ce(l.filters?.clueSearch),s=e.querySelectorAll(".clue-step");for(const u of s){const n=u.dataset.doable==="true",o=u.dataset.trainable==="true",r=u.dataset.description||"",p=!a||r.includes(a),b=t&&n||i&&(!n&&!o)||!p;u.style.display=b?"none":""}const c=e.querySelectorAll(".clue-type");for(const u of c){const n=Array.from(u.querySelectorAll(".clue-step")).some(o=>o.style.display!=="none");u.style.display=n?"":"none"}const m=e.querySelectorAll(".clue-tier");for(const u of m){const n=Array.from(u.querySelectorAll(".clue-step")).some(o=>o.style.display!=="none");u.style.display=n?"":"none"}}async function I(e,t={}){const i={...l.filters,...e};t.immediate?l.setFilters(i):await l.setFilters(i);const a=document.getElementById("clueList");a&&B(a)}async function w(e){const t={...l.filters,...e};await l.setFilters(t),await ee()}function de(e,t){e.textContent=t?"Show":"Hide",e.setAttribute("aria-expanded",t?"false":"true")}function fe(e,t){e.classList.toggle("is-collapsed",t);const i=e.querySelector(".clue-tier-toggle");i&&de(i,t)}let E=null;function be(){he();const e=document.getElementById("clueList");e&&B(e);const t=async s=>{s.target.id==="hideCompletableClues"&&await I({hideCompletableClues:s.target.checked}),s.target.id==="hideIncompletableClues"&&await I({hideIncompletableClues:s.target.checked}),s.target.id==="hasDoneEasterEvent"&&await w({hasDoneEasterEvent:s.target.checked}),s.target.id==="juggleSherlockClues"&&await w({juggleSherlockClues:s.target.checked}),s.target.id==="juggleMasterCryptics"&&await w({juggleMasterCryptics:s.target.checked}),s.target.id==="ignoreMakingHistoryJorral"&&await w({ignoreMakingHistoryJorral:s.target.checked})},i=s=>{s.target.id==="clueSearch"&&I({clueSearch:s.target.value},{immediate:!0})},a=async s=>{if(!s.target.classList.contains("clue-tier-toggle"))return;const c=s.target.closest(".clue-tier");c&&fe(c,!c.classList.contains("is-collapsed"))};document.addEventListener("change",t),document.addEventListener("input",i),document.addEventListener("click",a),E=()=>{document.removeEventListener("change",t),document.removeEventListener("input",i),document.removeEventListener("click",a)}}function he(){typeof E=="function"&&E(),E=null}export{ye as default,be as init,he as teardown};
