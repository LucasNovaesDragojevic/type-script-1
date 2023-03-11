import { inspect } from "../decorators/inspect.js"
import { logPerformance } from "../decorators/logPerformance.js"

export abstract class View<T> {
    protected element: HTMLElement

    constructor(selector: string) {
        const element = document.querySelector(selector)
        if (element) {
            this.element = element as HTMLElement
        } else {
            throw new Error(`Selector ${selector} does not exist on DOM.`)
        }
    }

    protected abstract template(model: T): string

    @logPerformance()
    @inspect()
    update(model: T): void {
        let template = this.template(model)
        this.element.innerHTML = template
    }
}