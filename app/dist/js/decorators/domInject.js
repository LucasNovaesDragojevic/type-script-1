export function domInject(selector) {
    return function (target, propertyKey) {
        let element;
        const getter = function () {
            if (!element) {
                console.log(`taking DOM element with selector ${selector} to inject ${propertyKey}`);
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
