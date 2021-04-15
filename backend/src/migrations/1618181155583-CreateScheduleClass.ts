import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateScheduleClass1618181155583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'scheduleclass',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'userId',
                        type: 'int'
                    },
                    {
                        name: 'teacherId',
                        type: 'int'
                    },
                    {
                        name: 'start',
                        type: 'timestamp'
                    },
                    {
                        name: 'end',
                        type: 'timestamp'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }
                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('scheduleclass');
    }

}
