import { User } from './entity/users.entity';
import { UsersService } from './users.service';
import { SignupUserInput } from './dto/users.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  async signupUser(@Args('input') input: SignupUserInput) {
    return await this.usersService.signup(input);
  }
}
