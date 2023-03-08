export class TradeView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
                                <td>${new Intl.DateTimeFormat().format(trade.date)}</td>
                                <td>${trade.quantity}</td>
                                <td>${trade.value}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    update(trades) {
        this.element.innerHTML = this.template(trades);
    }
}
