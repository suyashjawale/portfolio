import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLanding } from './s-landing';

describe('SLanding', () => {
  let component: SLanding;
  let fixture: ComponentFixture<SLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
