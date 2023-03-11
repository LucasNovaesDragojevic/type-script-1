import { Trade } from "../models/trade.js"
import { Trades } from "../models/trades.js"
import { View } from "./view.js"

export class TradeView extends View<Trades> {

    protected template(trades: Trades): string {
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
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    private formatDate(date: Date) {
        return new Intl.DateTimeFormat().format(date)
    }
}