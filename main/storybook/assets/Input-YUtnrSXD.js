import{S as _,i as w,s as S,a as T,e as b,b as m,c as i,j as R,d,f as k,l as y,n as x,g,r as I,k as j}from"./index-Z1Yh0Bcu.js";function z(t){T(t,"svelte-1qc1bbp",'@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-1qc1bbp.svelte-1qc1bbp{color:black;font-family:"Rethink Sans", sans-serif;display:flex;padding:10px;background-color:white;border-radius:10px}span.svelte-1qc1bbp.svelte-1qc1bbp{font-size:15px !important;padding:0 !important;margin:0 !important;vertical-align:middle}.container.svelte-1qc1bbp .svelte-1qc1bbp{padding:10px;border:none;font-size:1em;border-radius:10px}.input.svelte-1qc1bbp.svelte-1qc1bbp{flex:1;background:#ddd;color:"black"}.send.svelte-1qc1bbp.svelte-1qc1bbp{margin-left:10px;background:rgb(140, 0, 255);color:#fff;font-weight:bold;cursor:pointer;transition:filter 0.23s;padding:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px;transition:background-color 0.23s}.send.svelte-1qc1bbp.svelte-1qc1bbp:hover{filter:saturate(180%)}.send.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}.clear.svelte-1qc1bbp.svelte-1qc1bbp{border:none;margin-left:10px;background:#ddd;color:black;font-weight:bold;cursor:pointer;transition:background-color 0.23s;display:flex;flex-direction:row;justify-content:center;align-items:center;width:40px;height:40px}.clear.svelte-1qc1bbp.svelte-1qc1bbp:hover{background-color:black;color:#ddd}.clear.svelte-1qc1bbp.svelte-1qc1bbp:disabled{cursor:not-allowed;opacity:0.5}')}function L(t){let o,n,s,e,r,l,c,p,q,f,v,h;return{c(){o=b("link"),n=m(),s=b("div"),e=b("div"),r=m(),l=b("button"),c=b("span"),c.textContent="send",q=m(),f=b("button"),f.innerHTML='<span class="material-symbols-outlined svelte-1qc1bbp">delete_forever</span>',i(o,"rel","stylesheet"),i(o,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),i(e,"contenteditable","true"),i(e,"class","input svelte-1qc1bbp"),t[0]===void 0&&R(()=>t[4].call(e)),i(c,"class","material-symbols-outlined svelte-1qc1bbp"),i(l,"class","send svelte-1qc1bbp"),l.disabled=p=!t[1],i(f,"class","clear svelte-1qc1bbp"),i(s,"class","container svelte-1qc1bbp")},m(a,u){d(document.head,o),k(a,n,u),k(a,s,u),d(s,e),t[0]!==void 0&&(e.innerText=t[0]),d(s,r),d(s,l),d(l,c),d(s,q),d(s,f),v||(h=[y(e,"input",t[4]),y(l,"click",t[2])],v=!0)},p(a,[u]){u&1&&a[0]!==e.innerText&&(e.innerText=a[0]),u&2&&p!==(p=!a[1])&&(l.disabled=p)},i:x,o:x,d(a){a&&(g(n),g(s)),g(o),v=!1,I(h)}}}function M(t,o,n){const s=j();let e="",r=!0;const l=()=>{s("send",{message:e,onResponse:()=>n(3,r=!0)}),n(0,e=""),n(3,r=!1)};let c=!1;function p(){e=this.innerText,n(0,e)}return t.$$.update=()=>{t.$$.dirty&9&&n(1,c=!!e&&e.length>0&&r)},[e,c,l,r,p]}class C extends _{constructor(o){super(),w(this,o,M,L,S,{},z)}}C.__docgen={version:3,name:"Input.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"send"}],slots:[],refs:[]};export{C as I};
