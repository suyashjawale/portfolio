import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LProjects } from './l-projects';

describe('LProjects', () => {
  let component: LProjects;
  let fixture: ComponentFixture<LProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
