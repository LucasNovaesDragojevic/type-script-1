export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {
        let element: HTMLElement
        const getter = function() {
            if (!element) {
                console.log(`taking DOM element with selector ${selector} to inject ${propertyKey}`)
                element = document.querySelector(selector) as HTMLElement
            }
            return element
        }
        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}