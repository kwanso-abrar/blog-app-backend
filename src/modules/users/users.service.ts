import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/app.utils';
import { SignupUserInput, SignupUserOutput } from './dtos/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async signup(input: SignupUserInput): Promise<SignupUserOutput> {
    const { email, password, role, avatar, userName } = input;

    const isAlreadyExist = await this.usersRepository.findOne({ where: { email } });
    if (isAlreadyExist) throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);

    const hashedPassword = await hashPassword(password);
    const userDto: Partial<User> = {
      email,
      role,
      avatar,
      userName,
      password: hashedPassword,
    };

    const user = await this.usersRepository.save(userDto);
    return { user, status: 200, message: 'success' };
  }
}
