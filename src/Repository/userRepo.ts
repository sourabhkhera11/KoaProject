import {AppDataSource} from "../data-source";
import { User } from "../entity/User";
const userRepo=AppDataSource.getRepository(User);

export async function insertUser(userData:any){
    try{
        const user= await userRepo.save({
            name: userData.name,
            contactNumber: userData.contactNumber,
            dob: userData.dob,
            gender: userData.gender,
            city: userData.city,
            interests: userData.interests,
            password: userData.password,
            email: userData.email
        });
        return user.name;
    }
    catch(er){
        throw er;
    }
}

export async function fetchAllUser() {
    try{
        const users=await userRepo.find();
        return users;
    }
    catch(er){
        throw er;
    }
}