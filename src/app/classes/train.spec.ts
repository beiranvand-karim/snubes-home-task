
import {Train} from './train';
import * as data from './trains.data';

describe('train class', () => {


  beforeEach(() => {

  });

  afterEach(() => {

  });


  it('create train class instance', () => {


    const _train = new Train(data.train1_arrive, data.train1_departure);

    expect(_train.arriveTime).toBe(data.train1_arrive);
  });

  it('arrive time', () => {

    const _train = new Train(data.train1_arrive, data.train1_departure);

    expect(_train.arriveTime).toBe(data.train1_arrive);
  });

  it('departure time', () => {

    const _train = new Train(data.train1_arrive, data.train1_departure);

    expect(_train.departureTime).toBe(data.train1_departure);

  });

  it('conflict function: when the other train conflicts with the train:' +
    'arrive time of the other train is between arrive time and departure time of the train', () => {

    expect(data.train1.conflict(data.train2)).toBe(true);
  });


  it('conflict function: when the other train conflicts with the train:' +
    'the departure time of the other trains is between of equals the arrive time and departure time of the train', () => {

    expect(data.train1.conflict(data.train2)).toBe(true);
  });

  it('conflict function: when the trains does NOT conflict with the train.' +
    'the departure time of the other train is less than arrive time of train', () => {

    expect(data.train1.conflict(data.train4)).toBe(false);
  });

  it('conflict function: when the trains does NOT conflict with the train.' +
    'the arrive time of the other train is greater than that departure time of the train', () => {

    expect(data.train1.conflict(data.train3)).toBe(true);
  });

});
