import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import bcrypt from "bcrypt";
import { User } from "../user/entity/user.entity";
import { UserService } from "../user/user.service";
import { ITokenPayloadUnsigned } from "./interface/token-payload-unsigned.interface";
import { ITokenPayload } from "./interface/token-payload.interface";

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  avatar: string;
  created?: Date;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  type?: string;
  updated?: Date;
  userId?: string;
}

@Injectable()
export class AuthService {
  /**
   * Determine whether a given `password` matches with a password
   * hash.
   *
   * @param password  Input password.
   * @param hash      Target user's password hash.
   *
   * @return `true` if the password matches with the hash, or `false`.
   */
  private static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hash);
    } catch (err) {
      return false;
    }
  }

  /**
   * Compute and return the hash of the given `password`.
   *
   * @param password Password to be hashed.
   * @returns Resolves with hashed password
   */
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Create new User account and log in it
   *
   * @param data
   * @returns Resolves with JWT auth token
   */
  public async signIn(data: ISignIn): Promise<{ token: string }> {
    const user = await this.userService.getByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException("Cannot find any user");
    }

    const isPasswordMatch = await AuthService.comparePassword(
      data.password,
      user.password
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException("Cannot find any user");
    }

    return { token: this.createToken(user) };
  }

  /**
   * Log in a user with its email and password
   *
   * @param data
   * @returns Resolves with JWT auth token
   */

  public async signUp(data: ISignUp): Promise<{ token: string }> {
    data.password = await AuthService.hashPassword(data.password);
    const createdUser = await this.userService.create(data);
    return { token: this.createToken(createdUser) };
  }

  /**
   * Make sure the token is both valid:
   * - structurally (payload has all expected fields)
   * - in the database (must exist)
   *
   * @param payload Token payload.
   *
   * @return `true` if the token is valid and exists, or `false`.
   */

  async validateTokenPayload(
    payload: ITokenPayload
  ): Promise<User | undefined> {
    if (!payload) {
      return;
    }

    const user = await this.userService.getById(payload.uid);

    if (!user) {
      return;
    }

    return user;
  }

  /**
   * Generate a JWT token.
   *
   * @param user User for whom the token is created.
   */

  private createToken(user: User): string {
    const payload: ITokenPayloadUnsigned = {
      uid: user.userId
    };

    return this.jwtService.sign(payload);
  }
}
