import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Train} from '../classes/train';
import {DraggedElement} from '../classes/dragged-element';
import {Locomotive} from '../classes/locomotive';
import {Carriage} from '../classes/carriage';

@Injectable()
export class TrainsService {

  private _trains = new BehaviorSubject<Train[]>([]);

  public trains$ = this._trains.asObservable();

  private _draggedElementType = new BehaviorSubject<DraggedElement>({locomotive: false, carriage: false});

  public draggedElementType$ = this._draggedElementType.asObservable();

  constructor() { }


  addCarriage(trainId) {

    this._draggedElementType.subscribe(elType => {

      this._trains.subscribe(trains => {
        if (elType.carriage) {
          const carriages = trains.find(train => train.id === trainId).carriages;

          const newCarriage = new Carriage();
          newCarriage.id = carriages.length + 1;

          carriages.push(newCarriage);
        }
      });
    });


  }

  addTrain(arriveTime: Date, departureTime: Date) {

    this._draggedElementType.subscribe(type => {

      this._trains.subscribe(trains => {

        if (type.locomotive) {

          const locomotive = new Locomotive();
          locomotive.id = 1;

          const train = new Train(arriveTime, departureTime);
          train.id = trains.length + 1;
          train.carriages = [];

          trains.push(train);
        }
      });
    });
  }

  setDraggedElementToLocomotive() {
    this.draggedElementType$.subscribe(data => {
      data.locomotive = true;
      data.carriage = false;
    });
  }


  setDraggedElementToCarriage() {
    this.draggedElementType$.subscribe(data => {
      data.locomotive = false;
      data.carriage = true;
    });
  }

}
