import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaciokListComponent } from './informaciok-list.component';

describe('InformaciokListComponent', () => {
  let component: InformaciokListComponent;
  let fixture: ComponentFixture<InformaciokListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformaciokListComponent ]
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
