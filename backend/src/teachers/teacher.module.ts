import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherService } from './shared/teacher.service';
import { TeacherController } from './teacher.controller';
import { Teacher } from './teacher.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Teacher])
    ],
    controllers: [TeacherController],
    providers: [TeacherService]
})
export class TeacherModule {}
