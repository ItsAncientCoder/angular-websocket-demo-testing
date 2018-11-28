import { Component, OnInit } from '@angular/core';
import { ChatService, StockQuote } from '../shared/services/chat.service';

@Component({
    selector: 'chat-component',
    templateUrl: './chat-app.html'
})
export class ChatComponent implements OnInit {

    stockQuotes: Array<StockQuote> = [];

    constructor(private chatService: ChatService) {

    }

    ngOnInit() {
        this.chatService.stockQuotes.subscribe(quote => {

            if (this.stockQuotes) {
                if (this.stockQuotes.length == 5) {
                    this.stockQuotes.shift();
                }
                this.stockQuotes.push(quote)
            }
        });
    }
}