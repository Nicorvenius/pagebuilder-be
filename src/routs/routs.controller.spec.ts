import { Test, TestingModule } from '@nestjs/testing';
import { RoutsController } from './routs.controller';

describe('RoutsController', () => {
  let controller: RoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutsController],
    }).compile();

    controller = module.get<RoutsController>(RoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
