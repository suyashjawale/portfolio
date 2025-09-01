import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSidebar } from './s-sidebar';

describe('SSidebar', () => {
  let component: SSidebar;
  let fixture: ComponentFixture<SSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
