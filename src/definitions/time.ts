import { TimeTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { TimeUnit } from './type';

export enum TimeEnum {
  NANOSECOND = 'ns',
  MICROSECOND = 'mu',
  MILLISECOND = 'ms',
  SECOND = 's',
  MINUTE = 'min',
  HOUR = 'h',
  DAY = 'd',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year'
}

const metric: Record<TimeUnit, Unit> = {
  [TimeEnum.NANOSECOND]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_NANOSECOND,
      plural: TimeTranslationEnum.PLURAL_NANOSECOND
    },
    anchor: 1e-9
  },
  [TimeEnum.MICROSECOND]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_MICROSECOND,
      plural: TimeTranslationEnum.PLURAL_MICROSECOND
    },
    anchor: 1e-6
  },
  [TimeEnum.MILLISECOND]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_MILLISECOND,
      plural: TimeTranslationEnum.PLURAL_MILLISECOND
    },
    anchor: 1e-3
  },
  [TimeEnum.SECOND]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_SECOND,
      plural: TimeTranslationEnum.PLURAL_SECOND
    },
    anchor: 1
  },
  [TimeEnum.MINUTE]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_MINUTE,
      plural: TimeTranslationEnum.PLURAL_MINUTE
    },
    anchor: 60
  },
  [TimeEnum.HOUR]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_HOUR,
      plural: TimeTranslationEnum.PLURAL_HOUR
    },
    anchor: 3600
  },
  [TimeEnum.DAY]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_DAY,
      plural: TimeTranslationEnum.PLURAL_DAY
    },
    anchor: 86400
  },
  [TimeEnum.WEEK]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_WEEK,
      plural: TimeTranslationEnum.PLURAL_WEEK
    },
    anchor: 604800
  },
  [TimeEnum.MONTH]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_MONTH,
      plural: TimeTranslationEnum.PLURAL_MONTH
    },
    anchor: 2629800
  },
  [TimeEnum.YEAR]: {
    name: {
      singular: TimeTranslationEnum.SINGULAR_YEAR,
      plural: TimeTranslationEnum.PLURAL_YEAR
    },
    anchor: 31557600
  }
};

const time: MeasureDefinition<'metric', TimeUnit> = {
  systems: {
    metric
  }
};

export default time;
