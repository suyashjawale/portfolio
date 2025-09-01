import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProjects } from './s-projects';

describe('SProjects', () => {
  let component: SProjects;
  let fixture: ComponentFixture<SProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
