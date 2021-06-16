import { ChargeTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { ChargeUnit } from './type';

export enum ChargeEnum {
  COULOMB = 'c',
  MILLICOULOMB = 'mC',
  MICROCOULOMB = 'μC',
  NANOCOULOMB = 'nC',
  PICOCOULOMB = 'pC'
}

const metric: Record<ChargeUnit, Unit> = {
  [ChargeEnum.COULOMB]: {
    name: {
      singular: ChargeTranslationEnum.SINGULAR_COULOMB,
      plural: ChargeTranslationEnum.PLURAL_COULOMB
    },
    anchor: 1
  },
  [ChargeEnum.MILLICOULOMB]: {
    name: {
      singular: ChargeTranslationEnum.SINGULAR_MILLICOULOMB,
      plural: ChargeTranslationEnum.PLURAL_MILLICOULOMB
    },
    anchor: 1e-3
  },
  [ChargeEnum.MICROCOULOMB]: {
    name: {
      singular: ChargeTranslationEnum.SINGULAR_MICROCOULOMB,
      plural: ChargeTranslationEnum.PLURAL_MICROCOULOMB
    },
    anchor: 1e-6
  },
  [ChargeEnum.NANOCOULOMB]: {
    name: {
      singular: ChargeTranslationEnum.SINGULAR_NANOCOULOMB,
      plural: ChargeTranslationEnum.PLURAL_NANOCOULOMB
    },
    anchor: 1e-9
  },
  [ChargeEnum.PICOCOULOMB]: {
    name: {
      singular: ChargeTranslationEnum.SINGULAR_PICOCOULOMB,
      plural: ChargeTranslationEnum.PLURAL_PICOCOULOMB
    },
    anchor: 1e-12
  }
};

export type ChargeSystems = 'metric';

const charge: MeasureDefinition<ChargeSystems, ChargeUnit> = {
  systems: {
    metric
  }
};

export default charge;
