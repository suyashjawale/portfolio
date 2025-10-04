import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearEquilibrium } from './linear-equilibrium';

describe('LinearEquilibrium', () => {
  let component: LinearEquilibrium;
  let fixture: ComponentFixture<LinearEquilibrium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearEquilibrium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearEquilibrium);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
