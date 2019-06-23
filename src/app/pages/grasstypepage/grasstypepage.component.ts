import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../../services/fetchapi.service';
import { SharedataService } from '../../services/sharedata.service';

@Component({
  selector: 'app-grasstypepage',
  templateUrl: './grasstypepage.component.html',
  styleUrls: ['./grasstypepage.component.scss']
})
export class GrasstypepageComponent implements OnInit {

  private apiUrl = "https://api.pokemontcg.io/v1/cards?setCode=base1";
  pokemons: any;
  pokemonCards: Array<any>;
  grassCards: Array<any> = [];
  specificUrl: string;

  constructor(private fetchApiService: FetchapiService, private sharedata: SharedataService ) { }

  ngOnInit() {
    this.fetchApiService.getPokemons(this.apiUrl)
      .subscribe(data => {
        this.pokemons = data;
        this.pokemonCards = this.pokemons.cards;
        this.populateArray();
      }) 
  }

  populateArray(){
    for(let i = 0; i < this.pokemonCards.length; i++) {
      if(this.pokemonCards[i].types){
        if(this.pokemonCards[i].types[0] === "Grass") {
          this.grassCards.push(this.pokemonCards[i]);
        }
      };
    }
  }

  specificCard(value: any){
    this.specificUrl = "https://api.pokemontcg.io/v1/cards/" + value;
    this.sharedata.changeMessage(this.specificUrl);
    console.log(this.specificUrl);
  }
}
