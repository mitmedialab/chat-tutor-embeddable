import{M as t}from"./MessageContainer-Ck6EvHQ9.js";import{d as o}from"./index-I2CuepqY.js";import"./index-z8F5HjV4.js";import"./Message-58QNw7Jj.js";import"./spread-rEx3vLA9.js";import"./messageStore-Y9H0rZ75.js";const s=new o.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}}),u={title:"MessageContainer",component:t,tags:["autodocs"],argTypes:{messages:{control:"array"}},parameters:{layout:"fullscreen"}},e={args:{messages:[{role:"assistant",content:s.generateSentences(1)},{role:"user",content:s.generateSentences(2)}]},play:async m=>{}};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const y=["base"];export{y as __namedExportsOrder,e as base,u as default};
