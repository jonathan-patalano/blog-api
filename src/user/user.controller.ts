import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { async } from "rxjs/internal/scheduler/async";
import { ISignUp } from "src/auth/auth.service";

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

  @Post()
  @ApiOperation({
    title: "create"
  })
  async create(@Body("user") user: ISignUp){
    return this.userService.create(user);
  }
  

  @Get(":id")
  @ApiOperation({
    title: "UpdateById"
  })
  async updateById(@Param("id") id: string) {
    return this.userService.updateById(id);
  }
}
