import { Component, OnInit } from '@angular/core';
import { ChatService, StockQuote } from '../shared/services/chat.service';

@Component({
    selector: 'chat-component',
    templateUrl: './chat-app.html'
})
export class ChatComponent implements OnInit {
    messages: any[] = [];

    stockQuote: StockQuote = {
        dateTime: '',
        stockCode: '',
        stockPrice: 0,
        stockPriceChange: 0
    }

    constructor(private chatService: ChatService) {

    }

    ngOnInit() {
        this.chatService.stockQuote.subscribe(msg => {
            this.stockQuote = msg;
            //this.messages.push(msg);
        });
    }
}