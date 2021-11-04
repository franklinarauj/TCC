import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHelperComponent } from './profile-helper.component';

describe('ProfileHelperComponent', () => {
  let component: ProfileHelperComponent;
  let fixture: ComponentFixture<ProfileHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
