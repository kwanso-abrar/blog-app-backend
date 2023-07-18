import { User } from './entity/users.entity';
import { UsersService } from './users.service';
import { SignupUserInput } from './dto/users.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User], { nullable: true })
  async getAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Mutation(() => User)
  async signupUser(@Args('input') input: SignupUserInput) {
    return await this.usersService.signupUser(input);
  }
}
