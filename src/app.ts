import Koa from "koa";
const bodyParser =require("koa-bodyparser");
import morgan from "koa-morgan";
import {defaultUser} from "./Repository/userRepo";
import { error } from "node:console";
// import router from "./routes";

const app = new Koa();
app.use(morgan("dev"));
app.use(bodyParser());
// app.use(router.routes());
// app.use(router.allowedMethods());
app.use(async (ctx) => {
  try{
    ctx.body = "Hello, Koa!";
  }
  catch(er){
    ctx.status=500;
    ctx.body={
      error:er
    }
  }
});
export default app;
