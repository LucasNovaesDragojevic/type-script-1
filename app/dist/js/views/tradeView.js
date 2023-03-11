var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
import { View } from "./view.js";
export class TradeView extends View {
    template(trades) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${trades.list().map(trade => {
            return `
                            <tr>
                                <td>${this.formatDate(trade.date)}</td>
                                <td>${trade.quantity}</td>
                                <td>${trade.value}</td>
                            </tr>
                        `;
        }).join('')}
                    <script></script>
                </tbody>
            </table>
        `;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
__decorate([
    escape
], TradeView.prototype, "template", null);
//# sourceMappingURL=tradeView.js.map