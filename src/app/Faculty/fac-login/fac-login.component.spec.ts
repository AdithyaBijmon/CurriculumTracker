import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacLoginComponent } from './fac-login.component';

describe('FacLoginComponent', () => {
  let component: FacLoginComponent;
  let fixture: ComponentFixture<FacLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacLoginComponent]
    });
    fixture = TestBed.createComponent(FacLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
