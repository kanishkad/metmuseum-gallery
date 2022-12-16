import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Artefact } from "../../interfaces/Artefact";

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {

  private searchArtefacts$ = new BehaviorSubject<Artefact[]>([]);
  searchRes$ = this.searchArtefacts$.asObservable();

  constructor() { }

  setSearchRes(searchRes: Artefact[]) {
    this.searchArtefacts$.next(searchRes);
  }
}
