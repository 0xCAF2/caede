import { serve } from "bun"
import index from "./index.html"

const server = serve({
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
  },
})

console.log(server.url.href)
