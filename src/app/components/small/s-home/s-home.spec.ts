import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHome } from './s-home';

describe('SHome', () => {
  let component: SHome;
  let fixture: ComponentFixture<SHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
