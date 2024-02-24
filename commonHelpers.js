import{a as w,S as v,i as c}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function T(o){return o.map(({webformatURL:t,largeImageURL:i,tags:l,likes:e,views:s,comments:a,downloads:b})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${t}" alt="${l}" />
      </a>
      <ul class="specific-list">
        <li class="specific-item">
          <p class="specific-text">Likes</p>
          <p class="specific-quantity">${e}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Views</p>
          <p class="specific-quantity">${s}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Comments</p>
          <p class="specific-quantity">${a}</p>
        </li>
        <li class="specific-item">
          <p class="specific-text">Downloads</p>
          <p class="specific-quantity">${b}</p>
        </li>
      </ul>
    </li>`).join("")}async function m(o,t){const e="https://pixabay.com"+"/api/",s={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await w.get(e,{params:s})).data}const x=new v(".gallery-list a",{captionDelay:250,captionsData:"alt"}),u={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},E={...u,message:"Please fill out the input field.",backgroundColor:"#FFA000"},S={...u,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",maxWidth:400},q={...u,message:"We're sorry, but you've reached the end of search results.",maxWidth:350},r={form:document.querySelector(".gallery-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery-list"),btnLoadMore:document.querySelector(".gallery-load-more"),scrollToTopBtn:document.querySelector(".scroll-up")};let d="",n=1;const g=15;r.form.addEventListener("submit",M);r.btnLoadMore.addEventListener("click",P);async function M(o){if(o.preventDefault(),d=o.target.elements.text.value.trim(),n=1,!d){o.target.reset(),c.warning(E);return}r.gallery.innerHTML="",f(),y();try{const t=await m(d,n);if(t.hits.length===0){c.warning(S),p(),o.target.reset();return}h(t.hits),t.totalHits<=g?f():L()}catch(t){console.error("Error loading data:",t),c.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight",timeout:3e3,progressBar:!1})}p(),o.target.reset()}async function P(){n+=1,f(),y();const o=await m(d,n),t=Math.ceil(o.totalHits/g);if(n>t){c.info(q),f(),p();return}h(o.hits);const i=r.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:i*3,behavior:"smooth"}),p(),L()}function h(o){const t=T(o);r.gallery.insertAdjacentHTML("beforeend",t),x.refresh()}function y(){r.loader.classList.add("in-active")}function p(){r.loader.classList.remove("in-active")}function L(){r.btnLoadMore.classList.add("in-active")}function f(){r.btnLoadMore.classList.remove("in-active")}window.addEventListener("scroll",()=>{window.scrollY>120?r.scrollToTopBtn.classList.add("show"):r.scrollToTopBtn.classList.remove("show")});r.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
