

export class User {

    getID(){return this.id}
    getPassword(){return this.password}
    constructor(
        private id:string,
        private firstname:string,
        private lastname:string,
        private password:string
    ){}
    
    setHashedPassword(passwordHashed:string){
        this.password = passwordHashed
    }
    toDataBase(){
        return {
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname
        }
    }
}