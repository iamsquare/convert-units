export enum CurrentTranslationEnum {
  SINGULAR_AMPERE = 'SINGULAR_AMPERE',
  SINGULAR_MILLIAMPERE = 'SINGULAR_MILLIAMPERE',
  SINGULAR_KILOAMPERE = 'SINGULAR_KILOAMPERE',
  PLURAL_AMPERE = 'PLURAL_AMPERE',
  PLURAL_MILLIAMPERE = 'PLURAL_MILLIAMPERE',
  PLURAL_KILOAMPERE = 'PLURAL_KILOAMPERE'
}

export type CurrentSingularTranslationKey = 'SINGULAR_AMPERE' | 'SINGULAR_MILLIAMPERE' | 'SINGULAR_KILOAMPERE';

export type CurrentPluralTranslationKey = 'PLURAL_AMPERE' | 'PLURAL_MILLIAMPERE' | 'PLURAL_KILOAMPERE';

export const currentTranslations: Record<CurrentSingularTranslationKey | CurrentPluralTranslationKey, string> = {
  [CurrentTranslationEnum.SINGULAR_AMPERE]: 'Ampere',
  [CurrentTranslationEnum.SINGULAR_MILLIAMPERE]: 'Milliampere',
  [CurrentTranslationEnum.SINGULAR_KILOAMPERE]: 'Kiloampere',
  [CurrentTranslationEnum.PLURAL_AMPERE]: 'Amperes',
  [CurrentTranslationEnum.PLURAL_MILLIAMPERE]: 'Milliamperes',
  [CurrentTranslationEnum.PLURAL_KILOAMPERE]: 'Kiloamperes'
};
