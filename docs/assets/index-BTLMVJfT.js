(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();document.querySelectorAll(".technologies");const c=document.querySelector("#menu"),r=document.querySelector("#open"),v=document.querySelector("#close");r.addEventListener("click",()=>{c.classList.remove("ssm:max-lg:invisible"),c.classList.remove("ssm:max-lg:opacity-0"),r.classList.add("ssm:max-lg:opacity-0"),r.classList.add("ssm:max-lg:invisible")});v.addEventListener("click",()=>{c.classList.add("ssm:max-lg:opacity-0"),c.classList.add("ssm:max-lg:invisible"),r.classList.remove("ssm:max-lg:invisible"),r.classList.remove("ssm:max-lg:opacity-0")});function a(){document.querySelectorAll(".technologies").forEach(t=>{const i=t.clientHeight,o=t.clientWidth;function e(n){const{layerX:d,layerY:u}=n,m=(d-o/2)/o*5,f=`
            perspective(500px)
            scale(1.008)
            rotateX(${(u-i/2)/i*5}deg)
            rotateY(${m}deg)`;t.style.transform=f}function s(){t.style.transform=`
            perspective(500px)
            scale(1)
            rotateX(0)
            rotateY(0)`}t.addEventListener("mousemove",e),t.addEventListener("mouseout",s)})}function p(){document.querySelectorAll(".technologies").forEach(t=>{t.style.transform="none",t.removeEventListener("mousemove",mouseMoveHandler),t.removeEventListener("mouseout",mouseOutHandler)})}window.addEventListener("load",()=>{window.innerWidth>1024&&a()});window.addEventListener("resize",()=>{window.innerWidth>1024?a():p()});