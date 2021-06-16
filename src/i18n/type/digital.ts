export enum DigitalTranslationEnum {
  SINGULAR_BIT = 'SINGULAR_BIT',
  SINGULAR_KILOBIT = 'SINGULAR_KILOBIT',
  SINGULAR_MEGABIT = 'SINGULAR_MEGABIT',
  SINGULAR_GIGABIT = 'SINGULAR_GIGABIT',
  SINGULAR_TERABIT = 'SINGULAR_TERABIT',
  SINGULAR_PETABIT = 'SINGULAR_PETABIT',
  SINGULAR_KIBIBIT = 'SINGULAR_KIBIBIT',
  SINGULAR_MEBIBIT = 'SINGULAR_MEBIBIT',
  SINGULAR_GIBIBIT = 'SINGULAR_GIBIBIT',
  SINGULAR_TEBIBIT = 'SINGULAR_TEBIBIT',
  SINGULAR_PEBIBIT = 'SINGULAR_PEBIBIT',
  SINGULAR_BYTE = 'SINGULAR_BYTE',
  SINGULAR_KILOBYTE = 'SINGULAR_KILOBYTE',
  SINGULAR_MEGABYTE = 'SINGULAR_MEGABYTE',
  SINGULAR_GIGABYTE = 'SINGULAR_GIGABYTE',
  SINGULAR_TERABYTE = 'SINGULAR_TERABYTE',
  SINGULAR_PETABYTE = 'SINGULAR_PETABYTE',
  SINGULAR_KIBIBYTE = 'SINGULAR_KIBIBYTE',
  SINGULAR_MEBIBYTE = 'SINGULAR_MEBIBYTE',
  SINGULAR_GIBIBYTE = 'SINGULAR_GIBIBYTE',
  SINGULAR_TEBIBYTE = 'SINGULAR_TEBIBYTE',
  SINGULAR_PEBIBYTE = 'SINGULAR_PEBIBYTE',
  PLURAL_BIT = 'PLURAL_BIT',
  PLURAL_KILOBIT = 'PLURAL_KILOBIT',
  PLURAL_MEGABIT = 'PLURAL_MEGABIT',
  PLURAL_GIGABIT = 'PLURAL_GIGABIT',
  PLURAL_TERABIT = 'PLURAL_TERABIT',
  PLURAL_PETABIT = 'PLURAL_PETABIT',
  PLURAL_KIBIBIT = 'PLURAL_KIBIBIT',
  PLURAL_MEBIBIT = 'PLURAL_MEBIBIT',
  PLURAL_GIBIBIT = 'PLURAL_GIBIBIT',
  PLURAL_TEBIBIT = 'PLURAL_TEBIBIT',
  PLURAL_PEBIBIT = 'PLURAL_PEBIBIT',
  PLURAL_BYTE = 'PLURAL_BYTE',
  PLURAL_KILOBYTE = 'PLURAL_KILOBYTE',
  PLURAL_MEGABYTE = 'PLURAL_MEGABYTE',
  PLURAL_GIGABYTE = 'PLURAL_GIGABYTE',
  PLURAL_TERABYTE = 'PLURAL_TERABYTE',
  PLURAL_PETABYTE = 'PLURAL_PETABYTE',
  PLURAL_KIBIBYTE = 'PLURAL_KIBIBYTE',
  PLURAL_MEBIBYTE = 'PLURAL_MEBIBYTE',
  PLURAL_GIBIBYTE = 'PLURAL_GIBIBYTE',
  PLURAL_TEBIBYTE = 'PLURAL_TEBIBYTE',
  PLURAL_PEBIBYTE = 'PLURAL_PEBIBYTE'
}

export type DigitalSingularTranslationKey =
  | 'SINGULAR_BIT'
  | 'SINGULAR_KILOBIT'
  | 'SINGULAR_MEGABIT'
  | 'SINGULAR_GIGABIT'
  | 'SINGULAR_TERABIT'
  | 'SINGULAR_PETABIT'
  | 'SINGULAR_KIBIBIT'
  | 'SINGULAR_MEBIBIT'
  | 'SINGULAR_GIBIBIT'
  | 'SINGULAR_TEBIBIT'
  | 'SINGULAR_PEBIBIT'
  | 'SINGULAR_BYTE'
  | 'SINGULAR_KILOBYTE'
  | 'SINGULAR_MEGABYTE'
  | 'SINGULAR_GIGABYTE'
  | 'SINGULAR_TERABYTE'
  | 'SINGULAR_PETABYTE'
  | 'SINGULAR_KIBIBYTE'
  | 'SINGULAR_MEBIBYTE'
  | 'SINGULAR_GIBIBYTE'
  | 'SINGULAR_TEBIBYTE'
  | 'SINGULAR_PEBIBYTE';

export type DigitalPluralTranslationKey =
  | 'PLURAL_BIT'
  | 'PLURAL_KILOBIT'
  | 'PLURAL_MEGABIT'
  | 'PLURAL_GIGABIT'
  | 'PLURAL_TERABIT'
  | 'PLURAL_PETABIT'
  | 'PLURAL_KIBIBIT'
  | 'PLURAL_MEBIBIT'
  | 'PLURAL_GIBIBIT'
  | 'PLURAL_TEBIBIT'
  | 'PLURAL_PEBIBIT'
  | 'PLURAL_BYTE'
  | 'PLURAL_KILOBYTE'
  | 'PLURAL_MEGABYTE'
  | 'PLURAL_GIGABYTE'
  | 'PLURAL_TERABYTE'
  | 'PLURAL_PETABYTE'
  | 'PLURAL_KIBIBYTE'
  | 'PLURAL_MEBIBYTE'
  | 'PLURAL_GIBIBYTE'
  | 'PLURAL_TEBIBYTE'
  | 'PLURAL_PEBIBYTE';

export const digitalTranslations: Record<DigitalSingularTranslationKey | DigitalPluralTranslationKey, string> = {
  [DigitalTranslationEnum.SINGULAR_BIT]: 'Bit',
  [DigitalTranslationEnum.SINGULAR_KILOBIT]: 'Kilobit',
  [DigitalTranslationEnum.SINGULAR_MEGABIT]: 'Megabit',
  [DigitalTranslationEnum.SINGULAR_GIGABIT]: 'Gigabit',
  [DigitalTranslationEnum.SINGULAR_TERABIT]: 'Terabit',
  [DigitalTranslationEnum.SINGULAR_PETABIT]: 'Petabit',
  [DigitalTranslationEnum.SINGULAR_KIBIBIT]: 'Kibibit',
  [DigitalTranslationEnum.SINGULAR_MEBIBIT]: 'Mebibit',
  [DigitalTranslationEnum.SINGULAR_GIBIBIT]: 'Gibibit',
  [DigitalTranslationEnum.SINGULAR_TEBIBIT]: 'Tebibit',
  [DigitalTranslationEnum.SINGULAR_PEBIBIT]: 'Pebibit',
  [DigitalTranslationEnum.SINGULAR_BYTE]: 'Byte',
  [DigitalTranslationEnum.SINGULAR_KILOBYTE]: 'Kilobyte',
  [DigitalTranslationEnum.SINGULAR_MEGABYTE]: 'Megabyte',
  [DigitalTranslationEnum.SINGULAR_GIGABYTE]: 'Gigabyte',
  [DigitalTranslationEnum.SINGULAR_TERABYTE]: 'Terabyte',
  [DigitalTranslationEnum.SINGULAR_PETABYTE]: 'Petabyte',
  [DigitalTranslationEnum.SINGULAR_KIBIBYTE]: 'Kibibyte',
  [DigitalTranslationEnum.SINGULAR_MEBIBYTE]: 'Mebibyte',
  [DigitalTranslationEnum.SINGULAR_GIBIBYTE]: 'Gibibyte',
  [DigitalTranslationEnum.SINGULAR_TEBIBYTE]: 'Tebibyte',
  [DigitalTranslationEnum.SINGULAR_PEBIBYTE]: 'Pebibyte',
  [DigitalTranslationEnum.PLURAL_BIT]: 'Bits',
  [DigitalTranslationEnum.PLURAL_KILOBIT]: 'Kilobits',
  [DigitalTranslationEnum.PLURAL_MEGABIT]: 'Megabits',
  [DigitalTranslationEnum.PLURAL_GIGABIT]: 'Gigabits',
  [DigitalTranslationEnum.PLURAL_TERABIT]: 'Terabits',
  [DigitalTranslationEnum.PLURAL_PETABIT]: 'Petabits',
  [DigitalTranslationEnum.PLURAL_KIBIBIT]: 'Kibibits',
  [DigitalTranslationEnum.PLURAL_MEBIBIT]: 'Mebibits',
  [DigitalTranslationEnum.PLURAL_GIBIBIT]: 'Gibibits',
  [DigitalTranslationEnum.PLURAL_TEBIBIT]: 'Tebibits',
  [DigitalTranslationEnum.PLURAL_PEBIBIT]: 'Pebibits',
  [DigitalTranslationEnum.PLURAL_BYTE]: 'Bytes',
  [DigitalTranslationEnum.PLURAL_KILOBYTE]: 'Kilobytes',
  [DigitalTranslationEnum.PLURAL_MEGABYTE]: 'Megabytes',
  [DigitalTranslationEnum.PLURAL_GIGABYTE]: 'Gigabytes',
  [DigitalTranslationEnum.PLURAL_TERABYTE]: 'Terabytes',
  [DigitalTranslationEnum.PLURAL_PETABYTE]: 'Petabytes',
  [DigitalTranslationEnum.PLURAL_KIBIBYTE]: 'Kibibytes',
  [DigitalTranslationEnum.PLURAL_MEBIBYTE]: 'Mebibytes',
  [DigitalTranslationEnum.PLURAL_GIBIBYTE]: 'Gibibytes',
  [DigitalTranslationEnum.PLURAL_TEBIBYTE]: 'Tebibytes',
  [DigitalTranslationEnum.PLURAL_PEBIBYTE]: 'Pebibytes'
};
