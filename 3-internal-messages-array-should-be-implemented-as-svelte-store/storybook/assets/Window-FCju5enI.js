import{S as q,i as C,s as R,a as D,e as p,b as h,c as g,B as S,d as m,f as z,l as A,n as y,g as b,h as B,x as k,y as _,t as w,j as H,o as x,z as $,k as T,C as j,w as E}from"./index-Rea00llB.js";import{I as F}from"./Input-w0rmq62v.js";import{M as G}from"./MessageContainer-FbKDjlax.js";import{n as O,c as J,d as K}from"./messageStore-n1Ty7YHs.js";import{s as N}from"./Message-OkQi32Fa.js";function P(n){D(n,"svelte-zksmvm",'@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Rethink+Sans&display=block");.container.svelte-zksmvm{color:black;font-family:"Rethink Sans", sans-serif;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;font-size:1.5rem;padding:0.5rem 1rem;border-bottom:2px solid lightgray;background-color:white}button.svelte-zksmvm{float:right;align-self:self-end;border-radius:10%}button.svelte-zksmvm:hover{background-color:lightgray}')}function Q(n){let e,a,i,o,r,u,t,f,s,d;return{c(){e=p("link"),a=h(),i=p("div"),o=p("div"),o.textContent="Chat Tutor",r=h(),u=p("div"),t=p("button"),f=p("span"),f.textContent="close",g(e,"rel","stylesheet"),g(e,"href","https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"),g(o,"class","title"),g(f,"class","material-symbols-outlined"),S(f,"color","red"),g(t,"class","svelte-zksmvm"),S(t,"border","1px solid red"),g(u,"class","close"),g(i,"class","container svelte-zksmvm")},m(c,v){m(document.head,e),z(c,a,v),z(c,i,v),m(i,o),m(i,r),m(i,u),m(u,t),m(t,f),s||(d=A(t,"click",n[0]),s=!0)},p:y,i:y,o:y,d(c){c&&(b(a),b(i)),b(e),s=!1,d()}}}function U(n){function e(a){B.call(this,n,a)}return[e]}class I extends q{constructor(e){super(),C(this,e,U,Q,R,{},P)}}I.__docgen={version:3,name:"Header.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};function V(n){D(n,"svelte-ql0rni",`.container.svelte-ql0rni{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;width:400px;max-height:95vh;row-gap:10px;z-index:2000}.row.svelte-ql0rni{border:1px solid #ddd;border-radius:10px;box-shadow:rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #ddd 0 -3px 0 inset}`)}function X(n){let e,a,i,o,r,u,t,f,s,d,c,v;o=new I({}),o.$on("click",n[4]);let L={};return t=new G({props:L}),n[5](t),d=new F({}),d.$on("send",n[2]),{c(){e=p("div"),a=p("div"),i=p("div"),k(o.$$.fragment),r=h(),u=p("div"),k(t.$$.fragment),f=h(),s=p("div"),k(d.$$.fragment),g(a,"class","row svelte-ql0rni"),g(s,"class","row svelte-ql0rni"),g(e,"class","container svelte-ql0rni")},m(l,M){z(l,e,M),m(e,a),m(a,i),_(o,i,null),m(a,r),m(a,u),_(t,u,null),m(e,f),m(e,s),_(d,s,null),v=!0},p(l,[M]){const W={};t.$set(W)},i(l){v||(w(o.$$.fragment,l),w(t.$$.fragment,l),w(d.$$.fragment,l),l&&(c||H(()=>{c=j(e,N,{duration:100}),c.start()})),v=!0)},o(l){x(o.$$.fragment,l),x(t.$$.fragment,l),x(d.$$.fragment,l),v=!1},d(l){l&&b(e),$(o),n[5](null),$(t),$(d)}}}function Y(n,e,a){let{configuration:i}=e;const o=T();let r;const u=async s=>{const d=r.addMessage({sender:"Student",role:"user",content:s.detail.message,timestamp:O()});await J(d,i),await K(r.getAll(),i,c=>r.addMessage(c),c=>r.appendLastMessageContent(c)),s.detail.onResponse()},t=()=>o("close");function f(s){E[s?"unshift":"push"](()=>{r=s,a(0,r)})}return n.$$set=s=>{"configuration"in s&&a(3,i=s.configuration)},[r,o,u,i,t,f]}class Z extends q{constructor(e){super(),C(this,e,Y,X,R,{configuration:3},V)}}Z.__docgen={version:3,name:"Window.svelte",data:[{visibility:"public",description:null,keywords:[],name:"configuration",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"close"}],slots:[],refs:[]};export{Z as W};
