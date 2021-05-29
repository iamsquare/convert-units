import { Definition } from './type';
import { TemperatureUnit } from './type/units.type';

export enum MetricTemperatureEnum {
  CELSIUS = 'C',
  KELVIN = 'K'
}

export enum ImperialTemperatureEnum {
  FAHRENHEIT = 'F',
  RANKINE = 'R'
}

const metric = {
  [MetricTemperatureEnum.CELSIUS]: {
    name: {
      singular: 'Degree Celsius',
      plural: 'Degrees Celsius'
    },
    toAnchor: 1,
    anchorShift: 0
  },
  [MetricTemperatureEnum.KELVIN]: {
    name: {
      singular: 'Degree Kelvin',
      plural: 'Degrees Kelvin'
    },
    toAnchor: 1,
    anchorShift: 273.15
  }
};

const imperial = {
  [ImperialTemperatureEnum.FAHRENHEIT]: {
    name: {
      singular: 'Degree Fahrenheit',
      plural: 'Degrees Fahrenheit'
    },
    toAnchor: 1
  },
  [ImperialTemperatureEnum.RANKINE]: {
    name: {
      singular: 'Degree Rankine',
      plural: 'Degrees Rankine'
    },
    toAnchor: 1,
    anchorShift: 459.67
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricTemperatureEnum.CELSIUS,
      transform: function (C: number): number {
        return C / (5 / 9) + 32;
      }
    },
    imperial: {
      unit: ImperialTemperatureEnum.FAHRENHEIT,
      transform: function (F: number): number {
        return (F - 32) * (5 / 9);
      }
    }
  }
} as Definition<'metric' | 'imperial', TemperatureUnit>;
