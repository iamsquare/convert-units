export enum VoltageTranslationEnum {
  SINGULAR_VOLT = 'SINGULAR_VOLT',
  SINGULAR_MILLIVOLT = 'SINGULAR_MILLIVOLT',
  SINGULAR_KILOVOLT = 'SINGULAR_KILOVOLT',
  PLURAL_VOLT = 'PLURAL_VOLT',
  PLURAL_MILLIVOLT = 'PLURAL_MILLIVOLT',
  PLURAL_KILOVOLT = 'PLURAL_KILOVOLT'
}

export type VoltageSingularTranslationKey = 'SINGULAR_VOLT' | 'SINGULAR_MILLIVOLT' | 'SINGULAR_KILOVOLT';

export type VoltagePluralTranslationKey = 'PLURAL_VOLT' | 'PLURAL_MILLIVOLT' | 'PLURAL_KILOVOLT';

export const voltageTranslations: Record<VoltageSingularTranslationKey | VoltagePluralTranslationKey, string> = {
  [VoltageTranslationEnum.SINGULAR_VOLT]: 'Volt',
  [VoltageTranslationEnum.SINGULAR_MILLIVOLT]: 'Millivolt',
  [VoltageTranslationEnum.SINGULAR_KILOVOLT]: 'Kilovolt',
  [VoltageTranslationEnum.PLURAL_VOLT]: 'Volts',
  [VoltageTranslationEnum.PLURAL_MILLIVOLT]: 'Millivolts',
  [VoltageTranslationEnum.PLURAL_KILOVOLT]: 'Kilovolts'
};
