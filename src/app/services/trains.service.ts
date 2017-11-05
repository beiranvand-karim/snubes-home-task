import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Train} from '../interfaces/train';
import {DraggedElement} from '../interfaces/dragged-element';

@Injectable()
export class TrainsService {


  private _trains = new BehaviorSubject<Train[]>([]);

  public trains$ = this._trains.asObservable();


  private _draggedElementType = new BehaviorSubject<DraggedElement>({ locomotive: false, carriage: false});

  public draggedElementType$ = this._draggedElementType.asObservable();

  constructor() { }


  addCarriage(trainId) {

    this._draggedElementType.subscribe(elType => {

      this._trains.subscribe(trains => {
        if (elType.carriage) {
          trains.find(train => train.trainId === trainId).carriages ++;
        }
      });
    });


  }

  addLocomotive() {

    this._draggedElementType.subscribe(type => {

      this._trains.subscribe(trains => {

        if (type.locomotive) {
          trains.push({trainId: trains.length + 1, locomotive: true, carriages: 0});
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
