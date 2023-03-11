import { View } from "./view.js"

export class MessageView extends View<string> {

    protected template(text: string): string {
        return `
            <p class="alert alert-info">${text}</p>
        `
    }
}