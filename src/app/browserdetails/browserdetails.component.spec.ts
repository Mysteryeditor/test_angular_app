import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserdetailsComponent } from './browserdetails.component';

describe('BrowserdetailsComponent', () => {
  let component: BrowserdetailsComponent;
  let fixture: ComponentFixture<BrowserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserdetailsComponent]
    });
    fixture = TestBed.createComponent(BrowserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
