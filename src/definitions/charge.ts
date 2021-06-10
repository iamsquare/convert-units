import { ChargeTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
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
      singular: translationModule.getTranslationByKey(ChargeTranslationEnum.SINGULAR_COULOMB),
      plural: translationModule.getTranslationByKey(ChargeTranslationEnum.PLURAL_COULOMB)
    },
    anchor: 1
  },
  [ChargeEnum.MILLICOULOMB]: {
    name: {
      singular: translationModule.getTranslationByKey(ChargeTranslationEnum.SINGULAR_MILLICOULOMB),
      plural: translationModule.getTranslationByKey(ChargeTranslationEnum.PLURAL_MILLICOULOMB)
    },
    anchor: 1e-3
  },
  [ChargeEnum.MICROCOULOMB]: {
    name: {
      singular: translationModule.getTranslationByKey(ChargeTranslationEnum.SINGULAR_MICROCOULOMB),
      plural: translationModule.getTranslationByKey(ChargeTranslationEnum.PLURAL_MICROCOULOMB)
    },
    anchor: 1e-6
  },
  [ChargeEnum.NANOCOULOMB]: {
    name: {
      singular: translationModule.getTranslationByKey(ChargeTranslationEnum.SINGULAR_NANOCOULOMB),
      plural: translationModule.getTranslationByKey(ChargeTranslationEnum.PLURAL_NANOCOULOMB)
    },
    anchor: 1e-9
  },
  [ChargeEnum.PICOCOULOMB]: {
    name: {
      singular: translationModule.getTranslationByKey(ChargeTranslationEnum.SINGULAR_PICOCOULOMB),
      plural: translationModule.getTranslationByKey(ChargeTranslationEnum.PLURAL_PICOCOULOMB)
    },
    anchor: 1e-12
  }
};

const charge: UnitDefinition<'metric', ChargeUnit> = {
  systems: {
    metric
  }
};

export default charge;
