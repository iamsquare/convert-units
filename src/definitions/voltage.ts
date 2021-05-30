import { Definition } from '../type';
import { VoltageUnit } from './type/units.type';

export enum VoltageEnum {
  VOLT = 'V',
  MILLIVOLT = 'mV',
  KILOVOLT = 'kV'
}

const metric = {
  [VoltageEnum.VOLT]: {
    name: {
      singular: 'Volt',
      plural: 'Volts'
    },
    anchor: 1
  },
  [VoltageEnum.MILLIVOLT]: {
    name: {
      singular: 'Millivolt',
      plural: 'Millivolts'
    },
    anchor: 0.001
  },
  [VoltageEnum.KILOVOLT]: {
    name: {
      singular: 'Kilovolt',
      plural: 'Kilovolts'
    },
    anchor: 1000
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: VoltageEnum.VOLT,
      ratio: 1
    }
  }
} as Definition<'metric', VoltageUnit>;
