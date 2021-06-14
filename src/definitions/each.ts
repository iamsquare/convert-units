import { EachTranslationEnum } from '../i18n';
import { MeasureDefinition, Unit } from '../type';
import { EachUnit } from './type';

export enum EachEnum {
  EACH = 'ea',
  DOZEN = 'dz'
}

const other: Record<EachUnit, Unit> = {
  [EachEnum.EACH]: {
    name: {
      singular: EachTranslationEnum.SINGULAR_EACH,
      plural: EachTranslationEnum.PLURAL_EACH
    },
    anchor: 1
  },
  [EachEnum.DOZEN]: {
    name: {
      singular: EachTranslationEnum.SINGULAR_DOZEN,
      plural: EachTranslationEnum.PLURAL_DOZEN
    },
    anchor: 12
  }
};

export type EachSystems = 'other';

const each: MeasureDefinition<EachSystems, EachUnit> = {
  systems: {
    other
  }
};

export default each;
