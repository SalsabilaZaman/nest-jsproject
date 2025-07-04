import { Injectable } from "@nestjs/common";
import { Prisma1Service } from "src/prisma1/prisma1.service";

@Injectable()
export class AuthService{
    constructor(private prisma1Service: Prisma1Service) {
        // You can inject Prisma1Service here if needed
    }

    login(){
        return {msg:"Hi login"};
    }
    signup(){
        return {msg:"Hi signup"};
    }

}