import { Definition } from './type';
import { ChargeUnit } from './type/units.type';

export enum ChargeEnum {
  COULOMB = 'c',
  MILLICOULOMB = 'mC',
  MICROCOULOMB = 'μC',
  NANOCOULOMB = 'nC',
  PICOCOULOMB = 'pC'
}

const charge = {
  [ChargeEnum.COULOMB]: {
    name: {
      singular: 'Coulomb',
      plural: 'Coulombs'
    },
    toAnchor: 1
  },
  [ChargeEnum.MILLICOULOMB]: {
    name: {
      singular: 'Millicoulomb',
      plural: 'Millicoulombs'
    },
    toAnchor: 1e-3
  },
  [ChargeEnum.MICROCOULOMB]: {
    name: {
      singular: 'Microcoulomb',
      plural: 'Microcoulombs'
    },
    toAnchor: 1e-6
  },
  [ChargeEnum.NANOCOULOMB]: {
    name: {
      singular: 'Nanocoulomb',
      plural: 'Nanocoulombs'
    },
    toAnchor: 1e-9
  },
  [ChargeEnum.PICOCOULOMB]: {
    name: {
      singular: 'Picocoulomb',
      plural: 'Picocoulombs'
    },
    toAnchor: 1e-12
  }
};

export default {
  systems: {
    charge
  },
  anchors: {
    charge: {
      unit: ChargeEnum.COULOMB,
      ratio: 1
    }
  }
} as Definition<'charge', ChargeUnit>;
