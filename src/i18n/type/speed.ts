export enum SpeedTranslationEnum {
  SINGULAR_METRE_PER_SECOND = 'SINGULAR_METRE_PER_SECOND',
  SINGULAR_KILOMETRE_PER_HOUR = 'SINGULAR_KILOMETRE_PER_HOUR',
  SINGULAR_METRE_PER_HOUR = 'SINGULAR_METRE_PER_HOUR',
  SINGULAR_MILE_PER_HOUR = 'SINGULAR_MILE_PER_HOUR',
  SINGULAR_KNOT = 'SINGULAR_KNOT',
  SINGULAR_FOOT_PER_SECOND = 'SINGULAR_FOOT_PER_SECOND',
  PLURAL_METRE_PER_SECOND = 'PLURAL_METRE_PER_SECOND',
  PLURAL_KILOMETRE_PER_HOUR = 'PLURAL_KILOMETRE_PER_HOUR',
  PLURAL_METRE_PER_HOUR = 'PLURAL_METRE_PER_HOUR',
  PLURAL_MILE_PER_HOUR = 'PLURAL_MILE_PER_HOUR',
  PLURAL_KNOT = 'PLURAL_KNOT',
  PLURAL_FOOT_PER_SECOND = 'PLURAL_FOOT_PER_SECOND'
}

export type SpeedSingularTranslationKey =
  | 'SINGULAR_METRE_PER_SECOND'
  | 'SINGULAR_KILOMETRE_PER_HOUR'
  | 'SINGULAR_METRE_PER_HOUR'
  | 'SINGULAR_MILE_PER_HOUR'
  | 'SINGULAR_KNOT'
  | 'SINGULAR_FOOT_PER_SECOND';

export type SpeedPluralTranslationKey =
  | 'PLURAL_METRE_PER_SECOND'
  | 'PLURAL_KILOMETRE_PER_HOUR'
  | 'PLURAL_METRE_PER_HOUR'
  | 'PLURAL_MILE_PER_HOUR'
  | 'PLURAL_KNOT'
  | 'PLURAL_FOOT_PER_SECOND';

export const speedTranslations: Record<SpeedSingularTranslationKey | SpeedPluralTranslationKey, string> = {
  [SpeedTranslationEnum.SINGULAR_METRE_PER_SECOND]: 'Metre per second',
  [SpeedTranslationEnum.SINGULAR_KILOMETRE_PER_HOUR]: 'Kilometre per hour',
  [SpeedTranslationEnum.SINGULAR_METRE_PER_HOUR]: 'Metre per hour',
  [SpeedTranslationEnum.SINGULAR_MILE_PER_HOUR]: 'Mile per hour',
  [SpeedTranslationEnum.SINGULAR_KNOT]: 'Knot',
  [SpeedTranslationEnum.SINGULAR_FOOT_PER_SECOND]: 'Foot per second',
  [SpeedTranslationEnum.PLURAL_METRE_PER_SECOND]: 'Metres per second',
  [SpeedTranslationEnum.PLURAL_KILOMETRE_PER_HOUR]: 'Kilometres per hour',
  [SpeedTranslationEnum.PLURAL_METRE_PER_HOUR]: 'Metres per hour',
  [SpeedTranslationEnum.PLURAL_MILE_PER_HOUR]: 'Miles per hour',
  [SpeedTranslationEnum.PLURAL_KNOT]: 'Knots',
  [SpeedTranslationEnum.PLURAL_FOOT_PER_SECOND]: 'Feet per second'
};
