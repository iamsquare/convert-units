import { Definition } from '../type';
import { ApparentPowerUnit } from './type/units.type';

export enum ApparentPowerEnum {
  VOLT_AMPERE = 'VA',
  MILLIVOLT_AMPERE = 'mVA',
  KILOVOLT_AMPERE = 'kVA',
  MEGAVOLT_AMPERE = 'MVA',
  GIGAVOLT_AMPERE = 'GVA'
}

const metric = {
  [ApparentPowerEnum.VOLT_AMPERE]: {
    name: {
      singular: 'Volt-Ampere',
      plural: 'Volt-Amperes'
    },
    anchor: 1
  },
  [ApparentPowerEnum.MILLIVOLT_AMPERE]: {
    name: {
      singular: 'Millivolt-Ampere',
      plural: 'Millivolt-Amperes'
    },
    anchor: 1e-3
  },
  [ApparentPowerEnum.KILOVOLT_AMPERE]: {
    name: {
      singular: 'Kilovolt-Ampere',
      plural: 'Kilovolt-Amperes'
    },
    anchor: 1e3
  },
  [ApparentPowerEnum.MEGAVOLT_AMPERE]: {
    name: {
      singular: 'Megavolt-Ampere',
      plural: 'Megavolt-Amperes'
    },
    anchor: 1e6
  },
  [ApparentPowerEnum.GIGAVOLT_AMPERE]: {
    name: {
      singular: 'Gigavolt-Ampere',
      plural: 'Gigavolt-Amperes'
    },
    anchor: 1e9
  }
};

export default {
  systems: {
    metric
  },
  anchors: {
    metric: {
      unit: ApparentPowerEnum.VOLT_AMPERE,
      ratio: 1
    }
  }
} as Definition<'metric', ApparentPowerUnit>;
