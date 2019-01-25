export class SignUpDto {

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  : string;
  @IsEmail()
  @IsDefined()
  @ApiModelProperty()
  email: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  firstName: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  lastName: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  password: string;
}
