import { Component } from '@angular/core';

@Component({
  selector: 'my-app2',
  templateUrl: './app.component.html',
  styleUrls: [
    'app.component.css'
  ]
})
export class AppComponent {
  class = 'relative';
  type = 'Component-relative template & style URLs';
  path = 'app.component.html';
}
