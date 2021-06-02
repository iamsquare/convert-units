export enum CurrentEnum {
  AMPERE = 'A',
  MILLIAMPERE = 'mA',
  KILOAMPERE = 'kA'
}

const metric = {
  [CurrentEnum.AMPERE]: {
    name: {
      singular: 'Ampere',
      plural: 'Amperes'
    },
    anchor: 1
  },
  [CurrentEnum.MILLIAMPERE]: {
    name: {
      singular: 'Milliampere',
      plural: 'Milliamperes'
    },
    anchor: 1e-3
  },
  [CurrentEnum.KILOAMPERE]: {
    name: {
      singular: 'Kiloampere',
      plural: 'Kiloamperes'
    },
    anchor: 1e3
  }
};

const current = {
  systems: {
    metric
  }
};

export default current;
