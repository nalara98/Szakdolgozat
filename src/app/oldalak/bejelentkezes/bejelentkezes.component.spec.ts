import { Injectable, InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

import { BejelentkezesComponent } from './bejelentkezes.component';

describe('BejelentkezesComponent', () => {
  let component: BejelentkezesComponent;
  let fixture: ComponentFixture<BejelentkezesComponent>;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
    }),
  };

  let service: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
     
      
        
      ],
      providers: [
        { provide: AuthService, useValue: FirestoreStub },
      ],
   
      declarations: [ BejelentkezesComponent ]
    })
    .compileComponents();
    service = TestBed.inject(AuthService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BejelentkezesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component Name Test", ()=>{
    expect(component.componentName).toBe("bejelentkezes")
  })
});
