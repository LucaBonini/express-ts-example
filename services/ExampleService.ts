import { Inject, Provide } from "../context/Ioc";
import { UserRepository } from "../repositories/UserRepository";

@Provide(ExampleInjectedService)
export class ExampleInjectedService {

  constructor(
    @Inject(UserRepository) private userRepository: UserRepository
  ){}

  async printMessage() {
    return await this.userRepository.getAll()
  }
}