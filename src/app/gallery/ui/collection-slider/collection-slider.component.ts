import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from "../../../interfaces/Department";
import { ObjectService } from "../../data-access/object.service";
import { map, Observable, tap } from "rxjs";
import { environment } from "../../../../environments/environment";
import {
  ArtefactCardContainerComponent
} from "../../feature/artefact-card-container/artefact-card-container.component";

@Component({
  selector: 'app-collection-slider',
  standalone: true,
  imports: [CommonModule, ArtefactCardContainerComponent],
  templateUrl: './collection-slider.component.html',
  styleUrls: ['./collection-slider.component.scss']
})
export class CollectionSliderComponent implements OnInit{
  @Input() department!: Department;

  totalArtefacts: number = 0;
  artefactIds$: Observable<number[]> | undefined;
  constructor(private objectService: ObjectService) {
  }

  ngOnInit(): void {
    this.artefactIds$ = this.objectService.getObjectsByDepartment(this.department.departmentId)
      .pipe(
        tap( (res: any) => this.totalArtefacts = res.total),
        map( res => (res.objectIDs as number[]).slice(0,environment.objectsSliceLimit))
      );
  }
}
