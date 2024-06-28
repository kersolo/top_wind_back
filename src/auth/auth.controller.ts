import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signUp')
  async signUp(
    @Body() payload: CreateAuthDto,
  ): Promise<{ message: string; user: CreateAuthDto }> {
    //user exist ?
    const user = await this.userService.findOneByEmail(payload.email);
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.FORBIDDEN);
    }
    //hash password
    payload.password = await this.authService.hash(payload.password);
    //create newUser
    const newUser = await this.userService.create(payload);

    return { message: 'User created', user: newUser };
  }

  @Post('signIn')
  async signIn(@Body() payload: CreateAuthDto) {
    //user exist ?
    const user = await this.userService.findOneByEmail(payload.email);
    if (!user) {
      throw new HttpException(
        'Password or email is invalid',
        HttpStatus.FORBIDDEN,
      );
    }
    //compare passwords
    const isMatch = await this.authService.compare(
      payload.password,
      user.password,
    );
    if (!isMatch) {
      throw new HttpException(
        'Password or email is invalid',
        HttpStatus.FORBIDDEN,
      );
    }
    const token = await this.authService.createToken(
      { id: user.id, email: payload.email },
      process.env.SECRET_KEY,
      '3h',
    );
    const refreshToken = await this.authService.createToken(
      { id: user.id, email: payload.email },
      process.env.REFRESH_SECRET_KEY,
      '3d',
    );
    const hashedRefresh = await this.authService.hash(refreshToken);

    //add updated_user

    return { user: user, token, refreshToken }; //change user to updated_user
  }
}
