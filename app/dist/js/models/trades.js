export class Trades {
    constructor() {
        this.trades = [];
    }
    add(trade) {
        this.trades.push(trade);
    }
    list() {
        return this.trades;
    }
}
