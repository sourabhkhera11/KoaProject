import {AppDataSource} from "../data-source";
import { User } from "../entity/User";
import { Gender } from "../entity/User";
const userRepo=AppDataSource.getRepository(User);

export async function defaultUser() {
    userRepo.save({
        name: "Sourabh",
        contactNumber: "8700134518",
        dob: "2003-10-31",
        gender: Gender.MALE,
        city: "Delhi",
        interests: ["play","music"],
        password: "abcdefgh",
        email: "sourbh@gmail.com"
    
    });
}
