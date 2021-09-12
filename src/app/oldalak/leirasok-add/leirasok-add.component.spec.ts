import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeirasokAddComponent } from './leirasok-add.component';

describe('LeirasokAddComponent', () => {
  let component: LeirasokAddComponent;
  let fixture: ComponentFixture<LeirasokAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeirasokAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeirasokAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
