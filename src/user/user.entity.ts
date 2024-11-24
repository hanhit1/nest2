import { Exclude, Expose, Transform } from 'class-transformer';

export class UserEntity {
  @Expose()
  id: number;

  @Exclude()
  firstName: string;

  @Expose()
  @Transform(({ obj }) => `${obj.firstName ?? ''} ${obj.lastName}`)
  lastName: string;

  @Exclude()
  password: string;

  @Expose({ groups: ['admin'] }) 
  createdAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
