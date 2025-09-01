import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSnippets } from './l-snippets';

describe('LSnippets', () => {
  let component: LSnippets;
  let fixture: ComponentFixture<LSnippets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LSnippets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSnippets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
