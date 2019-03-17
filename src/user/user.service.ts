import { Inject, Injectable } from "@nestjs/common";
import { ISignUp } from "src/auth/auth.service";
import { User } from "./entity/user.entity";
import { UserRepository } from "./user.repository";
import { async } from "rxjs/internal/scheduler/async";

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) { }

  /**
   * Create user and save it.
   *
   * @param user - user
   * @returns Created user
   */
  async create(user: ISignUp): Promise<User> {
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
  * Update information of a user
  *
  * @param user - user
  * @returns Resolves with User
  */
  async update(user: ISignUp): Promise<User> {
    return this.userRepository.save(user);
  }

  /**
   * Delete a user
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async delete(id: string): Promise<boolean> {
    
    const userDB = await this.userRepository.findOne({ where: { id } });
    if (userDB) {
      this.userRepository.remove([userDB]);
      return true;
    }
    return false;
  }

  /**
    * Vérifie si l'utilisateur est auhtor
    *
    * @param user - user id
    * @returns Resolves with User
    */
  async isAuthor(id: string) {
    const user = await this.getById(id);
    if (user.type == 'Auhtor') {
      return true;
    }
    else {
      return false;
    }
  }

  /**
      * Vérifie si l'utilisateur est admin
      *
      * @param user - user id
      * @returns Resolves with User
      */
  async isAdmin(id: string) {
    const user = await this.getById(id);
    if (user.type == 'Admin') {
      return true;
    }
    else {
      return false;
    }

  }
}
