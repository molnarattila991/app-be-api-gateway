import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { ServciesModule } from './services/servcies.module';

@Module({
  imports: [
    ServciesModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule { }
