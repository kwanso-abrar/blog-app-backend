import { User } from './entity/users.entity';
import { UsersService } from './users.service';
import { SigninUserInput, SignupUserInput } from './dto/users.dto';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async signinUser(@Args('input') input: SigninUserInput): Promise<User> {
    return await this.usersService.signin(input);
  }

  @Mutation(() => User)
  async signupUser(@Args('input') input: SignupUserInput) {
    return await this.usersService.signup(input);
  }
}
