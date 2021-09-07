import { Service } from "typedi";

@Service()
export class ExampleInjectedService {
  printMessage() {
    return 'Message printed'
  }
}