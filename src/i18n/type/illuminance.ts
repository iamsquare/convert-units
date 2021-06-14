export enum IlluminanceTranslationEnum {
  SINGULAR_LUX = 'SINGULAR_LUX',
  SINGULAR_FOOT_CANDLE = 'SINGULAR_FOOT_CANDLE',
  PLURAL_LUX = 'PLURAL_LUX',
  PLURAL_FOOT_CANDLE = 'PLURAL_FOOT_CANDLE'
}

export type IlluminanceSingularTranslationKey = 'SINGULAR_LUX' | 'SINGULAR_FOOT_CANDLE';

export type IlluminancePluralTranslationKey = 'PLURAL_LUX' | 'PLURAL_FOOT_CANDLE';

export const illuminanceTranslations: Record<
  IlluminanceSingularTranslationKey | IlluminancePluralTranslationKey,
  string
> = {
  [IlluminanceTranslationEnum.SINGULAR_LUX]: 'Lux',
  [IlluminanceTranslationEnum.SINGULAR_FOOT_CANDLE]: 'Foot-candle',
  [IlluminanceTranslationEnum.PLURAL_LUX]: 'Lux',
  [IlluminanceTranslationEnum.PLURAL_FOOT_CANDLE]: 'Foot-candles'
};
