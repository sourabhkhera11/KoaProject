import Router from "koa-router";
import { UserController } from "../controllers/userController";

const router = new Router({prefix:"/users"});

router.post("/register",UserController.createUser);

export default router;