import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=151`).pipe(
      map(response => response.results)
    );
  }

  getPokemonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon/${id}`);
  }
} 