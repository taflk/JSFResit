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
  inputFilled: boolean; false;
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

  keyPress(searchstring: any) {
    if(searchstring != '') {
      this.inputFilled = true;
      console.log("a");
    } else {
      this.inputFilled = false;
      console.log("b");
    }
    this.pokemonCards = this.filteredCards.filter(str => {
      return str.name.toLowerCase().includes(searchstring);
    })
  }

  findSpecificCard(searchstring: any){
    this.pokemonCards = this.filteredCards.filter(str => {
    return str.name.toLowerCase().includes(searchstring);
  })
}
}
