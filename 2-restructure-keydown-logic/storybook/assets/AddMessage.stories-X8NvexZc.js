import{S as M,i as v,s as S,a as k,e as x,w as L,c as b,f as C,x as I,t as P,o as T,g as A,y as D,z as H,v as $}from"./index-Z1Yh0Bcu.js";import{d as q}from"./index-I2CuepqY.js";import{M as z}from"./MessageContainer-GrDBFunC.js";import{u as i}from"./utils-EZVoP3fW.js";import"./Message-CxYaZ5da.js";import"./spread-rEx3vLA9.js";function E(e){k(e,"svelte-lr6atd","div.svelte-lr6atd{border:1px solid black;height:500px}")}function O(e){let t,s,a,n={};return s=new z({props:n}),e[2](s),{c(){t=x("div"),L(s.$$.fragment),b(t,"class","svelte-lr6atd")},m(o,r){C(o,t,r),I(s,t,null),a=!0},p(o,[r]){const _={};s.$set(_)},i(o){a||(P(s.$$.fragment,o),a=!0)},o(o){T(s.$$.fragment,o),a=!1},d(o){o&&A(t),e[2](null),D(s)}}}const V=new q.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),m=()=>[...V.generateParagraphs(1)].reverse(),d={chatting:async e=>{await i(100),e.addMessage({role:"assistant",content:"Hello, I'm the assistant!",timestamp:new Date().toLocaleTimeString()}),await i(1e3),e.addMessage({role:"user",content:"Hello, I'm the user!",timestamp:new Date().toLocaleTimeString()}),await i(1e3),e.updateLastMessageContent("Hello, I'm the user! I'm updating my message!");const t=m();for(;t.length>0;)await i(10),e.appendLastMessageContent(t.pop());await i(1e3),e.addMessage({role:"assistant",content:"Hello, I'm the assistant!",timestamp:new Date().toLocaleTimeString()})},scroll:async e=>{let t=0,s=!0;for(;t<10;){await i(100);const a=m();for(e.addMessage({role:s?"assistant":"user",content:a.pop(),timestamp:new Date().toLocaleTimeString()});a.length>0;)await i(10),e.appendLastMessageContent(a.pop());t++,s=!s}}};function j(e,t,s){let{testcase:a}=t,n;H(()=>d[a](n));function o(r){$[r?"unshift":"push"](()=>{n=r,s(0,n)})}return e.$$set=r=>{"testcase"in r&&s(1,a=r.testcase)},e.$$.update=()=>{e.$$.dirty&3&&n&&a&&(n==null||n.clearMessages(),d[a](n))},[n,a,o]}class y extends M{constructor(t){super(),v(this,t,j,O,S,{testcase:1},E)}}y.__docgen={version:3,name:"AddMessage.svelte",data:[{visibility:"public",description:null,keywords:[],name:"testcase",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Q={title:"AddMesssage",component:y,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{testcase:{control:{type:"select"},options:["chatting","scroll"],defaultValue:void 0}}},c={args:{testcase:"chatting"}},l={args:{testcase:"scroll"}};var p,g,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    testcase: 'chatting'
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    testcase: 'scroll'
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const R=["chatting","scroll"];export{R as __namedExportsOrder,c as chatting,Q as default,l as scroll};
