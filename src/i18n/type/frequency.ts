export enum FrequencyTranslationEnum {
  SINGULAR_HERTZ = 'SINGULAR_HERTZ',
  SINGULAR_MILLIHERTZ = 'SINGULAR_MILLIHERTZ',
  SINGULAR_KILOHERTZ = 'SINGULAR_KILOHERTZ',
  SINGULAR_MEGAHERTZ = 'SINGULAR_MEGAHERTZ',
  SINGULAR_GIGAHERTZ = 'SINGULAR_GIGAHERTZ',
  SINGULAR_TERAHERTZ = 'SINGULAR_TERAHERTZ',
  SINGULAR_RPM = 'SINGULAR_RPM',
  SINGULAR_DEGREE_PER_SECOND = 'SINGULAR_DEGREE_PER_SECOND',
  SINGULAR_RADIAN_PER_SECOND = 'SINGULAR_RADIAN_PER_SECOND',
  PLURAL_HERTZ = 'PLURAL_HERTZ',
  PLURAL_MILLIHERTZ = 'PLURAL_MILLIHERTZ',
  PLURAL_KILOHERTZ = 'PLURAL_KILOHERTZ',
  PLURAL_MEGAHERTZ = 'PLURAL_MEGAHERTZ',
  PLURAL_GIGAHERTZ = 'PLURAL_GIGAHERTZ',
  PLURAL_TERAHERTZ = 'PLURAL_TERAHERTZ',
  PLURAL_RPM = 'PLURAL_RPM',
  PLURAL_DEGREE_PER_SECOND = 'PLURAL_DEGREE_PER_SECOND',
  PLURAL_RADIAN_PER_SECOND = 'PLURAL_RADIAN_PER_SECOND'
}

export type FrequencySingularTranslationKey =
  | 'SINGULAR_HERTZ'
  | 'SINGULAR_MILLIHERTZ'
  | 'SINGULAR_KILOHERTZ'
  | 'SINGULAR_MEGAHERTZ'
  | 'SINGULAR_GIGAHERTZ'
  | 'SINGULAR_TERAHERTZ'
  | 'SINGULAR_RPM'
  | 'SINGULAR_DEGREE_PER_SECOND'
  | 'SINGULAR_RADIAN_PER_SECOND';

export type FrequencyPluralTranslationKey =
  | 'PLURAL_HERTZ'
  | 'PLURAL_MILLIHERTZ'
  | 'PLURAL_KILOHERTZ'
  | 'PLURAL_MEGAHERTZ'
  | 'PLURAL_GIGAHERTZ'
  | 'PLURAL_TERAHERTZ'
  | 'PLURAL_RPM'
  | 'PLURAL_DEGREE_PER_SECOND'
  | 'PLURAL_RADIAN_PER_SECOND';

export const frequencyTranslations: Record<FrequencySingularTranslationKey | FrequencyPluralTranslationKey, string> = {
  [FrequencyTranslationEnum.SINGULAR_HERTZ]: 'Hertz',
  [FrequencyTranslationEnum.SINGULAR_MILLIHERTZ]: 'Millihertz',
  [FrequencyTranslationEnum.SINGULAR_KILOHERTZ]: 'Kilohertz',
  [FrequencyTranslationEnum.SINGULAR_MEGAHERTZ]: 'Megahertz',
  [FrequencyTranslationEnum.SINGULAR_GIGAHERTZ]: 'Gigahertz',
  [FrequencyTranslationEnum.SINGULAR_TERAHERTZ]: 'Terahertz',
  [FrequencyTranslationEnum.SINGULAR_RPM]: 'Rotation per minute',
  [FrequencyTranslationEnum.SINGULAR_DEGREE_PER_SECOND]: 'Degree per second',
  [FrequencyTranslationEnum.SINGULAR_RADIAN_PER_SECOND]: 'Radian per second',
  [FrequencyTranslationEnum.PLURAL_HERTZ]: 'Hertz',
  [FrequencyTranslationEnum.PLURAL_MILLIHERTZ]: 'Millihertz',
  [FrequencyTranslationEnum.PLURAL_KILOHERTZ]: 'Kilohertz',
  [FrequencyTranslationEnum.PLURAL_MEGAHERTZ]: 'Megahertz',
  [FrequencyTranslationEnum.PLURAL_GIGAHERTZ]: 'Gigahertz',
  [FrequencyTranslationEnum.PLURAL_TERAHERTZ]: 'Terahertz',
  [FrequencyTranslationEnum.PLURAL_RPM]: 'Rotations per minute',
  [FrequencyTranslationEnum.PLURAL_DEGREE_PER_SECOND]: 'Degrees per second',
  [FrequencyTranslationEnum.PLURAL_RADIAN_PER_SECOND]: 'Radians per second'
};
