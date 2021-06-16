export enum TemperatureTranslationEnum {
  SINGULAR_CELSIUS = 'SINGULAR_CELSIUS',
  SINGULAR_KELVIN = 'SINGULAR_KELVIN',
  SINGULAR_FAHRENHEIT = 'SINGULAR_FAHRENHEIT',
  SINGULAR_RANKINE = 'SINGULAR_RANKINE',
  PLURAL_CELSIUS = 'PLURAL_CELSIUS',
  PLURAL_KELVIN = 'PLURAL_KELVIN',
  PLURAL_FAHRENHEIT = 'PLURAL_FAHRENHEIT',
  PLURAL_RANKINE = 'PLURAL_RANKINE'
}

export type TemperatureSingularTranslationKey =
  | 'SINGULAR_CELSIUS'
  | 'SINGULAR_KELVIN'
  | 'SINGULAR_FAHRENHEIT'
  | 'SINGULAR_RANKINE';

export type TemperaturePluralTranslationKey =
  | 'PLURAL_CELSIUS'
  | 'PLURAL_KELVIN'
  | 'PLURAL_FAHRENHEIT'
  | 'PLURAL_RANKINE';

export const temperatureTranslations: Record<
  TemperatureSingularTranslationKey | TemperaturePluralTranslationKey,
  string
> = {
  [TemperatureTranslationEnum.SINGULAR_CELSIUS]: 'Degree Celsius',
  [TemperatureTranslationEnum.SINGULAR_KELVIN]: 'Degree Kelvin',
  [TemperatureTranslationEnum.SINGULAR_FAHRENHEIT]: 'Degree Fahrenheit',
  [TemperatureTranslationEnum.SINGULAR_RANKINE]: 'Degree Rankine',
  [TemperatureTranslationEnum.PLURAL_CELSIUS]: 'Degrees Celsius',
  [TemperatureTranslationEnum.PLURAL_KELVIN]: 'Degrees Kelvin',
  [TemperatureTranslationEnum.PLURAL_FAHRENHEIT]: 'Degrees Fahrenheit',
  [TemperatureTranslationEnum.PLURAL_RANKINE]: 'Degrees Rankine'
};
