import { PaceTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { ImperialPaceUnit, MetricPaceUnit, PaceUnit } from './type';

export enum MetricPaceEnum {
  MINUTE_PER_KILOMETRE = 'min/km',
  SECOND_PER_METRE = 's/m'
}

export enum ImperialPaceEnum {
  MINUTE_PER_MILE = 'min/mi',
  SECOND_PER_FOOT = 's/ft'
}

const metric: Record<MetricPaceUnit, Unit> = {
  [MetricPaceEnum.MINUTE_PER_KILOMETRE]: {
    name: {
      singular: translationModule.getTranslationByKey(PaceTranslationEnum.SINGULAR_MINUTE_PER_KILOMETRE),
      plural: translationModule.getTranslationByKey(PaceTranslationEnum.PLURAL_MINUTE_PER_KILOMETRE)
    },
    anchor: 0.06
  },
  [MetricPaceEnum.SECOND_PER_METRE]: {
    name: {
      singular: translationModule.getTranslationByKey(PaceTranslationEnum.SINGULAR_SECOND_PER_METRE),
      plural: translationModule.getTranslationByKey(PaceTranslationEnum.PLURAL_SECOND_PER_METRE)
    },
    anchor: 1
  }
};

const imperial: Record<ImperialPaceUnit, Unit> = {
  [ImperialPaceEnum.MINUTE_PER_MILE]: {
    name: {
      singular: translationModule.getTranslationByKey(PaceTranslationEnum.SINGULAR_MINUTE_PER_MILE),
      plural: translationModule.getTranslationByKey(PaceTranslationEnum.PLURAL_MINUTE_PER_MILE)
    },
    anchor: 0.0113636
  },
  [ImperialPaceEnum.SECOND_PER_FOOT]: {
    name: {
      singular: translationModule.getTranslationByKey(PaceTranslationEnum.SINGULAR_SECOND_PER_FOOT),
      plural: translationModule.getTranslationByKey(PaceTranslationEnum.PLURAL_SECOND_PER_FOOT)
    },
    anchor: 1
  }
};

const pace: UnitDefinition<'metric' | 'imperial', PaceUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPaceEnum.SECOND_PER_METRE,
      ratio: {
        imperial: 0.3048
      }
    },
    imperial: {
      unit: ImperialPaceEnum.SECOND_PER_FOOT,
      ratio: {
        metric: 1 / 0.3048
      }
    }
  }
};

export default pace;
