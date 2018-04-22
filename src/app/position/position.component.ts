import {Component, Input, OnInit} from '@angular/core';
import {Position} from './position';
import {PositionService} from '../position.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  positions: Position[];

  @Input() position: Position;
  @Input() newPosition: Position;

  ngOnInit() {
    this.getPositions();
    this.position = new Position();
    this.newPosition = new Position();
  }

  constructor(
    private positionService: PositionService
  ) {}

  setPosition(position: Position) {
    this.position = position;
  }

  getPositions(): void {
    this.positionService.getAllPositions()
      .subscribe(positions => this.positions = positions);
  }


}
