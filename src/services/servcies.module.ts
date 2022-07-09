import { Module } from '@nestjs/common';
import { BusProducerService } from './bus-producer/bus-producer.service';
import { UserProducerService } from './user-producer/user-producer.service';

@Module({
    providers: [
        BusProducerService,
        UserProducerService
    ],
    exports: [
        UserProducerService
    ]
})
export class ServciesModule {}
