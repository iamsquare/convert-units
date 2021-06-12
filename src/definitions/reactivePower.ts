import { ReactivePowerTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.SINGULAR_VOLT_AMPERE_REACTIVE),
      plural: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.PLURAL_VOLT_AMPERE_REACTIVE)
    },
    anchor: 1
  },
  [ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.SINGULAR_MILLIVOLT_AMPERE_REACTIVE),
      plural: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.PLURAL_MILLIVOLT_AMPERE_REACTIVE)
    },
    anchor: 1e-3
  },
  [ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.SINGULAR_KILOVOLT_AMPERE_REACTIVE),
      plural: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.PLURAL_KILOVOLT_AMPERE_REACTIVE)
    },
    anchor: 1e3
  },
  [ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.SINGULAR_MEGAVOLT_AMPERE_REACTIVE),
      plural: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.PLURAL_MEGAVOLT_AMPERE_REACTIVE)
    },
    anchor: 1e6
  },
  [ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE]: {
    name: {
      singular: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.SINGULAR_GIGAVOLT_AMPERE_REACTIVE),
      plural: translationModule.getTranslationByKey(ReactivePowerTranslationEnum.PLURAL_GIGAVOLT_AMPERE_REACTIVE)
    },
    anchor: 1e9
  }
};

const reactivePower: UnitDefinition<'metric', ReactivePowerUnit> = {
  systems: {
    metric
  }
};

export default reactivePower;
