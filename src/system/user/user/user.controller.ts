import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserType } from 'src/type/user';

@Controller('user')
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Post('login')
    Login(@Body() user: UserType) {
        console.log("被请求了")
        console.log(user);
        return this.appService.Login(user);
    }
}
