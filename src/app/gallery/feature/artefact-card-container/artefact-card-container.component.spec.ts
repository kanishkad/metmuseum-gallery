import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactCardContainerComponent } from './artefact-card-container.component';

describe('ArtefactCardContainerComponent', () => {
  let component: ArtefactCardContainerComponent;
  let fixture: ComponentFixture<ArtefactCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ArtefactCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtefactCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
