import { ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma1Service } from "src/prisma1/prisma1.service";
import { AuthDto } from "./dto";
import * as argon from "argon2"; // Import argon2 for password hashing 
import { PrismaClientKnownRequestError } from "generated/prisma/runtime/library";

@Injectable()
export class AuthService{
    constructor(private prisma1Service: Prisma1Service) {
        // You can inject Prisma1Service here if needed
    }
    
    async signup(dto:AuthDto){
        
        try{
            const user = await this.prisma1Service.user.create({
            data: {
                email: dto.email,
                hash: await argon.hash(dto.password), // Store the hashed password
            },
            // select: {
            //     id: true,
            //     email: true,
            //     createdAt: true,
            // },
        });

        const { hash, ...userWithoutHash } = user;
        return userWithoutHash;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError)
                if (error.code === 'P2002') {
                    // Unique constraint failed on the email field
                    throw new ForbiddenException('Email already exists');
                }
            throw error; // Re-throw the error if it's not a unique constraint violation
        }
        //return {msg:"Hi signup"};
    }
    
    async login(){
        return {msg:"Hi login"};
    }
    

}