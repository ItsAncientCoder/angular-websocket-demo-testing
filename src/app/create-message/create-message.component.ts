import { Component } from '@angular/core';
import { ChatService, GraphQLMessage } from '../shared/services/chat.service';

@Component({
    selector: 'create-message',
    templateUrl: './create-message.html'
})
export class CreateMessage {
    private message = {
        author: 'peter',
        message: ''
    };

    query: string = 'subscription StockCodeSubscription { \n' +
        '    stockQuotes {' +
        '       dateTime\n' +
        '       stockCode\n' +
        '       stockPrice\n' +
        '       stockPriceChange\n' +
        '     }' +
        '}';

    graphqlMsg: GraphQLMessage = {
        query: this.query,
        variables: new Map
    };

    constructor(private chatService: ChatService) {

    }

    sendMsg() {
        this.chatService.stockQuote.next(this.graphqlMsg);
    }
}