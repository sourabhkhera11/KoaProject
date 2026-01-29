import { Context } from "node:vm";
import {insertUser} from "../Repository/userRepo";

export class UserController{

    static async createUser(ctx: Context){
        try{
            const userData=ctx.request.body;
            const name=await insertUser(userData);
            ctx.status=202;
            ctx.body={
                message: `Welcome ${name}!`
            }
        }
        catch(er : any){
            ctx.body=500;
            ctx.body={
                message: "Failed to create user",
                error: er.message,
            };
        }
    }
}
