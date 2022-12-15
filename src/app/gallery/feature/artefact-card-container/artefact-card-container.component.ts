import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectService } from "../../data-access/object.service";
import { Observable } from "rxjs";
import { ArtefactCardComponent } from "../../ui/artefact-card/artefact-card.component";

@Component({
  selector: 'app-artefact-card-container',
  standalone: true,
  imports: [CommonModule, ArtefactCardComponent],
  templateUrl: './artefact-card-container.component.html',
  styleUrls: ['./artefact-card-container.component.scss']
})
export class ArtefactCardContainerComponent implements OnInit{
  @Input() artefactId!: number;

  artefact$: Observable<any> | undefined;
  constructor(private objectService: ObjectService) {
  }

  ngOnInit(): void {
    this.artefact$ = this.objectService.getObjectById(this.artefactId);
  }
}
