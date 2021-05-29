import { Definition } from './type';
import { AngleUnit } from './type/units.type';

export enum AngleEnum {
  RADIANS = 'rad',
  DEGREES = 'deg',
  GRADIANS = 'grad',
  ARCMINUTES = 'arcmin',
  ARCSECONDS = 'arcsec'
}

const metric = {
  [AngleEnum.RADIANS]: {
    name: {
      singular: 'Radian',
      plural: 'Radians'
    },
    anchor: 180 / Math.PI
  },
  [AngleEnum.DEGREES]: {
    name: {
      singular: 'Degree',
      plural: 'Degrees'
    },
    anchor: 1
  },
  [AngleEnum.GRADIANS]: {
    name: {
      singular: 'Gradian',
      plural: 'Gradians'
    },
    anchor: 9 / 10
  },
  [AngleEnum.ARCMINUTES]: {
    name: {
      singular: 'Arcminute',
      plural: 'Arcminutes'
    },
    anchor: 1 / 60
  },
  [AngleEnum.ARCSECONDS]: {
    name: {
      singular: 'Arcsecond',
      plural: 'Arcseconds'
    },
    anchor: 1 / 3600
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: AngleEnum.DEGREES,
      ratio: 1
    }
  }
} as Definition<'metric', AngleUnit>;
