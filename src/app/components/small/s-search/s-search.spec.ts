import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSearch } from './s-search';

describe('SSearch', () => {
  let component: SSearch;
  let fixture: ComponentFixture<SSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
