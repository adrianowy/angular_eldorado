import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleclassController } from './scheduleclass.controller';
import { ScheduleClass } from './scheduleclass.entity';
import { ScheduleclassService } from './shared/scheduleclass.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ScheduleClass])
    ],
    controllers: [ScheduleclassController],
    providers: [ScheduleclassService]
})
export class ScheduleclassModule {}
