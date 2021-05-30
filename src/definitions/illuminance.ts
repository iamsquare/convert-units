import { Definition } from '../type';
import { IlluminanceUnit } from './type/units.type';

export enum MetricIlluminanceEnum {
  LUX = 'lx'
}

export enum ImperialIlluminanceEnum {
  FOOT_CANDLE = 'ft-cd'
}

const metric = {
  [MetricIlluminanceEnum.LUX]: {
    name: {
      singular: 'Lux',
      plural: 'Lux'
    },
    anchor: 1
  }
};

const imperial = {
  [ImperialIlluminanceEnum.FOOT_CANDLE]: {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles'
    },
    anchor: 1
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricIlluminanceEnum.LUX,
      ratio: 1 / 10.76391
    },
    imperial: {
      unit: ImperialIlluminanceEnum.FOOT_CANDLE,
      ratio: 10.76391
    }
  }
} as Definition<'metric' | 'imperial', IlluminanceUnit>;
