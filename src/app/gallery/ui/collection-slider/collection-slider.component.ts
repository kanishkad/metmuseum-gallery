import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from "../../../interfaces/Department";
import { BehaviorSubject } from "rxjs";
import { NgxGlideComponent, NgxGlideModule } from "ngx-glide";
import { ArtefactCardComponent } from "../artefact-card/artefact-card.component";
import { Artefact } from "../../../interfaces/Artefact";

@Component({
  selector: 'app-collection-slider',
  standalone: true,
  imports: [CommonModule, NgxGlideModule, ArtefactCardComponent],
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent {
  @Input() department!: Department;
  @Input() artefacts!: Artefact[];

  @Input() totalArtefacts$!: BehaviorSubject<number>;
  @Input() isLoading$!: BehaviorSubject<boolean>;

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;
}
