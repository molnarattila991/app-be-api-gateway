import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.interface';
import { UserProducerService } from 'src/services/user-producer/user-producer.service';

@Controller('user')
export class UserController {
    public constructor(private bus: UserProducerService) {

    }

    @Post()
    async create(@Body() user: CreateUserDto) {
        console.log(user);
        await this.bus.createUser(user);
    }
}
