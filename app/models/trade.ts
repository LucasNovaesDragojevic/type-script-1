export class Trade {
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
}