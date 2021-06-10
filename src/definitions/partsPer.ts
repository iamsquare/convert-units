import { Unit, UnitDefinition } from '../type';
import { PartsPerUnit } from './type';

export enum PartsPerEnum {
  PART_PER_MILLION = 'ppm',
  PART_PER_BILLION = 'ppb',
  PART_PER_TRILLION = 'ppt',
  PART_PER_QUADRILLION = 'ppq'
}

const other: Record<PartsPerUnit, Unit> = {
  [PartsPerEnum.PART_PER_MILLION]: {
    name: {
      singular: 'Part-per Million',
      plural: 'Parts-per Million'
    },
    anchor: 1
  },
  [PartsPerEnum.PART_PER_BILLION]: {
    name: {
      singular: 'Part-per Billion',
      plural: 'Parts-per Billion'
    },
    anchor: 1e-3
  },
  [PartsPerEnum.PART_PER_TRILLION]: {
    name: {
      singular: 'Part-per Trillion',
      plural: 'Parts-per Trillion'
    },
    anchor: 1e-6
  },
  [PartsPerEnum.PART_PER_QUADRILLION]: {
    name: {
      singular: 'Part-per Quadrillion',
      plural: 'Parts-per Quadrillion'
    },
    anchor: 1e-9
  }
};

const partsPer: UnitDefinition<'other', PartsPerUnit> = {
  systems: {
    other
  }
};

export default partsPer;
