export enum PaceTranslationEnum {
  SINGULAR_MINUTE_PER_KILOMETRE = 'SINGULAR_MINUTE_PER_KILOMETRE',
  SINGULAR_SECOND_PER_METRE = 'SINGULAR_SECOND_PER_METRE',
  SINGULAR_MINUTE_PER_MILE = 'SINGULAR_MINUTE_PER_MILE',
  SINGULAR_SECOND_PER_FOOT = 'SINGULAR_SECOND_PER_FOOT',
  PLURAL_MINUTE_PER_KILOMETRE = 'PLURAL_MINUTE_PER_KILOMETRE',
  PLURAL_SECOND_PER_METRE = 'PLURAL_SECOND_PER_METRE',
  PLURAL_MINUTE_PER_MILE = 'PLURAL_MINUTE_PER_MILE',
  PLURAL_SECOND_PER_FOOT = 'PLURAL_SECOND_PER_FOOT'
}

export type PaceSingularTranslationKey =
  | 'SINGULAR_MINUTE_PER_KILOMETRE'
  | 'SINGULAR_SECOND_PER_METRE'
  | 'SINGULAR_MINUTE_PER_MILE'
  | 'SINGULAR_SECOND_PER_FOOT';

export type PacePluralTranslationKey =
  | 'PLURAL_MINUTE_PER_KILOMETRE'
  | 'PLURAL_SECOND_PER_METRE'
  | 'PLURAL_MINUTE_PER_MILE'
  | 'PLURAL_SECOND_PER_FOOT';

export const paceTranslations: Record<PaceSingularTranslationKey | PacePluralTranslationKey, string> = {
  [PaceTranslationEnum.SINGULAR_MINUTE_PER_KILOMETRE]: 'Minute per kilometre',
  [PaceTranslationEnum.SINGULAR_SECOND_PER_METRE]: 'Second per metre',
  [PaceTranslationEnum.SINGULAR_MINUTE_PER_MILE]: 'Minute per mile',
  [PaceTranslationEnum.SINGULAR_SECOND_PER_FOOT]: 'Second per foot',
  [PaceTranslationEnum.PLURAL_MINUTE_PER_KILOMETRE]: 'Minutes per kilometre',
  [PaceTranslationEnum.PLURAL_SECOND_PER_METRE]: 'Seconds per metre',
  [PaceTranslationEnum.PLURAL_MINUTE_PER_MILE]: 'Minutes per mile',
  [PaceTranslationEnum.PLURAL_SECOND_PER_FOOT]: 'Seconds per foot'
};
