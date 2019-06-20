import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../../services/fetchapi.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  private apiUrl = "https://api.pokemontcg.io/v1/cards?setCode=base1";
  specificUrl: string;
  pokemonCards: Array<any>;
  filteredCards: Array<any>;

  constructor(private fetchApiService: FetchapiService) { }

  ngOnInit() {
    this.fetchApiService.getPokemons(this.apiUrl)
      .subscribe(data => {
        this.pokemonCards = data.cards;
        this.filteredCards = data.cards;
      });
  }

  keyPress(event: any) {
    // this.pokemonCards = this.filteredCards.filter(str => {
    //   return str.name.toLowerCase().includes(event.target.value);
    // })
    console.log(this.pokemonCards);
  }

  showCards(value: any){
    event.preventDefault();
    this.pokemonCards = this.filteredCards.filter(str => {
      return str.name.toLowerCase().includes(value);
    })
    console.log(value)
  }

  specificCard(value: any){
    this.specificUrl = "https://api.pokemontcg.io/v1/cards/" + value;
    console.log(this.specificUrl);
  }
}
