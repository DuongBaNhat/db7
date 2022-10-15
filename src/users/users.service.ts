import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as UserQuery from 'src/models/user.query';
import * as UserInsert from 'src/models/user.insert';
import * as UserUpdate from 'src/models/user.update';
import * as UserDelete from "src/models/user.delete"

import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    
    private n = 0;
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepo.findOneBy({ id });
    }

    //create
    async createByQuery(user: User): Promise<InsertResult> {
        return await UserInsert.insertOne(this.userRepo, user);
    }
    async create(user: User): Promise<User> {
        user.firstName += " " + ++this.n;

        return await this.userRepo.save(user);
    }

    //Update
    async updateFirstNameByQuery(id: number, firstName: string): Promise<UpdateResult> {
        return await UserUpdate.updateFirstNameByQuery(id, firstName, this.userRepo);
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.userRepo.update(user.id, user);
    }
    //Delete
    
    async deleteByQuery(id: number): Promise<DeleteResult> {
        let data = await UserDelete.deleteByQuery(id, this.userRepo);
        return ;
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.userRepo.delete(id);
    }

    async topUser(id: number): Promise<User> {
        return await UserQuery.topUserQuery(this.userRepo, id);
    }

    async getUserById (id: number): Promise<User> {
        return await UserQuery.findUserById(this.userRepo, id)
    }
}
