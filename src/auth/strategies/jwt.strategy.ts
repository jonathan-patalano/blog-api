import {
  Injectable,
  UnauthorizedException,
  ValidationPipe
} from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { async } from "rxjs/internal/scheduler/async";
import { configService } from "src/config/config.service";
import { AuthService } from "../auth.service";
import { ITokenPayload } from "../interface/token-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authservice: AuthService) {
    super({
      jwtFromrequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.getString("SECRET_KEY")
    });
  }
  async validate(payload: ITokenPayload) {
    const user = await this.authservice.validateTokenPayload(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
