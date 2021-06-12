import { MassTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_MICROGRAM),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_MICROGRAM)
    },
    anchor: 1e-6
  },
  [MetricMassEnum.MILLIGRAM]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_MILLIGRAM),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_MILLIGRAM)
    },
    anchor: 1e-3
  },
  [MetricMassEnum.GRAM]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_GRAM),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_GRAM)
    },
    anchor: 1
  },
  [MetricMassEnum.KILOGRAM]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_KILOGRAM),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_KILOGRAM)
    },
    anchor: 1e3
  },
  [MetricMassEnum.METRIC_TONNE]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_METRIC_TONNE),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_METRIC_TONNE)
    },
    anchor: 1e6
  }
};

const imperial: Record<ImperialMassUnit, Unit> = {
  [ImperialMassEnum.OUNCE]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_OUNCE),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_OUNCE)
    },
    anchor: 1 / 16
  },
  [ImperialMassEnum.POUND]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_POUND),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_POUND)
    },
    anchor: 1
  },
  [ImperialMassEnum.TON]: {
    name: {
      singular: translationModule.getTranslationByKey(MassTranslationEnum.SINGULAR_TON),
      plural: translationModule.getTranslationByKey(MassTranslationEnum.PLURAL_TON)
    },
    anchor: 2e3
  }
};

const mass: UnitDefinition<'metric' | 'imperial', MassUnit> = {
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
