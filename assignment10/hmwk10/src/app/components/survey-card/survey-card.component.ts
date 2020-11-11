import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() question: string;

  @Input() min: number = 1;

  @Input() max: number = 100;

  @Input() units: string = '';

  @Output() result = new EventEmitter<number>();

  sliderChanged(eventObject) {
    this.result.emit(eventObject.value);
  }

}

