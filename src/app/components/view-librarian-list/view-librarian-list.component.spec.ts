import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLibrarianListComponent } from './view-librarian-list.component';

describe('ViewLibrarianListComponent', () => {
  let component: ViewLibrarianListComponent;
  let fixture: ComponentFixture<ViewLibrarianListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLibrarianListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibrarianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
