import { CurrentTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { CurrentUnit } from './type';

export enum CurrentEnum {
  AMPERE = 'A',
  MILLIAMPERE = 'mA',
  KILOAMPERE = 'kA'
}

const metric: Record<CurrentUnit, Unit> = {
  [CurrentEnum.AMPERE]: {
    name: {
      singular: CurrentTranslationEnum.SINGULAR_AMPERE,
      plural: CurrentTranslationEnum.PLURAL_AMPERE
    },
    anchor: 1
  },
  [CurrentEnum.MILLIAMPERE]: {
    name: {
      singular: CurrentTranslationEnum.SINGULAR_MILLIAMPERE,
      plural: CurrentTranslationEnum.PLURAL_MILLIAMPERE
    },
    anchor: 1e-3
  },
  [CurrentEnum.KILOAMPERE]: {
    name: {
      singular: CurrentTranslationEnum.SINGULAR_KILOAMPERE,
      plural: CurrentTranslationEnum.PLURAL_KILOAMPERE
    },
    anchor: 1e3
  }
};

const current: MeasureDefinition<'metric', CurrentUnit> = {
  systems: {
    metric
  }
};

export default current;
