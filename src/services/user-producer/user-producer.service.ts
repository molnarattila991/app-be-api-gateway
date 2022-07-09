import { Injectable } from '@nestjs/common';
import { CHANNELS } from 'src/constants/message-channels';
import { CreateUserDto } from 'src/dtos/create-user.interface';
import { BusProducerService } from '../bus-producer/bus-producer.service';

@Injectable()
export class UserProducerService {
    public constructor(private bus: BusProducerService) {

    }

    public async createUser(user: CreateUserDto) {
        await this.bus.sendMessage<CreateUserDto>(user, CHANNELS.user.event.v1_0_0.create);
    }
}
