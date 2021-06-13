import { ApparentPowerTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
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
      singular: ApparentPowerTranslationEnum.SINGULAR_VOLT_AMPERE,
      plural: ApparentPowerTranslationEnum.PLURAL_VOLT_AMPERE
    },
    anchor: 1
  },
  [ApparentPowerEnum.MILLIVOLT_AMPERE]: {
    name: {
      singular: ApparentPowerTranslationEnum.SINGULAR_MILLIVOLT_AMPERE,
      plural: ApparentPowerTranslationEnum.PLURAL_MILLIVOLT_AMPERE
    },
    anchor: 1e-3
  },
  [ApparentPowerEnum.KILOVOLT_AMPERE]: {
    name: {
      singular: ApparentPowerTranslationEnum.SINGULAR_KILOVOLT_AMPERE,
      plural: ApparentPowerTranslationEnum.PLURAL_KILOVOLT_AMPERE
    },
    anchor: 1e3
  },
  [ApparentPowerEnum.MEGAVOLT_AMPERE]: {
    name: {
      singular: ApparentPowerTranslationEnum.SINGULAR_MEGAVOLT_AMPERE,
      plural: ApparentPowerTranslationEnum.PLURAL_MEGAVOLT_AMPERE
    },
    anchor: 1e6
  },
  [ApparentPowerEnum.GIGAVOLT_AMPERE]: {
    name: {
      singular: ApparentPowerTranslationEnum.SINGULAR_GIGAVOLT_AMPERE,
      plural: ApparentPowerTranslationEnum.PLURAL_GIGAVOLT_AMPERE
    },
    anchor: 1e9
  }
};

const apparentPower: MeasureDefinition<'metric', ApparentPowerUnit> = {
  systems: {
    metric
  }
};

export default apparentPower;
