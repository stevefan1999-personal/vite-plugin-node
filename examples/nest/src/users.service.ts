import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  saveOne(): Promise<User> {
    return this.usersRepository.save({
      ...new User(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
