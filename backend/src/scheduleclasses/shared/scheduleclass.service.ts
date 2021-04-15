import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleClass } from '../scheduleclass.entity';

@Injectable()
export class ScheduleclassService {

    constructor(
        @InjectRepository(ScheduleClass)
        private scheduleclassRepo: Repository<ScheduleClass>
    ){}

    getAll(){
        return this.scheduleclassRepo.find({ relations: ["teacher"] });
    }

    getById(id: string){
        return this.scheduleclassRepo.findOne(id);
    }

    getByUser(user: string){
        return this.scheduleclassRepo.find({
            where: {user: user},
            relations: ["teacher"]
        });
    }

    create(scheduleclass: ScheduleClass){
        return this.scheduleclassRepo.save(scheduleclass);
    }

    delete(id: string){
        return this.scheduleclassRepo.delete(id);
    }

}
