export interface PasswordGateway{
    hashed(password:string):string
    isSame(hashedPassword:string, plainPassword:string):boolean
}