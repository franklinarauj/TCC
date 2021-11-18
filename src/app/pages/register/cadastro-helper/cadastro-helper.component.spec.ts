import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHelperComponent } from './cadastro-helper.component';

describe('CadastroHelperComponent', () => {
  let component: CadastroHelperComponent;
  let fixture: ComponentFixture<CadastroHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
