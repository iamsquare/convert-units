export enum MetricAreaEnum {
  SQUARE_MILLIMETER = 'mm2',
  SQUARE_CENTIMETER = 'cm2',
  SQUARE_METER = 'm2',
  SQUARE_KILOMETER = 'km2',
  HECTARE = 'ha'
}

export enum ImperialAreaEnum {
  SQUARE_INCH = 'in2',
  SQUARE_YARD = 'yd2',
  SQUARE_FOOT = 'ft2',
  SQUARE_MILE = 'mi2',
  ACRE = 'ac'
}

const metric = {
  [MetricAreaEnum.SQUARE_MILLIMETER]: {
    name: {
      singular: 'Square Millimeter',
      plural: 'Square Millimeters'
    },
    anchor: 1e-6
  },
  [MetricAreaEnum.SQUARE_CENTIMETER]: {
    name: {
      singular: 'Square Centimeter',
      plural: 'Square Centimeters'
    },
    anchor: 1e-4
  },
  [MetricAreaEnum.SQUARE_METER]: {
    name: {
      singular: 'Square Meter',
      plural: 'Square Meters'
    },
    anchor: 1
  },
  [MetricAreaEnum.SQUARE_KILOMETER]: {
    name: {
      singular: 'Square Kilometer',
      plural: 'Square Kilometers'
    },
    anchor: 1e6
  },
  [MetricAreaEnum.HECTARE]: {
    name: {
      singular: 'Hectare',
      plural: 'Hectares'
    },
    anchor: 1e4
  }
};

const imperial = {
  [ImperialAreaEnum.SQUARE_INCH]: {
    name: {
      singular: 'Square Inch',
      plural: 'Square Inches'
    },
    anchor: 1 / 144
  },
  [ImperialAreaEnum.SQUARE_YARD]: {
    name: {
      singular: 'Square Yard',
      plural: 'Square Yards'
    },
    anchor: 9
  },
  [ImperialAreaEnum.SQUARE_FOOT]: {
    name: {
      singular: 'Square Foot',
      plural: 'Square Feet'
    },
    anchor: 1
  },
  [ImperialAreaEnum.SQUARE_MILE]: {
    name: {
      singular: 'Square Mile',
      plural: 'Square Miles'
    },
    anchor: 27878400
  },
  [ImperialAreaEnum.ACRE]: {
    name: {
      singular: 'Acre',
      plural: 'Acres'
    },
    anchor: 43560
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricAreaEnum.SQUARE_METER,
      ratio: 10.7639
    },
    imperial: {
      unit: ImperialAreaEnum.SQUARE_FOOT,
      ratio: 1 / 10.7639
    }
  }
};
