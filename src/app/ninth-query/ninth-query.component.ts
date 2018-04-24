import { Component, OnInit } from '@angular/core';
import {NinthQueryService} from '../ninth-query.service';
import {AnswerNinth} from '../ninth-query/answer.ninth';

@Component({
  selector: 'app-ninth-query',
  templateUrl: './ninth-query.component.html',
  styleUrls: ['./ninth-query.component.css']
})
export class NinthQueryComponent implements OnInit {

  answerNinths: AnswerNinth[];


  fromDate: Date = new Date();

  ngOnInit() {
  }

  constructor(
    private answerNinthService: NinthQueryService,
  ) {}

  getAnswerNinths(): void {
    this.answerNinthService.getAllAnswerNinths(
      Math.floor(new Date(this.fromDate).getTime() / 1000))
      .subscribe(answerNinths => this.answerNinths = answerNinths);
  }

}
