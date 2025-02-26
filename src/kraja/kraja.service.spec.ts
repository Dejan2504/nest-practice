import { Test, TestingModule } from '@nestjs/testing';
import { KrajaService } from './kraja.service';

describe('KrajaService', () => {
  let service: KrajaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KrajaService],
    }).compile();

    service = module.get<KrajaService>(KrajaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
