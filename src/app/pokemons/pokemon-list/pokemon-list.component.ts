import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() selectedPokemonId = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    /*
    * Au chargement du component on appelle la fonction getPokemons pour récupérer les 20 premiers pokemons
    */
    this.getPokemons(this.offset, this.limit);
  }

  /*
  * Fonction gérant le scroll infini sur la liste de pokemons
  * A chaque scroll elle augmente la limite à récupérer via la fonction getPokemons 
  */
  onScroll(){
    this.limit = this.limit + 20;
    this.getPokemons(this.offset, this.limit);
  }

  /*
  * Lorsqu'un pokemon est selectionné, cette fonction emet son id via l'output défini plus tôt
  * il sera récupéré dans le component pokemon-detail via l'input
  */
  selectPokemon(selectedPokemonId: number){
    this.selectedPokemonId.emit(selectedPokemonId);
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

  /*
  * Lorsqu'il y a un changement dans la barre de recherche
  * Si la valeur dans celle ci est vide, on appelle la fonction getPokemons
  * Si la valeur dans celle ci n'est pas vide, on appelle la fonction getPokemonsBySearch du service pokemonService
  * et récupère la liste de pokemons qu'elle renvoie en fonction de la valeur présente de la barre de recherche
  */
  searchPokemon(value: string){
    if(value == ""){
      this.getPokemons(this.offset, this.limit);
    } else {
      this.pokemonService.getPokemonsBySearch(this.offset, this.limit, value).subscribe(pokemons => this.pokemons = pokemons);
    }
  }
  
}
