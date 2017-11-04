


import {Lines} from './lines';
import * as data from './trains.data';
import {Line} from './line';

describe('lines class', () => {


  let _lines0: Lines;

  beforeEach(() => {
    _lines0 = new Lines();
  });

  afterEach(() => {

    _lines0 = null;

  });


  it('lines setter', () => {

    const _line = new Line([data.train4, data.train1]);
    expect((_lines0.lines = [_line]).toString()).toBe([_line].toString());
  });




  it('sort arrive times', () => {

    expect(_lines0.sort(data._arriveTimes).toString()).toBe(data._arriveTimes.toString());
  });


  it('sort departure times', () => {

    const result: Date[] = [data.train2_departure, data.train1_departure, data.train3_departure];

    expect(_lines0.sort(data._departureTimes).toString()).toBe(result.toString());
  });

  it('count function when there is no line', () => {

    expect(_lines0.count()).toBe(0);
  });

  it('calculate lines when there is no train yet', () => {


    expect(_lines0.calculate([])).toBe(0);

  });

  it('calculate lines when there is one train', () => {

    expect(_lines0.calculate([data.train1])).toBe(1);
  });
  //
  it('calculate lines when there is 2 train that would go into 1 line', () => {

    expect(_lines0.calculate([data.train2, data.train1])).toBe(2);
  });

  it('calculate lines when there is 3 train that would go into 3 different lines', () => {

    expect(_lines0.calculate([data.train1, data.train2, data.train3])).toBe(3);
  });


});
