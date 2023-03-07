import { Trading } from './models/Trading.js'

const trading = new Trading(new Date(), 10, 100)

console.log(trading.amount)