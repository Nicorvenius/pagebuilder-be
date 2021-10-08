import { Test, TestingModule } from '@nestjs/testing';
import { RoutsService } from './routs.service';

describe('RoutsService', () => {
  let service: RoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutsService],
    }).compile();

    service = module.get<RoutsService>(RoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
