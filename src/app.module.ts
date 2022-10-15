import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/add.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userconfig } from './dto/dto.ormconfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule, AddressModule,
    TypeOrmModule.forRoot(userconfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
