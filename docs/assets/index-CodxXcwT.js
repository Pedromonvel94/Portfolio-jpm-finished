(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelectorAll(".technologies");const r=document.querySelector("#menu"),n=document.querySelector("#open"),y=document.querySelector("#close");n.addEventListener("click",()=>{r.classList.remove("ssm:max-lg:invisible"),r.classList.remove("ssm:max-lg:opacity-0"),n.classList.add("ssm:max-lg:opacity-0"),n.classList.add("ssm:max-lg:invisible")});y.addEventListener("click",()=>{r.classList.add("ssm:max-lg:opacity-0"),r.classList.add("ssm:max-lg:invisible"),n.classList.remove("ssm:max-lg:invisible"),n.classList.remove("ssm:max-lg:opacity-0")});function v(){document.querySelectorAll(".technologies").forEach(s=>{const{top:c,left:i,height:e,width:t}=s.getBoundingClientRect();s.addEventListener("mousemove",o=>{const{clientX:d,clientY:m}=o,u=d-i,f=m-c,p=(u-t/2)/t*5,g=`
                perspective(500px)
                scale(1.008)
                rotateX(${(f-e/2)/e*5}deg)
                rotateY(${p}deg)
            `;s.style.transform=g}),s.addEventListener("mouseout",()=>{s.style.transform=`
                perspective(500px)
                scale(1)
                rotateX(0)
                rotateY(0)
            `})})}function l(){window.innerWidth>1024&&v()}window.addEventListener("load",()=>{l()});window.addEventListener("resize",()=>{l()});
