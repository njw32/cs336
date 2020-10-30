import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'squareRoot';
  bigNumber: string = '16';
  guess: string = '1';
  responses: string[] = [];
  prompt = "Enter your guess:"
  submit = () => {
    let guessNum: number = +this.guess;
    let root: number = +this.bigNumber;
    let correct = Math.sqrt(root);
    let feedback: string;
    if (Math.abs(correct - guessNum) < correct * .01) {
      feedback = "You got it! The correct number was " + correct + ". It only took " + (this.responses.length + 1) + " tries.";
      this.prompt = "Restart Game";
    }
    else if (guessNum > correct) {
      feedback = guessNum + " is too high. Try again";
    }
    else {
      feedback = guessNum + " is too low. Try again";
    }
    this.responses.push(feedback);
    console.log(feedback);
  };
  randomNum = () => {
    this.bigNumber = (Math.floor(Math.random() * 250) + 50).toString();

  }
}

