import { Definition } from '../type';
import { ChargeUnit } from './type/units.type';

export enum ChargeEnum {
  COULOMB = 'c',
  MILLICOULOMB = 'mC',
  MICROCOULOMB = 'μC',
  NANOCOULOMB = 'nC',
  PICOCOULOMB = 'pC'
}

const metric = {
  [ChargeEnum.COULOMB]: {
    name: {
      singular: 'Coulomb',
      plural: 'Coulombs'
    },
    anchor: 1
  },
  [ChargeEnum.MILLICOULOMB]: {
    name: {
      singular: 'Millicoulomb',
      plural: 'Millicoulombs'
    },
    anchor: 1e-3
  },
  [ChargeEnum.MICROCOULOMB]: {
    name: {
      singular: 'Microcoulomb',
      plural: 'Microcoulombs'
    },
    anchor: 1e-6
  },
  [ChargeEnum.NANOCOULOMB]: {
    name: {
      singular: 'Nanocoulomb',
      plural: 'Nanocoulombs'
    },
    anchor: 1e-9
  },
  [ChargeEnum.PICOCOULOMB]: {
    name: {
      singular: 'Picocoulomb',
      plural: 'Picocoulombs'
    },
    anchor: 1e-12
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: ChargeEnum.COULOMB,
      ratio: 1
    }
  }
} as Definition<'metric', ChargeUnit>;
