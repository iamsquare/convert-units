export enum ForceTranslationEnum {
  SINGULAR_NEWTON = 'SINGULAR_NEWTON',
  SINGULAR_KILONEWTON = 'SINGULAR_KILONEWTON',
  SINGULAR_POUND_FORCE = 'SINGULAR_POUND_FORCE',
  PLURAL_NEWTON = 'PLURAL_NEWTON',
  PLURAL_KILONEWTON = 'PLURAL_KILONEWTON',
  PLURAL_POUND_FORCE = 'PLURAL_POUND_FORCE'
}

export type ForceSingularTranslationKey = 'SINGULAR_NEWTON' | 'SINGULAR_KILONEWTON' | 'SINGULAR_POUND_FORCE';

export type ForcePluralTranslationKey = 'PLURAL_NEWTON' | 'PLURAL_KILONEWTON' | 'PLURAL_POUND_FORCE';

export const forceTranslations: Record<ForceSingularTranslationKey | ForcePluralTranslationKey, string> = {
  [ForceTranslationEnum.SINGULAR_NEWTON]: 'Newton',
  [ForceTranslationEnum.SINGULAR_KILONEWTON]: 'Kilonewton',
  [ForceTranslationEnum.SINGULAR_POUND_FORCE]: 'Pound-force',
  [ForceTranslationEnum.PLURAL_NEWTON]: 'Newtons',
  [ForceTranslationEnum.PLURAL_KILONEWTON]: 'Kilonewtons',
  [ForceTranslationEnum.PLURAL_POUND_FORCE]: 'Pounds-force'
};
