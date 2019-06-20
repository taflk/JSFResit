import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../../services/fetchapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private apiUrl = "https://api.pokemontcg.io/v1/cards?setCode=base1";
  pokemons: Array<any>;

  constructor(private fetchApiService: FetchapiService) { }

  ngOnInit() {
    this.fetchApiService.getPokemons(this.apiUrl)
      .subscribe(data => {this.pokemons = data.cards});
      // .subscribe(data => {console.log(data.cards)});
  }
}
