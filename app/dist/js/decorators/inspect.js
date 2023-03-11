export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const returnOfMethod = originalMethod.apply(this, args);
            return returnOfMethod;
        };
        return descriptor;
    };
}
