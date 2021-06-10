import { Unit, UnitDefinition } from '../type';
import { FrequencyUnit } from './type';

export enum FrequencyEnum {
  HERTZ = 'Hz',
  MILLIHERTZ = 'mHz',
  KILOHERTZ = 'kHz',
  MEGAHERTZ = 'MHz',
  GIGAHERTZ = 'GHz',
  TERAHERTZ = 'THz',
  RPM = 'rpm',
  DEGREE_PER_SECOND = 'deg/s',
  RADIAN_PER_SECOND = 'rad/s'
}

const metric: Record<FrequencyUnit, Unit> = {
  [FrequencyEnum.HERTZ]: {
    name: {
      singular: 'Hertz',
      plural: 'Hertz'
    },
    anchor: 1
  },
  [FrequencyEnum.MILLIHERTZ]: {
    name: {
      singular: 'Millihertz',
      plural: 'Millihertz'
    },
    anchor: 1e-3
  },
  [FrequencyEnum.KILOHERTZ]: {
    name: {
      singular: 'Kilohertz',
      plural: 'Kilohertz'
    },
    anchor: 1e3
  },
  [FrequencyEnum.MEGAHERTZ]: {
    name: {
      singular: 'Megahertz',
      plural: 'Megahertz'
    },
    anchor: 1e6
  },
  [FrequencyEnum.GIGAHERTZ]: {
    name: {
      singular: 'Gigahertz',
      plural: 'Gigahertz'
    },
    anchor: 1e9
  },
  [FrequencyEnum.TERAHERTZ]: {
    name: {
      singular: 'Terahertz',
      plural: 'Terahertz'
    },
    anchor: 1e12
  },
  [FrequencyEnum.RPM]: {
    name: {
      singular: 'Rotation per minute',
      plural: 'Rotations per minute'
    },
    anchor: 1 / 60
  },
  [FrequencyEnum.DEGREE_PER_SECOND]: {
    name: {
      singular: 'Degree per second',
      plural: 'Degrees per second'
    },
    anchor: 1 / 360
  },
  [FrequencyEnum.RADIAN_PER_SECOND]: {
    name: {
      singular: 'Radian per second',
      plural: 'Radians per second'
    },
    anchor: 1 / (Math.PI * 2)
  }
};

const frequency: UnitDefinition<'metric', FrequencyUnit> = {
  systems: {
    metric
  }
};

export default frequency;
