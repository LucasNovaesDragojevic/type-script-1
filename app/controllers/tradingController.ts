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
    private tradeView = new TradeView('#tradeView')
    private messageView = new MessageView('#messageView')

    constructor() {
        this.inputDate = document.querySelector('#date')
        this.inputQuantity = document.querySelector('#quantity')
        this.inputValue = document.querySelector('#value')
        this.tradeView.update(this.trades)
    }

    add() {
        const trade = this.createTrading()

        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update('Only business days are accepted.')
            return
        }

        this.trades.add(trade)
        console.log(this.trades.list())
        this.updateView()
        this.clearFom()
    }
    
    private isBusinessDay(date: Date) {
        return date.getDay() > DayOfWeek.SUNDAY && date.getDay() < DayOfWeek.SATURDAY
    }

    private updateView() {
        this.tradeView.update(this.trades)
        this.messageView.update('Trade added.')
    }

    private createTrading() {
        const exp = /-/g
        const date = new Date(this.inputDate.value.replace(exp, ','))
        const quantity = parseInt(this.inputQuantity.value)
        const value = parseFloat(this.inputValue.value)
        return new Trade(date, quantity, value)
    }

    private clearFom() {
        this.inputDate.value = ''
        this.inputQuantity.value = ''
        this.inputValue.value = ''
        this.inputDate.focus()
    }
}