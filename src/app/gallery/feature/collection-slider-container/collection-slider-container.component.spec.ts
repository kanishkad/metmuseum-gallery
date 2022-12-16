import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSliderContainerComponent } from './collection-slider-container.component';

describe('CollectionSliderContainerComponent', () => {
  let component: CollectionSliderContainerComponent;
  let fixture: ComponentFixture<CollectionSliderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CollectionSliderContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionSliderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
