import {AppDataSource} from "../data-source";
import { User } from "../entity/User";
import { Gender } from "../entity/User";
const userRepo=AppDataSource.getRepository(User);

export async function defaultUser() {
    try{
        const user = await userRepo.save({
            name: "Sourabh",
            contactNumber: "8700134519",
            dob: "2003-10-31",
            gender: Gender.MALE,
            city: "Delhi",
            interests: ["play","music"],
            password: "abcdefgh",
            email: "sourbhkhera@gmail.com"
        
        });
        return user;
    }
    catch(er){
        throw er;
    }
    
}

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