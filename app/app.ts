import { Trading } from './models/trading.js'

const trading = new Trading(new Date(), 10, 100)

console.log(trading.amount)