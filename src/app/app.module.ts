import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorIntl } from './shared/utils/PaginatorIntl';
import { DetailPokemonComponent } from './views/detail-pokemon/detail-pokemon.component';
import { PrvEmptyComponent } from './shared/components/prv-empty/prv-empty.component';
import { ImgNotAvailableDirective } from './shared/directives/img-not-available.directive';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    DetailPokemonComponent,
    PrvEmptyComponent,
    ImgNotAvailableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: PaginatorIntl }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
