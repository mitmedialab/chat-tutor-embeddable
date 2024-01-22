import{M as t}from"./MessageContainer-1ZPi3RPY.js";import{d as o}from"./index-I2CuepqY.js";import"./index-3_OAagAQ.js";import"./Message-b8ae_58A.js";import"./spread-rEx3vLA9.js";const s=new o.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),d={title:"MessageContainer",component:t,tags:["autodocs"],argTypes:{messages:{control:"array"}},parameters:{layout:"fullscreen"}},e={args:{messages:[{role:"assistant",content:s.generateSentences(1)},{role:"user",content:s.generateSentences(2)}]},play:async m=>{}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    messages: ([{
      role: 'assistant',
      content: lorem.generateSentences(1)
    }, {
      role: 'user',
      content: lorem.generateSentences(2)
    }] satisfies MessageType[])
  },
  play: async x => {}
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const u=["base"];export{u as __namedExportsOrder,e as base,d as default};
