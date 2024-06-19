import App from "./proyecto.svelte"
import App1 from "./tierra.svelte"
import App2 from "./wolf1061c.svelte"
//import App3 from "./gliese12b.svelte"


const app = new App({
  target: document.body,
})
const app1 = new App1({
  target: document.body,
})
const app2 = new App2({
  target: document.body,
})

//const app3 = new App3({
//  target: document.body,
//})
export default app && app1 && app2 //&& app3
