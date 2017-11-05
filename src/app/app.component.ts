import {Component, OnInit} from '@angular/core';
import {TrainsService} from './services/trains.service';
import {Observable} from 'rxjs/Observable';
import {Train} from './interfaces/train';
import {DraggedElement} from './interfaces/dragged-element';

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
    this._trainsService.addLocomotive();

  }

  dragStartCarriage() {

    this._trainsService.setDraggedElementToCarriage();
  }

  dragStartLocomotive() {

    this._trainsService.setDraggedElementToLocomotive();
  }

}
