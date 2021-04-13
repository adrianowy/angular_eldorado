import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { User } from '../users/user.entity';

@Entity({ name: 'scheduleclass' })
export class ScheduleClass {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, schedule_class => ScheduleClass)
    user: User;

    @ManyToOne(type => Teacher, schedule_class => ScheduleClass)
    teacher: Teacher;

    @Column({type: 'timestamp'})
    start: Date;

    @Column({type: 'timestamp'})
    end: Date;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
