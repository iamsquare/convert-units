import { TemperatureTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialTemperatureUnit, MetricTemperatureUnit, TemperatureUnit } from './type';

export enum MetricTemperatureEnum {
  CELSIUS = 'C',
  KELVIN = 'K'
}

export enum ImperialTemperatureEnum {
  FAHRENHEIT = 'F',
  RANKINE = 'R'
}

const metric: Record<MetricTemperatureUnit, Unit> = {
  [MetricTemperatureEnum.CELSIUS]: {
    name: {
      singular: TemperatureTranslationEnum.SINGULAR_CELSIUS,
      plural: TemperatureTranslationEnum.PLURAL_CELSIUS
    },
    anchor: 1,
    anchorShift: 0
  },
  [MetricTemperatureEnum.KELVIN]: {
    name: {
      singular: TemperatureTranslationEnum.SINGULAR_KELVIN,
      plural: TemperatureTranslationEnum.PLURAL_KELVIN
    },
    anchor: 1,
    anchorShift: 273.15
  }
};

const imperial: Record<ImperialTemperatureUnit, Unit> = {
  [ImperialTemperatureEnum.FAHRENHEIT]: {
    name: {
      singular: TemperatureTranslationEnum.SINGULAR_FAHRENHEIT,
      plural: TemperatureTranslationEnum.PLURAL_FAHRENHEIT
    },
    anchor: 1
  },
  [ImperialTemperatureEnum.RANKINE]: {
    name: {
      singular: TemperatureTranslationEnum.SINGULAR_RANKINE,
      plural: TemperatureTranslationEnum.PLURAL_RANKINE
    },
    anchor: 1,
    anchorShift: 459.67
  }
};

export type TemperatureSystems = 'metric' | 'imperial';

const temperature: MeasureDefinition<TemperatureSystems, TemperatureUnit> = {
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
