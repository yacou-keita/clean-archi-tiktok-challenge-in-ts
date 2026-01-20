import { User } from "../entities/user"

export interface UserRepository {
    save(user:User):void
    findAll():User[]
    findByID(userID:string):User | null
}