import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCollection } from './l-collection';

describe('LCollection', () => {
  let component: LCollection;
  let fixture: ComponentFixture<LCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
