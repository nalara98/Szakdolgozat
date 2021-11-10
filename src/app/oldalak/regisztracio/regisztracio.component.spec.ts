import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { RegisztracioComponent } from './regisztracio.component';

describe('RegisztracioComponent', () => {
  let component: RegisztracioComponent;
  let fixture: ComponentFixture<RegisztracioComponent>;

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
        RouterTestingModule
      ],
      declarations: [ RegisztracioComponent ],
      providers: [
        { provide: AuthenticationService, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisztracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
