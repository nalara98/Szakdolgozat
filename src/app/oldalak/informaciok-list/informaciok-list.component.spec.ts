import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { InformacioModule } from '../informacio/informacio.module';
import { LeirasokAddComponent } from '../leirasok-add/leirasok-add.component';

import { InformaciokListComponent } from './informaciok-list.component';

describe('InformaciokListComponent', () => {
  let component: InformaciokListComponent;
  let fixture: ComponentFixture<InformaciokListComponent>;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
    }),
  };
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports:[MatDialogModule,
      RouterTestingModule, 
      InformacioModule
      ],
      declarations: [ InformaciokListComponent ],
      providers: [
        { provide: BaseService, useValue: FirestoreStub  },
       

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaciokListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
 it('should create', () => {
    expect(component).toBeTruthy();
  }); 


 

}); 
