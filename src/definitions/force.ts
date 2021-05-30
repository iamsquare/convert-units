import { Definition } from '../type';
import { ForceUnit } from './type/units.type';

export enum ForceEnum {
  NEWTON = 'N',
  KILONEWTON = 'kN',
  POUND_FORCE = 'lbf'
}

const metric = {
  [ForceEnum.NEWTON]: {
    name: {
      singular: 'Newton',
      plural: 'Newtons'
    },
    anchor: 1
  },
  [ForceEnum.KILONEWTON]: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons'
    },
    anchor: 1e3
  },
  [ForceEnum.POUND_FORCE]: {
    name: {
      singular: 'Pound-force',
      plural: 'Pound-forces'
    },
    anchor: 4.44822
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: ForceEnum.NEWTON,
      ratio: 1
    }
  }
} as Definition<'metric', ForceUnit>;
