import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trades } from '../../entities/trade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TradeService {
    constructor(
        @InjectRepository(Trades)
        private readonly TradeRepository: Repository<Trades>,
    ){ }

    async getAllTradeList(){
        const tradeVoList = await this.TradeRepository.find()
        console.log(tradeVoList);
        
        return {
            status: 200,
            data: tradeVoList
        }
    }
}
