var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from '../decorators/domInject.js';
import { logPerformance } from '../decorators/logPerformance.js';
import { DayOfWeek } from '../enums/dayOfWeek.js';
import { Trade } from '../models/trade.js';
import { Trades } from '../models/trades.js';
import { MessageView } from '../views/messageView.js';
import { TradeView } from '../views/tradeView.js';
export class TradingController {
    constructor() {
        this.trades = new Trades();
        this.tradeView = new TradeView('#tradeView');
        this.messageView = new MessageView('#messageView');
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
__decorate([
    domInject('#date')
], TradingController.prototype, "inputDate", void 0);
__decorate([
    domInject('#quantity')
], TradingController.prototype, "inputQuantity", void 0);
__decorate([
    domInject('#value')
], TradingController.prototype, "inputValue", void 0);
__decorate([
    logPerformance(true)
], TradingController.prototype, "add", null);
