import {Train} from './train';

export class Line {


  private _line: Train[] = [];


  constructor(trains: Train[]) {
    this.line = trains;
  }

  public canInsertTrain(train: Train): boolean {

    for (let i = 0; i < this.size(); i++) {
      const otherTrain = this.line[i];
      if (train.conflict(otherTrain)) {
        return false;
      }
    }
    return true;
  }

  public insertAtEnd(train: Train): Train[] {

    this.line.push(train);
    return this.line;
  }

  public size(): number {
    return this.line.length;
  }


  get line(): Train[] {
    return this._line;
  }

  set line(value: Train[]) {
    this._line = value;
  }

}
