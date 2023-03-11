export class Trades {
    constructor() {
        this.trades = [];
    }
    add(trade) {
        this.trades.push(trade);
    }
    addAll(newTrades) {
        this.trades.push(...newTrades);
    }
    list() {
        return this.trades;
    }
}
