export function ConsoleLog() {
  return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value!

    descriptor.value = function() {
      console.log('inside console log decorator')
      return originalMethod.apply(this, arguments)
    }
  }
}