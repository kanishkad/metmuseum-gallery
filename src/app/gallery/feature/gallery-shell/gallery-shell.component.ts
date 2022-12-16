import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryOverviewComponent } from "../gallery-overview/gallery-overview.component";
import { GallerySearchResultsComponent } from "../../ui/gallery-search-results/gallery-search-results.component";
import { GalleryDataService } from "../../data-access/gallery-data.service";
import { BehaviorSubject, Observable } from "rxjs";
import { Artefact } from "../../../interfaces/Artefact";

@Component({
  selector: 'app-gallery-shell',
  standalone: true,
  imports: [CommonModule, GalleryOverviewComponent, GallerySearchResultsComponent],
  templateUrl: './gallery-shell.component.html',
  styleUrls: ['./gallery-shell.component.scss']
})
export class GalleryShellComponent implements OnInit{

  constructor(private galleryDataService: GalleryDataService) {
  }
  
  isShowSearch$ = new BehaviorSubject<boolean>(false);

  searchRes!: Artefact[];

  ngOnInit(): void {
    this.galleryDataService.searchRes$.subscribe((artefacts: Artefact[]) => {
      if (artefacts.length > 0) {
        this.searchRes = artefacts;
        this.isShowSearch$.next(true);
      }

    });
  }

  closeSearch() {
    this.isShowSearch$.next(false);
  }
}
