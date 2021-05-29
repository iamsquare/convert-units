import { Definition } from './type';
import { VolumeUnit } from './type/units.type';

export enum MetricVolumeEnum {
  CUBIC_MILLIMETER = 'mm3',
  CUBIC_CENTIMETER = 'cm3',
  MILLILITRE = 'ml',
  CENTILITRE = 'cl',
  DECILITRE = 'dl',
  LITRE = 'l',
  KILOLITRE = 'kl',
  CUBIC_METER = 'm3',
  CUBIC_KILOMETER = 'km3',
  KRYDDMATTET = 'krm',
  TESKED = 'tsk',
  MATSKED = 'msk',
  KAFFEKOPP = 'kkp',
  GLAS = 'glas',
  KANNA = 'kanna'
}

export enum ImperialVolumeEnum {
  TEASPOON = 'tsp',
  TABLESPOON = 'Tbs',
  CUBIC_INCH = 'in3',
  FLUID_OUNCE = 'fl-oz',
  CUP = 'cup',
  PINT = 'pnt',
  QUART = 'qt',
  GALLON = 'gal',
  CUBIC_FOOT = 'ft3',
  CUBIC_YARD = 'yd3'
}

const metric = {
  [MetricVolumeEnum.CUBIC_MILLIMETER]: {
    name: {
      singular: 'Cubic Millimeter',
      plural: 'Cubic Millimeters'
    },
    toAnchor: 1e-6
  },
  [MetricVolumeEnum.CUBIC_CENTIMETER]: {
    name: {
      singular: 'Cubic Centimeter',
      plural: 'Cubic Centimeters'
    },
    toAnchor: 1e-3
  },
  [MetricVolumeEnum.MILLILITRE]: {
    name: {
      singular: 'Millilitre',
      plural: 'Millilitres'
    },
    toAnchor: 1e-3
  },
  [MetricVolumeEnum.CENTILITRE]: {
    name: {
      singular: 'Centilitre',
      plural: 'Centilitres'
    },
    toAnchor: 1e-2
  },
  [MetricVolumeEnum.DECILITRE]: {
    name: {
      singular: 'Decilitre',
      plural: 'Decilitres'
    },
    toAnchor: 1e-1
  },
  [MetricVolumeEnum.LITRE]: {
    name: {
      singular: 'Litre',
      plural: 'Litres'
    },
    toAnchor: 1
  },
  [MetricVolumeEnum.KILOLITRE]: {
    name: {
      singular: 'Kilolitre',
      plural: 'Kilolitres'
    },
    toAnchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_METER]: {
    name: {
      singular: 'Cubic meter',
      plural: 'Cubic meters'
    },
    toAnchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_KILOMETER]: {
    name: {
      singular: 'Cubic kilometer',
      plural: 'Cubic kilometers'
    },
    toAnchor: 1e12
  },
  [MetricVolumeEnum.KRYDDMATTET]: {
    name: {
      singular: 'Kryddmåttet',
      plural: 'Kryddmått'
    },
    toAnchor: 1e-3
  },
  [MetricVolumeEnum.TESKED]: {
    name: {
      singular: 'Tesked',
      plural: 'Teskedar'
    },
    toAnchor: 5e-3
  },
  [MetricVolumeEnum.MATSKED]: {
    name: {
      singular: 'Matsked',
      plural: 'Matskedar'
    },
    toAnchor: 1.5e-2
  },
  [MetricVolumeEnum.KAFFEKOPP]: {
    name: {
      singular: 'Kaffekopp',
      plural: 'Kaffekoppar'
    },
    toAnchor: 0.15
  },
  [MetricVolumeEnum.GLAS]: {
    name: {
      singular: 'Glas',
      plural: 'Glas'
    },
    toAnchor: 0.2
  },
  [MetricVolumeEnum.KANNA]: {
    name: {
      singular: 'Kanna',
      plural: 'Kannor'
    },
    toAnchor: 2.617
  }
};

const imperial = {
  [ImperialVolumeEnum.TEASPOON]: {
    name: {
      singular: 'Teaspoon',
      plural: 'Teaspoons'
    },
    toAnchor: 1 / 6
  },
  [ImperialVolumeEnum.TABLESPOON]: {
    name: {
      singular: 'Tablespoon',
      plural: 'Tablespoons'
    },
    toAnchor: 1 / 2
  },
  [ImperialVolumeEnum.CUBIC_INCH]: {
    name: {
      singular: 'Cubic inch',
      plural: 'Cubic inches'
    },
    toAnchor: 0.55411
  },
  [ImperialVolumeEnum.FLUID_OUNCE]: {
    name: {
      singular: 'Fluid Ounce',
      plural: 'Fluid Ounces'
    },
    toAnchor: 1
  },
  [ImperialVolumeEnum.CUP]: {
    name: {
      singular: 'Cup',
      plural: 'Cups'
    },
    toAnchor: 8
  },
  [ImperialVolumeEnum.PINT]: {
    name: {
      singular: 'Pint',
      plural: 'Pints'
    },
    toAnchor: 16
  },
  [ImperialVolumeEnum.QUART]: {
    name: {
      singular: 'Quart',
      plural: 'Quarts'
    },
    toAnchor: 32
  },
  [ImperialVolumeEnum.GALLON]: {
    name: {
      singular: 'Gallon',
      plural: 'Gallons'
    },
    toAnchor: 128
  },
  [ImperialVolumeEnum.CUBIC_FOOT]: {
    name: {
      singular: 'Cubic foot',
      plural: 'Cubic feet'
    },
    toAnchor: 957.506
  },
  [ImperialVolumeEnum.CUBIC_YARD]: {
    name: {
      singular: 'Cubic yard',
      plural: 'Cubic yards'
    },
    toAnchor: 25852.7
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricVolumeEnum.LITRE,
      ratio: 33.8140226
    },
    imperial: {
      unit: ImperialVolumeEnum.FLUID_OUNCE,
      ratio: 1 / 33.8140226
    }
  }
} as Definition<'metric' | 'imperial', VolumeUnit>;
