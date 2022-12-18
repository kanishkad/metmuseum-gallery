import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtefactCardComponent } from "../artefact-card/artefact-card.component";
import { Artefact } from "../../../interfaces/Artefact";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-gallery-search-results',
  standalone: true,
  imports: [CommonModule, ArtefactCardComponent, MatButtonModule],
  templateUrl: './gallery-search-results.component.html',
  styleUrls: ['./gallery-search-results.component.scss']
})
export class GallerySearchResultsComponent {

  @Input() artefacts!: Artefact[] | null;
}
