import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  selectedPokemonId: number;

  constructor() { }

  ngOnInit() {
  }

  showDetails2(selectedPokemonId: number){
    this.selectedPokemonId = selectedPokemonId;
  }

}
