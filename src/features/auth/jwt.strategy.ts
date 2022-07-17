import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ENV } from 'src/constants/env';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly httpService: HttpService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: ENV.auth.jwtSecret,
            passReqToCallback: true
        });
    }

    async validate(req: Request, payload: any) {
        try{

            const result = await firstValueFrom(this.httpService.get('http://localhost:3002/validate',
                { headers: { "authorization": req.headers["authorization"] } }));
        
            if (result.status != 401 && result.data == true) {
                return { userId: payload.sub, username: payload.username };
            } else {
                throw new UnauthorizedException();
            }
        }catch(e){
            console.log(e);
            throw new UnauthorizedException();
        }
    }
}