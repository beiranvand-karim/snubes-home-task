import {Carriage} from './carriage';
import {Locomotive} from './locomotive';

export class Train {


  private _id: number;
  private _locomotive: Locomotive;
  private _carriages: Carriage[];

  private _arriveTime: Date;
  private _departureTime: Date;

  constructor(arriveTime: Date, departureTime: Date) {
    this.arriveTime = arriveTime;
    this.departureTime = departureTime;
  }

  public conflict(otherTrain: Train): boolean {

    if (otherTrain.arriveTime >= this.arriveTime && otherTrain.arriveTime <= this.departureTime) {
      return true;
    }

    if (otherTrain.departureTime >= this.arriveTime && otherTrain.departureTime <= this.departureTime) {
      return true;
    }

    if (otherTrain.arriveTime < this.arriveTime && otherTrain.departureTime > this.departureTime) {
      return true;
    }

    return false;
  }

  set arriveTime(value: Date) {
    this._arriveTime = value;
  }

  get arriveTime(): Date {
    return this._arriveTime;
  }


  get departureTime(): Date {
    return this._departureTime;
  }

  set departureTime(value: Date) {
    this._departureTime = value;
  }

  get carriages(): Carriage[] {
    return this._carriages;
  }

  set carriages(value: Carriage[]) {
    this._carriages = value;
  }
  get locomotive(): Locomotive {
    return this._locomotive;
  }

  set locomotive(value: Locomotive) {
    this._locomotive = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

}
