export enum TimeTranslationEnum {
  SINGULAR_NANOSECOND = 'SINGULAR_NANOSECOND',
  SINGULAR_MICROSECOND = 'SINGULAR_MICROSECOND',
  SINGULAR_MILLISECOND = 'SINGULAR_MILLISECOND',
  SINGULAR_SECOND = 'SINGULAR_SECOND',
  SINGULAR_MINUTE = 'SINGULAR_MINUTE',
  SINGULAR_HOUR = 'SINGULAR_HOUR',
  SINGULAR_DAY = 'SINGULAR_DAY',
  SINGULAR_WEEK = 'SINGULAR_WEEK',
  SINGULAR_MONTH = 'SINGULAR_MONTH',
  SINGULAR_YEAR = 'SINGULAR_YEAR',
  PLURAL_NANOSECOND = 'PLURAL_NANOSECOND',
  PLURAL_MICROSECOND = 'PLURAL_MICROSECOND',
  PLURAL_MILLISECOND = 'PLURAL_MILLISECOND',
  PLURAL_SECOND = 'PLURAL_SECOND',
  PLURAL_MINUTE = 'PLURAL_MINUTE',
  PLURAL_HOUR = 'PLURAL_HOUR',
  PLURAL_DAY = 'PLURAL_DAY',
  PLURAL_WEEK = 'PLURAL_WEEK',
  PLURAL_MONTH = 'PLURAL_MONTH',
  PLURAL_YEAR = 'PLURAL_YEAR'
}

export type TimeSingularTranslationKey =
  | 'SINGULAR_NANOSECOND'
  | 'SINGULAR_MICROSECOND'
  | 'SINGULAR_MILLISECOND'
  | 'SINGULAR_SECOND'
  | 'SINGULAR_MINUTE'
  | 'SINGULAR_HOUR'
  | 'SINGULAR_DAY'
  | 'SINGULAR_WEEK'
  | 'SINGULAR_MONTH'
  | 'SINGULAR_YEAR';

export type TimePluralTranslationKey =
  | 'PLURAL_NANOSECOND'
  | 'PLURAL_MICROSECOND'
  | 'PLURAL_MILLISECOND'
  | 'PLURAL_SECOND'
  | 'PLURAL_MINUTE'
  | 'PLURAL_HOUR'
  | 'PLURAL_DAY'
  | 'PLURAL_WEEK'
  | 'PLURAL_MONTH'
  | 'PLURAL_YEAR';

export const timeTranslations: Record<TimeSingularTranslationKey | TimePluralTranslationKey, string> = {
  [TimeTranslationEnum.SINGULAR_NANOSECOND]: 'Nanosecond',
  [TimeTranslationEnum.SINGULAR_MICROSECOND]: 'Microsecond',
  [TimeTranslationEnum.SINGULAR_MILLISECOND]: 'Millisecond',
  [TimeTranslationEnum.SINGULAR_SECOND]: 'Second',
  [TimeTranslationEnum.SINGULAR_MINUTE]: 'Minute',
  [TimeTranslationEnum.SINGULAR_HOUR]: 'Hour',
  [TimeTranslationEnum.SINGULAR_DAY]: 'Day',
  [TimeTranslationEnum.SINGULAR_WEEK]: 'Week',
  [TimeTranslationEnum.SINGULAR_MONTH]: 'Month',
  [TimeTranslationEnum.SINGULAR_YEAR]: 'Year',
  [TimeTranslationEnum.PLURAL_NANOSECOND]: 'Nanoseconds',
  [TimeTranslationEnum.PLURAL_MICROSECOND]: 'Microseconds',
  [TimeTranslationEnum.PLURAL_MILLISECOND]: 'Milliseconds',
  [TimeTranslationEnum.PLURAL_SECOND]: 'Seconds',
  [TimeTranslationEnum.PLURAL_MINUTE]: 'Minutes',
  [TimeTranslationEnum.PLURAL_HOUR]: 'Hours',
  [TimeTranslationEnum.PLURAL_DAY]: 'Days',
  [TimeTranslationEnum.PLURAL_WEEK]: 'Weeks',
  [TimeTranslationEnum.PLURAL_MONTH]: 'Months',
  [TimeTranslationEnum.PLURAL_YEAR]: 'Years'
};
