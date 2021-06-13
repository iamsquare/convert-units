import { VolumeTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialVolumeUnit, MetricVolumeUnit, SwedishVolumeUnit, VolumeUnit } from './type';

export enum MetricVolumeEnum {
  CUBIC_MILLIMETER = 'mm3',
  CUBIC_CENTIMETER = 'cm3',
  MILLILITRE = 'ml',
  CENTILITRE = 'cl',
  DECILITRE = 'dl',
  LITRE = 'l',
  KILOLITRE = 'kl',
  CUBIC_METER = 'm3',
  CUBIC_KILOMETER = 'km3'
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

export enum SwedishVolumeEnum {
  KRYDDMATTET = 'krm',
  TESKED = 'tsk',
  MATSKED = 'msk',
  KAFFEKOPP = 'kkp',
  GLAS = 'glas',
  KANNA = 'kanna'
}

const metric: Record<MetricVolumeUnit, Unit> = {
  [MetricVolumeEnum.CUBIC_MILLIMETER]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_MILLIMETER,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_MILLIMETER
    },
    anchor: 1e-6
  },
  [MetricVolumeEnum.CUBIC_CENTIMETER]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_CENTIMETER,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_CENTIMETER
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.MILLILITRE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_MILLILITRE,
      plural: VolumeTranslationEnum.PLURAL_MILLILITRE
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.CENTILITRE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CENTILITRE,
      plural: VolumeTranslationEnum.PLURAL_CENTILITRE
    },
    anchor: 1e-2
  },
  [MetricVolumeEnum.DECILITRE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_DECILITRE,
      plural: VolumeTranslationEnum.PLURAL_DECILITRE
    },
    anchor: 1e-1
  },
  [MetricVolumeEnum.LITRE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_LITRE,
      plural: VolumeTranslationEnum.PLURAL_LITRE
    },
    anchor: 1
  },
  [MetricVolumeEnum.KILOLITRE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_KILOLITRE,
      plural: VolumeTranslationEnum.PLURAL_KILOLITRE
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_METER]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_METER,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_METER
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_KILOMETER]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_KILOMETER,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_KILOMETER
    },
    anchor: 1e12
  }
};

const imperial: Record<ImperialVolumeUnit, Unit> = {
  [ImperialVolumeEnum.TEASPOON]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_TEASPOON,
      plural: VolumeTranslationEnum.PLURAL_TEASPOON
    },
    anchor: 1 / 6
  },
  [ImperialVolumeEnum.TABLESPOON]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_TABLESPOON,
      plural: VolumeTranslationEnum.PLURAL_TABLESPOON
    },
    anchor: 1 / 2
  },
  [ImperialVolumeEnum.CUBIC_INCH]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_INCH,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_INCH
    },
    anchor: 0.55411
  },
  [ImperialVolumeEnum.FLUID_OUNCE]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_FLUID_OUNCE,
      plural: VolumeTranslationEnum.PLURAL_FLUID_OUNCE
    },
    anchor: 1
  },
  [ImperialVolumeEnum.CUP]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUP,
      plural: VolumeTranslationEnum.PLURAL_CUP
    },
    anchor: 8
  },
  [ImperialVolumeEnum.PINT]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_PINT,
      plural: VolumeTranslationEnum.PLURAL_PINT
    },
    anchor: 16
  },
  [ImperialVolumeEnum.QUART]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_QUART,
      plural: VolumeTranslationEnum.PLURAL_QUART
    },
    anchor: 32
  },
  [ImperialVolumeEnum.GALLON]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_GALLON,
      plural: VolumeTranslationEnum.PLURAL_GALLON
    },
    anchor: 128
  },
  [ImperialVolumeEnum.CUBIC_FOOT]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_FOOT,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_FOOT
    },
    anchor: 957.506
  },
  [ImperialVolumeEnum.CUBIC_YARD]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_CUBIC_YARD,
      plural: VolumeTranslationEnum.PLURAL_CUBIC_YARD
    },
    anchor: 25852.7
  }
};

const swedish: Record<SwedishVolumeUnit, Unit> = {
  [SwedishVolumeEnum.KRYDDMATTET]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_KRYDDMATTET,
      plural: VolumeTranslationEnum.PLURAL_KRYDDMATTET
    },
    anchor: 1e-3
  },
  [SwedishVolumeEnum.TESKED]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_TESKED,
      plural: VolumeTranslationEnum.PLURAL_TESKED
    },
    anchor: 5e-3
  },
  [SwedishVolumeEnum.MATSKED]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_MATSKED,
      plural: VolumeTranslationEnum.PLURAL_MATSKED
    },
    anchor: 1.5e-2
  },
  [SwedishVolumeEnum.KAFFEKOPP]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_KAFFEKOPP,
      plural: VolumeTranslationEnum.PLURAL_KAFFEKOPP
    },
    anchor: 0.15
  },
  [SwedishVolumeEnum.GLAS]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_GLAS,
      plural: VolumeTranslationEnum.PLURAL_GLAS
    },
    anchor: 0.2
  },
  [SwedishVolumeEnum.KANNA]: {
    name: {
      singular: VolumeTranslationEnum.SINGULAR_KANNA,
      plural: VolumeTranslationEnum.PLURAL_KANNA
    },
    anchor: 2.617
  }
};

const volume: MeasureDefinition<'metric' | 'imperial' | 'swedish', VolumeUnit> = {
  systems: {
    metric,
    imperial,
    swedish
  },
  anchors: {
    metric: {
      unit: MetricVolumeEnum.LITRE,
      ratio: {
        imperial: 33.8140226,
        swedish: 1
      }
    },
    imperial: {
      unit: ImperialVolumeEnum.FLUID_OUNCE,
      ratio: {
        metric: 1 / 33.8140226,
        swedish: 1 / 33.8140226
      }
    },
    swedish: {
      unit: SwedishVolumeEnum.KRYDDMATTET,
      ratio: {
        metric: 1,
        imperial: 0.0338140226
      }
    }
  }
};

export default volume;
