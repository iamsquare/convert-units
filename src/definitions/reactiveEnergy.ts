import { ReactiveEnergyTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ReactiveEnergyUnit } from './type';

export enum ReactiveEnergyEnum {
  VOLT_AMPERE_REACTIVE_HOUR = 'VARh',
  MILLIVOLT_AMPERE_REACTIVE_HOUR = 'mVARh',
  KILOVOLT_AMPERE_REACTIVE_HOUR = 'kVARh',
  MEGAVOLT_AMPERE_REACTIVE_HOUR = 'MVARh',
  GIGAVOLT_AMPERE_REACTIVE_HOUR = 'GVARh'
}

const metric: Record<ReactiveEnergyUnit, Unit> = {
  [ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: ReactiveEnergyTranslationEnum.SINGULAR_VOLT_AMPERE_REACTIVE_HOUR,
      plural: ReactiveEnergyTranslationEnum.PLURAL_VOLT_AMPERE_REACTIVE_HOUR
    },
    anchor: 1
  },
  [ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: ReactiveEnergyTranslationEnum.SINGULAR_MILLIVOLT_AMPERE_REACTIVE_HOUR,
      plural: ReactiveEnergyTranslationEnum.PLURAL_MILLIVOLT_AMPERE_REACTIVE_HOUR
    },
    anchor: 1e-3
  },
  [ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: ReactiveEnergyTranslationEnum.SINGULAR_KILOVOLT_AMPERE_REACTIVE_HOUR,
      plural: ReactiveEnergyTranslationEnum.PLURAL_KILOVOLT_AMPERE_REACTIVE_HOUR
    },
    anchor: 1e3
  },
  [ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: ReactiveEnergyTranslationEnum.SINGULAR_MEGAVOLT_AMPERE_REACTIVE_HOUR,
      plural: ReactiveEnergyTranslationEnum.PLURAL_MEGAVOLT_AMPERE_REACTIVE_HOUR
    },
    anchor: 1e6
  },
  [ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR]: {
    name: {
      singular: ReactiveEnergyTranslationEnum.SINGULAR_GIGAVOLT_AMPERE_REACTIVE_HOUR,
      plural: ReactiveEnergyTranslationEnum.PLURAL_GIGAVOLT_AMPERE_REACTIVE_HOUR
    },
    anchor: 1e9
  }
};

export type ReactiveEnergySystems = 'metric';

const reactiveEnergy: MeasureDefinition<ReactiveEnergySystems, ReactiveEnergyUnit> = {
  systems: {
    metric
  }
};

export default reactiveEnergy;
