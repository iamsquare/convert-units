import { Unit, UnitDefinition } from '../type';
import { VoltageUnit } from './type';

export enum VoltageEnum {
  VOLT = 'V',
  MILLIVOLT = 'mV',
  KILOVOLT = 'kV'
}

const metric: Record<VoltageUnit, Unit> = {
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

const voltage: UnitDefinition<'metric', VoltageUnit> = {
  systems: {
    metric
  }
};

export default voltage;
