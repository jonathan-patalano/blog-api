import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { async } from "rxjs/internal/scheduler/async";
import { ISignUp } from "src/auth/auth.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get(":id")
  @ApiOperation({
    title: "GetById"
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }

  @Post("create")
  @ApiOperation({
    title: "create"
  })
  async create(@Body("user") user: ISignUp) {
    return this.userService.create(user);
  }

  @Put("update")
  @ApiOperation({
    title: "update"
  })
  async update(@Body() user: ISignUp) {
    return this.userService.update(user);
  }

  @Delete("delete")
  @ApiOperation({
    title: "delete"
  })
  async delete(@Body("id") id: string) {
    return this.userService.delete(id);
  }
}
