import { PartsPerTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
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
      singular: PartsPerTranslationEnum.SINGULAR_PART_PER_MILLION,
      plural: PartsPerTranslationEnum.PLURAL_PART_PER_MILLION
    },
    anchor: 1
  },
  [PartsPerEnum.PART_PER_BILLION]: {
    name: {
      singular: PartsPerTranslationEnum.SINGULAR_PART_PER_BILLION,
      plural: PartsPerTranslationEnum.PLURAL_PART_PER_BILLION
    },
    anchor: 1e-3
  },
  [PartsPerEnum.PART_PER_TRILLION]: {
    name: {
      singular: PartsPerTranslationEnum.SINGULAR_PART_PER_TRILLION,
      plural: PartsPerTranslationEnum.PLURAL_PART_PER_TRILLION
    },
    anchor: 1e-6
  },
  [PartsPerEnum.PART_PER_QUADRILLION]: {
    name: {
      singular: PartsPerTranslationEnum.SINGULAR_PART_PER_QUADRILLION,
      plural: PartsPerTranslationEnum.PLURAL_PART_PER_QUADRILLION
    },
    anchor: 1e-9
  }
};

const partsPer: MeasureDefinition<'other', PartsPerUnit> = {
  systems: {
    other
  }
};

export default partsPer;
