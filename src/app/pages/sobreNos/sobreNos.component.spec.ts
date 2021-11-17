import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sobreNosComponent } from './sobreNos.component';

describe('sobreNosComponent', () => {
  let component: sobreNosComponent;
  let fixture: ComponentFixture<sobreNosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sobreNosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(sobreNosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
