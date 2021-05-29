import { Definition } from './type';
import { FrequencyUnit } from './type/units.type';

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

const frequency = {
  [FrequencyEnum.HERTZ]: {
    name: {
      singular: 'Hertz',
      plural: 'Hertz'
    },
    toAnchor: 1
  },
  [FrequencyEnum.MILLIHERTZ]: {
    name: {
      singular: 'Millihertz',
      plural: 'Millihertz'
    },
    toAnchor: 1e-3
  },
  [FrequencyEnum.KILOHERTZ]: {
    name: {
      singular: 'Kilohertz',
      plural: 'Kilohertz'
    },
    toAnchor: 1e3
  },
  [FrequencyEnum.MEGAHERTZ]: {
    name: {
      singular: 'Megahertz',
      plural: 'Megahertz'
    },
    toAnchor: 1e6
  },
  [FrequencyEnum.GIGAHERTZ]: {
    name: {
      singular: 'Gigahertz',
      plural: 'Gigahertz'
    },
    toAnchor: 1e9
  },
  [FrequencyEnum.TERAHERTZ]: {
    name: {
      singular: 'Terahertz',
      plural: 'Terahertz'
    },
    toAnchor: 1e12
  },
  [FrequencyEnum.RPM]: {
    name: {
      singular: 'Rotation per minute',
      plural: 'Rotations per minute'
    },
    toAnchor: 1 / 60
  },
  [FrequencyEnum.DEGREE_PER_SECOND]: {
    name: {
      singular: 'Degree per second',
      plural: 'Degrees per second'
    },
    toAnchor: 1 / 360
  },
  [FrequencyEnum.RADIAN_PER_SECOND]: {
    name: {
      singular: 'Radian per second',
      plural: 'Radians per second'
    },
    toAnchor: 1 / (Math.PI * 2)
  }
};

export default {
  systems: {
    frequency
  },
  anchors: {
    frequency: {
      unit: FrequencyEnum.HERTZ,
      ratio: 1
    }
  }
} as Definition<'frequency', FrequencyUnit>;
