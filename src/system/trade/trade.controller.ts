import { Controller, Get } from '@nestjs/common';
import { TradeService } from './trade.service';

@Controller('trade')
export class TradeController {
    constructor(private readonly appService: TradeService) {}

    @Get('allList')
    AllList() {
        console.log("allList 被请求了")
        return this.appService.getAllTradeList();
    }
}
