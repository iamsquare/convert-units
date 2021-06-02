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

const illuminance = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricIlluminanceEnum.LUX,
      ratio: {
        imperial: 1 / 10.76391
      }
    },
    imperial: {
      unit: ImperialIlluminanceEnum.FOOT_CANDLE,
      ratio: {
        metric: 10.76391
      }
    }
  }
};

export default illuminance;
