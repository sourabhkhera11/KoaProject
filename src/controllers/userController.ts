import { Context } from "node:vm";
import {insertUser, fetchAllUser} from "../Repository/userRepo";

export class UserController{

    static async createUser(ctx: Context){
        try{
            const userData=ctx.request.body;
            const {name,
            contactNumber,
            dob,
            gender,
            city,
            interests, 
            password,
            email 
            }=userData;

            if(!name){
                throw new Error("Name is required!");
            }

            if(!city){
                throw new Error("City is required");
            }

            //create a helper function file and move regex logics there
            const phoneRegex = /^\+[1-9]\d{1,14}$/;

            if (!phoneRegex.test(contactNumber)) {
                throw new Error("Invalid contact number format");
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

            if (!emailRegex.test(email)) {
                throw new Error("Invalid email format");
            }

            //use enum of Gender for validation
            if (!['male','female','others'].includes(gender)){
                throw new Error("Invalid gender!");
            }

            if( dob > Date.now() ){
                throw  new Error("Not a valid dob!");
            }
            
            if( interests.length===0){
                throw new Error("Must have at least one interest!");
            }

            const value=await insertUser(userData);
            //status codes and messages can be moved to a constant.ts
            ctx.status=202;
            ctx.body={
                message: `Welcome ${value}!`
            }
        }
        catch(er : any){
            ctx.body=400;
            ctx.body={
                message: "Failed to create user",
                error: er.message,
            };
        }
    }
    static async fetchUsers(ctx: Context){
        try{
            const users=await fetchAllUser();
            ctx.status=200;
            ctx.body={
                message: "Data fetched successfully",
                data: users
            }
        }
        catch(er){
            ctx.status=400;
            ctx.body={
                message: "Bed request",
                eror: er
            }
        }
    }
}
