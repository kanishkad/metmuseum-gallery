import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySearchContainerComponent } from './gallery-search-container.component';

describe('GallerySearchContainerComponent', () => {
  let component: GallerySearchContainerComponent;
  let fixture: ComponentFixture<GallerySearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GallerySearchContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
