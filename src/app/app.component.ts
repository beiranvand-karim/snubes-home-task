import {Component, OnInit} from '@angular/core';
import {TrainsService} from './services/trains.service';
import {Observable} from 'rxjs/Observable';
import {Train} from './classes/train';
import {DraggedElement} from './classes/dragged-element';
import * as constants from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  trains$: Observable<Train[]>;
  elementDragged$: Observable<DraggedElement>;

  constructor(
    private _trainsService: TrainsService
  ) {

  }
  ngOnInit(): void {

    this.trains$ = this._trainsService.trains$;
    this.elementDragged$ = this._trainsService.draggedElementType$;
  }

  dragOver(event) {

    event.preventDefault();

  }
  onDropIntoTrain(trainId) {

    event.preventDefault();
    this._trainsService.addCarriage(trainId);
  }

  onDrop(event) {
    event.preventDefault();

    this.elementDragged$.subscribe(elType => {

      if (elType.locomotive) {

        const arriveTimeHour = prompt('arrive time hour');
        const arriveTimeMinutes = prompt('arrive time minutes');

        const departureTimeHour = prompt('departure time hour');
        const departureTimeMinutes = prompt('departure time minutes');

        const arriveTime = new Date(
          constants.year,
          constants.month,
          constants.day,

          + arriveTimeHour,
          + arriveTimeMinutes,

          constants.second,
          constants.millisecond
        );

        const departureTime = new Date(
          constants.year,
          constants.month,
          constants.day,

          + departureTimeHour,
          + departureTimeMinutes,

          constants.second,
          constants.millisecond
        );


        this._trainsService.addTrain(arriveTime, departureTime);
      }

    });


  }

  dragStartCarriage() {

    this._trainsService.setDraggedElementToCarriage();
  }

  dragStartLocomotive() {

    this._trainsService.setDraggedElementToLocomotive();
  }

}
