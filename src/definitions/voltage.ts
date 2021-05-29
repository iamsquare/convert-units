const voltage = {
  V: {
    name: {
      singular: 'Volt',
      plural: 'Volts'
    },
    to_anchor: 1
  },
  mV: {
    name: {
      singular: 'Millivolt',
      plural: 'Millivolts'
    },
    to_anchor: 0.001
  },
  kV: {
    name: {
      singular: 'Kilovolt',
      plural: 'Kilovolts'
    },
    to_anchor: 1000
  }
};

export default {
  systems: {
    voltage
  },
  anchors: {
    metric: {
      unit: 'V',
      ratio: 1
    }
  }
};
