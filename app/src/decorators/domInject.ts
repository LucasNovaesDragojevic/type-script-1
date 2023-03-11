export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {
        const getter = function() {
            const element = document.querySelector(selector)
            console.log(`taking DOM element with selector ${selector} to inject ${propertyKey}`)
            return element
        }
        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}