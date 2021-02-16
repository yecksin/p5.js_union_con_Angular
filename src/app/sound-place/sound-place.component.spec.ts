import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPlaceComponent } from './sound-place.component';

describe('SoundPlaceComponent', () => {
  let component: SoundPlaceComponent;
  let fixture: ComponentFixture<SoundPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
