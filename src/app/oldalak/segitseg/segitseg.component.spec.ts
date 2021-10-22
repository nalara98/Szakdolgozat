import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegitsegComponent } from './segitseg.component';

describe('SegitsegComponent', () => {
  let component: SegitsegComponent;
  let fixture: ComponentFixture<SegitsegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegitsegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegitsegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
