import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss']
})
export class PokemoncardComponent implements OnInit {
  @Input() pokemon;

  constructor() { }

  ngOnInit() {
  }

}
