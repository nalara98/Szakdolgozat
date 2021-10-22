import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformaciokListRoutingModule } from './informaciok-list-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InformacioModule } from '../informacio/informacio.module';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatIconModule } from '@angular/material/icon';
import { LeirasokAddModule } from '../leirasok-add/leirasok-add.module';
import { InformaciokListComponent } from './informaciok-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InformaciokListComponent],
  imports: [
    CommonModule, InformaciokListRoutingModule,  ContainerModule, InformacioModule, MatToolbarModule, MatIconModule, LeirasokAddModule, MatButtonModule
    , MatProgressSpinnerModule,  MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule
  ]
})
export class InformaciokListModule { }
