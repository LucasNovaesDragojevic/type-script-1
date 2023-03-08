import { Trading } from "../models/trading.js"

export class TradingController {
    private inputDate: HTMLInputElement
    private inputQuantity: HTMLInputElement
    private inputValue: HTMLInputElement

    constructor() {
        this.inputDate = document.querySelector('#date')
        this.inputQuantity = document.querySelector('#quantity')
        this.inputValue = document.querySelector('#value')
    }

    add() {
        const trading = this.createTrading()
        console.log(trading)
        this.clearFom()
    }
    

    private createTrading(): Trading {
        const exp = /-/g
        const date = new Date(this.inputDate.value.replace(exp, ','))
        const quantity = parseInt(this.inputQuantity.value)
        const value = parseFloat(this.inputValue.value)
        return new Trading(date, quantity, value)
    }

    private clearFom(): void {
        this.inputDate.value = ''
        this.inputQuantity.value = ''
        this.inputValue.value = ''
        this.inputDate.focus()
    }
}