import{o as y,f as S}from"./index-BDqnXAnD.js";import{s as v,a as w}from"./autoSync-FK2pH3os.js";import"./questPoints-CTrjHD3-.js";import"./client-B_b1jhAB.js";import"./config-BS53vI6F.js";function C(){const e=sessionStorage.getItem("uploadReturnPath");if(!e)return"/items";const t=e.split("?")[0].split("#")[0];return t==="/upload"||t==="/reupload"?"/items":e}function q(){return`
        <h1>Reupload Files</h1>

        <p><strong>Replace your chanceman_obtained.json and chanceman_rolled.json files.</strong></p>

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
            <button id="saveBtn">Save & Continue</button>
            <span id="formLoading" class="form-loading" aria-live="polite">
                <span class="spinner" aria-hidden="true"></span>
                <span>Processing files...</span>
            </span>
        </div>

        <p id="status"></p>
    `}let i=null;function B(){I();const e=document.getElementById("app");if(!e)return;const t=e.querySelector("#rolledInput"),l=e.querySelector("#obtainedInput"),c=e.querySelector("#playerBlobInput"),n=e.querySelector("#status"),u=e.querySelector("#formLoading"),p=e.querySelector("#saveBtn");if(!t||!l||!c||!n||!u||!p)return;const m=[t,l,c,p],d=(a,o)=>{e.classList.toggle("upload-busy",a),u.classList.toggle("active",a),m.forEach(s=>{s.disabled=a}),o!==void 0&&(n.textContent=o)},b=async a=>{if(a.target.id!=="saveBtn")return;const o=t.files[0],s=l.files[0];try{d(!0,"Reading files..."),await new Promise(requestAnimationFrame);let r;o&&(r=JSON.parse(await o.text()));let f;s&&(f=JSON.parse(await s.text())),await v({rolled:r,obtained:f,playerBlobInput:c,setStatus:g=>{n.textContent=g}}),await w(),y(S),n.textContent="Saved! Redirecting...";const h=C();sessionStorage.removeItem("uploadReturnPath"),history.pushState(null,"",h),window.dispatchEvent(new PopStateEvent("popstate"))}catch(r){console.error(r),n.textContent=r.message||"Error reading files!"}finally{d(!1)}};document.addEventListener("click",b),i=()=>{document.removeEventListener("click",b)}}function I(){typeof i=="function"&&i(),i=null}export{q as default,B as init,I as teardown};
