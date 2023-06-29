import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveTransitionComponent } from './wave-transition.component';

describe('WaveTransitionComponent', () => {
  let component: WaveTransitionComponent;
  let fixture: ComponentFixture<WaveTransitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaveTransitionComponent]
    });
    fixture = TestBed.createComponent(WaveTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
