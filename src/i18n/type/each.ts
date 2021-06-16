export enum EachTranslationEnum {
  SINGULAR_EACH = 'SINGULAR_EACH',
  SINGULAR_DOZEN = 'SINGULAR_DOZEN',
  PLURAL_EACH = 'PLURAL_EACH',
  PLURAL_DOZEN = 'PLURAL_DOZEN'
}

export type EachSingularTranslationKey = 'SINGULAR_EACH' | 'SINGULAR_DOZEN';

export type EachPluralTranslationKey = 'PLURAL_EACH' | 'PLURAL_DOZEN';

export const eachTranslations: Record<EachSingularTranslationKey | EachPluralTranslationKey, string> = {
  [EachTranslationEnum.SINGULAR_EACH]: 'Each',
  [EachTranslationEnum.SINGULAR_DOZEN]: 'Dozen',
  [EachTranslationEnum.PLURAL_EACH]: 'Each',
  [EachTranslationEnum.PLURAL_DOZEN]: 'Dozens'
};
