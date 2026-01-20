import { User } from "../entities/user";
import { PasswordGateway } from "../gateways/passwordGateway";
import { UserRepository } from "../repositories/userRepositoty";

export class Register {

    constructor(
        private readonly repository: UserRepository,
        private readonly passwordGateway:PasswordGateway
    ){}

    execute(user:User){
       const  hashedPassword = this.passwordGateway.hashed(user.getPassword())
        user.setHashedPassword(hashedPassword)
        this.repository.save(user)
    }
}