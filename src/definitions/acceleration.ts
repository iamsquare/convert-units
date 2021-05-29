import { Definition } from './type';
import { AccelerationUnit } from './type/units.type';

export enum AccelerationEnum {
  G_FORCE = 'g-force',
  METRE_PER_SECOND_SQUARED = 'm/s2'
}

const metric = {
  [AccelerationEnum.G_FORCE]: {
    name: {
      singular: 'g-force',
      plural: 'g-forces'
    },
    toAnchor: 9.80665
  },
  [AccelerationEnum.METRE_PER_SECOND_SQUARED]: {
    name: {
      singular: 'Metre per second squared',
      plural: 'Metres per second squared'
    },
    toAnchor: 1
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: AccelerationEnum.G_FORCE,
      ratio: 1
    }
  }
} as Definition<'metric', AccelerationUnit>;
