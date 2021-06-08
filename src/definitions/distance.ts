import { DistanceTranslationEnum, translationModule } from '../i18n';

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

const metric = {
  [MetricDistanceEnum.NANOMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_NANOMETER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_NANOMETER)
    },
    anchor: 1e-9
  },
  [MetricDistanceEnum.MICROMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_MICROMETER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_MICROMETER)
    },
    anchor: 1e-6
  },
  [MetricDistanceEnum.MILLIMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_MILLIMETER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_MILLIMETER)
    },
    anchor: 1e-3
  },
  [MetricDistanceEnum.CENTIMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_CENTIMETER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_CENTIMETER)
    },
    anchor: 1e-2
  },
  [MetricDistanceEnum.METER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_METER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_METER)
    },
    anchor: 1
  },
  [MetricDistanceEnum.KILOMETER]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_KILOMETER),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_KILOMETER)
    },
    anchor: 1e3
  }
};

const imperial = {
  [ImperialDistanceEnum.INCH]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_INCH),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_INCH)
    },
    anchor: 1 / 12
  },
  [ImperialDistanceEnum.YARD]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_YARD),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_YARD)
    },
    anchor: 3
  },
  [ImperialDistanceEnum.US_SURVEY_FOOT]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_US_SURVEY_FOOT),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_US_SURVEY_FOOT)
    },
    anchor: 1.000002
  },
  [ImperialDistanceEnum.FOOT]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_FOOT),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_FOOT)
    },
    anchor: 1
  },
  [ImperialDistanceEnum.FATHOM]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_FATHOM),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_FATHOM)
    },
    anchor: 6
  },
  [ImperialDistanceEnum.MILE]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_MILE),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_MILE)
    },
    anchor: 5280
  },
  [ImperialDistanceEnum.NAUTICAL_MILE]: {
    name: {
      singular: translationModule.getTranslationByKey(DistanceTranslationEnum.SINGULAR_NAUTICAL_MILE),
      plural: translationModule.getTranslationByKey(DistanceTranslationEnum.PLURAL_NAUTICAL_MILE)
    },
    anchor: 6076.12
  }
};

const distance = {
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
