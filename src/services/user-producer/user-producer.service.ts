import { Injectable } from '@nestjs/common';
import { PublishService } from 'moat-lib-be-pubsub/pub-sub';
import { CHANNELS } from 'src/constants/message-channels';
import { CreateUserDto } from 'src/dtos/create-user.interface';

@Injectable()
export class UserProducerService {
    public constructor(private bus: PublishService) {

    }

    public async createUser(user: CreateUserDto) {
        await this.bus.sendMessage<CreateUserDto>(user, CHANNELS.user.event.v1_0_0.create);
    }
}
