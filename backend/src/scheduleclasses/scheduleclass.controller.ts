import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ScheduleclassService } from './shared/scheduleclass.service';

@Controller('scheduleclass')
export class ScheduleclassController {

    constructor(private service: ScheduleclassService){}

    @Get('/')
    getAll(){
        return this.service.getAll();
    }

    @Get('/:id')
    getById(@Param('id') id: string){
        return this.service.getById(id);
    }
    
    @Post()
    create(@Body() body){
        return this.service.create(body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return this.service.delete(id);
    }

}