import { Definition } from './type';
import { CurrentUnit } from './type/units.type';

export enum CurrentEnum {
  AMPERE = 'A',
  MILLIAMPERE = 'mA',
  KILOAMPERE = 'kA'
}

const current = {
  [CurrentEnum.AMPERE]: {
    name: {
      singular: 'Ampere',
      plural: 'Amperes'
    },
    toAnchor: 1
  },
  [CurrentEnum.MILLIAMPERE]: {
    name: {
      singular: 'Milliampere',
      plural: 'Milliamperes'
    },
    toAnchor: 1e-3
  },
  [CurrentEnum.KILOAMPERE]: {
    name: {
      singular: 'Kiloampere',
      plural: 'Kiloamperes'
    },
    toAnchor: 1e3
  }
};

export default {
  systems: {
    current
  },
  anchors: {
    current: {
      unit: CurrentEnum.AMPERE,
      ratio: 1
    }
  }
} as Definition<'current', CurrentUnit>;
