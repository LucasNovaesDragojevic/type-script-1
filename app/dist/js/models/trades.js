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
    equals(trades) {
        return JSON.stringify(this.trades) === JSON.stringify(trades.list);
    }
    toPrettyString() {
        return JSON.stringify(this.trades);
    }
}
//# sourceMappingURL=trades.js.map