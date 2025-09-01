import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LHome } from './l-home';

describe('LHome', () => {
  let component: LHome;
  let fixture: ComponentFixture<LHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
