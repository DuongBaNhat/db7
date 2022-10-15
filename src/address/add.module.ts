import { Module } from '@nestjs/common';
import { AddService } from './add.service';
import { AddController } from './add.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './add.entity';

@Module({
  providers: [AddService],
  controllers: [AddController],
  imports: [
    TypeOrmModule.forFeature([Address])
  ]
})
export class AddressModule {}
