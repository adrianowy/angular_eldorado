import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../teacher.entity';

@Injectable()
export class TeacherService {

    constructor(
        @InjectRepository(Teacher)
        private teacherRepo: Repository<Teacher>
    ){}

    getAll(){
        return this.teacherRepo.find();
    }

    getById(id: string){
        return this.teacherRepo.findOne(id);
    }

    create(teacher: Teacher){
        return this.teacherRepo.save(teacher);
    }

    delete(id: string){
        return this.teacherRepo.delete(id);
    }  
}
