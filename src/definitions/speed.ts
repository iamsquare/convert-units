import { SpeedTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialSpeedUnit, MetricSpeedUnit, SpeedUnit } from './type';

export enum MetricSpeedEnum {
  METRE_PER_SECOND = 'm/s',
  KILOMETRE_PER_HOUR = 'km/h',
  METRE_PER_HOUR = 'm/h'
}

export enum ImperialSpeedEnum {
  MILE_PER_HOUR = 'mph',
  KNOT = 'knot',
  FOOT_PER_SECOND = 'ft/s'
}

const metric: Record<MetricSpeedUnit, Unit> = {
  [MetricSpeedEnum.METRE_PER_SECOND]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_METRE_PER_SECOND,
      plural: SpeedTranslationEnum.PLURAL_METRE_PER_SECOND
    },
    anchor: 3.6
  },
  [MetricSpeedEnum.KILOMETRE_PER_HOUR]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_KILOMETRE_PER_HOUR,
      plural: SpeedTranslationEnum.PLURAL_KILOMETRE_PER_HOUR
    },
    anchor: 1
  },
  [MetricSpeedEnum.METRE_PER_HOUR]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_METRE_PER_HOUR,
      plural: SpeedTranslationEnum.PLURAL_METRE_PER_HOUR
    },
    anchor: 1e3
  }
};

const imperial: Record<ImperialSpeedUnit, Unit> = {
  [ImperialSpeedEnum.MILE_PER_HOUR]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_MILE_PER_HOUR,
      plural: SpeedTranslationEnum.PLURAL_MILE_PER_HOUR
    },
    anchor: 1
  },
  [ImperialSpeedEnum.KNOT]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_KNOT,
      plural: SpeedTranslationEnum.PLURAL_KNOT
    },
    anchor: 1.150779
  },
  [ImperialSpeedEnum.FOOT_PER_SECOND]: {
    name: {
      singular: SpeedTranslationEnum.SINGULAR_FOOT_PER_SECOND,
      plural: SpeedTranslationEnum.PLURAL_FOOT_PER_SECOND
    },
    anchor: 0.681818
  }
};

export type SpeedSystems = 'metric' | 'imperial';

const speed: MeasureDefinition<SpeedSystems, SpeedUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricSpeedEnum.KILOMETRE_PER_HOUR,
      ratio: {
        imperial: 1 / 1.609344
      }
    },
    imperial: {
      unit: ImperialSpeedEnum.MILE_PER_HOUR,
      ratio: {
        metric: 1.609344
      }
    }
  }
};

export default speed;
