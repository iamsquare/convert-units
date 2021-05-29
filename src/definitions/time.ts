import { Definition } from './type';
import { TimeUnit } from './type/units.type';

export enum TimeEnum {
  NANOSECOND = 'ns',
  MICROSECOND = 'mu',
  MILLISECOND = 'ms',
  SECOND = 's',
  MINUTE = 'min',
  HOUR = 'h',
  DAY = 'd',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year'
}

const time = {
  [TimeEnum.NANOSECOND]: {
    name: {
      singular: 'Nanosecond',
      plural: 'Nanoseconds'
    },
    anchor: 1e-9
  },
  [TimeEnum.MICROSECOND]: {
    name: {
      singular: 'Microsecond',
      plural: 'Microseconds'
    },
    anchor: 1e-6
  },
  [TimeEnum.MILLISECOND]: {
    name: {
      singular: 'Millisecond',
      plural: 'Milliseconds'
    },
    anchor: 1e-3
  },
  [TimeEnum.SECOND]: {
    name: {
      singular: 'Second',
      plural: 'Seconds'
    },
    anchor: 1
  },
  [TimeEnum.MINUTE]: {
    name: {
      singular: 'Minute',
      plural: 'Minutes'
    },
    anchor: 60
  },
  [TimeEnum.HOUR]: {
    name: {
      singular: 'Hour',
      plural: 'Hours'
    },
    anchor: 3600
  },
  [TimeEnum.DAY]: {
    name: {
      singular: 'Day',
      plural: 'Days'
    },
    anchor: 86400
  },
  [TimeEnum.WEEK]: {
    name: {
      singular: 'Week',
      plural: 'Weeks'
    },
    anchor: 604800
  },
  [TimeEnum.MONTH]: {
    name: {
      singular: 'Month',
      plural: 'Months'
    },
    anchor: 2629800
  },
  [TimeEnum.YEAR]: {
    name: {
      singular: 'Year',
      plural: 'Years'
    },
    anchor: 220903200
  }
};

export default {
  systems: {
    time
  },
  anchors: {
    time: {
      unit: TimeEnum.SECOND,
      ratio: 1
    }
  }
} as Definition<'time', TimeUnit>;
