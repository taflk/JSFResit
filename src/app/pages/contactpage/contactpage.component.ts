import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {
  isSent: boolean = false;
  nameInput: string;
  phoneInput: string;
  categoryInput: string;
  messageInput: string

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.isSent = true;
  }

}
