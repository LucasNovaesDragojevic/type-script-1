import { TradingController } from "./controllers/tradingController.js";

const controller = new TradingController
const form = document.querySelector('#form')
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault()
        controller.add()
    })
} else {
    throw new Error('Unable to start the application. Please check that the form is created.')
}
