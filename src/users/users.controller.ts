import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { first } from 'rxjs';
import { deleteByQuery } from 'src/models/user.delete';
import { UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get('top')
    getTopUser() {
        return this.userService.topUser(1);
    }


    @Get(':id')
    findOne(@Param() param: any) {
        // return this.userService.findOne(param.id);
        return this.userService.getUserById(param.id);
    }
    //insert
    @Post('insert')
    createByQuery(@Body() user: User) {
        return this.userService.createByQuery(user);
    }

    @Post()
    create(@Body() user: User) {
        return this.userService.create(user);
    }


    //Update
    @Put()
    updateFirstNameByQuery(@Body() user: User) {
        return this.userService.updateFirstNameByQuery(user.id, user.firstName);
    }
    @Put()
    update(@Body() user: User) {
        return this.userService.update(user)
    }

    //Delete
    @Delete(':id')
    deleteByQuery(@Param() param: any) {
        return this.userService.deleteByQuery(param.id);
    }

    // @Delete(':id')
    // delete(@Param() param: any) {
    //     return this.userService.delete(param.id);
    // }
}
