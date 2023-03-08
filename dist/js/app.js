import { TradingController } from "./controllers/tradingController.js";
const controller = new TradingController;
const form = document.querySelector('#form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
