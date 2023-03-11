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
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Trade(date, quantity, value);
    }
    toPrettyString() {
        return `
        Date: ${this._date}
        Quantity: ${this.quantity}
        Value: ${this.value}`;
    }
}
