import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>
    ){}

    getAll(){
        return this.userRepo.find();
    }

    getById(id: string){
        return this.userRepo.findOne(id);
    }

    getByEmail(email: string){
        return this.userRepo.findOne({email});
    }

    create(user: User){
        return this.userRepo.save(user);
    }

    delete(id: string){
        return this.userRepo.delete(id);
    }

}
