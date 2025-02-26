import { Module } from '@nestjs/common';
import { KrajaController } from './kraja.controller';
import { KrajaService } from './kraja.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KrajaEntity } from './kraja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KrajaEntity])],
  controllers: [KrajaController],
  providers: [KrajaService],
})
export class KrajaModule {}
