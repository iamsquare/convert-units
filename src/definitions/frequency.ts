import { FrequencyTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { FrequencyUnit } from './type';

export enum FrequencyEnum {
  HERTZ = 'Hz',
  MILLIHERTZ = 'mHz',
  KILOHERTZ = 'kHz',
  MEGAHERTZ = 'MHz',
  GIGAHERTZ = 'GHz',
  TERAHERTZ = 'THz',
  RPM = 'rpm',
  DEGREE_PER_SECOND = 'deg/s',
  RADIAN_PER_SECOND = 'rad/s'
}

const metric: Record<FrequencyUnit, Unit> = {
  [FrequencyEnum.HERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_HERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_HERTZ)
    },
    anchor: 1
  },
  [FrequencyEnum.MILLIHERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_MILLIHERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_MILLIHERTZ)
    },
    anchor: 1e-3
  },
  [FrequencyEnum.KILOHERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_KILOHERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_KILOHERTZ)
    },
    anchor: 1e3
  },
  [FrequencyEnum.MEGAHERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_MEGAHERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_MEGAHERTZ)
    },
    anchor: 1e6
  },
  [FrequencyEnum.GIGAHERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_GIGAHERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_GIGAHERTZ)
    },
    anchor: 1e9
  },
  [FrequencyEnum.TERAHERTZ]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_TERAHERTZ),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_TERAHERTZ)
    },
    anchor: 1e12
  },
  [FrequencyEnum.RPM]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_RPM),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_RPM)
    },
    anchor: 1 / 60
  },
  [FrequencyEnum.DEGREE_PER_SECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_DEGREE_PER_SECOND),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_DEGREE_PER_SECOND)
    },
    anchor: 1 / 360
  },
  [FrequencyEnum.RADIAN_PER_SECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(FrequencyTranslationEnum.SINGULAR_RADIAN_PER_SECOND),
      plural: translationModule.getTranslationByKey(FrequencyTranslationEnum.PLURAL_RADIAN_PER_SECOND)
    },
    anchor: 1 / (Math.PI * 2)
  }
};

const frequency: UnitDefinition<'metric', FrequencyUnit> = {
  systems: {
    metric
  }
};

export default frequency;
