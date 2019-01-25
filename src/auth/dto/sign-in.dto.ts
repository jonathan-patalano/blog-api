export class SignInDto {
  @IsEmail()
  @IsDefined()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  password: string;
}
