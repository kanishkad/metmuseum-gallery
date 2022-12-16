import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable, Subscription, tap } from "rxjs";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, FormsModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() label!: string;
  @Input() debounceTime!: number;

  @Output() searchString: EventEmitter<string> = new EventEmitter();

  hasValue$ = new BehaviorSubject<boolean>(false);

  searchSub!: Subscription;
  searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchSub = this.searchControl.valueChanges.pipe(
      tap(val => val ? this.hasValue$.next(true) : this.hasValue$.next(false)),
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      filter(val => val != '')
    ).subscribe(searchVal => {
      if (searchVal) {
        this.searchString.emit(searchVal);
      }
    });
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
