import { Inject, Injectable } from "@nestjs/common";
import { User } from "./entity/user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  /**
   * Create user and save it.
   *
   * @param user - user
   * @returns Created user
   */
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Returns a user identified by its email.
   *
   * @param email - user email
   * @returns Resolves with User
   */
  async getByEmail(email: string): Promise<User> {
    return this.userRepository.findOne(email);
  }

  /**
   * Returns a user identified by its id.
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  /**
   * Update a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async updateById(id: string): Promise<User> {
    const user = await this.userRepository.findOne(id);
    // to do modification on user
    const updatedUser = user;
    return this.userRepository.save(updatedUser);
  }
}
