import {Line} from './line';
import {Train} from './train';

export class Lines {


  public static year = 2017;
  public static month = 11;
  public static day = 29;
  public static second = 0;
  public static millisecond = 0;


  private _lines: Line[] = [];



  public count(): number {

    return this.lines.length;
  }

  public calculate(trains: Train[]): number {

    this.lines = [];

    for (let i = 0; i < trains.length; i ++) {
      let inserted = false;
      const train = trains[i];
      for (let j = 0; j < this.lines.length; j++) {
        inserted =  this.lines[j].canInsertTrain(train);
        if (inserted) {
          this.lines[j].insertAtEnd(train);
          break;
        }
      }
      if (!inserted) {
        this.lines.push(new Line([train]));
      }
    }

    return this.count();

  }


  public sort(dates: Date[]): Date[] {

    return dates.sort();

  }

  get lines(): Line[] {
    return this._lines;
  }

  set lines(value: Line[]) {
    this._lines = value;
  }

}
