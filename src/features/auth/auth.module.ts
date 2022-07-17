import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ENV } from 'src/constants/env';
import { JwtStrategy } from './jwt.strategy';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: ENV.auth.jwtSecret,
            signOptions: { expiresIn: `${ENV.auth.ttl}s` },
        }),
        HttpModule
    ],
    providers: [
        JwtStrategy
    ]
})
export class AuthModule { }