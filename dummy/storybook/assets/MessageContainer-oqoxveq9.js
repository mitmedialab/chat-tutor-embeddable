import{S as N,i as V,s as j,a as z,e as g,b as D,c as _,f as M,d as y,t as p,m as w,o as d,g as L,p as E,q as F,u as $,v as k,w as C,x as A,y as x}from"./index-mK6-3EkX.js";import{e as h,M as q}from"./Message-D0T_wEaj.js";function G(r){z(r,"svelte-40iad3","div.svelte-40iad3{max-height:100%;overflow-y:scroll}")}function b(r,e,o){const t=r.slice();return t[12]=e[o].role,t[13]=e[o].content,t[14]=e[o].timestamp,t[16]=o,t}function H(r){let e,o;return e=new q({props:{role:r[12],content:r[13],timestamp:r[14]}}),{c(){C(e.$$.fragment)},m(t,a){A(e,t,a),o=!0},p(t,a){const i={};a&1&&(i.role=t[12]),a&1&&(i.content=t[13]),a&1&&(i.timestamp=t[14]),e.$set(i)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function J(r){let e,o,t={role:r[12],content:r[13],timestamp:r[14]};return e=new q({props:t}),r[9](e),{c(){C(e.$$.fragment)},m(a,i){A(e,a,i),o=!0},p(a,i){const n={};i&1&&(n.role=a[12]),i&1&&(n.content=a[13]),i&1&&(n.timestamp=a[14]),e.$set(n)},i(a){o||(p(e.$$.fragment,a),o=!0)},o(a){d(e.$$.fragment,a),o=!1},d(a){r[9](null),x(e,a)}}}function v(r){let e,o,t,a;const i=[J,H],n=[];function f(s,c){return s[16]===s[0].length-1?0:1}return e=f(r),o=n[e]=i[e](r),{c(){o.c(),t=F()},m(s,c){n[e].m(s,c),M(s,t,c),a=!0},p(s,c){let l=e;e=f(s),e===l?n[e].p(s,c):($(),d(n[l],1,1,()=>{n[l]=null}),w(),o=n[e],o?o.p(s,c):(o=n[e]=i[e](s),o.c()),p(o,1),o.m(t.parentNode,t))},i(s){a||(p(o),a=!0)},o(s){d(o),a=!1},d(s){s&&L(t),n[e].d(s)}}}function K(r){let e,o,t,a,i=h(r[0]),n=[];for(let s=0;s<i.length;s+=1)n[s]=v(b(r,i,s));const f=s=>d(n[s],1,1,()=>{n[s]=null});return{c(){e=g("div");for(let s=0;s<n.length;s+=1)n[s].c();o=D(),t=g("div"),_(t,"class","svelte-40iad3"),_(e,"class","svelte-40iad3")},m(s,c){M(s,e,c);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(e,null);y(e,o),y(e,t),r[10](t),a=!0},p(s,[c]){if(c&3){i=h(s[0]);let l;for(l=0;l<i.length;l+=1){const m=b(s,i,l);n[l]?(n[l].p(m,c),p(n[l],1)):(n[l]=v(m),n[l].c(),p(n[l],1),n[l].m(e,o))}for($(),l=i.length;l<n.length;l+=1)f(l);w()}},i(s){if(!a){for(let c=0;c<i.length;c+=1)p(n[c]);a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)d(n[c]);a=!1},d(s){s&&L(e),E(n,s),r[10](null)}}}function O(r,e,o){let{messages:t=[]}=e,a,i;const n=()=>i.scrollIntoView(),f=()=>t,s=()=>t[t.length-1],c=u=>(t.push(u),o(0,t),n(),u),l=u=>{o(0,t[t.length-1].content=u,t),a==null||a.update(u),n()},m=u=>{s().content+=u,a==null||a.append(u),n()},S=()=>{o(0,t=[]),n()};function B(u){k[u?"unshift":"push"](()=>{a=u,o(1,a)})}function I(u){k[u?"unshift":"push"](()=>{i=u,o(2,i)})}return r.$$set=u=>{"messages"in u&&o(0,t=u.messages)},[t,a,i,f,s,c,l,m,S,B,I]}class P extends N{constructor(e){super(),V(this,e,O,K,j,{messages:0,getAll:3,getLast:4,addMessage:5,updateLastMessageContent:6,appendLastMessageContent:7,clearMessages:8},G)}get getAll(){return this.$$.ctx[3]}get getLast(){return this.$$.ctx[4]}get addMessage(){return this.$$.ctx[5]}get updateLastMessageContent(){return this.$$.ctx[6]}get appendLastMessageContent(){return this.$$.ctx[7]}get clearMessages(){return this.$$.ctx[8]}}P.__docgen={version:3,name:"MessageContainer.svelte",data:[{visibility:"public",description:null,keywords:[],name:"messages",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"getAll",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}},{visibility:"public",description:null,keywords:[],name:"getLast",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}},{visibility:"public",description:null,keywords:[],name:"addMessage",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"message"}]}},{visibility:"public",description:null,keywords:[],name:"updateLastMessageContent",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"content"}]}},{visibility:"public",description:null,keywords:[],name:"appendLastMessageContent",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"content"}]}},{visibility:"public",description:null,keywords:[],name:"clearMessages",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{P as M};
