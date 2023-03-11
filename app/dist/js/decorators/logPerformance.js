export function logPerformance(showSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divider = 1;
            let unit = 'milliseconds';
            if (showSeconds) {
                divider = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const returnOfMethod = originalMethod.apply(this, args);
            const t2 = performance.now();
            returnOfMethod;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logPerformance.js.map