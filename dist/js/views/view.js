export class View {
    constructor(selector, escape = false) {
        this.element = document.querySelector(selector);
        this.escape = escape;
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
