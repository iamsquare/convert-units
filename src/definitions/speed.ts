import { SpeedTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_METRE_PER_SECOND),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_METRE_PER_SECOND)
    },
    anchor: 3.6
  },
  [MetricSpeedEnum.KILOMETRE_PER_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_KILOMETRE_PER_HOUR),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_KILOMETRE_PER_HOUR)
    },
    anchor: 1
  },
  [MetricSpeedEnum.METRE_PER_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_METRE_PER_HOUR),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_METRE_PER_HOUR)
    },
    anchor: 1e3
  }
};

const imperial: Record<ImperialSpeedUnit, Unit> = {
  [ImperialSpeedEnum.MILE_PER_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_MILE_PER_HOUR),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_MILE_PER_HOUR)
    },
    anchor: 1
  },
  [ImperialSpeedEnum.KNOT]: {
    name: {
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_KNOT),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_KNOT)
    },
    anchor: 1.150779
  },
  [ImperialSpeedEnum.FOOT_PER_SECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(SpeedTranslationEnum.SINGULAR_FOOT_PER_SECOND),
      plural: translationModule.getTranslationByKey(SpeedTranslationEnum.PLURAL_FOOT_PER_SECOND)
    },
    anchor: 0.681818
  }
};

const speed: UnitDefinition<'metric' | 'imperial', SpeedUnit> = {
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
