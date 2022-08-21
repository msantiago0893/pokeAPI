import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.sass']
})
export class DetailPokemonComponent implements OnInit {

  pokemon: string;
  detail = null;

  constructor(
    private _service: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParamId();
    this.getLang();
    this.getDetail();
  }

  getParamId() {
    const routeParams = this.route.snapshot.paramMap;
    this.pokemon = routeParams.get('pokemon');
  }

  getLang() {
    this._service.getLang().subscribe();
  }

  getDetail() {
    this._service.getDetails(this.pokemon)
      .subscribe(response => {
        this.detail = response;
      });
  }

}
