export enum AccelerationTranslationEnum {
  SINGULAR_G0 = 'SINGULAR_G0',
  SINGULAR_G_SUN = 'SINGULAR_G_SUN',
  SINGULAR_G_MERCURY = 'SINGULAR_G_MERCURY',
  SINGULAR_G_VENUS = 'SINGULAR_G_VENUS',
  SINGULAR_G_MARS = 'SINGULAR_G_MARS',
  SINGULAR_G_SATURN = 'SINGULAR_G_SATURN',
  SINGULAR_G_JUPITER = 'SINGULAR_G_JUPITER',
  SINGULAR_G_NEPTUNE = 'SINGULAR_G_NEPTUNE',
  SINGULAR_G_PLUTO = 'SINGULAR_G_PLUTO',
  SINGULAR_G_MOON = 'SINGULAR_G_MOON',
  SINGULAR_METRE_PER_SECOND_SQUARED = 'SINGULAR_METRE_PER_SECOND_SQUARED',
  PLURAL_G0 = 'PLURAL_G0',
  PLURAL_G_SUN = 'PLURAL_G_SUN',
  PLURAL_G_MERCURY = 'PLURAL_G_MERCURY',
  PLURAL_G_VENUS = 'PLURAL_G_VENUS',
  PLURAL_G_MARS = 'PLURAL_G_MARS',
  PLURAL_G_SATURN = 'PLURAL_G_SATURN',
  PLURAL_G_JUPITER = 'PLURAL_G_JUPITER',
  PLURAL_G_NEPTUNE = 'PLURAL_G_NEPTUNE',
  PLURAL_G_PLUTO = 'PLURAL_G_PLUTO',
  PLURAL_G_MOON = 'PLURAL_G_MOON',
  PLURAL_METRE_PER_SECOND_SQUARED = 'PLURAL_METRE_PER_SECOND_SQUARED'
}

export type AccelerationSingularTranslationKey =
  | 'SINGULAR_G0'
  | 'SINGULAR_G_SUN'
  | 'SINGULAR_G_MERCURY'
  | 'SINGULAR_G_VENUS'
  | 'SINGULAR_G_MARS'
  | 'SINGULAR_G_SATURN'
  | 'SINGULAR_G_JUPITER'
  | 'SINGULAR_G_NEPTUNE'
  | 'SINGULAR_G_PLUTO'
  | 'SINGULAR_G_MOON'
  | 'SINGULAR_METRE_PER_SECOND_SQUARED';

export type AccelerationPluralTranslationKey =
  | 'PLURAL_G0'
  | 'PLURAL_G_SUN'
  | 'PLURAL_G_MERCURY'
  | 'PLURAL_G_VENUS'
  | 'PLURAL_G_MARS'
  | 'PLURAL_G_SATURN'
  | 'PLURAL_G_JUPITER'
  | 'PLURAL_G_NEPTUNE'
  | 'PLURAL_G_PLUTO'
  | 'PLURAL_G_MOON'
  | 'PLURAL_METRE_PER_SECOND_SQUARED';

export const accelerationTranslations: Record<
  AccelerationSingularTranslationKey | AccelerationPluralTranslationKey,
  string
> = {
  [AccelerationTranslationEnum.SINGULAR_G0]: 'g0',
  [AccelerationTranslationEnum.SINGULAR_G_SUN]: 'g-sun',
  [AccelerationTranslationEnum.SINGULAR_G_MERCURY]: 'g-mercury',
  [AccelerationTranslationEnum.SINGULAR_G_VENUS]: 'g-venus',
  [AccelerationTranslationEnum.SINGULAR_G_MARS]: 'g-mars',
  [AccelerationTranslationEnum.SINGULAR_G_SATURN]: 'g-saturn',
  [AccelerationTranslationEnum.SINGULAR_G_JUPITER]: 'g-jupiter',
  [AccelerationTranslationEnum.SINGULAR_G_NEPTUNE]: 'g-neptune',
  [AccelerationTranslationEnum.SINGULAR_G_PLUTO]: 'g-pluto',
  [AccelerationTranslationEnum.SINGULAR_G_MOON]: 'g-moon',
  [AccelerationTranslationEnum.SINGULAR_METRE_PER_SECOND_SQUARED]: 'Metre per second squared',
  [AccelerationTranslationEnum.PLURAL_G0]: 'g0s',
  [AccelerationTranslationEnum.PLURAL_G_SUN]: 'g-suns',
  [AccelerationTranslationEnum.PLURAL_G_MERCURY]: 'g-mercuries',
  [AccelerationTranslationEnum.PLURAL_G_VENUS]: 'g-venuses',
  [AccelerationTranslationEnum.PLURAL_G_MARS]: 'g-marses',
  [AccelerationTranslationEnum.PLURAL_G_SATURN]: 'g-saturns',
  [AccelerationTranslationEnum.PLURAL_G_JUPITER]: 'g-jupiters',
  [AccelerationTranslationEnum.PLURAL_G_NEPTUNE]: 'g-neptunes',
  [AccelerationTranslationEnum.PLURAL_G_PLUTO]: 'g-plutos',
  [AccelerationTranslationEnum.PLURAL_G_MOON]: 'g-moons',
  [AccelerationTranslationEnum.PLURAL_METRE_PER_SECOND_SQUARED]: 'Metres per second squared'
};
