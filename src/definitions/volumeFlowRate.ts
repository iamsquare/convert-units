import { VolumeFlowRateTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialVolumeFlowRateUnit, MetricVolumeFlowRateUnit, VolumeFlowRateUnit } from './type';

export enum MetricVolumeFlowEnum {
  CUBIC_MILLIMETER_PER_SECOND = 'mm3/s',
  CUBIC_CENTIMETER_PER_SECOND = 'cm3/s',
  MILLILITRE_PER_SECOND = 'ml/s',
  CENTILITRE_PER_SECOND = 'cl/s',
  DECILITRE_PER_SECOND = 'dl/s',
  LITRE_PER_SECOND = 'l/s',
  LITRE_PER_MINUTE = 'l/min',
  LITRE_PER_HOUR = 'l/h',
  KILOLITRE_PER_SECOND = 'kl/s',
  KILOLITRE_PER_MINUTE = 'kl/min',
  KILOLITRE_PER_HOUR = 'kl/h',
  CUBIC_METER_PER_SECOND = 'm3/s',
  CUBIC_METER_PER_MINUTE = 'm3/min',
  CUBIC_METER_PER_HOUR = 'm3/h',
  CUBIC_KILOMETER_PER_SECOND = 'km3/s'
}

export enum ImperialVolumeFlowEnum {
  TEASPOON_PER_SECOND = 'tsp/s',
  TABLESPOON_PER_SECOND = 'Tbs/s',
  CUBIC_INCH_PER_SECOND = 'in3/s',
  CUBIC_INCH_PER_MINUTE = 'in3/min',
  CUBIC_INCH_PER_HOUR = 'in3/h',
  FLUID_OUNCE_PER_SECOND = 'fl-oz/s',
  FLUID_OUNCE_PER_MINUTE = 'fl-oz/min',
  FLUID_OUNCE_PER_HOUR = 'fl-oz/h',
  CUP_PER_SECOND = 'cup/s',
  PINT_PER_SECOND = 'pnt/s',
  PINT_PER_MINUTE = 'pnt/min',
  PINT_PER_HOUR = 'pnt/h',
  QUART_PER_SECOND = 'qt/s',
  GALLON_PER_SECOND = 'gal/s',
  GALLON_PER_MINUTE = 'gal/min',
  GALLON_PER_HOUR = 'gal/h',
  CUBIC_FOOT_PER_SECOND = 'ft3/s',
  CUBIC_FOOT_PER_MINUTE = 'ft3/min',
  CUBIC_FOOT_PER_HOUR = 'ft3/h',
  CUBIC_YARD_PER_SECOND = 'yd3/s',
  CUBIC_YARD_PER_MINUTE = 'yd3/min',
  CUBIC_YARD_PER_HOUR = 'yd3/h'
}

const metric: Record<MetricVolumeFlowRateUnit, Unit> = {
  [MetricVolumeFlowEnum.CUBIC_MILLIMETER_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_MILLIMETER_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_MILLIMETER_PER_SECOND
    },
    anchor: 1e-6
  },
  [MetricVolumeFlowEnum.CUBIC_CENTIMETER_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_CENTIMETER_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_CENTIMETER_PER_SECOND
    },
    anchor: 1e-3
  },
  [MetricVolumeFlowEnum.MILLILITRE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_MILLILITRE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_MILLILITRE_PER_SECOND
    },
    anchor: 1e-3
  },
  [MetricVolumeFlowEnum.CENTILITRE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CENTILITRE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CENTILITRE_PER_SECOND
    },
    anchor: 1e-2
  },
  [MetricVolumeFlowEnum.DECILITRE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_DECILITRE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_DECILITRE_PER_SECOND
    },
    anchor: 0.1
  },
  [MetricVolumeFlowEnum.LITRE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_LITRE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_LITRE_PER_SECOND
    },
    anchor: 1
  },
  [MetricVolumeFlowEnum.LITRE_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_LITRE_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_LITRE_PER_MINUTE
    },
    anchor: 1 / 60
  },
  [MetricVolumeFlowEnum.LITRE_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_LITRE_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_LITRE_PER_HOUR
    },
    anchor: 1 / 3600
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_KILOLITRE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_KILOLITRE_PER_SECOND
    },
    anchor: 1e3
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_KILOLITRE_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_KILOLITRE_PER_MINUTE
    },
    anchor: 50 / 3
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_KILOLITRE_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_KILOLITRE_PER_HOUR
    },
    anchor: 5 / 18
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_METER_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_METER_PER_SECOND
    },
    anchor: 1e3
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_METER_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_METER_PER_MINUTE
    },
    anchor: 50 / 3
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_METER_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_METER_PER_HOUR
    },
    anchor: 5 / 18
  },
  [MetricVolumeFlowEnum.CUBIC_KILOMETER_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_KILOMETER_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_KILOMETER_PER_SECOND
    },
    anchor: 1e12
  }
};

const imperial: Record<ImperialVolumeFlowRateUnit, Unit> = {
  [ImperialVolumeFlowEnum.TEASPOON_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_TEASPOON_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_TEASPOON_PER_SECOND
    },
    anchor: 1 / 6
  },
  [ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_TABLESPOON_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_TABLESPOON_PER_SECOND
    },
    anchor: 1 / 2
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_INCH_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_INCH_PER_SECOND
    },
    anchor: 0.55411
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_INCH_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_INCH_PER_MINUTE
    },
    anchor: 0.55411 / 60
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_INCH_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_INCH_PER_HOUR
    },
    anchor: 0.55411 / 3600
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_FLUID_OUNCE_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_FLUID_OUNCE_PER_SECOND
    },
    anchor: 1
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_FLUID_OUNCE_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_FLUID_OUNCE_PER_MINUTE
    },
    anchor: 1 / 60
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_FLUID_OUNCE_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_FLUID_OUNCE_PER_HOUR
    },
    anchor: 1 / 3600
  },
  [ImperialVolumeFlowEnum.CUP_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUP_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUP_PER_SECOND
    },
    anchor: 8
  },
  [ImperialVolumeFlowEnum.PINT_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_PINT_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_PINT_PER_SECOND
    },
    anchor: 16
  },
  [ImperialVolumeFlowEnum.PINT_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_PINT_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_PINT_PER_MINUTE
    },
    anchor: 4 / 15
  },
  [ImperialVolumeFlowEnum.PINT_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_PINT_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_PINT_PER_HOUR
    },
    anchor: 1 / 225
  },
  [ImperialVolumeFlowEnum.QUART_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_QUART_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_QUART_PER_SECOND
    },
    anchor: 32
  },
  [ImperialVolumeFlowEnum.GALLON_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_GALLON_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_GALLON_PER_SECOND
    },
    anchor: 128
  },
  [ImperialVolumeFlowEnum.GALLON_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_GALLON_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_GALLON_PER_MINUTE
    },
    anchor: 32 / 15
  },
  [ImperialVolumeFlowEnum.GALLON_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_GALLON_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_GALLON_PER_HOUR
    },
    anchor: 8 / 225
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_FOOT_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_FOOT_PER_SECOND
    },
    anchor: 957.506
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_FOOT_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_FOOT_PER_MINUTE
    },
    anchor: 957.506 / 60
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_FOOT_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_FOOT_PER_HOUR
    },
    anchor: 957.506 / 3600
  },
  [ImperialVolumeFlowEnum.CUBIC_YARD_PER_SECOND]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_YARD_PER_SECOND,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_YARD_PER_SECOND
    },
    anchor: 25852.7
  },
  [ImperialVolumeFlowEnum.CUBIC_YARD_PER_MINUTE]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_YARD_PER_MINUTE,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_YARD_PER_MINUTE
    },
    anchor: 25852.7 / 60
  },
  [ImperialVolumeFlowEnum.CUBIC_YARD_PER_HOUR]: {
    name: {
      singular: VolumeFlowRateTranslationEnum.SINGULAR_CUBIC_YARD_PER_HOUR,
      plural: VolumeFlowRateTranslationEnum.PLURAL_CUBIC_YARD_PER_HOUR
    },
    anchor: 25852.7 / 3600
  }
};

const volumeFlowRate: MeasureDefinition<'metric' | 'imperial', VolumeFlowRateUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricVolumeFlowEnum.LITRE_PER_SECOND,
      ratio: {
        imperial: 33.8140227
      }
    },
    imperial: {
      unit: ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND,
      ratio: {
        metric: 1 / 33.8140227
      }
    }
  }
};

export default volumeFlowRate;
