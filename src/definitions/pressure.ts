import { Unit, UnitDefinition } from '../type';
import { ImperialPressureUnit, MetricPressureUnit, PressureUnit } from './type';

export enum MetricPressureEnum {
  PASCAL = 'Pa',
  KILOPASCAL = 'kPa',
  MEGAPASCAL = 'MPa',
  HECTOPASCAL = 'hPa',
  BAR = 'bar',
  TORR = 'torr',
  MILLIMETRE_OF_MERCURY = 'mmHg'
}

export enum ImperialPressureEnum {
  POUND_PER_SQUARE_INCH = 'psi',
  KILOPOUND_PER_SQUARE_INCH = 'ksi',
  INCH_OF_MERCURY = 'inHg'
}

const metric: Record<MetricPressureUnit, Unit> = {
  [MetricPressureEnum.PASCAL]: {
    name: {
      singular: 'Pascal',
      plural: 'Pascals'
    },
    anchor: 1e-3
  },
  [MetricPressureEnum.KILOPASCAL]: {
    name: {
      singular: 'Kilopascal',
      plural: 'Kilopascals'
    },
    anchor: 1
  },
  [MetricPressureEnum.MEGAPASCAL]: {
    name: {
      singular: 'Megapascal',
      plural: 'Megapascals'
    },
    anchor: 1e3
  },
  [MetricPressureEnum.HECTOPASCAL]: {
    name: {
      singular: 'Hectopascal',
      plural: 'Hectopascals'
    },
    anchor: 0.1
  },
  [MetricPressureEnum.BAR]: {
    name: {
      singular: 'Bar',
      plural: 'Bar'
    },
    anchor: 1e2
  },
  [MetricPressureEnum.TORR]: {
    name: {
      singular: 'Torr',
      plural: 'Torr'
    },
    anchor: 1 / 7.500616827
  },
  [MetricPressureEnum.MILLIMETRE_OF_MERCURY]: {
    name: {
      singular: 'Millimetre of mercury',
      plural: 'Millimetres of mercury'
    },
    anchor: 0.133322387415
  }
};

const imperial: Record<ImperialPressureUnit, Unit> = {
  [ImperialPressureEnum.POUND_PER_SQUARE_INCH]: {
    name: {
      singular: 'Pound per square inch',
      plural: 'Pounds per square inch'
    },
    anchor: 1
  },
  [ImperialPressureEnum.KILOPOUND_PER_SQUARE_INCH]: {
    name: {
      singular: 'Kilopound per square inch',
      plural: 'Kilopound per square inch'
    },
    anchor: 1e3
  },
  [ImperialPressureEnum.INCH_OF_MERCURY]: {
    name: {
      singular: 'Inch of mercury',
      plural: 'Inches of mercury'
    },
    anchor: 0.49115
  }
};

const pressure: UnitDefinition<'metric' | 'imperial', PressureUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPressureEnum.KILOPASCAL,
      ratio: {
        imperial: 0.14503768078
      }
    },
    imperial: {
      unit: ImperialPressureEnum.POUND_PER_SQUARE_INCH,
      ratio: {
        metric: 1 / 0.14503768078
      }
    }
  }
};

export default pressure;
