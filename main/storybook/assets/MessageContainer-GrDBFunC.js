import{S as N,i as z,s as D,a as E,e as _,b as F,c as G,f as M,d as y,t as p,m as v,o as d,g as L,p as H,q as I,u as w,v as m,w as C,x as $,y as A}from"./index-Z1Yh0Bcu.js";import{e as h,M as j}from"./Message-CxYaZ5da.js";function J(a){E(a,"svelte-1dj2ob3",".container.svelte-1dj2ob3{max-height:100%;overflow-y:scroll}")}function k(a,e,o){const t=a.slice();return t[14]=e[o].role,t[15]=e[o].content,t[16]=e[o].timestamp,t[18]=o,t}function K(a){let e,o;return e=new j({props:{role:a[14],content:a[15],timestamp:a[16]}}),{c(){C(e.$$.fragment)},m(t,i){$(e,t,i),o=!0},p(t,i){const l={};i&1&&(l.role=t[14]),i&1&&(l.content=t[15]),i&1&&(l.timestamp=t[16]),e.$set(l)},i(t){o||(p(e.$$.fragment,t),o=!0)},o(t){d(e.$$.fragment,t),o=!1},d(t){A(e,t)}}}function O(a){let e,o,t={role:a[14],content:a[15],timestamp:a[16],isLast:!0};return e=new j({props:t}),a[10](e),{c(){C(e.$$.fragment)},m(i,l){$(e,i,l),o=!0},p(i,l){const n={};l&1&&(n.role=i[14]),l&1&&(n.content=i[15]),l&1&&(n.timestamp=i[16]),e.$set(n)},i(i){o||(p(e.$$.fragment,i),o=!0)},o(i){d(e.$$.fragment,i),o=!1},d(i){a[10](null),A(e,i)}}}function b(a){let e,o,t,i;const l=[O,K],n=[];function f(s,c){return s[18]===s[0].length-1?0:1}return e=f(a),o=n[e]=l[e](a),{c(){o.c(),t=I()},m(s,c){n[e].m(s,c),M(s,t,c),i=!0},p(s,c){let r=e;e=f(s),e===r?n[e].p(s,c):(w(),d(n[r],1,1,()=>{n[r]=null}),v(),o=n[e],o?o.p(s,c):(o=n[e]=l[e](s),o.c()),p(o,1),o.m(t.parentNode,t))},i(s){i||(p(o),i=!0)},o(s){d(o),i=!1},d(s){s&&L(t),n[e].d(s)}}}function P(a){let e,o,t,i,l=h(a[0]),n=[];for(let s=0;s<l.length;s+=1)n[s]=b(k(a,l,s));const f=s=>d(n[s],1,1,()=>{n[s]=null});return{c(){e=_("div");for(let s=0;s<n.length;s+=1)n[s].c();o=F(),t=_("div"),G(e,"class","container svelte-1dj2ob3")},m(s,c){M(s,e,c);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);y(e,o),y(e,t),a[11](t),a[12](e),i=!0},p(s,[c]){if(c&3){l=h(s[0]);let r;for(r=0;r<l.length;r+=1){const g=k(s,l,r);n[r]?(n[r].p(g,c),p(n[r],1)):(n[r]=b(g),n[r].c(),p(n[r],1),n[r].m(e,o))}for(w(),r=l.length;r<n.length;r+=1)f(r);v()}},i(s){if(!i){for(let c=0;c<l.length;c+=1)p(n[c]);i=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)d(n[c]);i=!1},d(s){s&&L(e),H(n,s),a[11](null),a[12](null)}}}function Q(a,e,o){let{messages:t=[]}=e,i,l,n;const f=()=>l.scrollTo(0,n.offsetTop),s=()=>t,c=()=>t[t.length-1],r=u=>(t.push(u),o(0,t),f(),u),g=u=>{o(0,t[t.length-1].content=u,t),i==null||i.update(u),f()},q=u=>{c().content+=u,i==null||i.append(u),f()},S=()=>{o(0,t=[]),f()};function T(u){m[u?"unshift":"push"](()=>{i=u,o(1,i)})}function x(u){m[u?"unshift":"push"](()=>{n=u,o(3,n)})}function B(u){m[u?"unshift":"push"](()=>{l=u,o(2,l)})}return a.$$set=u=>{"messages"in u&&o(0,t=u.messages)},[t,i,l,n,s,c,r,g,q,S,T,x,B]}class R extends N{constructor(e){super(),z(this,e,Q,P,D,{messages:0,getAll:4,getLast:5,addMessage:6,updateLastMessageContent:7,appendLastMessageContent:8,clearMessages:9},J)}get getAll(){return this.$$.ctx[4]}get getLast(){return this.$$.ctx[5]}get addMessage(){return this.$$.ctx[6]}get updateLastMessageContent(){return this.$$.ctx[7]}get appendLastMessageContent(){return this.$$.ctx[8]}get clearMessages(){return this.$$.ctx[9]}}R.__docgen={version:3,name:"MessageContainer.svelte",data:[{visibility:"public",description:null,keywords:[],name:"messages",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"getAll",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}},{visibility:"public",description:null,keywords:[],name:"getLast",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}},{visibility:"public",description:null,keywords:[],name:"addMessage",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"message"}]}},{visibility:"public",description:null,keywords:[],name:"updateLastMessageContent",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"content"}]}},{visibility:"public",description:null,keywords:[],name:"appendLastMessageContent",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function",params:[{name:"content"}]}},{visibility:"public",description:null,keywords:[],name:"clearMessages",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};export{R as M};
