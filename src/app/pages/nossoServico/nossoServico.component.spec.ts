import { ComponentFixture, TestBed } from '@angular/core/testing';

import { nossoServicoComponent } from './nossoServico.component';

describe('nossoServicoComponent', () => {
  let component: nossoServicoComponent;
  let fixture: ComponentFixture<nossoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ nossoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(nossoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
