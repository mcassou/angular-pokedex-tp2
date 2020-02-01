import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { PagedData } from '../models/paged-data.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";
  private pokemonsUrl = this.apiUrl + "/pokemons";

  constructor(
    private http: HttpClient
  ) { }

  /*
  * On récupère la liste de pokemons via la requete get sur l'API en envoyant l'offset et de la limite reçus
  * Si la requête tombe en erreur on appelle la fonction handleError
  */
  getPokemons(offset: number, limit: number): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonsUrl + "?offset=" + offset + "&limit=" + limit).pipe(
      catchError(error => this.handleError<any>('getPokemon', error))
    );
  }

  /*
  * On récupère les details du pokemon selectionné via la requete get sur l'API en envoyant l'id du pokemon selectionné
  * Si la requête tombe en erreur on appelle la fonction handleError
  */
  getPokemonDetails(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonsUrl + "/" + id).pipe(
      catchError(error => this.handleError<any>('getPokemon', error))
    );
  }

  /*
  * Gestion du message d'erreur renvoyé lorqu'une requête api a rencontré un problème
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Envoie de la log à la console
  
      return of(result as T); // On laisse l'application tourner en retourner un resultat vide
    };
  }
}
