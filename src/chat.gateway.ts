import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as Socket from 'socket.io';

@WebSocketGateway()
export class  chatGateway{
    // access the server

    @WebSocketServer()
    server;



    @SubscribeMessage('message')
    // Extract the message from the data payload
    // we can use also (client,data) in stad of decorators
    handleMessage(@MessageBody() message : string) : void{
        this.server.emit('message',message);
    }

     
}