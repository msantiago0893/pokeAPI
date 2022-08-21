import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPokemonComponent } from './views/detail-pokemon/detail-pokemon.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:'pokemon',
    component: PokemonComponent,
    pathMatch: 'full'
  },
  {
    path:'pokemon/:pokemon',
    component: DetailPokemonComponent,
  },
  {
    path:'**', redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
