import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShellComponent } from './gallery-shell.component';

describe('GalleryShellComponent', () => {
  let component: GalleryShellComponent;
  let fixture: ComponentFixture<GalleryShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
