async function n(o){let t;return await new Promise(e=>t=setTimeout(()=>{clearTimeout(t),e()},o))}const i={collections:[],askEndpoint:"http://127.0.0.1:5000/ask",addEndpoint:"",model:"gpt-3.5-turbo-16k"};export{i as d,n as u};