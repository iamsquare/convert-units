import { translationModule, VoltageTranslationEnum } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { VoltageUnit } from './type';

export enum VoltageEnum {
  VOLT = 'V',
  MILLIVOLT = 'mV',
  KILOVOLT = 'kV'
}

const metric: Record<VoltageUnit, Unit> = {
  [VoltageEnum.VOLT]: {
    name: {
      singular: translationModule.getTranslationByKey(VoltageTranslationEnum.SINGULAR_VOLT),
      plural: translationModule.getTranslationByKey(VoltageTranslationEnum.PLURAL_VOLT)
    },
    anchor: 1
  },
  [VoltageEnum.MILLIVOLT]: {
    name: {
      singular: translationModule.getTranslationByKey(VoltageTranslationEnum.SINGULAR_MILLIVOLT),
      plural: translationModule.getTranslationByKey(VoltageTranslationEnum.PLURAL_MILLIVOLT)
    },
    anchor: 0.001
  },
  [VoltageEnum.KILOVOLT]: {
    name: {
      singular: translationModule.getTranslationByKey(VoltageTranslationEnum.SINGULAR_KILOVOLT),
      plural: translationModule.getTranslationByKey(VoltageTranslationEnum.PLURAL_KILOVOLT)
    },
    anchor: 1000
  }
};

const voltage: UnitDefinition<'metric', VoltageUnit> = {
  systems: {
    metric
  }
};

export default voltage;
