import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../../shared/ui/search/search.component";
import { environment } from "../../../../environments/environment";
import { SearchService } from "../../data-access/search.service";
import { BehaviorSubject, forkJoin, map, mergeMap, Subscription, tap } from "rxjs";
import { ObjectService } from "../../data-access/object.service";
import { Artefact } from "../../../interfaces/Artefact";
import { GalleryDataService } from "../../data-access/gallery-data.service";

@Component({
  selector: 'app-gallery-search-container',
  standalone: true,
    imports: [CommonModule, SearchComponent],
  templateUrl: './gallery-search-container.component.html',
  styleUrls: ['./gallery-search-container.component.scss']
})
export class GallerySearchContainerComponent implements OnDestroy{

  debounceTime: number = environment.searchDebounceTime;

  totalArtefacts$ = new BehaviorSubject<number>(0);
  isLoading$ = new BehaviorSubject<boolean>(true);

  searchSub!: Subscription;

  constructor(private searchService: SearchService,
              private objectService: ObjectService,
              private galleryDataService: GalleryDataService) {
  }

  onSearch(searchVal: string) {
    this.searchSub = this.searchService.searchObjects(searchVal).pipe(
      // Get the number of total artefacts out
      tap((searchRes: any) => this.totalArtefacts$.next(searchRes.total)),
      // Limit the no. of object IDs as there can be a lot
      map(searchRes => (searchRes.objectIDs as number[]).slice(0,environment.searchSliceLimit)),
      // Return an observable for each object ID to get the full object & resolve all into a single array
      mergeMap((objectIDs: number[]) => {
        const obsArr = objectIDs.map(objectID => this.objectService.getObjectById(objectID));
        return forkJoin(obsArr);
      }),
      tap((objRes: any) => this.isLoading$.next(false))
    ).subscribe((artefacts: Artefact[]) => this.galleryDataService.setSearchRes(artefacts))
  }


  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }

}
