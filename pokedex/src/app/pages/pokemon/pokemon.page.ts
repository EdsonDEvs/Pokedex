import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PokemonPage implements OnInit {
  pokemon: any = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(id).subscribe({
        next: (pokemon) => {
          this.pokemon = pokemon;
          this.loading = false;
        },
        error: () => {
          this.error = 'Erro ao carregar detalhes do Pokémon';
          this.loading = false;
        }
      });
    } else {
      this.error = 'ID do Pokémon não encontrado';
      this.loading = false;
    }
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[type] || '#777777';
  }
} 