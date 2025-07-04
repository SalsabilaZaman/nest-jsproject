import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{

    login(){
        return {msg:"Hi login"};
    }
    signup(){
        return {msg:"Hi signup"};
    }

}