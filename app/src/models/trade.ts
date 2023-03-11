import { Model } from '../interfaces/model.js'

export class Trade implements Model<Trade> {
    constructor(
        private _date: Date, 
        readonly quantity: number, 
        readonly value: number
    ) {}
    
    get date(): Date {
        return new Date(this._date.getTime())
    }
    
    get amount(): number {
        return this.quantity * this.value
    }
    
    static createFrom(dateString: string, quantityString: string, valueString: string) {
        const exp = /-/g
        const date = new Date(dateString.replace(exp, ','))
        const quantity = parseInt(quantityString)
        const value = parseFloat(valueString)
        return new Trade(date, quantity, value)
    }

    toPrettyString(): string {
        return `
        Date: ${this._date}
        Quantity: ${this.quantity}
        Value: ${this.value}`
    }
    
    equals(trade: Trade) {
        return this._date.getDate() === trade._date.getDate() &&
            this._date.getMonth() == trade._date.getMonth() &&
            this._date.getFullYear() == trade._date.getFullYear()
    }
}