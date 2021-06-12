import { PartsPerTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { PartsPerUnit } from './type';

export enum PartsPerEnum {
  PART_PER_MILLION = 'ppm',
  PART_PER_BILLION = 'ppb',
  PART_PER_TRILLION = 'ppt',
  PART_PER_QUADRILLION = 'ppq'
}

const other: Record<PartsPerUnit, Unit> = {
  [PartsPerEnum.PART_PER_MILLION]: {
    name: {
      singular: translationModule.getTranslationByKey(PartsPerTranslationEnum.SINGULAR_PART_PER_MILLION),
      plural: translationModule.getTranslationByKey(PartsPerTranslationEnum.PLURAL_PART_PER_MILLION)
    },
    anchor: 1
  },
  [PartsPerEnum.PART_PER_BILLION]: {
    name: {
      singular: translationModule.getTranslationByKey(PartsPerTranslationEnum.SINGULAR_PART_PER_BILLION),
      plural: translationModule.getTranslationByKey(PartsPerTranslationEnum.PLURAL_PART_PER_BILLION)
    },
    anchor: 1e-3
  },
  [PartsPerEnum.PART_PER_TRILLION]: {
    name: {
      singular: translationModule.getTranslationByKey(PartsPerTranslationEnum.SINGULAR_PART_PER_TRILLION),
      plural: translationModule.getTranslationByKey(PartsPerTranslationEnum.PLURAL_PART_PER_TRILLION)
    },
    anchor: 1e-6
  },
  [PartsPerEnum.PART_PER_QUADRILLION]: {
    name: {
      singular: translationModule.getTranslationByKey(PartsPerTranslationEnum.SINGULAR_PART_PER_QUADRILLION),
      plural: translationModule.getTranslationByKey(PartsPerTranslationEnum.PLURAL_PART_PER_QUADRILLION)
    },
    anchor: 1e-9
  }
};

const partsPer: UnitDefinition<'other', PartsPerUnit> = {
  systems: {
    other
  }
};

export default partsPer;
