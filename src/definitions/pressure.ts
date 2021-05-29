import { Definition } from './type';
import { PressureUnit } from './type/units.type';

export enum MetricPressureEnum {
  PASCAL = 'Pa',
  KILOPASCAL = 'kPa',
  MEGAPASCAL = 'MPa',
  HECTOPASCAL = 'hPa',
  BAR = 'bar',
  TORR = 'torr'
}

export enum ImperialPressureEnum {
  POUND_PER_SQUARE_INCH = 'psi',
  KILOPOUND_PER_SQUARE_INCH = 'ksi'
}

const metric = {
  [MetricPressureEnum.PASCAL]: {
    name: {
      singular: 'pascal',
      plural: 'pascals'
    },
    toAnchor: 1 / 1000
  },
  [MetricPressureEnum.KILOPASCAL]: {
    name: {
      singular: 'kilopascal',
      plural: 'kilopascals'
    },
    toAnchor: 1
  },
  [MetricPressureEnum.MEGAPASCAL]: {
    name: {
      singular: 'megapascal',
      plural: 'megapascals'
    },
    toAnchor: 1000
  },
  [MetricPressureEnum.HECTOPASCAL]: {
    name: {
      singular: 'hectopascal',
      plural: 'hectopascals'
    },
    toAnchor: 1 / 10
  },
  [MetricPressureEnum.BAR]: {
    name: {
      singular: 'bar',
      plural: 'bar'
    },
    toAnchor: 100
  },
  [MetricPressureEnum.TORR]: {
    name: {
      singular: 'torr',
      plural: 'torr'
    },
    toAnchor: 101325 / 760000
  }
};

const imperial = {
  [ImperialPressureEnum.POUND_PER_SQUARE_INCH]: {
    name: {
      singular: 'pound per square inch',
      plural: 'pounds per square inch'
    },
    toAnchor: 1 / 1000
  },
  [ImperialPressureEnum.KILOPOUND_PER_SQUARE_INCH]: {
    name: {
      singular: 'kilopound per square inch',
      plural: 'kilopound per square inch'
    },
    toAnchor: 1
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPressureEnum.KILOPASCAL,
      ratio: 0.00014503768078
    },
    imperial: {
      unit: ImperialPressureEnum.POUND_PER_SQUARE_INCH,
      ratio: 1 / 0.00014503768078
    }
  }
} as Definition<'metric' | 'imperial', PressureUnit>;
