import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  thingsToDo = [
    'Learn Javascript',
    'Learn Angular',
    'Learn Redux'
  ];

  thingsCompleted = [];

  summary() : string {
      return '${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done';
  }
}
