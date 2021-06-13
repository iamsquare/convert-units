export enum ChargeTranslationEnum {
  SINGULAR_COULOMB = 'SINGULAR_COULOMB',
  SINGULAR_MILLICOULOMB = 'SINGULAR_MILLICOULOMB',
  SINGULAR_MICROCOULOMB = 'SINGULAR_MICROCOULOMB',
  SINGULAR_NANOCOULOMB = 'SINGULAR_NANOCOULOMB',
  SINGULAR_PICOCOULOMB = 'SINGULAR_PICOCOULOMB',
  PLURAL_COULOMB = 'PLURAL_COULOMB',
  PLURAL_MILLICOULOMB = 'PLURAL_MILLICOULOMB',
  PLURAL_MICROCOULOMB = 'PLURAL_MICROCOULOMB',
  PLURAL_NANOCOULOMB = 'PLURAL_NANOCOULOMB',
  PLURAL_PICOCOULOMB = 'PLURAL_PICOCOULOMB'
}

export type ChargeSingularTranslationKey =
  | 'SINGULAR_COULOMB'
  | 'SINGULAR_MILLICOULOMB'
  | 'SINGULAR_MICROCOULOMB'
  | 'SINGULAR_NANOCOULOMB'
  | 'SINGULAR_PICOCOULOMB';

export type ChargePluralTranslationKey =
  | 'PLURAL_COULOMB'
  | 'PLURAL_MILLICOULOMB'
  | 'PLURAL_MICROCOULOMB'
  | 'PLURAL_NANOCOULOMB'
  | 'PLURAL_PICOCOULOMB';

export const chargeTranslations: Record<ChargeSingularTranslationKey | ChargePluralTranslationKey, string> = {
  [ChargeTranslationEnum.SINGULAR_COULOMB]: 'Coulomb',
  [ChargeTranslationEnum.SINGULAR_MILLICOULOMB]: 'Millicoulomb',
  [ChargeTranslationEnum.SINGULAR_MICROCOULOMB]: 'Microcoulomb',
  [ChargeTranslationEnum.SINGULAR_NANOCOULOMB]: 'Nanocoulomb',
  [ChargeTranslationEnum.SINGULAR_PICOCOULOMB]: 'Picocoulomb',
  [ChargeTranslationEnum.PLURAL_COULOMB]: 'Coulombs',
  [ChargeTranslationEnum.PLURAL_MILLICOULOMB]: 'Millicoulombs',
  [ChargeTranslationEnum.PLURAL_MICROCOULOMB]: 'Microcoulombs',
  [ChargeTranslationEnum.PLURAL_NANOCOULOMB]: 'Nanocoulombs',
  [ChargeTranslationEnum.PLURAL_PICOCOULOMB]: 'Picocoulombs'
};
