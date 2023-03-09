export abstract class View<T> {
    protected element: HTMLElement
    private escape

    constructor(selector: string, escape: boolean = false) {
        this.element = document.querySelector(selector)
        this.escape = escape
    }

    protected abstract template(model: T): string

    update(model: T): void {
        let template = this.template(model)
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.element.innerHTML = template
    }
}