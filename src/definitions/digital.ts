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
    anchor: 1e3
  },
  [BitEnum.KIBIBIT]: {
    name: {
      singular: 'Kibibit',
      plural: 'Kibibits'
    },
    anchor: 1024
  },
  [BitEnum.MEGABIT]: {
    name: {
      singular: 'Megabit',
      plural: 'Megabits'
    },
    anchor: 1e6
  },
  [BitEnum.MEBIBIT]: {
    name: {
      singular: 'Mebibit',
      plural: 'Mebibits'
    },
    anchor: 1048576
  },
  [BitEnum.GIGABIT]: {
    name: {
      singular: 'Gigabit',
      plural: 'Gigabits'
    },
    anchor: 1e9
  },
  [BitEnum.GIBIBIT]: {
    name: {
      singular: 'Gibibit',
      plural: 'Gibibits'
    },
    anchor: 1073741824
  },
  [BitEnum.TERABIT]: {
    name: {
      singular: 'Terabit',
      plural: 'Terabits'
    },
    anchor: 1e12
  },
  [BitEnum.TEBIBIT]: {
    name: {
      singular: 'Tebibit',
      plural: 'Tebibits'
    },
    anchor: 1099511627776
  },
  [BitEnum.PETABIT]: {
    name: {
      singular: 'Petabit',
      plural: 'Petabits'
    },
    anchor: 1e15
  },
  [BitEnum.PEBIBIT]: {
    name: {
      singular: 'Pebibit',
      plural: 'Pebibits'
    },
    anchor: 1125899906842624
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
    anchor: 1e3
  },
  [ByteEnum.KIBIBYTE]: {
    name: {
      singular: 'Kibibyte',
      plural: 'Kibibytes'
    },
    anchor: 1024
  },
  [ByteEnum.MEGABYTE]: {
    name: {
      singular: 'Megabyte',
      plural: 'Megabytes'
    },
    anchor: 1e6
  },
  [ByteEnum.MEBIBYTE]: {
    name: {
      singular: 'Mebibyte',
      plural: 'Mebibytes'
    },
    anchor: 1048576
  },
  [ByteEnum.GIGABYTE]: {
    name: {
      singular: 'Gigabyte',
      plural: 'Gigabytes'
    },
    anchor: 1e9
  },
  [ByteEnum.GIBIBYTE]: {
    name: {
      singular: 'Gibibyte',
      plural: 'Gibibytes'
    },
    anchor: 1073741824
  },
  [ByteEnum.TERABYTE]: {
    name: {
      singular: 'Terabyte',
      plural: 'Terabytes'
    },
    anchor: 1e12
  },
  [ByteEnum.TEBIBYTE]: {
    name: {
      singular: 'Tebibyte',
      plural: 'Tebibytes'
    },
    anchor: 1099511627776
  },
  [ByteEnum.PETABYTE]: {
    name: {
      singular: 'Petabyte',
      plural: 'Petabytes'
    },
    anchor: 1e15
  },
  [ByteEnum.PEBIBYTE]: {
    name: {
      singular: 'Pebibyte',
      plural: 'Pebibytes'
    },
    anchor: 1125899906842624
  }
};

const digital = {
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
};

export default digital;
