import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  pokemon: Pokemon;
  @Input() selectedPokemonId: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  /*
  * On change ngOnInit en ngOnChanges
  * pour executer la fonction a chaque changement sur le component
  * et pas uniquement au chargement de celui ci
  * (on a donc aussi implementé onChanges dans la classe et non OnInit)
  */
  ngOnChanges() {
    if(this.selectedPokemonId){
      this.getPokemonDetails(this.selectedPokemonId);
    }
  }

  goBack(){
    this.location.back();
  }

  /*
  * Fonction qui récupère les details du pokemon selectionné à l'aide de son id
  */
  getPokemonDetails(id: number){
    this.pokemonService.getPokemonDetails(id).subscribe(pokemon => this.pokemon = pokemon);
  }

}
