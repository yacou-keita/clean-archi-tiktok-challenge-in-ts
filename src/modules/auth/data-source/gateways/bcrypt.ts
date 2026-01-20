import { PasswordGateway } from "../../domain/gateways/passwordGateway";

export class BcryptPasswordGateway implements PasswordGateway{

    hashed(password: string): string {
        return `hashed${password}`
    }
    isSame(hashedPassword: string, plainPassword: string): boolean {
        return hashedPassword == `hashed${plainPassword}`
    }

}