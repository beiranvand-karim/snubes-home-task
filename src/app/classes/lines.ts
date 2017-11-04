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

    if ( trains.length >= 1) {
      this.lines.push(new Line([trains[0]]));
    }

    if ( trains.length >= 2) {

      if ( this.lines[0].line[0].conflict(trains[1])) {
        this.lines.push(new Line([trains[1]]));
      } else {
        this.lines[0].insertAtEnd(trains[1]);
      }
    }

    for (let i = 0; i < trains.length; i++ ) {

      for ( let j = 0; j < this.lines.length; j++ ) {

        for (let k = 0; k < this.lines[j].line.length; k++ ) {

          if ( this.lines[j].line[k].conflict(trains[i])) {
              break;
          }
        }

      }
    }




    return this.lines.length;
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
