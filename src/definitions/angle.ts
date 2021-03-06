import { AngleTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { AngleUnit } from './type';

export enum AngleEnum {
  RADIANS = 'rad',
  DEGREES = 'deg',
  GRADIANS = 'grad',
  ARCMINUTES = 'arcmin',
  ARCSECONDS = 'arcsec'
}

const metric: Record<AngleUnit, Unit> = {
  [AngleEnum.RADIANS]: {
    name: {
      singular: AngleTranslationEnum.SINGULAR_RADIANS,
      plural: AngleTranslationEnum.PLURAL_RADIANS
    },
    anchor: 180 / Math.PI
  },
  [AngleEnum.DEGREES]: {
    name: {
      singular: AngleTranslationEnum.SINGULAR_DEGREES,
      plural: AngleTranslationEnum.PLURAL_DEGREES
    },
    anchor: 1
  },
  [AngleEnum.GRADIANS]: {
    name: {
      singular: AngleTranslationEnum.SINGULAR_GRADIANS,
      plural: AngleTranslationEnum.PLURAL_GRADIANS
    },
    anchor: 9 / 10
  },
  [AngleEnum.ARCMINUTES]: {
    name: {
      singular: AngleTranslationEnum.SINGULAR_ARCMINUTES,
      plural: AngleTranslationEnum.PLURAL_ARCMINUTES
    },
    anchor: 1 / 60
  },
  [AngleEnum.ARCSECONDS]: {
    name: {
      singular: AngleTranslationEnum.SINGULAR_ARCSECONDS,
      plural: AngleTranslationEnum.PLURAL_ARCSECONDS
    },
    anchor: 1 / 3600
  }
};

export type AngleSystems = 'metric';

const angle: MeasureDefinition<AngleSystems, AngleUnit> = {
  systems: {
    metric
  }
};

export default angle;
