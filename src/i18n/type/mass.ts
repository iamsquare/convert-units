export enum MassTranslationEnum {
  SINGULAR_GRAM = 'SINGULAR_GRAM',
  SINGULAR_MICROGRAM = 'SINGULAR_MICROGRAM',
  SINGULAR_MILLIGRAM = 'SINGULAR_MILLIGRAM',
  SINGULAR_KILOGRAM = 'SINGULAR_KILOGRAM',
  SINGULAR_METRIC_TONNE = 'SINGULAR_METRIC_TONNE',
  SINGULAR_OUNCE = 'SINGULAR_OUNCE',
  SINGULAR_POUND = 'SINGULAR_POUND',
  SINGULAR_TON = 'SINGULAR_TON',
  PLURAL_GRAM = 'PLURAL_GRAM',
  PLURAL_MICROGRAM = 'PLURAL_MICROGRAM',
  PLURAL_MILLIGRAM = 'PLURAL_MILLIGRAM',
  PLURAL_KILOGRAM = 'PLURAL_KILOGRAM',
  PLURAL_METRIC_TONNE = 'PLURAL_METRIC_TONNE',
  PLURAL_OUNCE = 'PLURAL_OUNCE',
  PLURAL_POUND = 'PLURAL_POUND',
  PLURAL_TON = 'PLURAL_TON'
}

export type MassSingularTranslationKey =
  | 'SINGULAR_GRAM'
  | 'SINGULAR_MICROGRAM'
  | 'SINGULAR_MILLIGRAM'
  | 'SINGULAR_KILOGRAM'
  | 'SINGULAR_METRIC_TONNE'
  | 'SINGULAR_OUNCE'
  | 'SINGULAR_POUND'
  | 'SINGULAR_TON';

export type MassPluralTranslationKey =
  | 'PLURAL_GRAM'
  | 'PLURAL_MICROGRAM'
  | 'PLURAL_MILLIGRAM'
  | 'PLURAL_KILOGRAM'
  | 'PLURAL_METRIC_TONNE'
  | 'PLURAL_OUNCE'
  | 'PLURAL_POUND'
  | 'PLURAL_TON';

export const massTranslations: Record<MassSingularTranslationKey | MassPluralTranslationKey, string> = {
  [MassTranslationEnum.SINGULAR_GRAM]: 'Gram',
  [MassTranslationEnum.SINGULAR_MICROGRAM]: 'Microgram',
  [MassTranslationEnum.SINGULAR_MILLIGRAM]: 'Milligram',
  [MassTranslationEnum.SINGULAR_KILOGRAM]: 'Kilogram',
  [MassTranslationEnum.SINGULAR_METRIC_TONNE]: 'Metric Tonne',
  [MassTranslationEnum.SINGULAR_OUNCE]: 'Ounce',
  [MassTranslationEnum.SINGULAR_POUND]: 'Pound',
  [MassTranslationEnum.SINGULAR_TON]: 'Ton',
  [MassTranslationEnum.PLURAL_GRAM]: 'Grams',
  [MassTranslationEnum.PLURAL_MICROGRAM]: 'Micrograms',
  [MassTranslationEnum.PLURAL_MILLIGRAM]: 'Milligrams',
  [MassTranslationEnum.PLURAL_KILOGRAM]: 'Kilograms',
  [MassTranslationEnum.PLURAL_METRIC_TONNE]: 'Metric Tonnes',
  [MassTranslationEnum.PLURAL_OUNCE]: 'Ounces',
  [MassTranslationEnum.PLURAL_POUND]: 'Pounds',
  [MassTranslationEnum.PLURAL_TON]: 'Tons'
};
