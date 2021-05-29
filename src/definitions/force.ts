import { Definition } from './type';
import { ForceUnit } from './type/units.type';

export enum ForceEnum {
  NEWTON = 'N',
  KILONEWTON = 'kN',
  POUND_FORCE = 'lbf'
}

const force = {
  [ForceEnum.NEWTON]: {
    name: {
      singular: 'Newton',
      plural: 'Newtons'
    },
    toAnchor: 1
  },
  [ForceEnum.KILONEWTON]: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons'
    },
    toAnchor: 1e3
  },
  [ForceEnum.POUND_FORCE]: {
    name: {
      singular: 'Pound-force',
      plural: 'Pound-forces'
    },
    toAnchor: 4.44822
  }
};

export default {
  systems: {
    force
  },
  anchors: {
    force: {
      unit: ForceEnum.NEWTON,
      ratio: 1
    }
  }
} as Definition<'force', ForceUnit>;
