import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";

import { AuthService } from "./auth.service";
import { HttpStrategy } from "./strategies/http.strategy";

import { AuthController } from "./auth.controller";
import { JwtAuthGuard } from "./auth.guard";

@Module({
    imports: [UserModule,
        PassportModule.register({ defaultStrategy: "jwt"}),
    JwtModule.register({
        secretOrPrivateKey: configService.getString("SECRET_KEY"),
        signoptions: (
            expiresIn: configService.getNumber ("DEFAULT_EXPIRATION"),
            algorithm: configService.getString("AUTH_ALGORITHM"),
        ),
    }),
],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy], 
})

export class AuthModule {}
