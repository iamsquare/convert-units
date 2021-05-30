import { Definition } from '../type';
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
    anchor: 1e-6
  },
  [MetricVolumeEnum.CUBIC_CENTIMETER]: {
    name: {
      singular: 'Cubic Centimeter',
      plural: 'Cubic Centimeters'
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.MILLILITRE]: {
    name: {
      singular: 'Millilitre',
      plural: 'Millilitres'
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.CENTILITRE]: {
    name: {
      singular: 'Centilitre',
      plural: 'Centilitres'
    },
    anchor: 1e-2
  },
  [MetricVolumeEnum.DECILITRE]: {
    name: {
      singular: 'Decilitre',
      plural: 'Decilitres'
    },
    anchor: 1e-1
  },
  [MetricVolumeEnum.LITRE]: {
    name: {
      singular: 'Litre',
      plural: 'Litres'
    },
    anchor: 1
  },
  [MetricVolumeEnum.KILOLITRE]: {
    name: {
      singular: 'Kilolitre',
      plural: 'Kilolitres'
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_METER]: {
    name: {
      singular: 'Cubic meter',
      plural: 'Cubic meters'
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_KILOMETER]: {
    name: {
      singular: 'Cubic kilometer',
      plural: 'Cubic kilometers'
    },
    anchor: 1e12
  },
  [MetricVolumeEnum.KRYDDMATTET]: {
    name: {
      singular: 'Kryddmåttet',
      plural: 'Kryddmått'
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.TESKED]: {
    name: {
      singular: 'Tesked',
      plural: 'Teskedar'
    },
    anchor: 5e-3
  },
  [MetricVolumeEnum.MATSKED]: {
    name: {
      singular: 'Matsked',
      plural: 'Matskedar'
    },
    anchor: 1.5e-2
  },
  [MetricVolumeEnum.KAFFEKOPP]: {
    name: {
      singular: 'Kaffekopp',
      plural: 'Kaffekoppar'
    },
    anchor: 0.15
  },
  [MetricVolumeEnum.GLAS]: {
    name: {
      singular: 'Glas',
      plural: 'Glas'
    },
    anchor: 0.2
  },
  [MetricVolumeEnum.KANNA]: {
    name: {
      singular: 'Kanna',
      plural: 'Kannor'
    },
    anchor: 2.617
  }
};

const imperial = {
  [ImperialVolumeEnum.TEASPOON]: {
    name: {
      singular: 'Teaspoon',
      plural: 'Teaspoons'
    },
    anchor: 1 / 6
  },
  [ImperialVolumeEnum.TABLESPOON]: {
    name: {
      singular: 'Tablespoon',
      plural: 'Tablespoons'
    },
    anchor: 1 / 2
  },
  [ImperialVolumeEnum.CUBIC_INCH]: {
    name: {
      singular: 'Cubic inch',
      plural: 'Cubic inches'
    },
    anchor: 0.55411
  },
  [ImperialVolumeEnum.FLUID_OUNCE]: {
    name: {
      singular: 'Fluid Ounce',
      plural: 'Fluid Ounces'
    },
    anchor: 1
  },
  [ImperialVolumeEnum.CUP]: {
    name: {
      singular: 'Cup',
      plural: 'Cups'
    },
    anchor: 8
  },
  [ImperialVolumeEnum.PINT]: {
    name: {
      singular: 'Pint',
      plural: 'Pints'
    },
    anchor: 16
  },
  [ImperialVolumeEnum.QUART]: {
    name: {
      singular: 'Quart',
      plural: 'Quarts'
    },
    anchor: 32
  },
  [ImperialVolumeEnum.GALLON]: {
    name: {
      singular: 'Gallon',
      plural: 'Gallons'
    },
    anchor: 128
  },
  [ImperialVolumeEnum.CUBIC_FOOT]: {
    name: {
      singular: 'Cubic foot',
      plural: 'Cubic feet'
    },
    anchor: 957.506
  },
  [ImperialVolumeEnum.CUBIC_YARD]: {
    name: {
      singular: 'Cubic yard',
      plural: 'Cubic yards'
    },
    anchor: 25852.7
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
