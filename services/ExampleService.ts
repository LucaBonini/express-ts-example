import { Service } from "typedi";
import { Provide } from "../context/Ioc";

@Provide(ExampleInjectedService)
export class ExampleInjectedService {
  printMessage() {
    return 'Message printed'
  }
}