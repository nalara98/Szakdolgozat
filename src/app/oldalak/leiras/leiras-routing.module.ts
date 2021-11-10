import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeirasComponent } from './leiras.component';

const routes: Routes = [
    {
        path: ':dataName/:id',
        component: LeirasComponent,
       
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LeirasRoutingModule { }