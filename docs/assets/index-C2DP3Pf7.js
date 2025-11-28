(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(){return"<h1>About this project</h1>"}function u(){return`
        <h1>Chanceman Tracker</h1>
        <a data-link href="/about">About</a><br>
        <a data-link href="/item?id=12">View Item 12</a>
    `}async function d(){const r=new URLSearchParams(window.location.search).get("id");if(!r)return"<h1>No item selected</h1>";const o=(await fetch("/data/items.json").then(e=>e.json()))[r];return o?`
        <h1>${o.name}</h1>
        <img src="/images/${o.image}" width="200">
        <p>${o.description}</p>
    `:"<h1>Item not found</h1>"}function f(){return"<h1>404 - Page Not Found</h1>"}async function s(){const n=window.location.pathname,i={"/":u,"/about":c,"/item":d}[n]||f;document.getElementById("app").innerHTML=await i()}window.addEventListener("DOMContentLoaded",s);window.addEventListener("popstate",s);document.addEventListener("click",n=>{n.target.matches("[data-link]")&&(n.preventDefault(),history.pushState(null,"",n.target.href),s())});
