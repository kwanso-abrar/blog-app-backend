import { User } from './users.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorator';
import { UsersService } from './users.service';
import { SignupUserInput } from './users.dto';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Query(() => String)
  helloWorld(@CurrentUser() user: User): string {
    console.log('user >>>>>>>>', user);
    return 'Hello World!';
  }

  @Mutation(() => User)
  async signupUser(@Args('input') input: SignupUserInput) {
    return await this.usersService.signup(input);
  }
}
