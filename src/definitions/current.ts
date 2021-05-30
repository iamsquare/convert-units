import { Definition } from '../type';
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
