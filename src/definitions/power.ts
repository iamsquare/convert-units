import { Definition } from './type';
import { PowerUnit } from './type/units.type';

export enum MetricPowerEnum {
  WATT = 'W',
  MILLIWATT = 'mW',
  KILOWATT = 'kW',
  MEGAWATT = 'MW',
  GIGAWATT = 'GW',
  HORSE_POWER = 'PS'
}

export enum ImperialPowerEnum {
  BTU_PER_SECOND = 'Btu/s',
  FOOT_POUND_PER_SECOND = 'ft-lb/s',
  HORSE_POWER = 'hp'
}

const metric = {
  [MetricPowerEnum.WATT]: {
    name: {
      singular: 'Watt',
      plural: 'Watts'
    },
    anchor: 1
  },
  [MetricPowerEnum.MILLIWATT]: {
    name: {
      singular: 'Milliwatt',
      plural: 'Milliwatts'
    },
    anchor: 1e-3
  },
  [MetricPowerEnum.KILOWATT]: {
    name: {
      singular: 'Kilowatt',
      plural: 'Kilowatts'
    },
    anchor: 1e3
  },
  [MetricPowerEnum.MEGAWATT]: {
    name: {
      singular: 'Megawatt',
      plural: 'Megawatts'
    },
    anchor: 1e6
  },
  [MetricPowerEnum.GIGAWATT]: {
    name: {
      singular: 'Gigawatt',
      plural: 'Gigawatts'
    },
    anchor: 1e9
  },
  [MetricPowerEnum.HORSE_POWER]: {
    name: {
      singular: 'Horsepower (metric)',
      plural: 'Horsepower (metric)'
    },
    anchor: 735.49875
  }
};

const imperial = {
  [ImperialPowerEnum.BTU_PER_SECOND]: {
    name: {
      singular: 'British thermal unit per second',
      plural: 'British thermal units per second'
    },
    anchor: 778.16937
  },
  [ImperialPowerEnum.FOOT_POUND_PER_SECOND]: {
    name: {
      singular: 'Foot-pound per second',
      plural: 'Foot-pounds per second'
    },
    anchor: 1
  },
  [ImperialPowerEnum.HORSE_POWER]: {
    name: {
      singular: 'Horsepower (British)',
      plural: 'Horsepower (British)'
    },
    anchor: 550
  }
};

export default {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPowerEnum.WATT,
      ratio: 0.737562149
    },
    imperial: {
      unit: ImperialPowerEnum.FOOT_POUND_PER_SECOND,
      ratio: 1 / 0.737562149
    }
  }
} as Definition<'metric' | 'imperial', PowerUnit>;
