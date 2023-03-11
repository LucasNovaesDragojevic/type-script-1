import { Trade } from '../models/trade.js';
export class TradeService {
    getTradesOfDay() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((datas) => datas.map(data => new Trade(new Date(), data.vezes, data.montante)));
    }
}
//# sourceMappingURL=tradeService.js.map