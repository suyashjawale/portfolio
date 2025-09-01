import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPosts } from './l-posts';

describe('LPosts', () => {
  let component: LPosts;
  let fixture: ComponentFixture<LPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
