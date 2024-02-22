import{a as w,S as v,i as f}from"./assets/vendor-b42c18af.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function T(o){return o.map(({webformatURL:t,largeImageURL:r,tags:l,likes:e,views:s,comments:a,downloads:b})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
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
    </li>`).join("")}async function m(o,t){const e="https://pixabay.com"+"/api/",s={key:"42127236-8bfdbbfbeed8a2dadaca720e8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await w.get(e,{params:s})).data}const x=new v(".gallery-list a",{captionDelay:250,captionsData:"alt"}),u={titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",position:"topRight",timeout:3e3,progressBar:!1},S={...u,message:"Please fill out the input field.",backgroundColor:"#FFA000"},E={...u,message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",maxWidth:400},q={...u,message:"We're sorry, but you've reached the end of search results.",maxWidth:350},i={form:document.querySelector(".gallery-form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery-list"),btnLoadMore:document.querySelector(".gallery-load-more"),scrollToTopBtn:document.querySelector(".scroll-up")};let n="",c=1;const g=15;i.form.addEventListener("submit",M);i.btnLoadMore.addEventListener("click",P);async function M(o){if(o.preventDefault(),n=o.target.elements.text.value.trim(),!n){o.target.reset(),f.warning(S);return}i.gallery.innerHTML="",p(),y();try{const t=await m(n,c);if(t.hits.length===0){f.warning(E),d(),o.target.reset();return}h(t.hits),t.totalHits<=g?p():L()}catch(t){console.error("Error loading data:",t)}d(),o.target.reset()}async function P(){c+=1,p(),y();const o=await m(n,c),t=Math.ceil(o.totalHits/g);if(c>=t){f.info(q),p(),d();return}h(o.hits);const r=i.gallery.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"}),d(),L()}function h(o){const t=T(o);i.gallery.insertAdjacentHTML("beforeend",t),x.refresh()}function y(){i.loader.classList.add("in-active")}function d(){i.loader.classList.remove("in-active")}function L(){i.btnLoadMore.classList.add("in-active")}function p(){i.btnLoadMore.classList.remove("in-active")}window.addEventListener("scroll",()=>{window.scrollY>120?i.scrollToTopBtn.classList.add("show"):i.scrollToTopBtn.classList.remove("show")});i.scrollToTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
