import { EnergyTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_WATT_HOUR),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_WATT_HOUR)
    },
    anchor: 3.6e3
  },
  [EnergyEnum.MILLIWATT_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_MILLIWATT_HOUR),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_MILLIWATT_HOUR)
    },
    anchor: 3.6
  },
  [EnergyEnum.KILOWATT_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_KILOWATT_HOUR),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_KILOWATT_HOUR)
    },
    anchor: 3.6e6
  },
  [EnergyEnum.MEGAWATT_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_MEGAWATT_HOUR),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_MEGAWATT_HOUR)
    },
    anchor: 3.6e9
  },
  [EnergyEnum.GIGAWATT_HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_GIGAWATT_HOUR),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_GIGAWATT_HOUR)
    },
    anchor: 3.6e12
  },
  [EnergyEnum.JOULE]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_JOULE),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_JOULE)
    },
    anchor: 1
  },
  [EnergyEnum.KILOJOULE]: {
    name: {
      singular: translationModule.getTranslationByKey(EnergyTranslationEnum.SINGULAR_KILOJOULE),
      plural: translationModule.getTranslationByKey(EnergyTranslationEnum.PLURAL_KILOJOULE)
    },
    anchor: 1e3
  }
};

const energy: UnitDefinition<'metric', EnergyUnit> = {
  systems: {
    metric
  }
};

export default energy;
