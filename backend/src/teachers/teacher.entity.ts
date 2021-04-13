import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleClass } from '../scheduleclasses/scheduleclass.entity';

@Entity({ name: 'teachers' })
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => ScheduleClass, teacher => Teacher)
  schedule: ScheduleClass[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
