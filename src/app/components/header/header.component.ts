import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myList: Array<string> = ["apple", "banana", "ananas"];

  constructor() { }

  ngOnInit() {
  }

  keyPress() {
    for(let i = 0; i < this.myList.length; i ++) {
      
      })
    }
  }

}
