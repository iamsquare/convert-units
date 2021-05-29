import { Definition } from './type';
import { DigitalUnit } from './type/units.type';

export enum BitEnum {
  BIT = 'b',
  KILOBIT = 'kb',
  MEGABIT = 'Mb',
  GIGABIT = 'Gb',
  TERABIT = 'Tb'
}

export enum ByteEnum {
  BYTE = 'B',
  KILOBYTE = 'kB',
  MEGABYTE = 'MB',
  GIGABYTE = 'GB',
  TERABYTE = 'TB'
}

const bits = {
  [BitEnum.BIT]: {
    name: {
      singular: 'Bit',
      plural: 'Bits'
    },
    anchor: 1
  },
  [BitEnum.KILOBIT]: {
    name: {
      singular: 'Kilobit',
      plural: 'Kilobits'
    },
    anchor: 1024
  },
  [BitEnum.MEGABIT]: {
    name: {
      singular: 'Megabit',
      plural: 'Megabits'
    },
    anchor: 1048576
  },
  [BitEnum.GIGABIT]: {
    name: {
      singular: 'Gigabit',
      plural: 'Gigabits'
    },
    anchor: 1073741824
  },
  [BitEnum.TERABIT]: {
    name: {
      singular: 'Terabit',
      plural: 'Terabits'
    },
    anchor: 1099511627776
  }
};

const bytes = {
  [ByteEnum.BYTE]: {
    name: {
      singular: 'Byte',
      plural: 'Bytes'
    },
    anchor: 1
  },
  [ByteEnum.KILOBYTE]: {
    name: {
      singular: 'Kilobyte',
      plural: 'Kilobytes'
    },
    anchor: 1024
  },
  [ByteEnum.MEGABYTE]: {
    name: {
      singular: 'Megabyte',
      plural: 'Megabytes'
    },
    anchor: 1048576
  },
  [ByteEnum.GIGABYTE]: {
    name: {
      singular: 'Gigabyte',
      plural: 'Gigabytes'
    },
    anchor: 1073741824
  },
  [ByteEnum.TERABYTE]: {
    name: {
      singular: 'Terabyte',
      plural: 'Terabytes'
    },
    anchor: 1099511627776
  }
};

export default {
  systems: {
    bits,
    bytes
  },
  anchors: {
    bits: {
      unit: BitEnum.BIT,
      ratio: 1 / 8
    },
    bytes: {
      unit: ByteEnum.BYTE,
      ratio: 8
    }
  }
} as Definition<'bits' | 'bytes', DigitalUnit>;
