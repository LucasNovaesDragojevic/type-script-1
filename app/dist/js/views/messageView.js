import { View } from "./view.js";
export class MessageView extends View {
    template(text) {
        return `
            <p class="alert alert-info">${text}</p>
        `;
    }
}
//# sourceMappingURL=messageView.js.map