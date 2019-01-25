import { Injectable, UnauthorizedException, ValidationPipe } from "@nestjs/common";
import { ExtractJwt } from "passport-jwt";
import { async } from "rxjs/internal/scheduler/async";
import { configService } from "src/config/config.service";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private readonly authservice: Autservice) {
      super({
          jwtFromrequest: ExtractJwt.FromAuthHeaderAsBearerToken();
          secretOrKey: configService.getString("SECRET_KEY");
      });
      async ValidationPipe(payload: ITokenPayLoad)
      {
          const user = await this.authservice.alidateTokenPayload(payload);
          if (!user)
          {
              throw new UnauthorizedException();
          }
          return user;
      }
  }
}
