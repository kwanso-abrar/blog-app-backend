import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { comparePassword, hashPassword } from 'src/utils/app.utils';
import { SigninUserInput, SignupUserInput } from './dto/users.dto';
import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async signup(input: SignupUserInput): Promise<User> {
    try {
      const { email, password, role, avatar, userName } = input;

      const isAlreadyExist = await this.usersRepository.findOne({ where: { email } });
      if (isAlreadyExist) throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);

      const hashedPassword = await hashPassword(password);
      const user: Partial<User> = {
        email,
        role,
        avatar,
        userName,
        password: hashedPassword,
      };

      return await this.usersRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async signin(input: SigninUserInput): Promise<User> {
    try {
      const { email, password } = input;

      const userInDb = await this.usersRepository.findOne({ where: { email } });
      if (!userInDb) throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

      const hashedPassword = userInDb.password;
      const isPasswordMatched = await comparePassword(password, hashedPassword);
      if (!isPasswordMatched) throw new HttpException('Login failed', HttpStatus.UNAUTHORIZED);

      return userInDb;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
