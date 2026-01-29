import Koa from "koa";
const bodyParser =require("koa-bodyparser");
// import router from "./routes";

const app = new Koa();

app.use(bodyParser());
// app.use(router.routes());
// app.use(router.allowedMethods());
app.use(async (ctx) => {
  ctx.body = "Hello, Koa!";
});
export default app;
