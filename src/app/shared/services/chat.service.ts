import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WebSocketService } from './websocket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

//const CHAT_URL = 'ws://localhost:3005';
const STOCK_URL = 'ws://localhost:8080/stockticker';

export interface GraphQLMessage {
    query: string,
    variables: Map<string, Object>
}

@Injectable()
export class ChatService {
    public stockQuotes: Subject<any> = new Subject<any>();

    constructor(private wsService: WebSocketService) {

        // 1. subscribe to chatbox
        this.stockQuotes = <Subject<StockQuote>>this.wsService
            .connect(STOCK_URL)
            .map((response: any): StockQuote => {
                let data = JSON.parse(response.data);

                return {
                    dateTime: data.stockQuotes.dateTime,
                    stockCode: data.stockQuotes.stockCode,
                    stockPrice: data.stockQuotes.stockPrice,
                    stockPriceChange: data.stockQuotes.stockPriceChange
                }
            });

    }
}

export class StockQuote {
    dateTime: string;
    stockCode: string;
    stockPrice: number;
    stockPriceChange: number;
}