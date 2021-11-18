import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPatientComponent } from './cadastro.component';

describe('CadastroPatientComponent', () => {
  let component: CadastroPatientComponent;
  let fixture: ComponentFixture<CadastroPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
