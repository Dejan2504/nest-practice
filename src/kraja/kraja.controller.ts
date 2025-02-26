import { Controller, Get } from '@nestjs/common';
import { KrajaService } from './kraja.service';

@Controller('kraja')
export class KrajaController {
  constructor(private readonly krajaService: KrajaService) {}

  @Get('find')
  findKraja(): object {
    return this.krajaService.findAll();
  }

  @Get('insert')
  insertUser(): object {
    return this.krajaService.create({
      firstName: 'New name',
      surename: 'New surename',
    });
  }
}
