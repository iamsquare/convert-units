import { Definition } from '../type';

export enum ReactivePowerEnum {
  VOLT_AMPERE_REACTIVE = 'VAR',
  MILLIVOLT_AMPERE_REACTIVE = 'mVAR',
  KILOVOLT_AMPERE_REACTIVE = 'kVAR',
  MEGAVOLT_AMPERE_REACTIVE = 'MVAR',
  GIGAVOLT_AMPERE_REACTIVE = 'GVAR'
}

const reactivePower = {
  [ReactivePowerEnum.VOLT_AMPERE_REACTIVE]: {
    name: {
      singular: 'Volt-Ampere Reactive',
      plural: 'Volt-Amperes Reactive'
    },
    anchor: 1
  },
  [ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: 'Millivolt-Ampere Reactive',
      plural: 'Millivolt-Amperes Reactive'
    },
    anchor: 1e-3
  },
  [ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: 'Kilovolt-Ampere Reactive',
      plural: 'Kilovolt-Amperes Reactive'
    },
    anchor: 1e3
  },
  [ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: 'Megavolt-Ampere Reactive',
      plural: 'Megavolt-Amperes Reactive'
    },
    anchor: 1e6
  },
  [ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: 'Gigavolt-Ampere Reactive',
      plural: 'Gigavolt-Amperes Reactive'
    },
    anchor: 1e9
  }
};

export default {
  systems: {
    reactivePower
  },
  anchors: {
    reactivePower: {
      unit: 'VAR',
      ratio: 1
    }
  }
} as Definition<'reactivePower', ReactivePowerEnum>;
