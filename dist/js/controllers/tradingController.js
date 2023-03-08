import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { TradeView } from "../views/tradeView.js";
export class TradingController {
    constructor() {
        this.trades = new Trades();
        this.tradeView = new TradeView('#tradeView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.tradeView.update(this.trades);
    }
    add() {
        const trade = this.createTrading();
        this.trades.add(trade);
        console.log(this.trades.list());
        this.tradeView.update(this.trades);
        this.clearFom();
    }
    createTrading() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Trade(date, quantity, value);
    }
    clearFom() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
