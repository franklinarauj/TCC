import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioInfoComponent } from './prontuario-info.component';

describe('ProntuarioInfoComponent', () => {
  let component: ProntuarioInfoComponent;
  let fixture: ComponentFixture<ProntuarioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProntuarioInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntuarioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
