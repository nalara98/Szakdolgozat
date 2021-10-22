
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { JatekComponent } from './jatek.component';

const routes: Routes = [
    {
        path: '',
        component: JatekComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JatekRoutingMOdule { }