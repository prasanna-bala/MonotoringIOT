import { Test, TestingModule } from '@nestjs/testing';
import { ModulelogController } from './modulelog.controller';
import { ModulelogService } from './modulelog.service';

describe('ModulelogController', () => {
  let controller: ModulelogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModulelogController],
      providers: [ModulelogService],
    }).compile();

    controller = module.get<ModulelogController>(ModulelogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
