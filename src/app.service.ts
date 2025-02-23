import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  krajaCustom(): string {
    return 'Djes Kraja!';
  }
}
