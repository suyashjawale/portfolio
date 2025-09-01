import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLanding } from './l-landing';

describe('LLanding', () => {
  let component: LLanding;
  let fixture: ComponentFixture<LLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
