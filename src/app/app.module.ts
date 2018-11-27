import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule } from '@angular/material';

import { WebSocketService } from './shared/services/websocket.service';

import { AppComponent } from './app.component';
import { ChatService } from './shared/services/chat.service';
import { ChatComponent } from './chat/chat.component';
import { CreateMessage } from './create-message/create-message.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    ChatComponent,
    CreateMessage,
  ],
  providers: [
    WebSocketService,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
