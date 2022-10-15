import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addInsert } from 'src/models/add.insert';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Address } from './add.entity';

@Injectable()
export class AddService {
   private n = 0;
    constructor(
        @InjectRepository(Address)
        private readonly addRepo: Repository<Address>,
    ) { }

    async findAll(): Promise<Address[]> {
        return await this.addRepo.find({relations: ['user']});
    }

    async findOne(id: number): Promise<Address> {
        return await this.addRepo.findOneBy({ id });
    }
    //insert
    async insertByQuery(address: Address): Promise<InsertResult> {
        return await addInsert(address, this.addRepo);
    }

    async create(add: Address): Promise<Address> {
        add.city += " " + ++this.n;

        return await this.addRepo.save(add);
    }

    async update(add: Address): Promise<UpdateResult> {
        return await this.addRepo.update(add.id, add);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.addRepo.delete(id);
    }
}
