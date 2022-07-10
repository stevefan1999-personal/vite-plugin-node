import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserResolver],
  controllers: [UsersController],
})
export class UsersModule {}
