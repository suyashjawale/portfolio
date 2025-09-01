import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LSearch } from './l-search';

describe('LSearch', () => {
  let component: LSearch;
  let fixture: ComponentFixture<LSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
