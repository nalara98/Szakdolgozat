import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { NavigacioComponent } from './navigacio.component';

describe('NavigacioComponent', () => {
  let component: NavigacioComponent;
  let fixture: ComponentFixture<NavigacioComponent>;

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
        MatMenuModule
      ],
      declarations: [ NavigacioComponent ],
      providers: [
        { provide: AuthenticationService, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("testing html element", ()=>{
    const data=fixture.nativeElement;
    expect(data.querySelector(".test").textContent).toContain("Navigacio")
  })
});
