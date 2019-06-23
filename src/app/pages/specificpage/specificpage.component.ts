import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../../services/sharedata.service';
import { FetchapiService } from '../../services/fetchapi.service';

@Component({
  selector: 'app-specificpage',
  templateUrl: './specificpage.component.html',
  styleUrls: ['./specificpage.component.scss']
})
export class SpecificpageComponent implements OnInit {

  apiUrl: string;
  specificCard: Array<any>;
  readMore: boolean = false;

  constructor(private sharedata: SharedataService, private fetchApiService: FetchapiService ) { }

  ngOnInit() {
    // this.sharedata.currentMessage.subscribe(message => this.apiUrl = message)

    // this.fetchApiService.getPokemons(this.apiUrl)
    //   .subscribe(data => {
    //     this.specificCard = data.card;
    //   });
  };

  openReadMore(){
    this.readMore = !this.readMore;
  }

}
