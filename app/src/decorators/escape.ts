export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
        let returnOfMethod = originalMethod.apply(this, args)
        if (typeof returnOfMethod === 'string') {
            // console.log(`@escape in action at class ${this.constructor.name} on method ${propertyKey}`)
            returnOfMethod = returnOfMethod.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        return returnOfMethod
    }

    return descriptor
}