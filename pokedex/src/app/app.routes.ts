import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./pages/pokemon/pokemon.page').then(m => m.PokemonPage)
  },
  {
    path: 'pokemon-details',
    loadComponent: () => import('./pages/pokemon-details/pokemon-details.page').then( m => m.PokemonDetailsPage)
  },
];
