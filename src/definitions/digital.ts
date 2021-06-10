import { DigitalTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_BIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_BIT)
    },
    anchor: 1
  },
  [BitEnum.KILOBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_KILOBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_KILOBIT)
    },
    anchor: 1e3
  },
  [BitEnum.KIBIBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_KIBIBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_KIBIBIT)
    },
    anchor: 1024
  },
  [BitEnum.MEGABIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_MEGABIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_MEGABIT)
    },
    anchor: 1e6
  },
  [BitEnum.MEBIBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_MEBIBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_MEBIBIT)
    },
    anchor: 1048576
  },
  [BitEnum.GIGABIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_GIGABIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_GIGABIT)
    },
    anchor: 1e9
  },
  [BitEnum.GIBIBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_GIBIBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_GIBIBIT)
    },
    anchor: 1073741824
  },
  [BitEnum.TERABIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_TERABIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_TERABIT)
    },
    anchor: 1e12
  },
  [BitEnum.TEBIBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_TEBIBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_TEBIBIT)
    },
    anchor: 1099511627776
  },
  [BitEnum.PETABIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_PETABIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_PETABIT)
    },
    anchor: 1e15
  },
  [BitEnum.PEBIBIT]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_PEBIBIT),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_PEBIBIT)
    },
    anchor: 1125899906842624
  }
};

const bytes: Record<ByteDigitalUnit, Unit> = {
  [ByteEnum.BYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_BYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_BYTE)
    },
    anchor: 1
  },
  [ByteEnum.KILOBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_KILOBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_KILOBYTE)
    },
    anchor: 1e3
  },
  [ByteEnum.KIBIBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_KIBIBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_KIBIBYTE)
    },
    anchor: 1024
  },
  [ByteEnum.MEGABYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_MEGABYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_MEGABYTE)
    },
    anchor: 1e6
  },
  [ByteEnum.MEBIBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_MEBIBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_MEBIBYTE)
    },
    anchor: 1048576
  },
  [ByteEnum.GIGABYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_GIGABYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_GIGABYTE)
    },
    anchor: 1e9
  },
  [ByteEnum.GIBIBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_GIBIBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_GIBIBYTE)
    },
    anchor: 1073741824
  },
  [ByteEnum.TERABYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_TERABYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_TERABYTE)
    },
    anchor: 1e12
  },
  [ByteEnum.TEBIBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_TEBIBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_TEBIBYTE)
    },
    anchor: 1099511627776
  },
  [ByteEnum.PETABYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_PETABYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_PETABYTE)
    },
    anchor: 1e15
  },
  [ByteEnum.PEBIBYTE]: {
    name: {
      singular: translationModule.getTranslationByKey(DigitalTranslationEnum.SINGULAR_PEBIBYTE),
      plural: translationModule.getTranslationByKey(DigitalTranslationEnum.PLURAL_PEBIBYTE)
    },
    anchor: 1125899906842624
  }
};

const digital: UnitDefinition<'bits' | 'bytes', DigitalUnit> = {
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
