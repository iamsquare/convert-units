import { PaceTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
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
      singular: PaceTranslationEnum.SINGULAR_MINUTE_PER_KILOMETRE,
      plural: PaceTranslationEnum.PLURAL_MINUTE_PER_KILOMETRE
    },
    anchor: 0.06
  },
  [MetricPaceEnum.SECOND_PER_METRE]: {
    name: {
      singular: PaceTranslationEnum.SINGULAR_SECOND_PER_METRE,
      plural: PaceTranslationEnum.PLURAL_SECOND_PER_METRE
    },
    anchor: 1
  }
};

const imperial: Record<ImperialPaceUnit, Unit> = {
  [ImperialPaceEnum.MINUTE_PER_MILE]: {
    name: {
      singular: PaceTranslationEnum.SINGULAR_MINUTE_PER_MILE,
      plural: PaceTranslationEnum.PLURAL_MINUTE_PER_MILE
    },
    anchor: 0.0113636
  },
  [ImperialPaceEnum.SECOND_PER_FOOT]: {
    name: {
      singular: PaceTranslationEnum.SINGULAR_SECOND_PER_FOOT,
      plural: PaceTranslationEnum.PLURAL_SECOND_PER_FOOT
    },
    anchor: 1
  }
};

export type PaceSystems = 'metric' | 'imperial';

const pace: MeasureDefinition<PaceSystems, PaceUnit> = {
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
