import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LBlog } from './l-blog';

describe('LBlog', () => {
  let component: LBlog;
  let fixture: ComponentFixture<LBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
