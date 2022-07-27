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
    let s = 'Hello World'
    for(let i = 0; i < s.length; i++){
        let store = s[i];
        console.log(store);
    }
  }
}
