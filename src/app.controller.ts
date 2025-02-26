import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Kraja } from './kraja/kraja.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  krajaCustom(@Kraja() params: Record<string, string>): string {
    console.log('kastm', params);
    return this.appService.krajaCustom();
  }

  @Get('json/jbg')
  jsonTest(): object {
    return this.appService.jsonTest();
  }
}
