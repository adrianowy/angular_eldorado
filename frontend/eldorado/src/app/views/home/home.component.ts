import { Component, OnInit } from '@angular/core';

import { FormComponent } from './form/form.component';
import { ClassListComponent } from './class-list/class-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // public clickedEvent: Event | undefined;

  ngOnInit(): void {
  }

  /* childEventClicked(event: Event) {
    this.clickedEvent = event;
  } */

}
