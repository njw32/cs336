import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmwk10';

  // declaration of results, each slider cooresponds to unique function which updates DOM through the result variables
  result1: number = 0;
  result2: number = 0;
  result3: number = 0;

  gotResult1(results) {
    this.result1 = results;
  }
  gotResult2(results) {
    this.result2 = results;
  }
  gotResult3(results) {
    this.result3 = results;
  }
}
