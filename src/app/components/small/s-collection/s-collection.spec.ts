import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCollection } from './s-collection';

describe('SCollection', () => {
  let component: SCollection;
  let fixture: ComponentFixture<SCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
