import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly UsersRepository: Repository<Users>
    ){

    }

    async getAllUsers(){
        const usersVoList = await this.UsersRepository.find()

        return {
            status: 200,
            data: usersVoList
        }
    }
}
