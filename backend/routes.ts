import { Router } from "./deps.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = { message: "API do RCV PWA rodando com Deno!" };
});

export default router;
