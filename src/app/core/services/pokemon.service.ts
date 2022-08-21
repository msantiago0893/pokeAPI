import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/shared/domain/Pokemon';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Detail } from 'src/app/shared/domain/Detail';

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

  getAll() {

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

  getDetail(pokemon) {
    return this.http.get(`${this.uri}/${pokemon}`)
      .pipe(
        map(item => new Detail(item))
      );
  }
}
