import{S as M,i as W,s as j,a as T,D as U,e as V,B as p,c as _,f as D,l as b,E as z,F as B,G as F,t as m,o as d,g as S,r as G,x as y,y as k,z as h,w as N,u as X,v as Y,m as A,n as H}from"./index-Rea00llB.js";import{O as I}from"./OpenMe--MQZsRET.js";import{W as J}from"./Window-09LqebXF.js";import{d as K}from"./utils-EZVoP3fW.js";import{r as L}from"./messageStore-n1Ty7YHs.js";import"./Input-w0rmq62v.js";import"./MessageContainer-FbKDjlax.js";import"./Message-OkQi32Fa.js";import"./spread-rEx3vLA9.js";function P(i){T(i,"svelte-6ny3hj","section.svelte-6ny3hj{user-select:none;cursor:move;position:fixed}section.svelte-6ny3hj:focus{outline:none}")}function Q(i){let e,t,n,s;const r=i[8].default,o=U(r,i,i[7],null);return{c(){e=V("section"),o&&o.c(),p(e,"right",i[0]+"px"),p(e,"bottom",i[1]+"px"),_(e,"role","button"),_(e,"tabindex","0"),_(e,"class","svelte-6ny3hj")},m(l,a){D(l,e,a),o&&o.m(e,null),t=!0,n||(s=[b(window,"mouseup",i[4]),b(window,"mousemove",i[3]),b(e,"mousedown",i[2])],n=!0)},p(l,[a]){o&&o.p&&(!t||a&128)&&z(o,r,l,l[7],t?F(r,l[7],a,null):B(l[7]),null),(!t||a&1)&&p(e,"right",l[0]+"px"),(!t||a&2)&&p(e,"bottom",l[1]+"px")},i(l){t||(m(o,l),t=!0)},o(l){d(o,l),t=!1},d(l){l&&S(e),o&&o.d(l),n=!1,G(s)}}}const Z=2;function x(i,e,t){let{$$slots:n={},$$scope:s}=e,{right:r=100}=e,{bottom:o=100}=e,l=!1,a;const u=()=>Math.sqrt(Math.pow(r-a.left,2)+Math.pow(o-a.bottom,2)),c=()=>u()>=Z;function R(){l=!0,a={left:r,bottom:o}}function q(f){l&&(t(0,r-=f.movementX),t(1,o-=f.movementY))}function E(){l=!1}return i.$$set=f=>{"right"in f&&t(0,r=f.right),"bottom"in f&&t(1,o=f.bottom),"$$scope"in f&&t(7,s=f.$$scope)},[r,o,R,q,E,u,c,s,n]}class C extends M{constructor(e){super(),W(this,e,x,Q,j,{right:0,bottom:1,distance:5,moved:6},P)}get distance(){return this.$$.ctx[5]}get moved(){return this.$$.ctx[6]}}C.__docgen={version:3,name:"Draggable.svelte",data:[{visibility:"public",description:null,keywords:[],name:"right",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:100},{visibility:"public",description:null,keywords:[],name:"bottom",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:100},{visibility:"public",description:null,keywords:[],name:"distance",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}},{visibility:"public",description:null,keywords:[],name:"moved",kind:"const",static:!1,readonly:!0,type:{kind:"function",text:"function",type:"function"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function ee(i){let e,t;return e=new I({}),e.$on("click",i[4]),{c(){y(e.$$.fragment)},m(n,s){k(e,n,s),t=!0},p:H,i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){h(e,n)}}}function te(i){let e,t;return e=new J({props:{initialMessage:i[3],configuration:i[0]}}),e.$on("close",i[5]),{c(){y(e.$$.fragment)},m(n,s){k(e,n,s),t=!0},p(n,s){const r={};s&8&&(r.initialMessage=n[3]),s&1&&(r.configuration=n[0]),e.$set(r)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){h(e,n)}}}function ne(i){let e,t,n,s;const r=[te,ee],o=[];function l(a,u){return a[1]?0:1}return e=l(i),t=o[e]=r[e](i),{c(){t.c(),n=X()},m(a,u){o[e].m(a,u),D(a,n,u),s=!0},p(a,u){let c=e;e=l(a),e===c?o[e].p(a,u):(Y(),d(o[c],1,1,()=>{o[c]=null}),A(),t=o[e],t?t.p(a,u):(t=o[e]=r[e](a),t.c()),m(t,1),t.m(n.parentNode,n))},i(a){s||(m(t),s=!0)},o(a){d(t),s=!1},d(a){a&&S(n),o[e].d(a)}}}function oe(i){let e,t,n={$$slots:{default:[ne]},$$scope:{ctx:i}};return e=new C({props:n}),i[6](e),{c(){y(e.$$.fragment)},m(s,r){k(e,s,r),t=!0},p(s,[r]){const o={};r&267&&(o.$$scope={dirty:r,ctx:s}),e.$set(o)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){d(e.$$.fragment,s),t=!1},d(s){i[6](null),h(e,s)}}}function se(i,e,t){let{configuration:n}=e,s=!1,r,o="Welcome";const l=async()=>{r.moved()||t(1,s=!0)},a=async()=>{r.moved()||(t(1,s=!1),t(3,o=""))};function u(c){N[c?"unshift":"push"](()=>{r=c,t(2,r)})}return i.$$set=c=>{"configuration"in c&&t(0,n=c.configuration)},[n,s,r,o,l,a,u]}class O extends M{constructor(e){super(),W(this,e,se,oe,j,{configuration:0})}}O.__docgen={version:3,name:"Root.svelte",data:[{visibility:"public",description:null,keywords:[],name:"configuration",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const pe={title:"Root",component:O,tags:["autodocs"],play:L},g={args:{configuration:K}};var w,v,$;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    configuration: dummyConfiguration
  }
}`,...($=(v=g.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};const ge=["base"];export{ge as __namedExportsOrder,g as base,pe as default};
