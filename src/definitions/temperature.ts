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
    anchor: 1,
    anchorShift: 0
  },
  [MetricTemperatureEnum.KELVIN]: {
    name: {
      singular: 'Degree Kelvin',
      plural: 'Degrees Kelvin'
    },
    anchor: 1,
    anchorShift: 273.15
  }
};

const imperial = {
  [ImperialTemperatureEnum.FAHRENHEIT]: {
    name: {
      singular: 'Degree Fahrenheit',
      plural: 'Degrees Fahrenheit'
    },
    anchor: 1
  },
  [ImperialTemperatureEnum.RANKINE]: {
    name: {
      singular: 'Degree Rankine',
      plural: 'Degrees Rankine'
    },
    anchor: 1,
    anchorShift: 459.67
  }
};

const temperature = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricTemperatureEnum.CELSIUS,
      transform: {
        imperial: (C: number): number => C / (5 / 9) + 32
      }
    },
    imperial: {
      unit: ImperialTemperatureEnum.FAHRENHEIT,
      transform: {
        metric: (F: number): number => (F - 32) * (5 / 9)
      }
    }
  }
};

export default temperature;
