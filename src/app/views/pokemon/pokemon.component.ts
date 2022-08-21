import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private _service: PokemonService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.allPokemon();

    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (columns: any, filter: string) => columns.name.indexOf(filter) != -1;
  }

  allPokemon() {
    this._service
      .getAll()
      .subscribe(response => {
        this.dataSource.data = response;
      });
  }

  detail(item) {
    this.route.navigate(['/pokemon', item.name]);
  }

  filter(event) {
    this.dataSource.filter = event.target.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
