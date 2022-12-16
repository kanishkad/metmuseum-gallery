import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from "../../../interfaces/Department";
import { ObjectService } from "../../data-access/object.service";
import { BehaviorSubject, forkJoin, map, mergeMap, tap } from "rxjs";
import { environment } from "../../../../environments/environment";
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
export class CollectionSliderComponent implements OnInit {
  @Input() department!: Department;

  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  totalArtefacts: number = 0;
  artefacts: Artefact[] | undefined;
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private objectService: ObjectService) {
  }

  ngOnInit(): void {
    this.objectService.getObjectsByDepartment(this.department.departmentId)
      .pipe(
        // Get the number of total artefacts out
        tap((objRes: any) => this.totalArtefacts = objRes.total),
        // Limit the no. of object IDs as there can be a lot
        map(objRes => (objRes.objectIDs as number[]).slice(0,environment.objectsSliceLimit)),
        // Return an observable for each object ID to get the full object & resolve all into a single array
        mergeMap((objectIDs: number[]) => {
          const obsArr = objectIDs.map(objectID => this.objectService.getObjectById(objectID));
          return forkJoin(obsArr);
        }),
        tap((objRes: any) => this.loading$.next(false)),

        // Need to subscribe here instead of using with the async pipe in the template
        // because ngx-glide doesn't play nice with ngFor
      ).subscribe((artefacts: Artefact[]) => {
      // Remove artefacts without images
      this.artefacts = artefacts.filter((artefact: Artefact) => artefact.primaryImageSmall !== null && artefact.primaryImageSmall !== '');
    });
  }
}
