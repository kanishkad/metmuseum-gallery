import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from "../../../interfaces/Department";
import { ObjectService } from "../../data-access/object.service";
import { BehaviorSubject, forkJoin, map, mergeMap, Observable, Subscription, tap } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Artefact } from "../../../interfaces/Artefact";
import { CollectionSliderComponent } from "../../ui/collection-slider/collection-slider.component";

@Component({
  selector: 'app-collection-slider-container',
  standalone: true,
  imports: [CommonModule, CollectionSliderComponent],
  templateUrl: './collection-slider-container.component.html',
  styleUrls: ['./collection-slider-container.component.scss']
})
export class CollectionSliderContainerComponent implements OnInit, OnDestroy {
  @Input() department!: Department;

  totalArtefacts$ = new BehaviorSubject<number>(0);
  isLoading$ = new BehaviorSubject<boolean>(true);
  artefacts!: Artefact[];

  artefactsSub!: Subscription;

  constructor(private objectService: ObjectService) {
  }

  ngOnInit(): void {
   this.artefactsSub = this.objectService.getObjectsByDepartment(this.department.departmentId)
      .pipe(
        // Get the number of total artefacts out
        tap((objRes: any) => this.totalArtefacts$.next(objRes.total)),
        // Limit the no. of object IDs as there can be a lot
        map(objRes => (objRes.objectIDs as number[]).slice(0,environment.objectsSliceLimit)),
        // Return an observable for each object ID to get the full object & resolve all into a single array
        mergeMap((objectIDs: number[]) => {
          const obsArr = objectIDs.map(objectID => this.objectService.getObjectById(objectID));
          return forkJoin(obsArr);
        }),
        tap((artefacts: any) => this.isLoading$.next(false))
      ).subscribe((artefacts: Artefact[]) => {
       // Remove artefacts without images
       this.artefacts = artefacts.filter((artefact: Artefact) => artefact.primaryImageSmall !== null && artefact.primaryImageSmall !== '');
     });
  }

  ngOnDestroy(): void {
    this.artefactsSub.unsubscribe();
  }
}
