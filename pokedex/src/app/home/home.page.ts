import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.pokemonService.getPokemons().subscribe({
      next: (pokemons) => {
        this.pokemons = pokemons;
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao carregar Pokémon';
        this.loading = false;
      }
    });
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
