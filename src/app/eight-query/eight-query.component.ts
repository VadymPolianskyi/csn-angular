import { Component, OnInit } from '@angular/core';
import {EightQueryService} from '../eight-query.service';
import {AnswerEight} from './answer.eight';

@Component({
  selector: 'app-eight-query',
  templateUrl: './eight-query.component.html',
  styleUrls: ['./eight-query.component.css']
})
export class EightQueryComponent implements OnInit {

  answerEights: AnswerEight[];


  birthdayDateS: Date = new Date();
  birthdayDateE: Date = new Date();
  endDate: Date = new Date();

  ngOnInit() {
    this.getAnswerEights();
  }

  constructor(
    private answerEightService: EightQueryService,
  ) {}

  getAnswerEights(): void {
    this.answerEightService.getAllAnswerEights(
      Math.round(new Date(this.birthdayDateS).getTime() / 1000),
      Math.round(new Date(this.birthdayDateE).getTime() / 1000),
      Math.round(new Date(this.endDate).getTime() / 1000))
      .subscribe(answerEights => this.answerEights = answerEights);
  }

}
