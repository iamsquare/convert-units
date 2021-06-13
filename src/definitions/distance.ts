import { DistanceTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { DistanceUnit, ImperialDistanceUnit, MetricDistanceUnit } from './type';

export enum MetricDistanceEnum {
  NANOMETER = 'nm',
  MICROMETER = 'μm',
  MILLIMETER = 'mm',
  CENTIMETER = 'cm',
  METER = 'm',
  KILOMETER = 'km'
}

export enum ImperialDistanceEnum {
  INCH = 'in',
  YARD = 'yd',
  US_SURVEY_FOOT = 'ft-us',
  FOOT = 'ft',
  FATHOM = 'fathom',
  MILE = 'mi',
  NAUTICAL_MILE = 'nMi'
}

const metric: Record<MetricDistanceUnit, Unit> = {
  [MetricDistanceEnum.NANOMETER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_NANOMETER,
      plural: DistanceTranslationEnum.PLURAL_NANOMETER
    },
    anchor: 1e-9
  },
  [MetricDistanceEnum.MICROMETER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_MICROMETER,
      plural: DistanceTranslationEnum.PLURAL_MICROMETER
    },
    anchor: 1e-6
  },
  [MetricDistanceEnum.MILLIMETER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_MILLIMETER,
      plural: DistanceTranslationEnum.PLURAL_MILLIMETER
    },
    anchor: 1e-3
  },
  [MetricDistanceEnum.CENTIMETER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_CENTIMETER,
      plural: DistanceTranslationEnum.PLURAL_CENTIMETER
    },
    anchor: 1e-2
  },
  [MetricDistanceEnum.METER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_METER,
      plural: DistanceTranslationEnum.PLURAL_METER
    },
    anchor: 1
  },
  [MetricDistanceEnum.KILOMETER]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_KILOMETER,
      plural: DistanceTranslationEnum.PLURAL_KILOMETER
    },
    anchor: 1e3
  }
};

const imperial: Record<ImperialDistanceUnit, Unit> = {
  [ImperialDistanceEnum.INCH]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_INCH,
      plural: DistanceTranslationEnum.PLURAL_INCH
    },
    anchor: 1 / 12
  },
  [ImperialDistanceEnum.YARD]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_YARD,
      plural: DistanceTranslationEnum.PLURAL_YARD
    },
    anchor: 3
  },
  [ImperialDistanceEnum.US_SURVEY_FOOT]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_US_SURVEY_FOOT,
      plural: DistanceTranslationEnum.PLURAL_US_SURVEY_FOOT
    },
    anchor: 1.000002
  },
  [ImperialDistanceEnum.FOOT]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_FOOT,
      plural: DistanceTranslationEnum.PLURAL_FOOT
    },
    anchor: 1
  },
  [ImperialDistanceEnum.FATHOM]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_FATHOM,
      plural: DistanceTranslationEnum.PLURAL_FATHOM
    },
    anchor: 6
  },
  [ImperialDistanceEnum.MILE]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_MILE,
      plural: DistanceTranslationEnum.PLURAL_MILE
    },
    anchor: 5280
  },
  [ImperialDistanceEnum.NAUTICAL_MILE]: {
    name: {
      singular: DistanceTranslationEnum.SINGULAR_NAUTICAL_MILE,
      plural: DistanceTranslationEnum.PLURAL_NAUTICAL_MILE
    },
    anchor: 6076.12
  }
};

const distance: MeasureDefinition<'metric' | 'imperial', DistanceUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricDistanceEnum.METER,
      ratio: {
        imperial: 3.28084
      }
    },
    imperial: {
      unit: ImperialDistanceEnum.FOOT,
      ratio: {
        metric: 1 / 3.28084
      }
    }
  }
};

export default distance;
