import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSnippets } from './s-snippets';

describe('SSnippets', () => {
  let component: SSnippets;
  let fixture: ComponentFixture<SSnippets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSnippets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSnippets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
