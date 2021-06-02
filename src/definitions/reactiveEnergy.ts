export enum ReactiveEnergyEnum {
  VOLT_AMPERE_REACTIVE_HOUR = 'VARh',
  MILLIVOLT_AMPERE_REACTIVE_HOUR = 'mVARh',
  KILOVOLT_AMPERE_REACTIVE_HOUR = 'kVARh',
  MEGAVOLT_AMPERE_REACTIVE_HOUR = 'MVARh',
  GIGAVOLT_AMPERE_REACTIVE_HOUR = 'GVARh'
}

const metric = {
  [ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: 'Volt-Ampere Reactive Hour',
      plural: 'Volt-Amperes Reactive Hour'
    },
    anchor: 1
  },
  [ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour',
      plural: 'Millivolt-Amperes Reactive Hour'
    },
    anchor: 1e-3
  },
  [ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour',
      plural: 'Kilovolt-Amperes Reactive Hour'
    },
    anchor: 1e3
  },
  [ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour',
      plural: 'Megavolt-Amperes Reactive Hour'
    },
    anchor: 1e6
  },
  [ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour',
      plural: 'Gigavolt-Amperes Reactive Hour'
    },
    anchor: 1e9
  }
};

const reactiveEnergy = {
  systems: {
    metric
  }
};

export default reactiveEnergy;
