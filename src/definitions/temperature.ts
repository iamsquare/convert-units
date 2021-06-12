import { TemperatureTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(TemperatureTranslationEnum.SINGULAR_CELSIUS),
      plural: translationModule.getTranslationByKey(TemperatureTranslationEnum.PLURAL_CELSIUS)
    },
    anchor: 1,
    anchorShift: 0
  },
  [MetricTemperatureEnum.KELVIN]: {
    name: {
      singular: translationModule.getTranslationByKey(TemperatureTranslationEnum.SINGULAR_KELVIN),
      plural: translationModule.getTranslationByKey(TemperatureTranslationEnum.PLURAL_KELVIN)
    },
    anchor: 1,
    anchorShift: 273.15
  }
};

const imperial: Record<ImperialTemperatureUnit, Unit> = {
  [ImperialTemperatureEnum.FAHRENHEIT]: {
    name: {
      singular: translationModule.getTranslationByKey(TemperatureTranslationEnum.SINGULAR_FAHRENHEIT),
      plural: translationModule.getTranslationByKey(TemperatureTranslationEnum.PLURAL_FAHRENHEIT)
    },
    anchor: 1
  },
  [ImperialTemperatureEnum.RANKINE]: {
    name: {
      singular: translationModule.getTranslationByKey(TemperatureTranslationEnum.SINGULAR_RANKINE),
      plural: translationModule.getTranslationByKey(TemperatureTranslationEnum.PLURAL_RANKINE)
    },
    anchor: 1,
    anchorShift: 459.67
  }
};

const temperature: UnitDefinition<'metric' | 'imperial', TemperatureUnit> = {
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
