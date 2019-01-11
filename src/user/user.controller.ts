import { Body, Controller, Get, Param } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  @ApiOperation({
    title: "GetById"
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }
}
