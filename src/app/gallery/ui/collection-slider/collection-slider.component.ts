import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from "../../../interfaces/Department";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { ArtefactCardComponent } from "../artefact-card/artefact-card.component";
import { Artefact } from "../../../interfaces/Artefact";

declare const Flickity: any;

@Component({
  selector: 'app-collection-slider',
  standalone: true,
  imports: [CommonModule, ArtefactCardComponent],
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit, OnDestroy {

  @Input() department!: Department;

  @Input() artefacts!: Artefact[];
  @Input() totalArtefacts$!: BehaviorSubject<number>;
  @Input() isLoading$!: BehaviorSubject<boolean>;

  private isLoadingSub!: Subscription;

  ngOnInit(): void {
    this.isLoadingSub = this.isLoading$.subscribe(isLoading => {
      if (!isLoading) {
        setTimeout(()=>{
          // Flickity should be initialized after template is rendered because of ngFor loop
          // This doesn't work with AfterViewInit hook
          this.initializeFlickity();
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.isLoadingSub.unsubscribe();
  }

  initializeFlickity() {
    // Flickity JS & CSS is loaded in index.html, use it to create new instance
    const artefactSlider = document.querySelector('.artefact-slider-' + this.department.departmentId);
    if (artefactSlider) {
      new Flickity( artefactSlider, {
        imagesLoaded: true,
        percentPosition: false,
        contain: true,
        setGallerySize: false,
        freeScroll: true,
        pageDots: false,
        arrowShape: 'M 15,50 L 65,95 L 70,90 L 27,50  L 70,10 L 65,5 Z'
      });
    }
  }
}
