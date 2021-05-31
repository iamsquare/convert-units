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
    anchor: 1e-9
  },
  [MetricDistanceEnum.MICROMETER]: {
    name: {
      singular: 'Micrometer',
      plural: 'Micrometers'
    },
    anchor: 1e-6
  },
  [MetricDistanceEnum.MILLIMETER]: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters'
    },
    anchor: 1e-3
  },
  [MetricDistanceEnum.CENTIMETER]: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters'
    },
    anchor: 1e-2
  },
  [MetricDistanceEnum.METER]: {
    name: {
      singular: 'Meter',
      plural: 'Meters'
    },
    anchor: 1
  },
  [MetricDistanceEnum.KILOMETER]: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers'
    },
    anchor: 1e3
  }
};

const imperial = {
  [ImperialDistanceEnum.INCH]: {
    name: {
      singular: 'Inch',
      plural: 'Inches'
    },
    anchor: 1 / 12
  },
  [ImperialDistanceEnum.YARD]: {
    name: {
      singular: 'Yard',
      plural: 'Yards'
    },
    anchor: 3
  },
  [ImperialDistanceEnum.US_SURVEY_FOOT]: {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet'
    },
    anchor: 1.000002
  },
  [ImperialDistanceEnum.FOOT]: {
    name: {
      singular: 'Foot',
      plural: 'Feet'
    },
    anchor: 1
  },
  [ImperialDistanceEnum.FATHOM]: {
    name: {
      singular: 'Fathom',
      plural: 'Fathoms'
    },
    anchor: 6
  },
  [ImperialDistanceEnum.MILE]: {
    name: {
      singular: 'Mile',
      plural: 'Miles'
    },
    anchor: 5280
  },
  [ImperialDistanceEnum.NAUTICAL_MILE]: {
    name: {
      singular: 'Nautical Mile',
      plural: 'Nautical Miles'
    },
    anchor: 6076.12
  }
};

const distance = {
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
};

export default distance;
