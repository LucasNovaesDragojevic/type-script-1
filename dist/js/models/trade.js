export class Trade {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        return new Date(this._date.getTime());
    }
    get amount() {
        return this.quantity * this.value;
    }
}
