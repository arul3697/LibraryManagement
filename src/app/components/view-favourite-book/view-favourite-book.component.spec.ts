import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFavouriteBookComponent } from './view-favourite-book.component';

describe('ViewFavouriteBookComponent', () => {
  let component: ViewFavouriteBookComponent;
  let fixture: ComponentFixture<ViewFavouriteBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFavouriteBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFavouriteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
