import { Definition } from './type';
import { MassUnit } from './type/units.type';

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

const metric = {
  [MetricMassEnum.MICROGRAM]: {
    name: {
      singular: 'Microgram',
      plural: 'Micrograms'
    },
    toAnchor: 1e-6
  },
  [MetricMassEnum.MILLIGRAM]: {
    name: {
      singular: 'Milligram',
      plural: 'Milligrams'
    },
    toAnchor: 1e-3
  },
  [MetricMassEnum.GRAM]: {
    name: {
      singular: 'Gram',
      plural: 'Grams'
    },
    toAnchor: 1
  },
  [MetricMassEnum.KILOGRAM]: {
    name: {
      singular: 'Kilogram',
      plural: 'Kilograms'
    },
    toAnchor: 1e3
  },
  [MetricMassEnum.METRIC_TONNE]: {
    name: {
      singular: 'Metric Tonne',
      plural: 'Metric Tonnes'
    },
    toAnchor: 1e6
  }
};

const imperial = {
  [ImperialMassEnum.OUNCE]: {
    name: {
      singular: 'Ounce',
      plural: 'Ounces'
    },
    toAnchor: 1 / 16
  },
  [ImperialMassEnum.POUND]: {
    name: {
      singular: 'Pound',
      plural: 'Pounds'
    },
    toAnchor: 1
  },
  [ImperialMassEnum.TON]: {
    name: {
      singular: 'Ton',
      plural: 'Tons'
    },
    toAnchor: 2e3
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricMassEnum.GRAM,
      ratio: 1 / 453.592
    },
    imperial: {
      unit: ImperialMassEnum.POUND,
      ratio: 453.592
    }
  }
} as Definition<'metric' | 'imperial', MassUnit>;
