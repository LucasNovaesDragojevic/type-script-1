import { domInject } from '../decorators/domInject.js'
import { logPerformance } from '../decorators/logPerformance.js'
import { DayOfWeek } from '../enums/dayOfWeek.js'
import { Trade } from '../models/trade.js'
import { Trades } from '../models/trades.js'
import { MessageView } from '../views/messageView.js'
import { TradeView } from '../views/tradeView.js'

export class TradingController {
    
    @domInject('#date')
    private inputDate: HTMLInputElement
    
    @domInject('#quantity')
    private inputQuantity: HTMLInputElement
    
    @domInject('#value')
    private inputValue: HTMLInputElement
    
    private trades = new Trades()
    private tradeView = new TradeView('#tradeView')
    private messageView = new MessageView('#messageView')

    constructor() {
        this.tradeView.update(this.trades)
    }

    @logPerformance(true)
    add() {
        const trade = Trade.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value)

        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update('Only business days are accepted.')
            return
        }

        this.trades.add(trade)
        console.log(this.trades.list())
        this.updateView()
        this.clearForm()
    }
    
    private isBusinessDay(date: Date) {
        return date.getDay() > DayOfWeek.SUNDAY && date.getDay() < DayOfWeek.SATURDAY
    }

    private updateView() {
        this.tradeView.update(this.trades)
        this.messageView.update('Trade added.')
    }

    private clearForm() {
        this.inputDate.value = ''
        this.inputQuantity.value = ''
        this.inputValue.value = ''
        this.inputDate.focus()
    }
}