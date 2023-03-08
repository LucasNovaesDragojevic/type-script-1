import { Trades } from "../models/trades.js"

export class TradeView {
    
    private element: HTMLElement

    constructor(selector: string) {
        this.element = document.querySelector(selector)
    }

    private template(trades: Trades): string {
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
                                <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                                <td>${trade.quantity}</td>
                                <td>${trade.value}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    update(trades: Trades): void {
        this.element.innerHTML = this.template(trades)
    }
}