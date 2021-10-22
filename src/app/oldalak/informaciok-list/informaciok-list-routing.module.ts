
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformaciokListComponent } from './informaciok-list.component';

const routes: Routes = [
    {
        path: '',
        component: InformaciokListComponent,
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InformaciokListRoutingModule { }