import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { TeacherModule } from './teachers/teacher.module';
import { UserModule } from './users/user.module';
import { ScheduleclassModule } from './scheduleclasses/scheduleclass.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity.{js,ts}'],
    }),
    AuthModule,
    TeacherModule,
    UserModule,
    ScheduleclassModule,
  ]
})
export class AppModule {}
