import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { AuthModule } from './features/auth/auth.module';
import { ServciesModule } from './services/servcies.module';
import { HttpModule } from "@nestjs/axios";
@Module({
  imports: [
    AuthModule,
    ServciesModule,
    HttpModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService]
})
export class AppModule { }
