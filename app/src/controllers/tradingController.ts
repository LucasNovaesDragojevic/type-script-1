import { logPerformance } from '../decorators/logPerformance.js'
import { DayOfWeek } from '../enums/dayOfWeek.js'
import { Trade } from '../models/trade.js'
import { Trades } from '../models/trades.js'
import { MessageView } from '../views/messageView.js'
import { TradeView } from '../views/tradeView.js'

export class TradingController {
    private inputDate: HTMLInputElement
    private inputQuantity: HTMLInputElement
    private inputValue: HTMLInputElement
    private trades = new Trades()
    private tradeView = new TradeView('#tradeView', true)
    private messageView = new MessageView('#messageView')

    constructor() {
        this.inputDate = document.querySelector('#date') as HTMLInputElement
        this.inputQuantity = document.querySelector('#quantity') as HTMLInputElement
        this.inputValue = document.querySelector('#value') as HTMLInputElement
        this.tradeView.update(this.trades)
    }

    @logPerformance()
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