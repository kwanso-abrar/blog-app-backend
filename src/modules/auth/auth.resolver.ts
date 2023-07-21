import { AuthService } from './auth.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SigninUserInput, SigninUserOutput } from './dtos/auth.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SigninUserOutput)
  async signinUser(@Args('input') input: SigninUserInput): Promise<SigninUserOutput> {
    return await this.authService.signin(input);
  }
}
