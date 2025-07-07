import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { Prisma1Module } from './prisma1/prisma1.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, Prisma1Module,ConfigModule.forRoot({
    isGlobal: true})
  ]})  
export class AppModule {}
