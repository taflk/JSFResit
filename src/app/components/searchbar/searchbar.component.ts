import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  @Output() emitSearchStringButton = new EventEmitter();
  @Output() emitSearchStringKey = new EventEmitter();
  searchStringButton: string;
  searchStringKey: string;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(value: any) {
    event.preventDefault();
    this.searchStringButton = value;
    this.emitSearchStringButton.emit(this.searchStringButton);
  }

  onKeyPress(event: any) {
    this.searchStringKey = event.target.value;
    this.emitSearchStringKey.emit(this.searchStringKey);
  }
}
