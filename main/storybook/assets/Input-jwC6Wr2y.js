import{S as w,i as S,s as T,a as R,e as m,b as f,c as a,j as I,d,f as y,l as x,n as _,g as v,r as j,k as z}from"./index-Z1Yh0Bcu.js";function L(t){R(t,"svelte-1l5mkhc",'@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-1l5mkhc.svelte-1l5mkhc{color:black;font-family:"Rethink Sans", sans-serif;display:flex;padding:10px;background-color:white;border-radius:10px}span.svelte-1l5mkhc.svelte-1l5mkhc{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-1l5mkhc .svelte-1l5mkhc{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-1l5mkhc.svelte-1l5mkhc{flex:1;background:#ddd;color:"black";width:400px}.send.svelte-1l5mkhc.svelte-1l5mkhc{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-1l5mkhc.svelte-1l5mkhc:hover{filter:saturate(180%)}.send.svelte-1l5mkhc.svelte-1l5mkhc:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-1l5mkhc.svelte-1l5mkhc{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-1l5mkhc.svelte-1l5mkhc:hover{background-color:black;color:#ddd}.clear.svelte-1l5mkhc.svelte-1l5mkhc:disabled{cursor:not-allowed;opacity:0.5}')}function M(t){let o,s,l,e,r,n,c,p,b,u,k,g;return{c(){o=m("link"),s=f(),l=m("div"),e=m("div"),r=f(),n=m("button"),c=m("span"),c.textContent="send",b=f(),u=m("button"),u.innerHTML='<span class="material-symbols-outlined svelte-1l5mkhc">delete_forever</span>',a(o,"rel","stylesheet"),a(o,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),a(e,"contenteditable","true"),a(e,"class","input svelte-1l5mkhc"),t[0]===void 0&&I(()=>t[4].call(e)),a(c,"class","material-symbols-outlined svelte-1l5mkhc"),a(n,"class","send svelte-1l5mkhc"),n.disabled=p=!t[1],a(u,"class","clear svelte-1l5mkhc"),a(l,"class","container svelte-1l5mkhc")},m(i,h){d(document.head,o),y(i,s,h),y(i,l,h),d(l,e),t[0]!==void 0&&(e.innerText=t[0]),d(l,r),d(l,n),d(n,c),d(l,b),d(l,u),k||(g=[x(e,"input",t[4]),x(n,"click",t[2])],k=!0)},p(i,[h]){h&1&&i[0]!==e.innerText&&(e.innerText=i[0]),h&2&&p!==(p=!i[1])&&(n.disabled=p)},i:_,o:_,d(i){i&&(v(s),v(l)),v(o),k=!1,j(g)}}}function C(t,o,s){const l=z();let e="",r=!0;const n=()=>{l("send",{message:e,onResponse:()=>s(3,r=!0)}),s(0,e=""),s(3,r=!1)};let c=!1;function p(){e=this.innerText,s(0,e)}return t.$$.update=()=>{t.$$.dirty&9&&s(1,c=!!e&&e.length>0&&r)},[e,c,n,r,p]}class D extends w{constructor(o){super(),S(this,o,C,M,T,{},L)}}D.__docgen={version:3,name:"Input.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"send"}],slots:[],refs:[]};export{D as I};