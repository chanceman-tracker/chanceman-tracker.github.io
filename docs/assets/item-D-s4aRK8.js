import{f as r,c as y,d as j,e as k,a as S,p as m,N as g,g as O,h as u,j as N}from"./index-Wf63KP9t.js";async function B(){const e=r.obtained,s=r.rolled;if(!e||!s)return"<h1>Please upload your files on the Upload page first.</h1>";const c=new URLSearchParams(window.location.search).get("id");if(!c)return"<h1>No item selected</h1>";await r.ensureItemsLoaded();const l=r.items,a=l.find(n=>n.id==c);if(!a||y(a))return"<h1>Item not found</h1>";const d=await R(a,a.sources),t=I(a.processable,l);return`
            <h1>${a.name}</h1>

            <div class="item-header">
                <img src="/images/${a.image}" style="margin: 1rem" />
                <a href="https://oldschool.runescape.wiki/w/${a.name}" target="_blank">
                    <img src="/images/wiki.png" style="width: 32px" />
                </a>
            </div>

            <h2>Where to get it</h2>
        ${d}

        <h2>Processable into:</h2>
        ${t}
    `}async function R(e,s={}){const h=["drops","other","shops","spawns"],c=[];for(const l of h)c.push(`
            <div class="source-section">
                <h3>${v(l)}</h3>
                ${await H(l,s[l],e)}
            </div>
        `);return c.join("")}function v(e){return e.charAt(0).toUpperCase()+e.slice(1)}async function H(e,s,h){if(!s||Object.keys(s).length===0)return"<p><em>No data.</em></p>";const c=new URLSearchParams(window.location.search),l=Number(c.get("id"));if(e==="drops"){const a=[];for(const[t,n]of Object.entries(s)){const o=r.filters?.isSlayerLocked&&j(h,t,n);if(k(t,r)){a.push({name:t,data:n,obtainable:!1});continue}const i=!o&&await S(t,r);a.push({name:t,data:n,obtainable:i})}return a.sort((t,n)=>{if(t.obtainable!==n.obtainable)return t.obtainable?-1:1;const o=m(t.data.droprate),i=m(n.data.droprate);return i!==o?i-o:t.name.localeCompare(n.name)}),`
            <table class="osrs-table">
                <tr>
                    <th class="item-drop-wiki-column">Wiki</th>
                    <th>Source</th>
                    <th>Droprate</th>
                    <th>Obtainable?</th>
                </tr>
                ${a.map(({name:t,data:n,obtainable:o})=>{const i=g[t]?.note,$=i?` <span class="clue-step-info quest-info source-info"
            tabindex="0"
            aria-label="Source information"
            title="${w(i)}">i</span>`:"";return`
                <tr>
                    <td class="item-drop-wiki-column">
                        <a href="${g[t]?.wiki||"#"}"
                        target="_blank"
                        rel="noreferrer">
                            <img src="/images/wiki.png" alt="Wiki"
                                style="width: 32px">
                        </a>
                    </td>
                    <td>
                        <a href="/npcs?npcSearch=${encodeURIComponent(t)}">
                            ${w(t)}
                        </a>${$}
                    </td>
                    <td>${n.droprate}</td>
                    <td>${o?p():b()}</td>
                </tr>
            `}).join("")}
            </table>
        `}if(e==="other"){const a=[];for(const[d,t]of Object.entries(s)){const{notes:n,rule:o}=t,i=O(t,r)?!1:await u(o,r);a.push(`
                <tr>
                    <td>${d}</td>
                    <td>${n||""}</td>
                    <td>${i?p():b()}</td>
                </tr>
            `)}return`
            <table class="osrs-table">
                <tr>
                    <th>How</th>
                    <th>Notes</th>
                    <th>Obtainable?</th>
                </tr>
                ${a.join("")}
            </table>
        `}if(e==="shops"){const a=[];for(const[d,t]of Object.entries(s)){let n=!1;r.rolled.includes(l)&&(typeof t=="string"?n=await u(t,r):typeof t=="object"&&(n=await u(t,r))),a.push(`
                <tr>
                    <td>${f(t)}</td>
                    <td>${n?p():b()}</td>
                </tr>
            `)}return`
            <table class="osrs-table">
                <tr><th>Requirement</th><th>Obtainable?</th></tr>
                ${a.join("")}
            </table>
        `}if(e==="spawns"){const a=[],d=new Set((r.rolled||[]).map(Number));for(const[t,n]of Object.entries(s)){const i=d.has(Number(h.id))||await N(n,r);a.push(`
                <tr>
                    <td>${f(n)}</td>
                    <td>${i?p():b()}</td>
                </tr>
            `)}return`
            <table class="osrs-table">
                <tr><th>Requirement</th><th>Obtainable?</th></tr>
                ${a.join("")}
            </table>
        `}}function I(e={},s){return!e||Object.keys(e).length===0?"<p><em>Not processable.</em></p>":`
        <table class="osrs-table">
            <tr><th>Creates</th><th>Ingredients</th></tr>
            ${Object.entries(e).map(([h,c])=>{const l=s.find(t=>t.id==h),d=c.split(",").map(t=>{const n=s.find(o=>o.id==t);return n?`<a onclick="navigate('/item?id=${t}')">${n.name}</a>`:t}).join(", ");return`
                    <tr>
                        <td><a onclick="navigate('/item?id=${h}')">${l.name}</a></td>
                        <td>${d}</td>
                    </tr>
                `}).join("")}
        </table>
    `}function p(){return'<span class="obtainable yes">✔</span>'}function b(){return'<span class="obtainable no">✘</span>'}function f(e){return e?typeof e=="string"?e:e.skill&&e.level!=null?`${e.skill} level ${e.level}`:e.any?"Any: "+e.any.map(s=>typeof s=="object"?f(s):s).join(", "):e.all?"All: "+e.all.map(s=>typeof s=="object"?f(s):s).join(", "):e.has!==void 0?`Has item ${e.has}`:JSON.stringify(e):""}function w(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}export{B as default};
