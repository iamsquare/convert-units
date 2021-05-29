import { Definition } from './type';
import { DistanceUnit } from './type/units.type';

export enum MetricDistanceEnum {
  NANOMETER = 'nm',
  MICROMETER = 'μm',
  MILLIMETER = 'mm',
  CENTIMETER = 'cm',
  METER = 'm',
  KILOMETER = 'km'
}

export enum ImperialDistanceEnum {
  INCH = 'in',
  YARD = 'yd',
  US_SURVEY_FOOT = 'ft-us',
  FOOT = 'ft',
  FATHOM = 'fathom',
  MILE = 'mi',
  NAUTICAL_MILE = 'nMi'
}

const metric = {
  [MetricDistanceEnum.NANOMETER]: {
    name: {
      singular: 'Nanometer',
      plural: 'Nanometers'
    },
    toAnchor: 1e-9
  },
  [MetricDistanceEnum.MICROMETER]: {
    name: {
      singular: 'Micrometer',
      plural: 'Micrometers'
    },
    toAnchor: 1e-6
  },
  [MetricDistanceEnum.MILLIMETER]: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters'
    },
    toAnchor: 1e-3
  },
  [MetricDistanceEnum.CENTIMETER]: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters'
    },
    toAnchor: 1e-2
  },
  [MetricDistanceEnum.METER]: {
    name: {
      singular: 'Meter',
      plural: 'Meters'
    },
    toAnchor: 1
  },
  [MetricDistanceEnum.KILOMETER]: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers'
    },
    toAnchor: 1e3
  }
};

const imperial = {
  [ImperialDistanceEnum.INCH]: {
    name: {
      singular: 'Inch',
      plural: 'Inches'
    },
    toAnchor: 1 / 12
  },
  [ImperialDistanceEnum.YARD]: {
    name: {
      singular: 'Yard',
      plural: 'Yards'
    },
    toAnchor: 3
  },
  [ImperialDistanceEnum.US_SURVEY_FOOT]: {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet'
    },
    toAnchor: 1.000002
  },
  [ImperialDistanceEnum.FOOT]: {
    name: {
      singular: 'Foot',
      plural: 'Feet'
    },
    toAnchor: 1
  },
  [ImperialDistanceEnum.FATHOM]: {
    name: {
      singular: 'Fathom',
      plural: 'Fathoms'
    },
    toAnchor: 6
  },
  [ImperialDistanceEnum.MILE]: {
    name: {
      singular: 'Mile',
      plural: 'Miles'
    },
    toAnchor: 5280
  },
  [ImperialDistanceEnum.NAUTICAL_MILE]: {
    name: {
      singular: 'Nautical Mile',
      plural: 'Nautical Miles'
    },
    toAnchor: 6076.12
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricDistanceEnum.METER,
      ratio: 3.28084
    },
    imperial: {
      unit: ImperialDistanceEnum.FOOT,
      ratio: 1 / 3.28084
    }
  }
} as Definition<'metric' | 'imperial', DistanceUnit>;
