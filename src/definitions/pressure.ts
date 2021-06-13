import { PressureTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ImperialPressureUnit, MetricPressureUnit, PressureUnit } from './type';

export enum MetricPressureEnum {
  PASCAL = 'Pa',
  KILOPASCAL = 'kPa',
  MEGAPASCAL = 'MPa',
  HECTOPASCAL = 'hPa',
  BAR = 'bar',
  TORR = 'torr',
  MILLIMETRE_OF_MERCURY = 'mmHg'
}

export enum ImperialPressureEnum {
  POUND_PER_SQUARE_INCH = 'psi',
  KILOPOUND_PER_SQUARE_INCH = 'ksi',
  INCH_OF_MERCURY = 'inHg'
}

const metric: Record<MetricPressureUnit, Unit> = {
  [MetricPressureEnum.PASCAL]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_PASCAL,
      plural: PressureTranslationEnum.PLURAL_PASCAL
    },
    anchor: 1e-3
  },
  [MetricPressureEnum.KILOPASCAL]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_KILOPASCAL,
      plural: PressureTranslationEnum.PLURAL_KILOPASCAL
    },
    anchor: 1
  },
  [MetricPressureEnum.MEGAPASCAL]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_MEGAPASCAL,
      plural: PressureTranslationEnum.PLURAL_MEGAPASCAL
    },
    anchor: 1e3
  },
  [MetricPressureEnum.HECTOPASCAL]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_HECTOPASCAL,
      plural: PressureTranslationEnum.PLURAL_HECTOPASCAL
    },
    anchor: 0.1
  },
  [MetricPressureEnum.BAR]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_BAR,
      plural: PressureTranslationEnum.PLURAL_BAR
    },
    anchor: 1e2
  },
  [MetricPressureEnum.TORR]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_TORR,
      plural: PressureTranslationEnum.PLURAL_TORR
    },
    anchor: 1 / 7.500616827
  },
  [MetricPressureEnum.MILLIMETRE_OF_MERCURY]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_MILLIMETRE_OF_MERCURY,
      plural: PressureTranslationEnum.PLURAL_MILLIMETRE_OF_MERCURY
    },
    anchor: 0.133322387415
  }
};

const imperial: Record<ImperialPressureUnit, Unit> = {
  [ImperialPressureEnum.POUND_PER_SQUARE_INCH]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_POUND_PER_SQUARE_INCH,
      plural: PressureTranslationEnum.PLURAL_POUND_PER_SQUARE_INCH
    },
    anchor: 1
  },
  [ImperialPressureEnum.KILOPOUND_PER_SQUARE_INCH]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_KILOPOUND_PER_SQUARE_INCH,
      plural: PressureTranslationEnum.PLURAL_KILOPOUND_PER_SQUARE_INCH
    },
    anchor: 1e3
  },
  [ImperialPressureEnum.INCH_OF_MERCURY]: {
    name: {
      singular: PressureTranslationEnum.SINGULAR_INCH_OF_MERCURY,
      plural: PressureTranslationEnum.PLURAL_INCH_OF_MERCURY
    },
    anchor: 0.49115
  }
};

const pressure: MeasureDefinition<'metric' | 'imperial', PressureUnit> = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      unit: MetricPressureEnum.KILOPASCAL,
      ratio: {
        imperial: 0.14503768078
      }
    },
    imperial: {
      unit: ImperialPressureEnum.POUND_PER_SQUARE_INCH,
      ratio: {
        metric: 1 / 0.14503768078
      }
    }
  }
};

export default pressure;
