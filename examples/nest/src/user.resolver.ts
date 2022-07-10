import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  addRandom(): Promise<User> {
    return this.usersService.saveOne();
  }
}
