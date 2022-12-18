import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Artefact } from "../../interfaces/Artefact";

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {

  private searchArtefactsSub = new BehaviorSubject<Artefact[]>([]);
  searchRes$ = this.searchArtefactsSub.asObservable();

  private searchClosedSub = new BehaviorSubject<boolean>(true);
  searchClosed$ = this.searchClosedSub.asObservable();

  constructor() { }

  setSearchRes(searchRes: Artefact[]) {
    this.searchArtefactsSub.next(searchRes);
  }

  setSearchClosed(isClosed: boolean) {
    this.searchClosedSub.next(isClosed);
  }
}
