export class Trading {
    
    #date
    #quantity
    #value

    constructor(date, quantity, value) {
        this.#date = date
        this.#quantity = quantity
        this.#value = value
    }

    get date() {
        return this.#date
    }

    get quantity() {
        this.#quantity
    }

    get value() {
        this.#value
    }

    get amount() {
        return this.#quantity * this.#value
    }
}