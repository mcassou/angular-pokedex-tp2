import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/*
  loadChildren va charger le module enfant se trouvant au chemin envoyé à l'import,
  puis rechercher la classe PokemonsModule dans ce module
*/
const routes: Routes = [
  { path: '', loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
