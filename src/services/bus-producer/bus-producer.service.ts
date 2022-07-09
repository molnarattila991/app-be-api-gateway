import { Injectable } from '@nestjs/common';
import { Config, EventsClient, Utils } from 'kubemq-js';

@Injectable()
export class BusProducerService {
    private eventsClient;

    public constructor() {
        const opts: Config = {
            address: 'localhost:50000',
            clientId: Utils.uuid(),
        };

        this.eventsClient = new EventsClient(opts);
    }

    public async sendMessage<T>(message: T, channel) {
        await this.eventsClient.send({
            channel,
            body: Utils.stringToBytes(JSON.stringify(message)),
        });
    }
}
