import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class Prisma1Service extends PrismaClient{
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    // url: process.env.DATABASE_URL,
                    url:config.get('DATABASE_URL'),
                },
            },
        });
    }
}
