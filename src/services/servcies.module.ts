import { Module } from '@nestjs/common';
import { UserProducerService } from './user-producer/user-producer.service';
import { BusModule } from "moat-lib-be-pubsub/pub-sub";
@Module({
    providers: [
        BusModule.initPublisher("localhost:50000"),
        UserProducerService
    ],
    exports: [
        UserProducerService
    ]
})
export class ServciesModule { }
