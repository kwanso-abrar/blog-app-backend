import { User } from './entity/users.entity';
import { Repository } from 'typeorm';
import { SignupUserInput } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async signupUser(input: SignupUserInput): Promise<User> {
    const { email, password, role, avatar, userName } = input;
    const isAlreadyExist = await this.usersRepository.findOne({
      where: { email },
    });
    if (isAlreadyExist)
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);

    const user: Partial<User> = { email, password, role, avatar, userName };
    const newUser = await this.usersRepository.save(user);
    if (!newUser)
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    return user as User;
  }
}
