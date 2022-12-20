import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { Artefact } from "../../interfaces/Artefact";

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {

  private searchArtefactsSub = new BehaviorSubject<Artefact[]>([]);
  searchRes$:Observable<Artefact[]> = this.searchArtefactsSub.asObservable();

  private searchClosedSub = new BehaviorSubject<boolean>(true);
  searchClosed$: Observable<boolean> = this.searchClosedSub.asObservable();

  constructor() { }

  setSearchRes(searchRes: Artefact[]): void {
    this.searchArtefactsSub.next(searchRes);
  }

  setSearchClosed(isClosed: boolean): void {
    this.searchClosedSub.next(isClosed);
  }
}
