import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoObjetivoComponent } from './nosso-objetivo.component';

describe('NossoObjetivoComponent', () => {
  let component: NossoObjetivoComponent;
  let fixture: ComponentFixture<NossoObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NossoObjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NossoObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
