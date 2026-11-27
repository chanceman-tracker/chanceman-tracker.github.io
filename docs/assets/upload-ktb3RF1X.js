import{s as k,a as S}from"./autoSync-DQP0I-P5.js";import"./questPoints-B1dBdpc5.js";import"./index-C3jLVVAD.js";import"./client-lMJtvLm_.js";import"./config-BS53vI6F.js";const I=1,T="chanceman-tracker-sync";function E(e){if(!e||typeof e!="object"||Array.isArray(e))throw new Error("Import payload is invalid");if(e.schemaVersion!==I)throw new Error(`Unsupported import schema: ${e.schemaVersion??"unknown"}`);if(e.source!==T)throw new Error("Import payload has an unsupported source");if(!v(e.generatedAt))throw new Error("Import payload is missing a valid generatedAt timestamp");const r=String(e.playerName||"").trim();if(!r)throw new Error("Import payload is missing playerName");if(!B(e.trackerBlob))throw new Error("Import payload is missing trackerBlob");const a=w(e.chancemanObtained,"chancemanObtained"),t=w(e.chancemanRolled,"chancemanRolled");return{schemaVersion:e.schemaVersion,generatedAt:e.generatedAt,source:e.source,playerName:r,playerBlobText:JSON.stringify(e.trackerBlob),trackerBlob:e.trackerBlob,chancemanObtained:a,chancemanRolled:t}}function B(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function v(e){return typeof e!="string"||!e.trim()?!1:Number.isFinite(Date.parse(e))}function w(e,r){if(!Array.isArray(e))throw new Error(`Import payload is missing ${r}`);if(!e.every(P))throw new Error(`Import payload has invalid ${r} values`);return[...e]}function P(e){return Number.isInteger(e)&&e>=0}function U(e){const r=new URL(e,"https://chanceman-tracker.invalid"),a=r.searchParams.get("bridgeUrl"),t=r.searchParams.get("bridgeToken");if(a===null&&t===null)return null;const n=String(t||"").trim();if(!a||!n)throw new Error("Bridge params are invalid.");let c;try{c=new URL(a)}catch{throw new Error("Bridge params are invalid.")}if(!O(c))throw new Error("Bridge URL must be http://127.0.0.1:<port> or http://localhost:<port>.");return{bridgeUrl:c.origin,bridgeToken:n}}async function C(e){const{bridgeUrl:r,bridgeToken:a,fetchImpl:t=fetch}=e;let n;try{n=await t(y(r,"payload",a),{cache:"no-store"})}catch{throw new Error("Failed to fetch tracker payload.")}if(!n.ok)throw new Error(`Failed to fetch tracker payload (${n.status}).`);let c;try{c=await n.json()}catch{throw new Error("Failed to parse tracker payload JSON.")}return E(c)}async function R(e){const{bridgeUrl:r,bridgeToken:a,fetchImpl:t=fetch}=e;let n;try{n=await t(y(r,"ack",a),{method:"POST",keepalive:!0})}catch{throw new Error("Failed to acknowledge tracker import.")}if(!n.ok)throw new Error(`Failed to acknowledge tracker import (${n.status}).`)}async function A(e){const{currentUrl:r,fetchImpl:a=fetch,onImport:t,onLocalImportSuccess:n,onAckFailure:c}=e,i=await x({currentUrl:r,fetchImpl:a});if(!i)return null;await t?.(i.importData),await n?.(i);const h=R({bridgeUrl:i.bridgeUrl,bridgeToken:i.bridgeToken,fetchImpl:a}).then(()=>({ok:!0})).catch(d=>(c?.(d,i),{ok:!1,error:d}));return{...i,ackPromise:h}}async function x(e){const{currentUrl:r,fetchImpl:a=fetch}=e,t=U(r);if(!t)return null;const n=await C({...t,fetchImpl:a});return{bridgeUrl:t.bridgeUrl,bridgeToken:t.bridgeToken,importData:n,sanitizedUrl:L(r)}}function L(e){const r=new URL(e,"https://chanceman-tracker.invalid");return r.searchParams.delete("bridgeUrl"),r.searchParams.delete("bridgeToken"),`${r.pathname}${r.search}${r.hash}`}function y(e,r,a){const t=new URL(`${e}/${r}`);return t.searchParams.set("bridgeToken",a),t.toString()}function O(e){return e.protocol!=="http:"||e.username||e.password||e.search||e.hash||!e.port||!/^\d+$/.test(e.port)||e.pathname!=="/"&&e.pathname!==""?!1:e.hostname==="127.0.0.1"||e.hostname==="localhost"}function F(){const e=sessionStorage.getItem("uploadReturnPath");if(!e)return"/items";const r=e.split("?")[0].split("#")[0];return r==="/upload"||r==="/reupload"?"/items":e}function J(){return`
        <h1>Chanceman Tracker Setup</h1>

        <p><strong>Upload your chanceman_obtained.json and chanceman_rolled.json files.</strong></p>

        <p>Location:<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_obtained.json<br>
        C:\\Users\\[user]\\.runelite\\chanceman\\[osrs-account]\\chanceman_rolled.json
        </p>

        <label>
            Obtained:<br>
            <input type="file" id="obtainedInput" accept=".json">
        </label>
        <br><br>

        <label>
            Rolled:<br>
            <input type="file" id="rolledInput" accept=".json">
        </label>

        <br><br>

        <label>
            <a href="https://runelite.net/plugin-hub/show/chanceman-tracker-runelite-sync" target="_blank" rel="noreferrer">Chanceman Tracker Sync blob</a>:<br>
            <textarea id="playerBlobInput" rows="10" placeholder="Paste the JSON blob from the Chanceman Tracker Sync plugin"></textarea>
        </label>
        <br><br>

        <div class="form-actions">
            <button id="saveBtn" title="Save & Continue">Save & Continue</button>
            <span id="formLoading" class="form-loading" aria-live="polite">
                <span class="spinner" aria-hidden="true"></span>
                <span>Processing files...</span>
            </span>
        </div>

        <p id="status"></p>
    `}let m=null;function z(){N();const e=document.getElementById("app");if(!e)return;const r=e.querySelector("#rolledInput"),a=e.querySelector("#obtainedInput"),t=e.querySelector("#playerBlobInput"),n=e.querySelector("#status"),c=e.querySelector("#formLoading"),i=e.querySelector("#saveBtn");if(!r||!a||!t||!n||!c||!i)return;const h=[r,a,t,i],d=(s,o)=>{e.classList.toggle("upload-busy",s),c.classList.toggle("active",s),h.forEach(l=>{l.disabled=s}),o!==void 0&&(n.textContent=o)},f=()=>{n.textContent="Saved! Redirecting...";const s=F();sessionStorage.removeItem("uploadReturnPath"),history.pushState(null,"",s),window.dispatchEvent(new PopStateEvent("popstate"))},b=async s=>{const{rolled:o,obtained:l,playerBlobText:u}=s;await k({rolled:o,obtained:l,playerBlobInput:t,playerBlobText:u,setStatus:p=>{n.textContent=p}}),await S()},g=async s=>{if(s.target.id!=="saveBtn")return;const o=r.files[0],l=a.files[0];try{d(!0,"Reading files..."),await new Promise(requestAnimationFrame);let u;o&&(u=JSON.parse(await o.text()));let p;l&&(p=JSON.parse(await l.text())),await b({rolled:u,obtained:p}),f()}catch(u){console.error(u),n.textContent=u.message||"Error reading files!"}finally{d(!1)}};document.addEventListener("click",g),m=()=>{document.removeEventListener("click",g)},(async()=>{try{if(!await A({currentUrl:window.location.href,onImport:async o=>{d(!0,"Importing tracker data..."),await new Promise(requestAnimationFrame),t.value=o.playerBlobText,await b({rolled:o.chancemanRolled,obtained:o.chancemanObtained,playerBlobText:o.playerBlobText})},onLocalImportSuccess:({sanitizedUrl:o})=>{history.replaceState(null,"",o),f()},onAckFailure:(o,l)=>{console.warn("Tracker bridge ack failed after successful local import.",{error:o,bridgeUrl:l.bridgeUrl})}}))return}catch(s){console.error(s),n.textContent=s.message||"Error importing tracker data!",d(!1)}})()}function N(){typeof m=="function"&&m(),m=null}export{J as default,z as init,N as teardown};
