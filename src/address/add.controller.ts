import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Address } from './add.entity';
import { AddService } from './add.service';

@Controller('add')
export class AddController {
    constructor(private readonly addService: AddService) { }

    @Get()
    findAll() {
        return this.addService.findAll();
    }

    @Get(':id')
    findOne(@Param() param: any) {
        return this.addService.findOne(param.id);
    }
    // insert address
    @Post('insert')
    insertByQuery(@Body() add: Address) {
        return this.addService.insertByQuery(add);
    }

    @Post()
    create(@Body() add: Address) {
        return this.addService.create(add);
    }
    @Put()
    update(@Body() add: Address) {
        return this.addService.update(add)
    }

    @Delete(':id')
    delete(@Param() param: any) {
        return this.addService.delete(param.id);
    }

}
