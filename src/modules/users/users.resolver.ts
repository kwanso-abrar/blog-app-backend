import { User } from './users.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../decorators/currentUser.decorator';
import { UsersService } from './users.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SignupUserInput, SignupUserOutput } from './users.dto';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Query(() => String)
  helloWorld(@CurrentUser() user: User): string {
    console.log('user >>>>>>>>', user);
    return 'Hello World!';
  }

  @Mutation(() => SignupUserOutput)
  async signupUser(@Args('input') input: SignupUserInput) {
    return await this.usersService.signup(input);
  }
}
