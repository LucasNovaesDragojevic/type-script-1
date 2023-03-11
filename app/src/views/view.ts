import { inspect } from "../decorators/inspect.js"
import { logPerformance } from "../decorators/logPerformance.js"

export abstract class View<T> {
    protected element: HTMLElement
    private escape

    constructor(selector: string, escape: boolean = false) {
        const element = document.querySelector(selector)
        if (element) {
            this.element = element as HTMLElement
        } else {
            throw new Error(`Selector ${selector} does not exist on DOM.`)
        }
        this.escape = escape
    }

    protected abstract template(model: T): string

    @logPerformance()
    @inspect()
    update(model: T): void {
        let template = this.template(model)
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.element.innerHTML = template
    }
}