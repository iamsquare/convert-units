import { MassTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialMassUnit, MassUnit, MetricMassUnit } from './type';

export enum MetricMassEnum {
  GRAM = 'g',
  MICROGRAM = 'mcg',
  MILLIGRAM = 'mg',
  KILOGRAM = 'kg',
  METRIC_TONNE = 'mt'
}

export enum ImperialMassEnum {
  OUNCE = 'oz',
  POUND = 'lb',
  TON = 't'
}

const metric: Record<MetricMassUnit, Unit> = {
  [MetricMassEnum.MICROGRAM]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_MICROGRAM,
      plural: MassTranslationEnum.PLURAL_MICROGRAM
    },
    anchor: 1e-6
  },
  [MetricMassEnum.MILLIGRAM]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_MILLIGRAM,
      plural: MassTranslationEnum.PLURAL_MILLIGRAM
    },
    anchor: 1e-3
  },
  [MetricMassEnum.GRAM]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_GRAM,
      plural: MassTranslationEnum.PLURAL_GRAM
    },
    anchor: 1
  },
  [MetricMassEnum.KILOGRAM]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_KILOGRAM,
      plural: MassTranslationEnum.PLURAL_KILOGRAM
    },
    anchor: 1e3
  },
  [MetricMassEnum.METRIC_TONNE]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_METRIC_TONNE,
      plural: MassTranslationEnum.PLURAL_METRIC_TONNE
    },
    anchor: 1e6
  }
};

const imperial: Record<ImperialMassUnit, Unit> = {
  [ImperialMassEnum.OUNCE]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_OUNCE,
      plural: MassTranslationEnum.PLURAL_OUNCE
    },
    anchor: 1 / 16
  },
  [ImperialMassEnum.POUND]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_POUND,
      plural: MassTranslationEnum.PLURAL_POUND
    },
    anchor: 1
  },
  [ImperialMassEnum.TON]: {
    name: {
      singular: MassTranslationEnum.SINGULAR_TON,
      plural: MassTranslationEnum.PLURAL_TON
    },
    anchor: 2e3
  }
};

export type MassSystems = 'metric' | 'imperial';

const mass: MeasureDefinition<MassSystems, MassUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricMassEnum.GRAM,
      ratio: {
        imperial: 1 / 453.592
      }
    },
    imperial: {
      unit: ImperialMassEnum.POUND,
      ratio: {
        metric: 453.592
      }
    }
  }
};

export default mass;
