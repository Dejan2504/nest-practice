import { Test, TestingModule } from '@nestjs/testing';
import { KrajaController } from './kraja.controller';

describe('KrajaController', () => {
  let controller: KrajaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KrajaController],
    }).compile();

    controller = module.get<KrajaController>(KrajaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
