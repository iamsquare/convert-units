import { VoltageTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { VoltageUnit } from './type';

export enum VoltageEnum {
  VOLT = 'V',
  MILLIVOLT = 'mV',
  KILOVOLT = 'kV'
}

const metric: Record<VoltageUnit, Unit> = {
  [VoltageEnum.VOLT]: {
    name: {
      singular: VoltageTranslationEnum.SINGULAR_VOLT,
      plural: VoltageTranslationEnum.PLURAL_VOLT
    },
    anchor: 1
  },
  [VoltageEnum.MILLIVOLT]: {
    name: {
      singular: VoltageTranslationEnum.SINGULAR_MILLIVOLT,
      plural: VoltageTranslationEnum.PLURAL_MILLIVOLT
    },
    anchor: 0.001
  },
  [VoltageEnum.KILOVOLT]: {
    name: {
      singular: VoltageTranslationEnum.SINGULAR_KILOVOLT,
      plural: VoltageTranslationEnum.PLURAL_KILOVOLT
    },
    anchor: 1000
  }
};

const voltage: MeasureDefinition<'metric', VoltageUnit> = {
  systems: {
    metric
  }
};

export default voltage;
