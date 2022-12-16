import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from "../../data-access/department.service";
import { Observable } from "rxjs";
import {
  CollectionSliderContainerComponent
} from "../collection-slider-container/collection-slider-container.component";

@Component({
  selector: 'app-gallery-overview',
  standalone: true,
    imports: [CommonModule, CollectionSliderContainerComponent],
  templateUrl: './gallery-overview.component.html',
  styleUrls: ['./gallery-overview.component.scss']
})
export class GalleryOverviewComponent implements OnInit{

  departments$!: Observable<any>;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
   this.departments$ = this.departmentService.getDepartments();
  }
}
