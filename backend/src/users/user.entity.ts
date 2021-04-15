import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ScheduleClass } from '../scheduleclasses/scheduleclass.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ScheduleClass, (scheduleclass) => scheduleclass.id)
  schedule: ScheduleClass[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
