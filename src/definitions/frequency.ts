import { FrequencyTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
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
      singular: FrequencyTranslationEnum.SINGULAR_HERTZ,
      plural: FrequencyTranslationEnum.PLURAL_HERTZ
    },
    anchor: 1
  },
  [FrequencyEnum.MILLIHERTZ]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_MILLIHERTZ,
      plural: FrequencyTranslationEnum.PLURAL_MILLIHERTZ
    },
    anchor: 1e-3
  },
  [FrequencyEnum.KILOHERTZ]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_KILOHERTZ,
      plural: FrequencyTranslationEnum.PLURAL_KILOHERTZ
    },
    anchor: 1e3
  },
  [FrequencyEnum.MEGAHERTZ]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_MEGAHERTZ,
      plural: FrequencyTranslationEnum.PLURAL_MEGAHERTZ
    },
    anchor: 1e6
  },
  [FrequencyEnum.GIGAHERTZ]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_GIGAHERTZ,
      plural: FrequencyTranslationEnum.PLURAL_GIGAHERTZ
    },
    anchor: 1e9
  },
  [FrequencyEnum.TERAHERTZ]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_TERAHERTZ,
      plural: FrequencyTranslationEnum.PLURAL_TERAHERTZ
    },
    anchor: 1e12
  },
  [FrequencyEnum.RPM]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_RPM,
      plural: FrequencyTranslationEnum.PLURAL_RPM
    },
    anchor: 1 / 60
  },
  [FrequencyEnum.DEGREE_PER_SECOND]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_DEGREE_PER_SECOND,
      plural: FrequencyTranslationEnum.PLURAL_DEGREE_PER_SECOND
    },
    anchor: 1 / 360
  },
  [FrequencyEnum.RADIAN_PER_SECOND]: {
    name: {
      singular: FrequencyTranslationEnum.SINGULAR_RADIAN_PER_SECOND,
      plural: FrequencyTranslationEnum.PLURAL_RADIAN_PER_SECOND
    },
    anchor: 1 / (Math.PI * 2)
  }
};

export type FrequencySystems = 'metric';

const frequency: MeasureDefinition<FrequencySystems, FrequencyUnit> = {
  systems: {
    metric
  }
};

export default frequency;
