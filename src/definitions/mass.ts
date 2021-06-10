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
      singular: 'Microgram',
      plural: 'Micrograms'
    },
    anchor: 1e-6
  },
  [MetricMassEnum.MILLIGRAM]: {
    name: {
      singular: 'Milligram',
      plural: 'Milligrams'
    },
    anchor: 1e-3
  },
  [MetricMassEnum.GRAM]: {
    name: {
      singular: 'Gram',
      plural: 'Grams'
    },
    anchor: 1
  },
  [MetricMassEnum.KILOGRAM]: {
    name: {
      singular: 'Kilogram',
      plural: 'Kilograms'
    },
    anchor: 1e3
  },
  [MetricMassEnum.METRIC_TONNE]: {
    name: {
      singular: 'Metric Tonne',
      plural: 'Metric Tonnes'
    },
    anchor: 1e6
  }
};

const imperial: Record<ImperialMassUnit, Unit> = {
  [ImperialMassEnum.OUNCE]: {
    name: {
      singular: 'Ounce',
      plural: 'Ounces'
    },
    anchor: 1 / 16
  },
  [ImperialMassEnum.POUND]: {
    name: {
      singular: 'Pound',
      plural: 'Pounds'
    },
    anchor: 1
  },
  [ImperialMassEnum.TON]: {
    name: {
      singular: 'Ton',
      plural: 'Tons'
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
