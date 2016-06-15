import {Validator} from "validator.ts/Validator";
import {IsEmail} from "validator.ts/decorator/Validation";

export class Post {
    first_name: string;
    last_name: string;
    phone: number;
    message: string;

    @IsEmail()
    email: string;
}

export class ContactForm {
    constructor(
        public first_name: string,
        public email: string,
        public last_name: string,
        public message: string,
        public phone?: number
    ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.message = message;
        this.email = email;

        if(this.phone)
            this.phone = phone;
    }
}