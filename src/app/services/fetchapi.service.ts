import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
 providedIn: 'root'
})
export class FetchapiService {

  constructor(private http: HttpClient) { }

  getPokemons(url) {
    return this.http.get<Pokemon[]>(url);
    // return this.http.get(this.apiUrl);
  }
}
