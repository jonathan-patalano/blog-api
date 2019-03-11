import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign-in.dto";
import { SignUpDto } from "./dto/sign-up.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @Post("signin")
  @ApiOperation({ title: "Sign in" })
  async signIn(@Body() dto: SignInDto) {
    return this.authservice.signIn(dto);
  }

  @Post("signup")
  @ApiOperation({ title: "Sign up" })
  async signUp(@Body() dto: SignUpDto) {
    return this.authservice.signUp(dto);
  }
}
