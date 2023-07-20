import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { comparePassword } from 'src/utils/app.utils';
import { SigninUserInput, SigninUserOutput } from './auth.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signin(input: SigninUserInput): Promise<SigninUserOutput> {
    const { email, password } = input;

    const user = await this.usersService.findUserByEmail(email);
    if (!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    const isPasswordMatched = await comparePassword(password, user.password);
    if (!isPasswordMatched) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    const jwtPayload = { id: user.id };
    return { user, accessToken: await this.jwtService.signAsync(jwtPayload), status: 200, message: 'success' };
  }
}
