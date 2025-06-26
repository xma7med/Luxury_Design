import { Routes } from '@angular/router';
import { HeroComponent } from './pages/sections/hero/hero.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/sections/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'about', loadComponent: () => import('./pages/sections/about/about.component').then(m => m.AboutComponent) },

  // { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  // { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  // { path: 'services', loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  // { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
];
