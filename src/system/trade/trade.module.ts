import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trades } from 'src/entities/trade.entity';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';

@Module({
    imports: [TypeOrmModule.forFeature([Trades])], 
    controllers: [TradeController],
    providers: [TradeService]
  })
export class TradeModule {}
