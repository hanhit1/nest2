import { MigrationInterface, QueryRunner } from 'typeorm';
import { Users } from '../users/user.entity'; 

export class AddAddressColumnToUsers1731657186516 implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getMongoRepository(Users)
      .updateMany({}, { $set: { address: 'DN' } });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getMongoRepository(Users)
      .updateMany({}, { $unset: { address: '' } });
  }
}
