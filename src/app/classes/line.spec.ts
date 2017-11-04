
import {Line} from './line';
import * as data from './trains.data';
import {train1} from './trains.data';

describe('line class', () => {


  let _line1: Line;

  beforeEach(() => {

    _line1 = new Line([data.train1]);

  });

  afterEach(() => {

    _line1 = null;
  });

  it('create line', () => {



    expect(_line1.line.toString()).toBe([train1].toString());
  });

  it('size function', () => {

    expect(_line1.size()).toBe(1);

  });

  it('insertAtEnd function', () => {

    expect(_line1.insertAtEnd(data.train2).toString()).toBe([data.train1, data.train2].toString());
  });



});
