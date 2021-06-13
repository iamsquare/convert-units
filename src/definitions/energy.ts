import { EnergyTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { EnergyUnit } from './type';

export enum EnergyEnum {
  WATT_HOUR = 'Wh',
  MILLIWATT_HOUR = 'mWh',
  KILOWATT_HOUR = 'kWh',
  MEGAWATT_HOUR = 'MWh',
  GIGAWATT_HOUR = 'GWh',
  JOULE = 'J',
  KILOJOULE = 'kJ'
}

const metric: Record<EnergyUnit, Unit> = {
  [EnergyEnum.WATT_HOUR]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_WATT_HOUR,
      plural: EnergyTranslationEnum.PLURAL_WATT_HOUR
    },
    anchor: 3.6e3
  },
  [EnergyEnum.MILLIWATT_HOUR]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_MILLIWATT_HOUR,
      plural: EnergyTranslationEnum.PLURAL_MILLIWATT_HOUR
    },
    anchor: 3.6
  },
  [EnergyEnum.KILOWATT_HOUR]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_KILOWATT_HOUR,
      plural: EnergyTranslationEnum.PLURAL_KILOWATT_HOUR
    },
    anchor: 3.6e6
  },
  [EnergyEnum.MEGAWATT_HOUR]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_MEGAWATT_HOUR,
      plural: EnergyTranslationEnum.PLURAL_MEGAWATT_HOUR
    },
    anchor: 3.6e9
  },
  [EnergyEnum.GIGAWATT_HOUR]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_GIGAWATT_HOUR,
      plural: EnergyTranslationEnum.PLURAL_GIGAWATT_HOUR
    },
    anchor: 3.6e12
  },
  [EnergyEnum.JOULE]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_JOULE,
      plural: EnergyTranslationEnum.PLURAL_JOULE
    },
    anchor: 1
  },
  [EnergyEnum.KILOJOULE]: {
    name: {
      singular: EnergyTranslationEnum.SINGULAR_KILOJOULE,
      plural: EnergyTranslationEnum.PLURAL_KILOJOULE
    },
    anchor: 1e3
  }
};

const energy: MeasureDefinition<'metric', EnergyUnit> = {
  systems: {
    metric
  }
};

export default energy;
