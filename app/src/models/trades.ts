import { Trade } from "./trade.js";

export class Trades {
    private trades: Trade[] = []

    add(trade: Trade) {
        this.trades.push(trade)
    }

    addAll(newTrades: Trade[]) {
        this.trades.push(...newTrades)
    }

    list(): readonly Trade[] {
        return this.trades
    }
}