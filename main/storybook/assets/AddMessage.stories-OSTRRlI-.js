import{S as M,i as v,s as S,a as k,e as x,w as L,c as b,f as C,x as I,t as P,o as T,g as A,y as D,z as H,v as $}from"./index-mK6-3EkX.js";import{d as q}from"./index-I2CuepqY.js";import{M as z}from"./MessageContainer-oqoxveq9.js";import{u as i}from"./utils-EZVoP3fW.js";import"./Message-D0T_wEaj.js";import"./spread-rEx3vLA9.js";function E(e){k(e,"svelte-lr6atd","div.svelte-lr6atd{border:1px solid black;height:500px}")}function O(e){let t,s,a,n={};return s=new z({props:n}),e[2](s),{c(){t=x("div"),L(s.$$.fragment),b(t,"class","svelte-lr6atd")},m(o,r){C(o,t,r),I(s,t,null),a=!0},p(o,[r]){const _={};s.$set(_)},i(o){a||(P(s.$$.fragment,o),a=!0)},o(o){T(s.$$.fragment,o),a=!1},d(o){o&&A(t),e[2](null),D(s)}}}const j=new q.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),m=()=>[...j.generateParagraphs(1)].reverse(),p={chatting:async e=>{await i(100),e.addMessage({role:"assistant",content:"Hello, I'm the assistant!",timestamp:new Date().toLocaleTimeString()}),await i(1e3),e.addMessage({role:"user",content:"Hello, I'm the user!",timestamp:new Date().toLocaleTimeString()}),await i(1e3),e.updateLastMessageContent("Hello, I'm the user! I'm updating my message!");const t=m();for(;t.length>0;)await i(10),e.appendLastMessageContent(t.pop());await i(1e3),e.addMessage({role:"assistant",content:"Hello, I'm the assistant!",timestamp:new Date().toLocaleTimeString()})},scroll:async e=>{let t=0,s=!0;for(;t<10;){await i(100);const a=m();for(e.addMessage({role:s?"assistant":"user",content:a.pop(),timestamp:new Date().toLocaleTimeString()});a.length>0;)await i(10),e.appendLastMessageContent(a.pop());t++,s=!s}}};function B(e,t,s){let{testcase:a}=t,n;H(()=>p[a](n));function o(r){$[r?"unshift":"push"](()=>{n=r,s(0,n)})}return e.$$set=r=>{"testcase"in r&&s(1,a=r.testcase)},e.$$.update=()=>{e.$$.dirty&3&&n&&(n==null||n.clearMessages(),p[a](n))},[n,a,o]}class y extends M{constructor(t){super(),v(this,t,B,O,S,{testcase:1},E)}}y.__docgen={version:3,name:"AddMessage.svelte",data:[{visibility:"public",description:null,keywords:[],name:"testcase",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const R={title:"AddMesssage",component:y,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{testcase:{control:{type:"select"},options:["chatting","scroll"]}}},c={args:{testcase:"chatting"}},l={args:{testcase:"scroll"}};var d,g,u;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    testcase: 'chatting'
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,f,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    testcase: 'scroll'
  }
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const U=["chatting","scroll"];export{U as __namedExportsOrder,c as chatting,R as default,l as scroll};
