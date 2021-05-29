import { Definition } from './type';
import { VolumeFlowRateUnit } from './type/units.type';

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
  CUBIX_YARD_PER_HOUR = 'yd3/h'
}

const metric = {
  [MetricVolumeFlowEnum.CUBIC_MILLIMETER_PER_SECOND]: {
    name: {
      singular: 'Cubic Millimeter per second',
      plural: 'Cubic Millimeters per second'
    },
    toAnchor: 1e-6
  },
  [MetricVolumeFlowEnum.CUBIC_CENTIMETER_PER_SECOND]: {
    name: {
      singular: 'Cubic Centimeter per second',
      plural: 'Cubic Centimeters per second'
    },
    toAnchor: 1e-3
  },
  [MetricVolumeFlowEnum.MILLILITRE_PER_SECOND]: {
    name: {
      singular: 'Millilitre per second',
      plural: 'Millilitres per second'
    },
    toAnchor: 1e-3
  },
  [MetricVolumeFlowEnum.CENTILITRE_PER_SECOND]: {
    name: {
      singular: 'Centilitre per second',
      plural: 'Centilitres per second'
    },
    toAnchor: 1e-2
  },
  [MetricVolumeFlowEnum.DECILITRE_PER_SECOND]: {
    name: {
      singular: 'Decilitre per second',
      plural: 'Decilitres per second'
    },
    toAnchor: 0.1
  },
  [MetricVolumeFlowEnum.LITRE_PER_SECOND]: {
    name: {
      singular: 'Litre per second',
      plural: 'Litres per second'
    },
    toAnchor: 1
  },
  [MetricVolumeFlowEnum.LITRE_PER_MINUTE]: {
    name: {
      singular: 'Litre per minute',
      plural: 'Litres per minute'
    },
    toAnchor: 1 / 60
  },
  [MetricVolumeFlowEnum.LITRE_PER_HOUR]: {
    name: {
      singular: 'Litre per hour',
      plural: 'Litres per hour'
    },
    toAnchor: 1 / 3600
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_SECOND]: {
    name: {
      singular: 'Kilolitre per second',
      plural: 'Kilolitres per second'
    },
    toAnchor: 1e3
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_MINUTE]: {
    name: {
      singular: 'Kilolitre per minute',
      plural: 'Kilolitres per minute'
    },
    toAnchor: 50 / 3
  },
  [MetricVolumeFlowEnum.KILOLITRE_PER_HOUR]: {
    name: {
      singular: 'Kilolitre per hour',
      plural: 'Kilolitres per hour'
    },
    toAnchor: 5 / 18
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND]: {
    name: {
      singular: 'Cubic meter per second',
      plural: 'Cubic meters per second'
    },
    toAnchor: 1e3
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_MINUTE]: {
    name: {
      singular: 'Cubic meter per minute',
      plural: 'Cubic meters per minute'
    },
    toAnchor: 50 / 3
  },
  [MetricVolumeFlowEnum.CUBIC_METER_PER_HOUR]: {
    name: {
      singular: 'Cubic meter per hour',
      plural: 'Cubic meters per hour'
    },
    toAnchor: 5 / 18
  },
  [MetricVolumeFlowEnum.CUBIC_KILOMETER_PER_SECOND]: {
    name: {
      singular: 'Cubic kilometer per second',
      plural: 'Cubic kilometers per second'
    },
    toAnchor: 1e12
  }
};

const imperial = {
  [ImperialVolumeFlowEnum.TEASPOON_PER_SECOND]: {
    name: {
      singular: 'Teaspoon per second',
      plural: 'Teaspoons per second'
    },
    toAnchor: 1 / 6
  },
  [ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND]: {
    name: {
      singular: 'Tablespoon per second',
      plural: 'Tablespoons per second'
    },
    toAnchor: 1 / 2
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_SECOND]: {
    name: {
      singular: 'Cubic inch per second',
      plural: 'Cubic inches per second'
    },
    toAnchor: 0.55411
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_MINUTE]: {
    name: {
      singular: 'Cubic inch per minute',
      plural: 'Cubic inches per minute'
    },
    toAnchor: 0.55411 / 60
  },
  [ImperialVolumeFlowEnum.CUBIC_INCH_PER_HOUR]: {
    name: {
      singular: 'Cubic inch per hour',
      plural: 'Cubic inches per hour'
    },
    toAnchor: 0.55411 / 3600
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND]: {
    name: {
      singular: 'Fluid Ounce per second',
      plural: 'Fluid Ounces per second'
    },
    toAnchor: 1
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_MINUTE]: {
    name: {
      singular: 'Fluid Ounce per minute',
      plural: 'Fluid Ounces per minute'
    },
    toAnchor: 1 / 60
  },
  [ImperialVolumeFlowEnum.FLUID_OUNCE_PER_HOUR]: {
    name: {
      singular: 'Fluid Ounce per hour',
      plural: 'Fluid Ounces per hour'
    },
    toAnchor: 1 / 3600
  },
  [ImperialVolumeFlowEnum.CUP_PER_SECOND]: {
    name: {
      singular: 'Cup per second',
      plural: 'Cups per second'
    },
    toAnchor: 8
  },
  [ImperialVolumeFlowEnum.PINT_PER_SECOND]: {
    name: {
      singular: 'Pint per second',
      plural: 'Pints per second'
    },
    toAnchor: 16
  },
  [ImperialVolumeFlowEnum.PINT_PER_MINUTE]: {
    name: {
      singular: 'Pint per minute',
      plural: 'Pints per minute'
    },
    toAnchor: 4 / 15
  },
  [ImperialVolumeFlowEnum.PINT_PER_HOUR]: {
    name: {
      singular: 'Pint per hour',
      plural: 'Pints per hour'
    },
    toAnchor: 1 / 225
  },
  [ImperialVolumeFlowEnum.QUART_PER_SECOND]: {
    name: {
      singular: 'Quart per second',
      plural: 'Quarts per second'
    },
    toAnchor: 32
  },
  [ImperialVolumeFlowEnum.GALLON_PER_SECOND]: {
    name: {
      singular: 'Gallon per second',
      plural: 'Gallons per second'
    },
    toAnchor: 128
  },
  [ImperialVolumeFlowEnum.GALLON_PER_MINUTE]: {
    name: {
      singular: 'Gallon per minute',
      plural: 'Gallons per minute'
    },
    toAnchor: 32 / 15
  },
  [ImperialVolumeFlowEnum.GALLON_PER_HOUR]: {
    name: {
      singular: 'Gallon per hour',
      plural: 'Gallons per hour'
    },
    toAnchor: 8 / 225
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_SECOND]: {
    name: {
      singular: 'Cubic foot per second',
      plural: 'Cubic feet per second'
    },
    toAnchor: 957.506
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_MINUTE]: {
    name: {
      singular: 'Cubic foot per minute',
      plural: 'Cubic feet per minute'
    },
    toAnchor: 957.506 / 60
  },
  [ImperialVolumeFlowEnum.CUBIC_FOOT_PER_HOUR]: {
    name: {
      singular: 'Cubic foot per hour',
      plural: 'Cubic feet per hour'
    },
    toAnchor: 957.506 / 3600
  },
  [ImperialVolumeFlowEnum.CUBIC_YARD_PER_SECOND]: {
    name: {
      singular: 'Cubic yard per second',
      plural: 'Cubic yards per second'
    },
    toAnchor: 25852.7
  },
  [ImperialVolumeFlowEnum.CUBIC_YARD_PER_MINUTE]: {
    name: {
      singular: 'Cubic yard per minute',
      plural: 'Cubic yards per minute'
    },
    toAnchor: 25852.7 / 60
  },
  [ImperialVolumeFlowEnum.CUBIX_YARD_PER_HOUR]: {
    name: {
      singular: 'Cubic yard per hour',
      plural: 'Cubic yards per hour'
    },
    toAnchor: 25852.7 / 3600
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricVolumeFlowEnum.LITRE_PER_SECOND,
      ratio: 33.8140227
    },
    imperial: {
      unit: ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND,
      ratio: 1 / 33.8140227
    }
  }
} as Definition<'metric' | 'imperial', VolumeFlowRateUnit>;
