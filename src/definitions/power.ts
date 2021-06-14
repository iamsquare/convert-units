import { PowerTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialPowerUnit, MetricPowerUnit, PowerUnit } from './type';

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

const metric: Record<MetricPowerUnit, Unit> = {
  [MetricPowerEnum.WATT]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_WATT,
      plural: PowerTranslationEnum.PLURAL_WATT
    },
    anchor: 1
  },
  [MetricPowerEnum.MILLIWATT]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_MILLIWATT,
      plural: PowerTranslationEnum.PLURAL_MILLIWATT
    },
    anchor: 1e-3
  },
  [MetricPowerEnum.KILOWATT]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_KILOWATT,
      plural: PowerTranslationEnum.PLURAL_KILOWATT
    },
    anchor: 1e3
  },
  [MetricPowerEnum.MEGAWATT]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_MEGAWATT,
      plural: PowerTranslationEnum.PLURAL_MEGAWATT
    },
    anchor: 1e6
  },
  [MetricPowerEnum.GIGAWATT]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_GIGAWATT,
      plural: PowerTranslationEnum.PLURAL_GIGAWATT
    },
    anchor: 1e9
  },
  [MetricPowerEnum.HORSE_POWER]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_HORSE_POWER,
      plural: PowerTranslationEnum.PLURAL_HORSE_POWER
    },
    anchor: 735.49875
  }
};

const imperial: Record<ImperialPowerUnit, Unit> = {
  [ImperialPowerEnum.BTU_PER_SECOND]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_BTU_PER_SECOND,
      plural: PowerTranslationEnum.PLURAL_BTU_PER_SECOND
    },
    anchor: 778.16937
  },
  [ImperialPowerEnum.FOOT_POUND_PER_SECOND]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_FOOT_POUND_PER_SECOND,
      plural: PowerTranslationEnum.PLURAL_FOOT_POUND_PER_SECOND
    },
    anchor: 1
  },
  [ImperialPowerEnum.HORSE_POWER]: {
    name: {
      singular: PowerTranslationEnum.SINGULAR_IMPERIAL_HORSE_POWER,
      plural: PowerTranslationEnum.PLURAL_IMPERIAL_HORSE_POWER
    },
    anchor: 550
  }
};

export type PowerSystems = 'metric' | 'imperial';

const power: MeasureDefinition<PowerSystems, PowerUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPowerEnum.WATT,
      ratio: {
        imperial: 0.737562149
      }
    },
    imperial: {
      unit: ImperialPowerEnum.FOOT_POUND_PER_SECOND,
      ratio: {
        metric: 1 / 0.737562149
      }
    }
  }
};

export default power;
