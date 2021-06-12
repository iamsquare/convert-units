import { translationModule, VolumeTranslationEnum } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_MILLIMETER),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_MILLIMETER)
    },
    anchor: 1e-6
  },
  [MetricVolumeEnum.CUBIC_CENTIMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_CENTIMETER),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_CENTIMETER)
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.MILLILITRE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_MILLILITRE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_MILLILITRE)
    },
    anchor: 1e-3
  },
  [MetricVolumeEnum.CENTILITRE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CENTILITRE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CENTILITRE)
    },
    anchor: 1e-2
  },
  [MetricVolumeEnum.DECILITRE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_DECILITRE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_DECILITRE)
    },
    anchor: 1e-1
  },
  [MetricVolumeEnum.LITRE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_LITRE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_LITRE)
    },
    anchor: 1
  },
  [MetricVolumeEnum.KILOLITRE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_KILOLITRE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_KILOLITRE)
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_METER]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_METER),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_METER)
    },
    anchor: 1e3
  },
  [MetricVolumeEnum.CUBIC_KILOMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_KILOMETER),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_KILOMETER)
    },
    anchor: 1e12
  }
};

const imperial: Record<ImperialVolumeUnit, Unit> = {
  [ImperialVolumeEnum.TEASPOON]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_TEASPOON),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_TEASPOON)
    },
    anchor: 1 / 6
  },
  [ImperialVolumeEnum.TABLESPOON]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_TABLESPOON),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_TABLESPOON)
    },
    anchor: 1 / 2
  },
  [ImperialVolumeEnum.CUBIC_INCH]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_INCH),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_INCH)
    },
    anchor: 0.55411
  },
  [ImperialVolumeEnum.FLUID_OUNCE]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_FLUID_OUNCE),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_FLUID_OUNCE)
    },
    anchor: 1
  },
  [ImperialVolumeEnum.CUP]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUP),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUP)
    },
    anchor: 8
  },
  [ImperialVolumeEnum.PINT]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_PINT),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_PINT)
    },
    anchor: 16
  },
  [ImperialVolumeEnum.QUART]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_QUART),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_QUART)
    },
    anchor: 32
  },
  [ImperialVolumeEnum.GALLON]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_GALLON),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_GALLON)
    },
    anchor: 128
  },
  [ImperialVolumeEnum.CUBIC_FOOT]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_FOOT),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_FOOT)
    },
    anchor: 957.506
  },
  [ImperialVolumeEnum.CUBIC_YARD]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_CUBIC_YARD),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_CUBIC_YARD)
    },
    anchor: 25852.7
  }
};

const swedish: Record<SwedishVolumeUnit, Unit> = {
  [SwedishVolumeEnum.KRYDDMATTET]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_KRYDDMATTET),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_KRYDDMATTET)
    },
    anchor: 1e-3
  },
  [SwedishVolumeEnum.TESKED]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_TESKED),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_TESKED)
    },
    anchor: 5e-3
  },
  [SwedishVolumeEnum.MATSKED]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_MATSKED),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_MATSKED)
    },
    anchor: 1.5e-2
  },
  [SwedishVolumeEnum.KAFFEKOPP]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_KAFFEKOPP),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_KAFFEKOPP)
    },
    anchor: 0.15
  },
  [SwedishVolumeEnum.GLAS]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_GLAS),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_GLAS)
    },
    anchor: 0.2
  },
  [SwedishVolumeEnum.KANNA]: {
    name: {
      singular: translationModule.getTranslationByKey(VolumeTranslationEnum.SINGULAR_KANNA),
      plural: translationModule.getTranslationByKey(VolumeTranslationEnum.PLURAL_KANNA)
    },
    anchor: 2.617
  }
};

const volume: UnitDefinition<'metric' | 'imperial' | 'swedish', VolumeUnit> = {
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
