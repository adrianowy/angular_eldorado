import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './shared/user.service';

@Controller('users')
export class UserController {

    constructor(private service: UserService){}

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