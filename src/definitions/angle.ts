import { AngleTranslationEnum, translationModule } from '../i18n';

export enum AngleEnum {
  RADIANS = 'rad',
  DEGREES = 'deg',
  GRADIANS = 'grad',
  ARCMINUTES = 'arcmin',
  ARCSECONDS = 'arcsec'
}

const metric = {
  [AngleEnum.RADIANS]: {
    name: {
      singular: translationModule.getTranslationByKey(AngleTranslationEnum.SINGULAR_RADIANS),
      plural: translationModule.getTranslationByKey(AngleTranslationEnum.PLURAL_RADIANS)
    },
    anchor: 180 / Math.PI
  },
  [AngleEnum.DEGREES]: {
    name: {
      singular: translationModule.getTranslationByKey(AngleTranslationEnum.SINGULAR_DEGREES),
      plural: translationModule.getTranslationByKey(AngleTranslationEnum.PLURAL_DEGREES)
    },
    anchor: 1
  },
  [AngleEnum.GRADIANS]: {
    name: {
      singular: translationModule.getTranslationByKey(AngleTranslationEnum.SINGULAR_GRADIANS),
      plural: translationModule.getTranslationByKey(AngleTranslationEnum.PLURAL_GRADIANS)
    },
    anchor: 9 / 10
  },
  [AngleEnum.ARCMINUTES]: {
    name: {
      singular: translationModule.getTranslationByKey(AngleTranslationEnum.SINGULAR_ARCMINUTES),
      plural: translationModule.getTranslationByKey(AngleTranslationEnum.PLURAL_ARCMINUTES)
    },
    anchor: 1 / 60
  },
  [AngleEnum.ARCSECONDS]: {
    name: {
      singular: translationModule.getTranslationByKey(AngleTranslationEnum.SINGULAR_ARCSECONDS),
      plural: translationModule.getTranslationByKey(AngleTranslationEnum.PLURAL_ARCSECONDS)
    },
    anchor: 1 / 3600
  }
};

const angle = {
  systems: {
    metric
  }
};

export default angle;
