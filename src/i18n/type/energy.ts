export enum EnergyTranslationEnum {
  SINGULAR_WATT_HOUR = 'SINGULAR_WATT_HOUR',
  SINGULAR_MILLIWATT_HOUR = 'SINGULAR_MILLIWATT_HOUR',
  SINGULAR_KILOWATT_HOUR = 'SINGULAR_KILOWATT_HOUR',
  SINGULAR_MEGAWATT_HOUR = 'SINGULAR_MEGAWATT_HOUR',
  SINGULAR_GIGAWATT_HOUR = 'SINGULAR_GIGAWATT_HOUR',
  SINGULAR_JOULE = 'SINGULAR_JOULE',
  SINGULAR_KILOJOULE = 'SINGULAR_KILOJOULE',
  PLURAL_WATT_HOUR = 'PLURAL_WATT_HOUR',
  PLURAL_MILLIWATT_HOUR = 'PLURAL_MILLIWATT_HOUR',
  PLURAL_KILOWATT_HOUR = 'PLURAL_KILOWATT_HOUR',
  PLURAL_MEGAWATT_HOUR = 'PLURAL_MEGAWATT_HOUR',
  PLURAL_GIGAWATT_HOUR = 'PLURAL_GIGAWATT_HOUR',
  PLURAL_JOULE = 'PLURAL_JOULE',
  PLURAL_KILOJOULE = 'PLURAL_KILOJOULE'
}

export type EnergySingularTranslationKey =
  | 'SINGULAR_WATT_HOUR'
  | 'SINGULAR_MILLIWATT_HOUR'
  | 'SINGULAR_KILOWATT_HOUR'
  | 'SINGULAR_MEGAWATT_HOUR'
  | 'SINGULAR_GIGAWATT_HOUR'
  | 'SINGULAR_JOULE'
  | 'SINGULAR_KILOJOULE';

export type EnergyPluralTranslationKey =
  | 'PLURAL_WATT_HOUR'
  | 'PLURAL_MILLIWATT_HOUR'
  | 'PLURAL_KILOWATT_HOUR'
  | 'PLURAL_MEGAWATT_HOUR'
  | 'PLURAL_GIGAWATT_HOUR'
  | 'PLURAL_JOULE'
  | 'PLURAL_KILOJOULE';

export const energyTranslations: Record<EnergySingularTranslationKey | EnergyPluralTranslationKey, string> = {
  [EnergyTranslationEnum.SINGULAR_WATT_HOUR]: 'Watt-hour',
  [EnergyTranslationEnum.SINGULAR_MILLIWATT_HOUR]: 'Milliwatt-hour',
  [EnergyTranslationEnum.SINGULAR_KILOWATT_HOUR]: 'Kilowatt-hour',
  [EnergyTranslationEnum.SINGULAR_MEGAWATT_HOUR]: 'Megawatt-hour',
  [EnergyTranslationEnum.SINGULAR_GIGAWATT_HOUR]: 'Gigawatt-hour',
  [EnergyTranslationEnum.SINGULAR_JOULE]: 'Joule',
  [EnergyTranslationEnum.SINGULAR_KILOJOULE]: 'Kilojoule',
  [EnergyTranslationEnum.PLURAL_WATT_HOUR]: 'Watt-hours',
  [EnergyTranslationEnum.PLURAL_MILLIWATT_HOUR]: 'Milliwatt-hours',
  [EnergyTranslationEnum.PLURAL_KILOWATT_HOUR]: 'Kilowatt-hours',
  [EnergyTranslationEnum.PLURAL_MEGAWATT_HOUR]: 'Megawatt-hours',
  [EnergyTranslationEnum.PLURAL_GIGAWATT_HOUR]: 'Gigawatt-hours',
  [EnergyTranslationEnum.PLURAL_JOULE]: 'Joules',
  [EnergyTranslationEnum.PLURAL_KILOJOULE]: 'Kilojoules'
};
