import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages : number;
  constructor(public messageService : MessageService) {
   }

  ngOnInit() {
    this.length();
  }

  length() : void {
    this.messages = this.messageService.messages.length;
  }

}
