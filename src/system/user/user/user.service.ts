import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../entities/user.entity';
import { Repository } from 'typeorm';
import { UserType } from 'src/type/user';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly UserRepository: Repository<User>,
    ) { }

    /** 查询数据库用户数据 */
    async Login(userItem: UserType) {
        const user = await this.UserRepository.findOne({where: {name: userItem.name}})
        // console.log(user);
        if (user.password === userItem.password){
            return {
                status: 200,
                msg: "登录成功"
            }
        }
        return {
            status: 100,
            msg: "登录失败"
        }
    }
}
