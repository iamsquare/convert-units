import { EachTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { EachUnit } from './type';

export enum EachEnum {
  EACH = 'ea',
  DOZEN = 'dz'
}

const other: Record<EachUnit, Unit> = {
  [EachEnum.EACH]: {
    name: {
      singular: translationModule.getTranslationByKey(EachTranslationEnum.SINGULAR_EACH),
      plural: translationModule.getTranslationByKey(EachTranslationEnum.PLURAL_EACH)
    },
    anchor: 1
  },
  [EachEnum.DOZEN]: {
    name: {
      singular: translationModule.getTranslationByKey(EachTranslationEnum.SINGULAR_DOZEN),
      plural: translationModule.getTranslationByKey(EachTranslationEnum.PLURAL_DOZEN)
    },
    anchor: 12
  }
};

const each: UnitDefinition<'other', EachUnit> = {
  systems: {
    other
  }
};

export default each;
