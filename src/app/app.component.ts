import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></...>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hallo Welt!!!!';
  date: Date = new Date();
}