import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReqStatusComponent } from './view-req-status.component';

describe('ViewReqStatusComponent', () => {
  let component: ViewReqStatusComponent;
  let fixture: ComponentFixture<ViewReqStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReqStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReqStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
