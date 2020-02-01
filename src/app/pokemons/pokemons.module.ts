import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { MatListModule , MatCardModule , MatGridListModule, MatChipsModule, MatButtonModule, MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PokemonsModule { }
