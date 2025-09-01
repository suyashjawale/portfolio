import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPosts } from './s-posts';

describe('SPosts', () => {
  let component: SPosts;
  let fixture: ComponentFixture<SPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
