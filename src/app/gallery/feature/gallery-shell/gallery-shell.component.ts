import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryOverviewComponent } from "../gallery-overview/gallery-overview.component";
import { GallerySearchResultsComponent } from "../../ui/gallery-search-results/gallery-search-results.component";
import { GalleryDataService } from "../../data-access/gallery-data.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { Artefact } from "../../../interfaces/Artefact";

@Component({
  selector: 'app-gallery-shell',
  standalone: true,
  imports: [CommonModule, GalleryOverviewComponent, GallerySearchResultsComponent],
  templateUrl: './gallery-shell.component.html',
  styleUrls: ['./gallery-shell.component.scss']
})
export class GalleryShellComponent implements OnInit, OnDestroy{

  constructor(private galleryDataService: GalleryDataService) {
  }

  private searchResSub!: Subscription;
  private searchClosedSub!: Subscription;

  isShowSearch$ = new BehaviorSubject<boolean>(false);

  searchRes!: Artefact[];

  ngOnInit(): void {
    this.searchResSub = this.galleryDataService.searchRes$.subscribe((artefacts: Artefact[]) => {
      if (artefacts.length > 0) {
        this.searchRes = artefacts;
        this.isShowSearch$.next(true);
      }
    });

    // Hide search view on search close
    this.searchClosedSub = this.galleryDataService.searchClosed$.subscribe( (isClosed: boolean) => this.isShowSearch$.next(!isClosed));
  }

  ngOnDestroy(): void {
    this.searchResSub.unsubscribe();
    this.searchClosedSub.unsubscribe();
  }
}

