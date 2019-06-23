import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../../services/fetchapi.service';
import { SharedataService } from '../../services/sharedata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private apiUrl = "https://api.pokemontcg.io/v1/cards?setCode=base1";
  specificUrl: string;
  pokemons: any;
  pokemonCards: Array<any>;
  filteredCards: Array<any>;
  message: string;

  constructor(private fetchApiService: FetchapiService, private sharedata: SharedataService) { }

  ngOnInit() {
    this.fetchApiService.getPokemons(this.apiUrl)
      .subscribe(data => {
        this.pokemons = data;
        this.pokemonCards = this.pokemons.cards;
        this.filteredCards = this.pokemons.cards;
      });

    this.sharedata.currentMessage.subscribe(message => this.message = message)
  }

  keyPress(event: any) {
    this.pokemonCards = this.filteredCards.filter(str => {
      return str.name.toLowerCase().includes(event.target.value);
    })
    console.log(this.pokemonCards);
  }

  // showCards(value: any){
  //   event.preventDefault();
  //   this.pokemonCards = this.filteredCards.filter(str => {
  //     return str.name.toLowerCase().includes(value);
  //   })
  //   console.log(value)
  // }

  // specificCard(value: any){
  //   this.specificUrl = "https://api.pokemontcg.io/v1/cards/" + value;
  //   this.sharedata.changeMessage(this.specificUrl);
  //   console.log(this.specificUrl);
  // }
}
