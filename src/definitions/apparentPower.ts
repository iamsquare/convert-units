import { ApparentPowerTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { ApparentPowerUnit } from './type';

export enum ApparentPowerEnum {
  VOLT_AMPERE = 'VA',
  MILLIVOLT_AMPERE = 'mVA',
  KILOVOLT_AMPERE = 'kVA',
  MEGAVOLT_AMPERE = 'MVA',
  GIGAVOLT_AMPERE = 'GVA'
}

const metric: Record<ApparentPowerUnit, Unit> = {
  [ApparentPowerEnum.VOLT_AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.SINGULAR_VOLT_AMPERE),
      plural: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.PLURAL_VOLT_AMPERE)
    },
    anchor: 1
  },
  [ApparentPowerEnum.MILLIVOLT_AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.SINGULAR_MILLIVOLT_AMPERE),
      plural: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.PLURAL_MILLIVOLT_AMPERE)
    },
    anchor: 1e-3
  },
  [ApparentPowerEnum.KILOVOLT_AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.SINGULAR_KILOVOLT_AMPERE),
      plural: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.PLURAL_KILOVOLT_AMPERE)
    },
    anchor: 1e3
  },
  [ApparentPowerEnum.MEGAVOLT_AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.SINGULAR_MEGAVOLT_AMPERE),
      plural: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.PLURAL_MEGAVOLT_AMPERE)
    },
    anchor: 1e6
  },
  [ApparentPowerEnum.GIGAVOLT_AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.SINGULAR_GIGAVOLT_AMPERE),
      plural: translationModule.getTranslationByKey(ApparentPowerTranslationEnum.PLURAL_GIGAVOLT_AMPERE)
    },
    anchor: 1e9
  }
};

const apparentPower: UnitDefinition<'metric', ApparentPowerUnit> = {
  systems: {
    metric
  }
};

export default apparentPower;
