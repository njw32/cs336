import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hmwk10';

  result1: number;
  result2: number;
  result3: number;

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
