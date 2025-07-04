import { Global, Module } from '@nestjs/common';
import { Prisma1Service } from './prisma1.service';
@Global() // Making this module global so it can be used across the application without needing to import it in every module
@Module({
  providers: [Prisma1Service],
  exports: [Prisma1Service], // Exporting the service so it can be used in other modules
})
export class Prisma1Module {}
