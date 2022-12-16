import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() searchClosed: EventEmitter<string> = new EventEmitter();

  closeSearch() {
    this.searchClosed.emit();
  }
}
