import { AreaTranslationEnum } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { AreaUnit, ImperialAreaUnit, MetricAreaUnit } from './type';

export enum MetricAreaEnum {
  SQUARE_MILLIMETER = 'mm2',
  SQUARE_CENTIMETER = 'cm2',
  SQUARE_METER = 'm2',
  SQUARE_KILOMETER = 'km2',
  HECTARE = 'ha'
}

export enum ImperialAreaEnum {
  SQUARE_INCH = 'in2',
  SQUARE_YARD = 'yd2',
  SQUARE_FOOT = 'ft2',
  SQUARE_MILE = 'mi2',
  ACRE = 'ac'
}

const metric: Record<MetricAreaUnit, Unit> = {
  [MetricAreaEnum.SQUARE_MILLIMETER]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_MILLIMETER,
      plural: AreaTranslationEnum.PLURAL_SQUARE_MILLIMETER
    },
    anchor: 1e-6
  },
  [MetricAreaEnum.SQUARE_CENTIMETER]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_CENTIMETER,
      plural: AreaTranslationEnum.PLURAL_SQUARE_CENTIMETER
    },
    anchor: 1e-4
  },
  [MetricAreaEnum.SQUARE_METER]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_METER,
      plural: AreaTranslationEnum.PLURAL_SQUARE_METER
    },
    anchor: 1
  },
  [MetricAreaEnum.SQUARE_KILOMETER]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_KILOMETER,
      plural: AreaTranslationEnum.PLURAL_SQUARE_KILOMETER
    },
    anchor: 1e6
  },
  [MetricAreaEnum.HECTARE]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_HECTARE,
      plural: AreaTranslationEnum.PLURAL_HECTARE
    },
    anchor: 1e4
  }
};

const imperial: Record<ImperialAreaUnit, Unit> = {
  [ImperialAreaEnum.SQUARE_INCH]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_INCH,
      plural: AreaTranslationEnum.PLURAL_SQUARE_INCH
    },
    anchor: 1 / 144
  },
  [ImperialAreaEnum.SQUARE_YARD]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_YARD,
      plural: AreaTranslationEnum.PLURAL_SQUARE_YARD
    },
    anchor: 9
  },
  [ImperialAreaEnum.SQUARE_FOOT]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_FOOT,
      plural: AreaTranslationEnum.PLURAL_SQUARE_FOOT
    },
    anchor: 1
  },
  [ImperialAreaEnum.SQUARE_MILE]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_SQUARE_MILE,
      plural: AreaTranslationEnum.PLURAL_SQUARE_MILE
    },
    anchor: 27878400
  },
  [ImperialAreaEnum.ACRE]: {
    name: {
      singular: AreaTranslationEnum.SINGULAR_ACRE,
      plural: AreaTranslationEnum.PLURAL_ACRE
    },
    anchor: 43560
  }
};

const area: UnitDefinition<'metric' | 'imperial', AreaUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricAreaEnum.SQUARE_METER,
      ratio: {
        imperial: 10.7639
      }
    },
    imperial: {
      unit: ImperialAreaEnum.SQUARE_FOOT,
      ratio: {
        metric: 1 / 10.7639
      }
    }
  }
};

export default area;
