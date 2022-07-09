import { Test, TestingModule } from '@nestjs/testing';
import { UserProducerService } from './user-producer.service';

describe('UserProducerService', () => {
  let service: UserProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProducerService],
    }).compile();

    service = module.get<UserProducerService>(UserProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
