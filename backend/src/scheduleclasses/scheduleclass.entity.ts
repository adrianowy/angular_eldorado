import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { User } from '../users/user.entity';

@Entity({ name: 'scheduleclass' })
export class ScheduleClass {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @ManyToOne(() => Teacher, (teacher) => teacher.id)
    teacher: Teacher;

    @Column({type: 'timestamp'})
    start: Date;

    @Column({type: 'timestamp'})
    end: Date;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
