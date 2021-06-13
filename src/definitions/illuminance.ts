import { IlluminanceTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { IlluminanceUnit, ImperialIlluminanceUnit, MetricIlluminanceUnit } from './type';

export enum MetricIlluminanceEnum {
  LUX = 'lx'
}

export enum ImperialIlluminanceEnum {
  FOOT_CANDLE = 'ft-cd'
}

const metric: Record<MetricIlluminanceUnit, Unit> = {
  [MetricIlluminanceEnum.LUX]: {
    name: {
      singular: IlluminanceTranslationEnum.SINGULAR_LUX,
      plural: IlluminanceTranslationEnum.PLURAL_LUX
    },
    anchor: 1
  }
};

const imperial: Record<ImperialIlluminanceUnit, Unit> = {
  [ImperialIlluminanceEnum.FOOT_CANDLE]: {
    name: {
      singular: IlluminanceTranslationEnum.SINGULAR_FOOT_CANDLE,
      plural: IlluminanceTranslationEnum.PLURAL_FOOT_CANDLE
    },
    anchor: 1
  }
};

const illuminance: MeasureDefinition<'metric' | 'imperial', IlluminanceUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricIlluminanceEnum.LUX,
      ratio: {
        imperial: 1 / 10.76391
      }
    },
    imperial: {
      unit: ImperialIlluminanceEnum.FOOT_CANDLE,
      ratio: {
        metric: 10.76391
      }
    }
  }
};

export default illuminance;
