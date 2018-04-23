import { Component, OnInit } from '@angular/core';
import {FifthQueryService} from '../fifth-query.service';
import {AnswerFifth} from '../fifth-query/answer.fifth';

@Component({
  selector: 'app-fifth-query',
  templateUrl: './fifth-query.component.html',
  styleUrls: ['./fifth-query.component.css']
})
export class FifthQueryComponent implements OnInit {

  answerFifths: AnswerFifth[];

  salary: string;

  birthdayDate: Date = new Date();

  ngOnInit() {
    this.getAnswerFifths();
  }

  constructor(
    private answerFifthService: FifthQueryService,
  ) {}

  getAnswerFifths(): void {
    console.log(this.birthdayDate);
    this.answerFifthService.getAllAnswerFifths((new Date(this.birthdayDate).getTime() / 1000), +this.salary)
      .subscribe(answerFifths => this.answerFifths = answerFifths);
  }


}
