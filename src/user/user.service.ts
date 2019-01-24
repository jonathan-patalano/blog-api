import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string) {
    return this.userRepository.findOne(id);
  }

  /**
   * Update a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async updateById(id: string) {
    const user = await this.userRepository.findOne(id);
    // to do modification on user
    const updatedUser = user;
    return this.userRepository.save(updatedUser);
  }
}
