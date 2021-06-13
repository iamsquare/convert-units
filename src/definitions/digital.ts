import { DigitalTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { BitDigitalUnit, ByteDigitalUnit, DigitalUnit } from './type';

export enum BitEnum {
  BIT = 'b',
  KILOBIT = 'kb',
  MEGABIT = 'Mb',
  GIGABIT = 'Gb',
  TERABIT = 'Tb',
  PETABIT = 'Pb',
  KIBIBIT = 'kib',
  MEBIBIT = 'Mib',
  GIBIBIT = 'Gib',
  TEBIBIT = 'Tib',
  PEBIBIT = 'Pib'
}

export enum ByteEnum {
  BYTE = 'B',
  KILOBYTE = 'kB',
  MEGABYTE = 'MB',
  GIGABYTE = 'GB',
  TERABYTE = 'TB',
  PETABYTE = 'PB',
  KIBIBYTE = 'kiB',
  MEBIBYTE = 'MiB',
  GIBIBYTE = 'GiB',
  TEBIBYTE = 'TiB',
  PEBIBYTE = 'PiB'
}

const bits: Record<BitDigitalUnit, Unit> = {
  [BitEnum.BIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_BIT,
      plural: DigitalTranslationEnum.PLURAL_BIT
    },
    anchor: 1
  },
  [BitEnum.KILOBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_KILOBIT,
      plural: DigitalTranslationEnum.PLURAL_KILOBIT
    },
    anchor: 1e3
  },
  [BitEnum.KIBIBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_KIBIBIT,
      plural: DigitalTranslationEnum.PLURAL_KIBIBIT
    },
    anchor: 1024
  },
  [BitEnum.MEGABIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_MEGABIT,
      plural: DigitalTranslationEnum.PLURAL_MEGABIT
    },
    anchor: 1e6
  },
  [BitEnum.MEBIBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_MEBIBIT,
      plural: DigitalTranslationEnum.PLURAL_MEBIBIT
    },
    anchor: 1048576
  },
  [BitEnum.GIGABIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_GIGABIT,
      plural: DigitalTranslationEnum.PLURAL_GIGABIT
    },
    anchor: 1e9
  },
  [BitEnum.GIBIBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_GIBIBIT,
      plural: DigitalTranslationEnum.PLURAL_GIBIBIT
    },
    anchor: 1073741824
  },
  [BitEnum.TERABIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_TERABIT,
      plural: DigitalTranslationEnum.PLURAL_TERABIT
    },
    anchor: 1e12
  },
  [BitEnum.TEBIBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_TEBIBIT,
      plural: DigitalTranslationEnum.PLURAL_TEBIBIT
    },
    anchor: 1099511627776
  },
  [BitEnum.PETABIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_PETABIT,
      plural: DigitalTranslationEnum.PLURAL_PETABIT
    },
    anchor: 1e15
  },
  [BitEnum.PEBIBIT]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_PEBIBIT,
      plural: DigitalTranslationEnum.PLURAL_PEBIBIT
    },
    anchor: 1125899906842624
  }
};

const bytes: Record<ByteDigitalUnit, Unit> = {
  [ByteEnum.BYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_BYTE,
      plural: DigitalTranslationEnum.PLURAL_BYTE
    },
    anchor: 1
  },
  [ByteEnum.KILOBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_KILOBYTE,
      plural: DigitalTranslationEnum.PLURAL_KILOBYTE
    },
    anchor: 1e3
  },
  [ByteEnum.KIBIBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_KIBIBYTE,
      plural: DigitalTranslationEnum.PLURAL_KIBIBYTE
    },
    anchor: 1024
  },
  [ByteEnum.MEGABYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_MEGABYTE,
      plural: DigitalTranslationEnum.PLURAL_MEGABYTE
    },
    anchor: 1e6
  },
  [ByteEnum.MEBIBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_MEBIBYTE,
      plural: DigitalTranslationEnum.PLURAL_MEBIBYTE
    },
    anchor: 1048576
  },
  [ByteEnum.GIGABYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_GIGABYTE,
      plural: DigitalTranslationEnum.PLURAL_GIGABYTE
    },
    anchor: 1e9
  },
  [ByteEnum.GIBIBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_GIBIBYTE,
      plural: DigitalTranslationEnum.PLURAL_GIBIBYTE
    },
    anchor: 1073741824
  },
  [ByteEnum.TERABYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_TERABYTE,
      plural: DigitalTranslationEnum.PLURAL_TERABYTE
    },
    anchor: 1e12
  },
  [ByteEnum.TEBIBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_TEBIBYTE,
      plural: DigitalTranslationEnum.PLURAL_TEBIBYTE
    },
    anchor: 1099511627776
  },
  [ByteEnum.PETABYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_PETABYTE,
      plural: DigitalTranslationEnum.PLURAL_PETABYTE
    },
    anchor: 1e15
  },
  [ByteEnum.PEBIBYTE]: {
    name: {
      singular: DigitalTranslationEnum.SINGULAR_PEBIBYTE,
      plural: DigitalTranslationEnum.PLURAL_PEBIBYTE
    },
    anchor: 1125899906842624
  }
};

const digital: MeasureDefinition<'bits' | 'bytes', DigitalUnit> = {
  systems: {
    bits,
    bytes
  },
  anchors: {
    bits: {
      unit: BitEnum.BIT,
      ratio: {
        bytes: 1 / 8
      }
    },
    bytes: {
      unit: ByteEnum.BYTE,
      ratio: {
        bits: 8
      }
    }
  }
};

export default digital;
