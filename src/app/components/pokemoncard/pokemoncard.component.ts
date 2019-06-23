import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss']
})
export class PokemoncardComponent implements OnInit {
  @Input() pokemon;
  @Output() emitId = new EventEmitter;
  id: string;

  constructor() { }

  ngOnInit() {
  }

  sendId(value: any) {
    this.id = value;
    this.emitId.emit(this.id);
  }
}
