import { FooldalComponent } from './fooldal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from 'src/app/shared/routeguards/route-guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: FooldalComponent,
        children: [
            {
                path: 'main',
                loadChildren: () => import('./../main/main.module').then(m => m.MainModule),
            },
            
            {path: 'informaciok',
                loadChildren: () => import('./../informaciok-list/informaciok-list.module').then(m => m.InformaciokListModule),
                
        },
        {
            path: 'jatek',
            loadChildren: () => import('./../jatek/jatek.module').then(m => m.JatekModule),
        } ,
         
             
        ],
        canActivate: [RouteGuard] /* az összeset levédi */
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FooldalRoutingModule { }