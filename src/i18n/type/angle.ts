export enum AngleTranslationEnum {
  SINGULAR_RADIANS = 'SINGULAR_RADIANS',
  SINGULAR_DEGREES = 'SINGULAR_DEGREES',
  SINGULAR_GRADIANS = 'SINGULAR_GRADIANS',
  SINGULAR_ARCMINUTES = 'SINGULAR_ARCMINUTES',
  SINGULAR_ARCSECONDS = 'SINGULAR_ARCSECONDS',
  PLURAL_RADIANS = 'PLURAL_RADIANS',
  PLURAL_DEGREES = 'PLURAL_DEGREES',
  PLURAL_GRADIANS = 'PLURAL_GRADIANS',
  PLURAL_ARCMINUTES = 'PLURAL_ARCMINUTES',
  PLURAL_ARCSECONDS = 'PLURAL_ARCSECONDS'
}

export type AngleSingularTranslationKey =
  | 'SINGULAR_RADIANS'
  | 'SINGULAR_DEGREES'
  | 'SINGULAR_GRADIANS'
  | 'SINGULAR_ARCMINUTES'
  | 'SINGULAR_ARCSECONDS';

export type AnglePluralTranslationKey =
  | 'PLURAL_RADIANS'
  | 'PLURAL_DEGREES'
  | 'PLURAL_GRADIANS'
  | 'PLURAL_ARCMINUTES'
  | 'PLURAL_ARCSECONDS';

export const angleTranslations: Record<AngleSingularTranslationKey | AnglePluralTranslationKey, string> = {
  [AngleTranslationEnum.SINGULAR_RADIANS]: 'Radian',
  [AngleTranslationEnum.SINGULAR_DEGREES]: 'Degree',
  [AngleTranslationEnum.SINGULAR_GRADIANS]: 'Gradian',
  [AngleTranslationEnum.SINGULAR_ARCMINUTES]: 'Arcminute',
  [AngleTranslationEnum.SINGULAR_ARCSECONDS]: 'Arcsecond',
  [AngleTranslationEnum.PLURAL_RADIANS]: 'Radians',
  [AngleTranslationEnum.PLURAL_DEGREES]: 'Degrees',
  [AngleTranslationEnum.PLURAL_GRADIANS]: 'Gradians',
  [AngleTranslationEnum.PLURAL_ARCMINUTES]: 'Arcminutes',
  [AngleTranslationEnum.PLURAL_ARCSECONDS]: 'Arcseconds'
};
