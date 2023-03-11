export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value
        descriptor.value = function (...args: any[]) {
            // console.log(`Method ${propertyKey}`)
            // console.log(`Parameters ${JSON.stringify(args)}`)
            const returnOfMethod = originalMethod.apply(this, args)
            // console.log(`Return: ${JSON.stringify(returnOfMethod)}`)
            return returnOfMethod
        }
        return descriptor
    }
}