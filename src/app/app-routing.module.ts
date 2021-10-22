
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LeirasModule } from './oldalak/leiras/leiras.module';
import { AuthGuard } from './shared/guard/auth-guard';
const routes: Routes = [
  { path: '', redirectTo: 'fooldal/main', pathMatch: 'full' },
  {
    path: 'fooldal',
    loadChildren: () => import('./oldalak/fooldal/fooldal.module').then(m => m.FooldalModule),
    
  },
  {
    path: 'regisztracio',
    loadChildren: () => import('./oldalak/regisztracio/regisztracio.module').then(m => m.RegisztracioModule),
  },
  {
    path: 'bejelentkezes',
    loadChildren: () => import('./oldalak/bejelentkezes/bejelentkezes.module').then(m => m.BejelentkezesModule),
  },
  {
    path: 'jatek',
    loadChildren: () => import('./oldalak/jatek/jatek.module').then(m => m.JatekModule),
} ,

{
  path: 'leiras',
  loadChildren: () => import('./oldalak/leiras/leiras.module').then(m => m.LeirasModule),
  canActivate: [AuthGuard]
} ,

{
  path: 'profil',
  loadChildren: () => import('./oldalak/profil/profil.module').then(m => m.ProfilModule),
  canActivate: [AuthGuard]
} ,




 
  {
    path: '**',
    redirectTo: 'fooldal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],/* ez adja meg,hogy ez egy lazy loadingos */
  exports: [RouterModule]
})
export class AppRoutingModule { }