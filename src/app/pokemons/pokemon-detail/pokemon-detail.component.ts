import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonId: number;
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  /*
  * Au chargement de la page on récupère l'id du pokemon selcetionné envoyé via les parametres de l'url
  * et on appelle la fonction getPokemonDetails avec cet id
  */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = +params.get('id');
      this.getPokemonDetails(this.pokemonId);
    });
  }

  goBack(){
    this.location.back();
  }

  /*
  * Fonction qui récupère les details du pokemon selectionné à l'aide de son id
  */
  getPokemonDetails(id: number){
    this.pokemonService.getPokemonDetails(id).subscribe(pokemon => this.pokemon = pokemon);;
  }

}
