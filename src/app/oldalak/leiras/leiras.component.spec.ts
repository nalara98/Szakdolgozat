import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

import { LeirasComponent } from './leiras.component';

describe('LeirasComponent', () => {
  let component: LeirasComponent;
  let fixture: ComponentFixture<LeirasComponent>;

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
      imports:[
        RouterTestingModule,
        MatDialogModule
      ],
      
      declarations: [ LeirasComponent ],
      providers: [
        { provide: BaseService, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
