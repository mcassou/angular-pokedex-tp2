import { Component, OnInit } from '@angular/core';
import { PagedData } from 'src/app/models/paged-data.model';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PagedData<Pokemon>;
  offset: number = 0;
  limit: number = 20;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    /*
    * Au chargement du component on appelle la fonction getPokemons pour récupérer les 20 premiers pokemons
    */
    this.getPokemons(this.offset, this.limit);
  }

  /*
  * Il est possible de gérer le scroll en haut et en bas séparement
  * cependant je n'ai pas réussi ici à l'utiliser de façon optimal dans ce tp
  */
  /*
  onScrollDown() {
    console.log("scrolled down");
    //this.offset = this.offset + 20;
    this.limit = this.limit + 20;
    console.log(this.offset);
    console.log(this.limit);
    this.getPokemons(this.offset, this.limit);
  }

  onScrollUp() {
    if(this.limit != 20) {
      console.log("scrolled up");
      //this.offset = this.offset - 20;
      this.limit = this.limit - 20;
      console.log(this.offset);
      console.log(this.limit);
      this.getPokemons(this.offset, this.limit);
    }
  }
  */

  /*
  * Fonction gérant le scroll infini sur la liste de pokemons
  * A chaque scroll elle augmente la limite à récupérer via la fonction getPokemons 
  */
  onScroll(){
    this.limit = this.limit + 20;
    this.getPokemons(this.offset, this.limit);
  }

  /*
  * Fonction qui récupère la liste de pokemons en fonction de l'offset et la limite envoyés
  * l'offset est initialisé à 0 et ne change pas de valeur ici, mais la limite change
  */
  getPokemons(offset: number, limit: number){
    /*
    * On appelle la fonction getPokemons du service pokemonService et récupére la liste de pokemons qu'elle renvoit
    */
    this.pokemonService.getPokemons(offset, limit).subscribe(pokemons => this.pokemons = pokemons);
  }
}
