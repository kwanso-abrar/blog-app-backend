import { User } from './entity/users.entity';
import { UsersService } from './users.service';
import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { nullable: true })
  async getAllUsers() {
    return this.usersService.findAllUsers();
  }
}
