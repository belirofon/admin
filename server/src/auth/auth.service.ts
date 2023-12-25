import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<null | object> {
    const user = await this.userService.findUserByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(dto: CreateUserDto) {
    try {
      const userData = await this.userService.createUser(dto);
      return userData;
      // return {
      //   token: this.jwtService.sign({ id: userData.id }),
      // };
    } catch (error) {
      throw new ForbiddenException('Ошибка');
    }
  }

  async login(user: UserEntity) {
    const userData = await this.userService.findUserById(user.id);
    const payload = { id: userData.id };
    const access_token = await this.jwtService.signAsync({ id: payload.id });
    return {
      token: access_token,
    };
  }
}
