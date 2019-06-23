import { Component, OnInit } from '@angular/core';
import { FetchapiService } from '../../services/fetchapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specificpage',
  templateUrl: './specificpage.component.html',
  styleUrls: ['./specificpage.component.scss']
})
export class SpecificpageComponent implements OnInit {

  private apiUrl = "https://api.pokemontcg.io/v1/cards/";
  pokemons: any;
  specificCard: Array<any>;
  readMore: boolean = false;
  id: string;

  constructor( private fetchApiService: FetchapiService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.fetchApiService.getPokemons(this.apiUrl + this.id)
      .subscribe(data => {
           this.pokemons = data;
           this.specificCard = this.pokemons.card;
      });
  };

  openReadMore(){
    this.readMore = !this.readMore;
  }
}
