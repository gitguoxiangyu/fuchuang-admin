import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TradeModule } from './system/trade/trade.module';
import { UserModule } from './system/user/user/user.module';

@Module({
  imports: [UserModule,TradeModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '8.137.104.185',
    port: 3306,
    username: 'digitalTrade',
    password: '44913730Dd!',
    database: 'gotest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
