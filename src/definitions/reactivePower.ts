import { ReactivePowerTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ReactivePowerUnit } from './type';

export enum ReactivePowerEnum {
  VOLT_AMPERE_REACTIVE = 'VAR',
  MILLIVOLT_AMPERE_REACTIVE = 'mVAR',
  KILOVOLT_AMPERE_REACTIVE = 'kVAR',
  MEGAVOLT_AMPERE_REACTIVE = 'MVAR',
  GIGAVOLT_AMPERE_REACTIVE = 'GVAR'
}

const metric: Record<ReactivePowerUnit, Unit> = {
  [ReactivePowerEnum.VOLT_AMPERE_REACTIVE]: {
    name: {
      singular: ReactivePowerTranslationEnum.SINGULAR_VOLT_AMPERE_REACTIVE,
      plural: ReactivePowerTranslationEnum.PLURAL_VOLT_AMPERE_REACTIVE
    },
    anchor: 1
  },
  [ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: ReactivePowerTranslationEnum.SINGULAR_MILLIVOLT_AMPERE_REACTIVE,
      plural: ReactivePowerTranslationEnum.PLURAL_MILLIVOLT_AMPERE_REACTIVE
    },
    anchor: 1e-3
  },
  [ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: ReactivePowerTranslationEnum.SINGULAR_KILOVOLT_AMPERE_REACTIVE,
      plural: ReactivePowerTranslationEnum.PLURAL_KILOVOLT_AMPERE_REACTIVE
    },
    anchor: 1e3
  },
  [ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: ReactivePowerTranslationEnum.SINGULAR_MEGAVOLT_AMPERE_REACTIVE,
      plural: ReactivePowerTranslationEnum.PLURAL_MEGAVOLT_AMPERE_REACTIVE
    },
    anchor: 1e6
  },
  [ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: ReactivePowerTranslationEnum.SINGULAR_GIGAVOLT_AMPERE_REACTIVE,
      plural: ReactivePowerTranslationEnum.PLURAL_GIGAVOLT_AMPERE_REACTIVE
    },
    anchor: 1e9
  }
};

export type ReactivePowerSystems = 'metric';

const reactivePower: MeasureDefinition<ReactivePowerSystems, ReactivePowerUnit> = {
  systems: {
    metric
  }
};

export default reactivePower;
