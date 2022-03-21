import { Test, TestingModule } from '@nestjs/testing';
import { ModulelogService } from './modulelog.service';

describe('ModulelogService', () => {
  let service: ModulelogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModulelogService],
    }).compile();

    service = module.get<ModulelogService>(ModulelogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
