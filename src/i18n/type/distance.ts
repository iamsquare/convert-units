export enum DistanceTranslationEnum {
  SINGULAR_NANOMETER = 'SINGULAR_NANOMETER',
  SINGULAR_MICROMETER = 'SINGULAR_MICROMETER',
  SINGULAR_MILLIMETER = 'SINGULAR_MILLIMETER',
  SINGULAR_CENTIMETER = 'SINGULAR_CENTIMETER',
  SINGULAR_METER = 'SINGULAR_METER',
  SINGULAR_KILOMETER = 'SINGULAR_KILOMETER',
  SINGULAR_INCH = 'SINGULAR_INCH',
  SINGULAR_YARD = 'SINGULAR_YARD',
  SINGULAR_US_SURVEY_FOOT = 'SINGULAR_US_SURVEY_FOOT',
  SINGULAR_FOOT = 'SINGULAR_FOOT',
  SINGULAR_FATHOM = 'SINGULAR_FATHOM',
  SINGULAR_MILE = 'SINGULAR_MILE',
  SINGULAR_NAUTICAL_MILE = 'SINGULAR_NAUTICAL_MILE',
  PLURAL_NANOMETER = 'PLURAL_NANOMETER',
  PLURAL_MICROMETER = 'PLURAL_MICROMETER',
  PLURAL_MILLIMETER = 'PLURAL_MILLIMETER',
  PLURAL_CENTIMETER = 'PLURAL_CENTIMETER',
  PLURAL_METER = 'PLURAL_METER',
  PLURAL_KILOMETER = 'PLURAL_KILOMETER',
  PLURAL_INCH = 'PLURAL_INCH',
  PLURAL_YARD = 'PLURAL_YARD',
  PLURAL_US_SURVEY_FOOT = 'PLURAL_US_SURVEY_FOOT',
  PLURAL_FOOT = 'PLURAL_FOOT',
  PLURAL_FATHOM = 'PLURAL_FATHOM',
  PLURAL_MILE = 'PLURAL_MILE',
  PLURAL_NAUTICAL_MILE = 'PLURAL_NAUTICAL_MILE'
}

export type DistanceSingularTranslationKey =
  | 'SINGULAR_NANOMETER'
  | 'SINGULAR_MICROMETER'
  | 'SINGULAR_MILLIMETER'
  | 'SINGULAR_CENTIMETER'
  | 'SINGULAR_METER'
  | 'SINGULAR_KILOMETER'
  | 'SINGULAR_INCH'
  | 'SINGULAR_YARD'
  | 'SINGULAR_US_SURVEY_FOOT'
  | 'SINGULAR_FOOT'
  | 'SINGULAR_FATHOM'
  | 'SINGULAR_MILE'
  | 'SINGULAR_NAUTICAL_MILE';

export type DistancePluralTranslationKey =
  | 'PLURAL_NANOMETER'
  | 'PLURAL_MICROMETER'
  | 'PLURAL_MILLIMETER'
  | 'PLURAL_CENTIMETER'
  | 'PLURAL_METER'
  | 'PLURAL_KILOMETER'
  | 'PLURAL_INCH'
  | 'PLURAL_YARD'
  | 'PLURAL_US_SURVEY_FOOT'
  | 'PLURAL_FOOT'
  | 'PLURAL_FATHOM'
  | 'PLURAL_MILE'
  | 'PLURAL_NAUTICAL_MILE';

export const distanceTranslations: Record<DistanceSingularTranslationKey | DistancePluralTranslationKey, string> = {
  [DistanceTranslationEnum.SINGULAR_NANOMETER]: 'Nanometer',
  [DistanceTranslationEnum.SINGULAR_MICROMETER]: 'Micrometer',
  [DistanceTranslationEnum.SINGULAR_MILLIMETER]: 'Millimeter',
  [DistanceTranslationEnum.SINGULAR_CENTIMETER]: 'Centimeter',
  [DistanceTranslationEnum.SINGULAR_METER]: 'Meter',
  [DistanceTranslationEnum.SINGULAR_KILOMETER]: 'Kilometer',
  [DistanceTranslationEnum.SINGULAR_INCH]: 'Inch',
  [DistanceTranslationEnum.SINGULAR_YARD]: 'Yard',
  [DistanceTranslationEnum.SINGULAR_US_SURVEY_FOOT]: 'US Survey Foot',
  [DistanceTranslationEnum.SINGULAR_FOOT]: 'Foot',
  [DistanceTranslationEnum.SINGULAR_FATHOM]: 'Fathom',
  [DistanceTranslationEnum.SINGULAR_MILE]: 'Mile',
  [DistanceTranslationEnum.SINGULAR_NAUTICAL_MILE]: 'Nautical Mile',
  [DistanceTranslationEnum.PLURAL_NANOMETER]: 'Nanometers',
  [DistanceTranslationEnum.PLURAL_MICROMETER]: 'Micrometers',
  [DistanceTranslationEnum.PLURAL_MILLIMETER]: 'Millimeters',
  [DistanceTranslationEnum.PLURAL_CENTIMETER]: 'Centimeters',
  [DistanceTranslationEnum.PLURAL_METER]: 'Meters',
  [DistanceTranslationEnum.PLURAL_KILOMETER]: 'Kilometers',
  [DistanceTranslationEnum.PLURAL_INCH]: 'Inches',
  [DistanceTranslationEnum.PLURAL_YARD]: 'Yards',
  [DistanceTranslationEnum.PLURAL_US_SURVEY_FOOT]: 'US Survey Feet',
  [DistanceTranslationEnum.PLURAL_FOOT]: 'Feet',
  [DistanceTranslationEnum.PLURAL_FATHOM]: 'Fathoms',
  [DistanceTranslationEnum.PLURAL_MILE]: 'Miles',
  [DistanceTranslationEnum.PLURAL_NAUTICAL_MILE]: 'Nautical Miles'
};
