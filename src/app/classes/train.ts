export class Train {

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

}
