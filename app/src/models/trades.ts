import { Model } from "../interfaces/model.js";
import { Trade } from "./trade.js";

export class Trades implements Model<Trades> {

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

    equals(trades: Trades): boolean {
        return JSON.stringify(this.trades) === JSON.stringify(trades.list)
    }

    toPrettyString(): string {
        return JSON.stringify(this.trades)
    }
}