export function ConsoleLog() {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value!

    descriptor.value = function(...args: any[]) {
      console.log(args, 'args are the arguments passed to the original method')
      return originalMethod.apply(this, args)
    }
  }
}