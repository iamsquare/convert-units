import { TimeTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_NANOSECOND),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_NANOSECOND)
    },
    anchor: 1e-9
  },
  [TimeEnum.MICROSECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_MICROSECOND),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_MICROSECOND)
    },
    anchor: 1e-6
  },
  [TimeEnum.MILLISECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_MILLISECOND),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_MILLISECOND)
    },
    anchor: 1e-3
  },
  [TimeEnum.SECOND]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_SECOND),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_SECOND)
    },
    anchor: 1
  },
  [TimeEnum.MINUTE]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_MINUTE),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_MINUTE)
    },
    anchor: 60
  },
  [TimeEnum.HOUR]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_HOUR),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_HOUR)
    },
    anchor: 3600
  },
  [TimeEnum.DAY]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_DAY),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_DAY)
    },
    anchor: 86400
  },
  [TimeEnum.WEEK]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_WEEK),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_WEEK)
    },
    anchor: 604800
  },
  [TimeEnum.MONTH]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_MONTH),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_MONTH)
    },
    anchor: 2629800
  },
  [TimeEnum.YEAR]: {
    name: {
      singular: translationModule.getTranslationByKey(TimeTranslationEnum.SINGULAR_YEAR),
      plural: translationModule.getTranslationByKey(TimeTranslationEnum.PLURAL_YEAR)
    },
    anchor: 31557600
  }
};

const time: UnitDefinition<'metric', TimeUnit> = {
  systems: {
    metric
  }
};

export default time;
