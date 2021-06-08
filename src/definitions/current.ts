import { CurrentTranslationEnum, translationModule } from '../i18n';
import { Unit } from '../type';
import { CurrentUnit } from './type';

export enum CurrentEnum {
  AMPERE = 'A',
  MILLIAMPERE = 'mA',
  KILOAMPERE = 'kA'
}

const metric: Record<CurrentUnit, Unit> = {
  [CurrentEnum.AMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(CurrentTranslationEnum.SINGULAR_AMPERE),
      plural: translationModule.getTranslationByKey(CurrentTranslationEnum.PLURAL_AMPERE)
    },
    anchor: 1
  },
  [CurrentEnum.MILLIAMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(CurrentTranslationEnum.SINGULAR_MILLIAMPERE),
      plural: translationModule.getTranslationByKey(CurrentTranslationEnum.PLURAL_MILLIAMPERE)
    },
    anchor: 1e-3
  },
  [CurrentEnum.KILOAMPERE]: {
    name: {
      singular: translationModule.getTranslationByKey(CurrentTranslationEnum.SINGULAR_KILOAMPERE),
      plural: translationModule.getTranslationByKey(CurrentTranslationEnum.PLURAL_KILOAMPERE)
    },
    anchor: 1e3
  }
};

const current = {
  systems: {
    metric
  }
};

export default current;
