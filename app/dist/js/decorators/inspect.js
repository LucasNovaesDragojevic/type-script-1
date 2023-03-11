export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Method ${propertyKey}`);
            console.log(`Parameters ${JSON.stringify(args)}`);
            const returnOfMethod = originalMethod.apply(this, args);
            console.log(`Return: ${JSON.stringify(returnOfMethod)}`);
            return returnOfMethod;
        };
        return descriptor;
    };
}
