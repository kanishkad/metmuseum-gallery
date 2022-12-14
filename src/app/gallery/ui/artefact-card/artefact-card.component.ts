import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Artefact } from "../../../interfaces/Artefact";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-artefact-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './artefact-card.component.html',
  styleUrls: ['./artefact-card.component.scss']
})
export class ArtefactCardComponent {

@Input() artefact!: Artefact;
}
