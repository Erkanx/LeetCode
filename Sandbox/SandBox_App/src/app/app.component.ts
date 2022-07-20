import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SandBox_App';
  answers;
  constructor() {

  }


  leetCode() {
    let a = 1;

    this.answers = a;
    console.log('test')
  }
}
