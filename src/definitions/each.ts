import { Definition } from '../type';
import { EachUnit } from './type/units.type';

export enum EachEnum {
  EACH = 'ea',
  DOZEN = 'dz'
}

const metric = {
  [EachEnum.EACH]: {
    name: {
      singular: 'Each',
      plural: 'Each'
    },
    anchor: 1
  },
  [EachEnum.DOZEN]: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens'
    },
    anchor: 12
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: EachEnum.EACH,
      ratio: 1
    }
  }
} as Definition<'metric', EachUnit>;
