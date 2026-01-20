import { User } from "../../../domain/entities/user";
import { UserRepository } from "../../../domain/repositories/userRepositoty";
import { UserModel } from "../models/userModel";

export class MongoUserRepository implements UserRepository{

    users:Record<string,UserModel> = {}
    
    save(user: User): void {
      const userToSave =  user.toDataBase()
      this.users[user.getID()] = new UserModel(
        userToSave.id,
        userToSave.firstname,
        userToSave.lastname)
    }
    findAll(): User[] {
        throw new Error("Method not implemented.");
    }
    findByID(userID: string): User | null {
        const userModel = this.users[userID]
        if(!userModel) return null
        return userModel.toUser()
    }
}


