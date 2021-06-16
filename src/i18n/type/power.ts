export enum PowerTranslationEnum {
  SINGULAR_WATT = 'SINGULAR_WATT',
  SINGULAR_MILLIWATT = 'SINGULAR_MILLIWATT',
  SINGULAR_KILOWATT = 'SINGULAR_KILOWATT',
  SINGULAR_MEGAWATT = 'SINGULAR_MEGAWATT',
  SINGULAR_GIGAWATT = 'SINGULAR_GIGAWATT',
  SINGULAR_HORSE_POWER = 'SINGULAR_HORSE_POWER',
  SINGULAR_BTU_PER_SECOND = 'SINGULAR_BTU_PER_SECOND',
  SINGULAR_FOOT_POUND_PER_SECOND = 'SINGULAR_FOOT_POUND_PER_SECOND',
  SINGULAR_IMPERIAL_HORSE_POWER = 'SINGULAR_IMPERIAL_HORSE_POWER',
  PLURAL_WATT = 'PLURAL_WATT',
  PLURAL_MILLIWATT = 'PLURAL_MILLIWATT',
  PLURAL_KILOWATT = 'PLURAL_KILOWATT',
  PLURAL_MEGAWATT = 'PLURAL_MEGAWATT',
  PLURAL_GIGAWATT = 'PLURAL_GIGAWATT',
  PLURAL_HORSE_POWER = 'PLURAL_HORSE_POWER',
  PLURAL_BTU_PER_SECOND = 'PLURAL_BTU_PER_SECOND',
  PLURAL_FOOT_POUND_PER_SECOND = 'PLURAL_FOOT_POUND_PER_SECOND',
  PLURAL_IMPERIAL_HORSE_POWER = 'PLURAL_IMPERIAL_HORSE_POWER'
}

export type PowerSingularTranslationKey =
  | 'SINGULAR_WATT'
  | 'SINGULAR_MILLIWATT'
  | 'SINGULAR_KILOWATT'
  | 'SINGULAR_MEGAWATT'
  | 'SINGULAR_GIGAWATT'
  | 'SINGULAR_HORSE_POWER'
  | 'SINGULAR_BTU_PER_SECOND'
  | 'SINGULAR_FOOT_POUND_PER_SECOND'
  | 'SINGULAR_IMPERIAL_HORSE_POWER';

export type PowerPluralTranslationKey =
  | 'PLURAL_WATT'
  | 'PLURAL_MILLIWATT'
  | 'PLURAL_KILOWATT'
  | 'PLURAL_MEGAWATT'
  | 'PLURAL_GIGAWATT'
  | 'PLURAL_HORSE_POWER'
  | 'PLURAL_BTU_PER_SECOND'
  | 'PLURAL_FOOT_POUND_PER_SECOND'
  | 'PLURAL_IMPERIAL_HORSE_POWER';

export const powerTranslations: Record<PowerSingularTranslationKey | PowerPluralTranslationKey, string> = {
  [PowerTranslationEnum.SINGULAR_WATT]: 'Watt',
  [PowerTranslationEnum.SINGULAR_MILLIWATT]: 'Milliwatt',
  [PowerTranslationEnum.SINGULAR_KILOWATT]: 'Kilowatt',
  [PowerTranslationEnum.SINGULAR_MEGAWATT]: 'Megawatt',
  [PowerTranslationEnum.SINGULAR_GIGAWATT]: 'Gigawatt',
  [PowerTranslationEnum.SINGULAR_HORSE_POWER]: 'Horsepower (metric)',
  [PowerTranslationEnum.SINGULAR_BTU_PER_SECOND]: 'British thermal unit per second',
  [PowerTranslationEnum.SINGULAR_FOOT_POUND_PER_SECOND]: 'Foot-pound per second',
  [PowerTranslationEnum.SINGULAR_IMPERIAL_HORSE_POWER]: 'Horsepower (British)',
  [PowerTranslationEnum.PLURAL_WATT]: 'Watts',
  [PowerTranslationEnum.PLURAL_MILLIWATT]: 'Milliwatts',
  [PowerTranslationEnum.PLURAL_KILOWATT]: 'Kilowatts',
  [PowerTranslationEnum.PLURAL_MEGAWATT]: 'Megawatts',
  [PowerTranslationEnum.PLURAL_GIGAWATT]: 'Gigawatts',
  [PowerTranslationEnum.PLURAL_HORSE_POWER]: 'Horsepower (metric)',
  [PowerTranslationEnum.PLURAL_BTU_PER_SECOND]: 'British thermal units per second',
  [PowerTranslationEnum.PLURAL_FOOT_POUND_PER_SECOND]: 'Foot-pounds per second',
  [PowerTranslationEnum.PLURAL_IMPERIAL_HORSE_POWER]: 'Horsepower (British)'
};
