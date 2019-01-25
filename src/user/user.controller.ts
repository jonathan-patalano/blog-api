import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { async } from "rxjs/internal/scheduler/async";
import { User } from "./entity/user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(":user")
  @ApiOperation({
    title: "CreateUser"
  })
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Get(":id")
  @ApiOperation({
    title: "GetById"
  })
  async getById(@Param("id") id: string) {
    return this.userService.getById(id);
  }

  @Get(":id")
  @ApiOperation({
    title: "UpdateById"
  })
  async updateById(@Param("id") id: string) {
    return this.userService.updateById(id);
  }
}
