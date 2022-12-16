import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySearchResultsComponent } from './gallery-search-results.component';

describe('GallerySearchResultsComponent', () => {
  let component: GallerySearchResultsComponent;
  let fixture: ComponentFixture<GallerySearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GallerySearchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
