import { Test, TestingModule } from '@nestjs/testing';
import { BusProducerService } from './bus-producer.service';

describe('BusProducerService', () => {
  let service: BusProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusProducerService],
    }).compile();

    service = module.get<BusProducerService>(BusProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
