import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosProfissionaisComponent } from './outros-profissionais.component';

describe('OutrosProfissionaisComponent', () => {
  let component: OutrosProfissionaisComponent;
  let fixture: ComponentFixture<OutrosProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrosProfissionaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrosProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
