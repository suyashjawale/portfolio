import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPlaylist } from './l-playlist';

describe('LPlaylist', () => {
  let component: LPlaylist;
  let fixture: ComponentFixture<LPlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPlaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LPlaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
