



import {Lines} from './lines';
import {Train} from './train';


/**
 * new Date(year, month, date, hours, minutes, seconds, milliseconds);
 * arrive and departure times for first train
 * @type {Date}
 */
export const train1_arrive = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  1,
  0,
  Lines.second,
  Lines.millisecond
);

export const train1_departure = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  2,
  0,
  Lines.second,
  Lines.millisecond
);

/**
 * arrive and departure times for second train
 * @type {Date}
 */
export const train2_arrive = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  1,
  20,
  Lines.second,
  Lines.millisecond
);

export const train2_departure = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  1,
  40,
  Lines.second,
  Lines.millisecond
);
/**
 * arrive and departure times for third train
 *
 * @type {Date}
 */
export const train3_arrive = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  1,
  30,
  Lines.second,
  Lines.millisecond
);


export const train3_departure = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  2,
  30,
  Lines.second,
  Lines.millisecond
);



export const train4_arrive = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  18,
  30,
  Lines.second,
  Lines.millisecond
);


export const train4_departure = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  18,
  40,
  Lines.second,
  Lines.millisecond
);



export const train5_arrive = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  18,
  30,
  Lines.second,
  Lines.millisecond
);


export const train5_departure = new Date(
  Lines.year,
  Lines.month,
  Lines.day,
  19,
  30,
  Lines.second,
  Lines.millisecond
);

export const _arriveTimes: Date[] = [train1_arrive, train2_arrive, train3_arrive];
export const _departureTimes: Date[] = [train1_departure, train2_departure, train3_departure];



export const train1 = new Train(train1_arrive, train1_departure);
export const train2 = new Train(train2_arrive, train2_departure);
export const train3 = new Train(train3_arrive, train3_departure);
export const train4 = new Train(train4_arrive, train4_departure);
export const train5 = new Train(train5_arrive, train5_departure);
