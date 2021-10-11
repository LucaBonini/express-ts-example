import { Container, decorate, inject, injectable } from "inversify";
export const container = new Container()

export function Inject(symbol: any) {
  return inject(symbol)
}

export function Provide(symbol: any) {
  decorate(injectable(), symbol)
  container.bind(symbol).to(symbol)

  return (ctor: Function) => {}
}

export function ProvideAsSingleton(symbol: any) {
  decorate(injectable(), symbol)
  container.bind(symbol).to(symbol).inSingletonScope()

  return (ctor: Function) => {}
}


