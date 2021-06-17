export enum ApparentPowerTranslationEnum {
  SINGULAR_VOLT_AMPERE = 'SINGULAR_VOLT_AMPERE',
  SINGULAR_MILLIVOLT_AMPERE = 'SINGULAR_MILLIVOLT_AMPERE',
  SINGULAR_KILOVOLT_AMPERE = 'SINGULAR_KILOVOLT_AMPERE',
  SINGULAR_MEGAVOLT_AMPERE = 'SINGULAR_MEGAVOLT_AMPERE',
  SINGULAR_GIGAVOLT_AMPERE = 'SINGULAR_GIGAVOLT_AMPERE',
  PLURAL_VOLT_AMPERE = 'PLURAL_VOLT_AMPERE',
  PLURAL_MILLIVOLT_AMPERE = 'PLURAL_MILLIVOLT_AMPERE',
  PLURAL_KILOVOLT_AMPERE = 'PLURAL_KILOVOLT_AMPERE',
  PLURAL_MEGAVOLT_AMPERE = 'PLURAL_MEGAVOLT_AMPERE',
  PLURAL_GIGAVOLT_AMPERE = 'PLURAL_GIGAVOLT_AMPERE'
}

export type ApparentPowerSingularTranslationKey =
  | 'SINGULAR_VOLT_AMPERE'
  | 'SINGULAR_MILLIVOLT_AMPERE'
  | 'SINGULAR_KILOVOLT_AMPERE'
  | 'SINGULAR_MEGAVOLT_AMPERE'
  | 'SINGULAR_GIGAVOLT_AMPERE';

export type ApparentPowerPluralTranslationKey =
  | 'PLURAL_VOLT_AMPERE'
  | 'PLURAL_MILLIVOLT_AMPERE'
  | 'PLURAL_KILOVOLT_AMPERE'
  | 'PLURAL_MEGAVOLT_AMPERE'
  | 'PLURAL_GIGAVOLT_AMPERE';

export const apparentPowerTranslations: Record<
  ApparentPowerSingularTranslationKey | ApparentPowerPluralTranslationKey,
  string
> = {
  [ApparentPowerTranslationEnum.SINGULAR_VOLT_AMPERE]: 'Volt-Ampere',
  [ApparentPowerTranslationEnum.SINGULAR_MILLIVOLT_AMPERE]: 'Millivolt-Ampere',
  [ApparentPowerTranslationEnum.SINGULAR_KILOVOLT_AMPERE]: 'Kilovolt-Ampere',
  [ApparentPowerTranslationEnum.SINGULAR_MEGAVOLT_AMPERE]: 'Megavolt-Ampere',
  [ApparentPowerTranslationEnum.SINGULAR_GIGAVOLT_AMPERE]: 'Gigavolt-Ampere',
  [ApparentPowerTranslationEnum.PLURAL_VOLT_AMPERE]: 'Volt-Amperes',
  [ApparentPowerTranslationEnum.PLURAL_MILLIVOLT_AMPERE]: 'Millivolt-Amperes',
  [ApparentPowerTranslationEnum.PLURAL_KILOVOLT_AMPERE]: 'Kilovolt-Amperes',
  [ApparentPowerTranslationEnum.PLURAL_MEGAVOLT_AMPERE]: 'Megavolt-Amperes',
  [ApparentPowerTranslationEnum.PLURAL_GIGAVOLT_AMPERE]: 'Gigavolt-Amperes'
};
