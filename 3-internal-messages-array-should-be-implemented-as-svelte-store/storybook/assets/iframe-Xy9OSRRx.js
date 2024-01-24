import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="modulepreload",p=function(i,_){return new URL(i,_).href},O={},e=function(_,n,c){let t=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");t=Promise.all(n.map(o=>{if(o=p(o,c),o in O)return;O[o]=!0;const a=o.endsWith(".css"),E=a?'[rel="stylesheet"]':"";if(!!c)for(let l=r.length-1;l>=0;l--){const m=r[l];if(m.href===o&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":d,a||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),a)return new Promise((l,m)=>{s.addEventListener("load",l),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}return t.then(()=>_()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=R({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const P={"./src/stories/AddMessage.stories.ts":async()=>e(()=>import("./AddMessage.stories-Ve8PMIjg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),"./src/stories/Embedded.stories.ts":async()=>e(()=>import("./Embedded.stories-YWN0Mf_w.js"),__vite__mapDeps([8,1,9,10,6,3,4,5,7]),import.meta.url),"./src/stories/Input.stories.ts":async()=>e(()=>import("./Input.stories-YhhAeoyS.js"),__vite__mapDeps([11,10,1,6]),import.meta.url),"./src/stories/Message.stories.ts":async()=>e(()=>import("./Message.stories-BhJqbkdt.js"),__vite__mapDeps([12,4,1,5]),import.meta.url),"./src/stories/MessageContainer.stories.ts":async()=>e(()=>import("./MessageContainer.stories-0i20HeNA.js"),__vite__mapDeps([13,3,1,4,5,6,2]),import.meta.url),"./src/stories/OpenMe.stories.ts":async()=>e(()=>import("./OpenMe.stories-ulfmJtMm.js"),__vite__mapDeps([14,15,1]),import.meta.url),"./src/stories/Root.stories.ts":async()=>e(()=>import("./Root.stories-uCZHjunb.js"),__vite__mapDeps([16,1,15,9,10,6,3,4,5,7]),import.meta.url),"./src/stories/Window.stories.ts":async()=>e(()=>import("./Window.stories-4UX6r2WA.js"),__vite__mapDeps([17,9,1,10,6,3,4,5,7]),import.meta.url)};async function T(i){return P[i]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const i=await Promise.all([e(()=>import("./entry-preview-mCHUZhVH.js"),__vite__mapDeps([18,1,5,19]),import.meta.url),e(()=>import("./entry-preview-docs-VBRJePdL.js"),__vite__mapDeps([20,21,22]),import.meta.url),e(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([23,24]),import.meta.url),e(()=>import("./preview-UjphTvjK.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([25,19]),import.meta.url),e(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([26,19]),import.meta.url),e(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([27,19]),import.meta.url),e(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([28,22]),import.meta.url),e(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return w(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:v});export{e as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AddMessage.stories-Ve8PMIjg.js","./index-z8F5HjV4.js","./index-I2CuepqY.js","./MessageContainer-Ck6EvHQ9.js","./Message-58QNw7Jj.js","./spread-rEx3vLA9.js","./messageStore-Y9H0rZ75.js","./utils-EZVoP3fW.js","./Embedded.stories-YWN0Mf_w.js","./Window-SqjWerK1.js","./Input-kf3aS6LB.js","./Input.stories-YhhAeoyS.js","./Message.stories-BhJqbkdt.js","./MessageContainer.stories-0i20HeNA.js","./OpenMe.stories-ulfmJtMm.js","./OpenMe-73MI89F-.js","./Root.stories-uCZHjunb.js","./Window.stories-4UX6r2WA.js","./entry-preview-mCHUZhVH.js","./index-PPLHz8o0.js","./entry-preview-docs-VBRJePdL.js","./index-GNFDgxzj.js","./_commonjsHelpers-5-cIlDoe.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}