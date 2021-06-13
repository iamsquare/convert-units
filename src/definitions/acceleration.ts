import { AccelerationTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { AccelerationUnit } from './type';

export enum AccelerationEnum {
  G0 = 'g0',
  G_SUN = 'g-sun',
  G_MERCURY = 'g-mercury',
  G_VENUS = 'g-venus',
  G_MARS = 'g-mars',
  G_SATURN = 'g-saturn',
  G_JUPITER = 'g-jupiter',
  G_NEPTUNE = 'g-neptune',
  G_PLUTO = 'g-pluto',
  G_MOON = 'g-moon',
  METRE_PER_SECOND_SQUARED = 'm/s2'
}

const metric: Record<AccelerationUnit, Unit> = {
  [AccelerationEnum.G0]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G0,
      plural: AccelerationTranslationEnum.PLURAL_G0
    },
    anchor: 9.80665
  },
  [AccelerationEnum.G_MOON]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_MOON,
      plural: AccelerationTranslationEnum.PLURAL_G_MOON
    },
    anchor: 1.62
  },
  [AccelerationEnum.G_SUN]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_SUN,
      plural: AccelerationTranslationEnum.PLURAL_G_SUN
    },
    anchor: 274
  },
  [AccelerationEnum.G_MERCURY]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_MERCURY,
      plural: AccelerationTranslationEnum.PLURAL_G_MERCURY
    },
    anchor: 3.7
  },
  [AccelerationEnum.G_VENUS]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_VENUS,
      plural: AccelerationTranslationEnum.PLURAL_G_VENUS
    },
    anchor: 8.87
  },
  [AccelerationEnum.G_MARS]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_MARS,
      plural: AccelerationTranslationEnum.PLURAL_G_MARS
    },
    anchor: 3.69
  },
  [AccelerationEnum.G_SATURN]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_SATURN,
      plural: AccelerationTranslationEnum.PLURAL_G_SATURN
    },
    anchor: 10.44
  },
  [AccelerationEnum.G_JUPITER]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_JUPITER,
      plural: AccelerationTranslationEnum.PLURAL_G_JUPITER
    },
    anchor: 24.79
  },
  [AccelerationEnum.G_NEPTUNE]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_NEPTUNE,
      plural: AccelerationTranslationEnum.PLURAL_G_NEPTUNE
    },
    anchor: 11.15
  },
  [AccelerationEnum.G_PLUTO]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_G_PLUTO,
      plural: AccelerationTranslationEnum.PLURAL_G_PLUTO
    },
    anchor: 0.62
  },
  [AccelerationEnum.METRE_PER_SECOND_SQUARED]: {
    name: {
      singular: AccelerationTranslationEnum.SINGULAR_METRE_PER_SECOND_SQUARED,
      plural: AccelerationTranslationEnum.PLURAL_METRE_PER_SECOND_SQUARED
    },
    anchor: 1
  }
};

const acceleration: MeasureDefinition<'metric', AccelerationUnit> = {
  systems: {
    metric
  }
};

export default acceleration;
