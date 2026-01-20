import { User } from "../../../domain/entities/user";

export class UserModel{

    constructor(
       public id:string,
       public firstname:string,
       public lastname:string
    ){}

    toUser(){
        return new User(this.id,this.firstname,this.lastname)
    }
}