import{S as w,i as _,s as T,a as S,e as m,b as h,c as r,j as I,d as p,f as k,l as q,n as x,g as y,r as R,k as z}from"./index-Z1Yh0Bcu.js";function D(t){S(t,"svelte-1qc1bbp",'@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-1qc1bbp.svelte-1qc1bbp{color:black;font-family:"Rethink Sans", sans-serif;display:flex;padding:10px;background-color:white;border-radius:10px}span.svelte-1qc1bbp.svelte-1qc1bbp{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-1qc1bbp .svelte-1qc1bbp{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-1qc1bbp.svelte-1qc1bbp{flex:1;background:#ddd;color:"black"}.send.svelte-1qc1bbp.svelte-1qc1bbp{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-1qc1bbp.svelte-1qc1bbp:hover{filter:saturate(180%)}.send.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-1qc1bbp.svelte-1qc1bbp{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-1qc1bbp.svelte-1qc1bbp:hover{background-color:black;color:#ddd}.clear.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}')}function L(t){let o,n,s,e,c,l,d,b,u,f,v,i;return{c(){o=m("link"),n=h(),s=m("div"),e=m("div"),c=h(),l=m("button"),d=m("span"),d.textContent="send",u=h(),f=m("button"),f.innerHTML='<span class="material-symbols-outlined svelte-1qc1bbp">delete_forever</span>',r(o,"rel","stylesheet"),r(o,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),r(e,"contenteditable","true"),r(e,"class","input svelte-1qc1bbp"),t[0]===void 0&&I(()=>t[5].call(e)),r(d,"class","material-symbols-outlined svelte-1qc1bbp"),r(l,"class","send svelte-1qc1bbp"),l.disabled=b=!t[1],r(f,"class","clear svelte-1qc1bbp"),r(s,"class","container svelte-1qc1bbp")},m(a,g){p(document.head,o),k(a,n,g),k(a,s,g),p(s,e),t[0]!==void 0&&(e.innerText=t[0]),p(s,c),p(s,l),p(l,d),p(s,u),p(s,f),v||(i=[q(e,"input",t[5]),q(e,"keydown",t[3]),q(l,"click",t[2])],v=!0)},p(a,[g]){g&1&&a[0]!==e.innerText&&(e.innerText=a[0]),g&2&&b!==(b=!a[1])&&(l.disabled=b)},i:x,o:x,d(a){a&&(y(n),y(s)),y(o),v=!1,R(i)}}}function j(t,o,n){const s=z();let e="",c=!0;function l(){n(0,e=e.replace(/\s/g,""))}const d=()=>{l(),s("send",{message:e,onResponse:()=>n(4,c=!0)}),n(0,e=""),n(4,c=!1)};function b(){return e.match(/[a-z]/i)!==null}let u=!1;function f(i){i.key==="Enter"&&!i.shiftKey&&(u?(d(),i.preventDefault()):i.key==="Enter"&&i.shiftKey)}function v(){e=this.innerText,n(0,e)}return t.$$.update=()=>{t.$$.dirty&17&&n(1,u=!!e&&e.length>0&&c&&b())},[e,u,d,f,c,v]}class C extends w{constructor(o){super(),_(this,o,j,L,T,{},D)}}C.__docgen={version:3,name:"Input.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"send"}],slots:[],refs:[]};export{C as I};