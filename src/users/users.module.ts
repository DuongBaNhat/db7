import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([User])
  ]
})
export class UsersModule {}
