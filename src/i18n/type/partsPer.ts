export enum PartsPerTranslationEnum {
  SINGULAR_PART_PER_MILLION = 'SINGULAR_PART_PER_MILLION',
  SINGULAR_PART_PER_BILLION = 'SINGULAR_PART_PER_BILLION',
  SINGULAR_PART_PER_TRILLION = 'SINGULAR_PART_PER_TRILLION',
  SINGULAR_PART_PER_QUADRILLION = 'SINGULAR_PART_PER_QUADRILLION',
  PLURAL_PART_PER_MILLION = 'PLURAL_PART_PER_MILLION',
  PLURAL_PART_PER_BILLION = 'PLURAL_PART_PER_BILLION',
  PLURAL_PART_PER_TRILLION = 'PLURAL_PART_PER_TRILLION',
  PLURAL_PART_PER_QUADRILLION = 'PLURAL_PART_PER_QUADRILLION'
}

export type PartsPerSingularTranslationKey =
  | 'SINGULAR_PART_PER_MILLION'
  | 'SINGULAR_PART_PER_BILLION'
  | 'SINGULAR_PART_PER_TRILLION'
  | 'SINGULAR_PART_PER_QUADRILLION';

export type PartsPerPluralTranslationKey =
  | 'PLURAL_PART_PER_MILLION'
  | 'PLURAL_PART_PER_BILLION'
  | 'PLURAL_PART_PER_TRILLION'
  | 'PLURAL_PART_PER_QUADRILLION';

export const partsPerTranslations: Record<PartsPerSingularTranslationKey | PartsPerPluralTranslationKey, string> = {
  [PartsPerTranslationEnum.SINGULAR_PART_PER_MILLION]: 'Part-per Million',
  [PartsPerTranslationEnum.SINGULAR_PART_PER_BILLION]: 'Part-per Billion',
  [PartsPerTranslationEnum.SINGULAR_PART_PER_TRILLION]: 'Part-per Trillion',
  [PartsPerTranslationEnum.SINGULAR_PART_PER_QUADRILLION]: 'Part-per Quadrillion',
  [PartsPerTranslationEnum.PLURAL_PART_PER_MILLION]: 'Parts-per Million',
  [PartsPerTranslationEnum.PLURAL_PART_PER_BILLION]: 'Parts-per Billion',
  [PartsPerTranslationEnum.PLURAL_PART_PER_TRILLION]: 'Parts-per Trillion',
  [PartsPerTranslationEnum.PLURAL_PART_PER_QUADRILLION]: 'Parts-per Quadrillion'
};
