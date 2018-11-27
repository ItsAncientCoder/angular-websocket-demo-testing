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
    public messages: Subject<GraphQLMessage> = new Subject<GraphQLMessage>();
    public randomData: Subject<number> = new Subject<number>();

    constructor(private wsService: WebSocketService) {

        // 1. subscribe to chatbox
        this.messages = <Subject<GraphQLMessage>>this.wsService
            .connect(STOCK_URL)
            .map((response: MessageEvent): GraphQLMessage => {
                let data = JSON.parse(response.data);

                console.log(data.stockQuotes.stockPrice);

                return {
                    query: data.query,
                    variables: data.variables
                }
            });

    }
}