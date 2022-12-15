import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-artefact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artefact-card.component.html',
  styleUrls: ['./artefact-card.component.scss']
})
export class ArtefactCardComponent implements OnInit {

@Input() artefact!: any;

  ngOnInit(): void {
  }
}
