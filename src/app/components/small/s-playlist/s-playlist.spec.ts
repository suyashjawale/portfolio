import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPlaylist } from './s-playlist';

describe('SPlaylist', () => {
  let component: SPlaylist;
  let fixture: ComponentFixture<SPlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SPlaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPlaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
