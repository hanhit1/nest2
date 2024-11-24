import { ClassSerializerInterceptor, Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { UserEntity } from './user.entity';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  @Get()
  getUser(@Query('role') role: string) {
    const user = new UserEntity({
      id: 1,
      firstName: 'Ngo',
      lastName: 'Hanh',
      password: '123456',
      createdAt: new Date(),
    });

    console.log('Role:', role); 
    const groups = role === 'admin' ? ['admin'] : ['user'];
   return classToPlain(user, {
        groups: groups,
        excludeExtraneousValues: true,
      });
  }
}
