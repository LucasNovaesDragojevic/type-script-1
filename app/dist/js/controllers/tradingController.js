import { DayOfWeek } from '../enums/dayOfWeek.js';
import { Trade } from '../models/trade.js';
import { Trades } from '../models/trades.js';
import { MessageView } from '../views/messageView.js';
import { TradeView } from '../views/tradeView.js';
export class TradingController {
    constructor() {
        this.trades = new Trades();
        this.tradeView = new TradeView('#tradeView', true);
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.tradeView.update(this.trades);
    }
    add() {
        const trade = Trade.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update('Only business days are accepted.');
            return;
        }
        this.trades.add(trade);
        console.log(this.trades.list());
        this.updateView();
        this.clearForm();
    }
    isBusinessDay(date) {
        return date.getDay() > DayOfWeek.SUNDAY && date.getDay() < DayOfWeek.SATURDAY;
    }
    updateView() {
        this.tradeView.update(this.trades);
        this.messageView.update('Trade added.');
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
