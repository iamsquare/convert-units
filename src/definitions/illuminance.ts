const metric = {
  lx: {
    name: {
      singular: 'Lux',
      plural: 'Lux'
    },
    to_anchor: 1
  }
};

const imperial = {
  'ft-cd': {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles'
    },
    to_anchor: 1
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: 'lx',
      ratio: 1 / 10.76391
    },
    imperial: {
      unit: 'ft-cd',
      ratio: 10.76391
    }
  }
};
