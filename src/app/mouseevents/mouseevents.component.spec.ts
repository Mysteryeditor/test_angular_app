import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseeventsComponent } from './mouseevents.component';

describe('MouseeventsComponent', () => {
  let component: MouseeventsComponent;
  let fixture: ComponentFixture<MouseeventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseeventsComponent]
    });
    fixture = TestBed.createComponent(MouseeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
