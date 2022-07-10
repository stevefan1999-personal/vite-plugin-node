import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/all')
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/add-random')
  addRandom(): Promise<User> {
    return this.userService.saveOne();
  }

  @Get('/id/:id')
  async getOne(id: number): Promise<User | {}> {
    return (await this.userService.findOne(id)) ?? {};
  }
}
