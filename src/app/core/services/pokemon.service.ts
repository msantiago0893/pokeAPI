import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/shared/domains/Pokemon';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Detail } from 'src/app/shared/domains/Detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private uri: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getLang() {
    return this.http.get(environment.pokedexUrl)
  }

  getPokemons() {

    return this.http.get<Pokemon>(this.uri, {
      params: {
        limit: '1154',
        offset: '0'
      }
    }).pipe(
      map((response:Pokemon) => {
          return response && response.results;
      })
    );
  }

  getDetails(pokemon) {
    return this.http.get(`${this.uri}/${pokemon}`)
      .pipe(
        map(item => new Detail(item))
      );
  }
}
