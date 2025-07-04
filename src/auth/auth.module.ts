import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Prisma1Module } from "src/prisma1/prisma1.module";

@Module({
//imports: [Prisma1Module],
controllers: [AuthController],
providers: [AuthService],})

export class AuthModule {}