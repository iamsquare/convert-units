import { PiecesTranslationEnum, translationModule } from '../i18n';
import { Unit, UnitDefinition } from '../type';
import { PiecesUnit } from './type';

export enum PiecesEnum {
  PIECE = 'pcs',
  BAKERS_DOZEN = 'bk-doz',
  COUPLE = 'cp',
  DOZEN_DOZEN = 'doz-doz',
  DOZEN = 'doz',
  GREAT_GROSS = 'gr-gr',
  GROSS = 'gros',
  SMALL_GROSS = 'sm-gr',
  HALF_DOZEN = 'half-dozen',
  LONG_HUNDRED = 'long-hundred',
  REAM = 'ream',
  SCORES = 'scores',
  TRIO = 'trio'
}

const other: Record<PiecesUnit, Unit> = {
  [PiecesEnum.PIECE]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_PIECE),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_PIECE)
    },
    anchor: 1
  },
  [PiecesEnum.BAKERS_DOZEN]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_BAKERS_DOZEN),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_BAKERS_DOZEN)
    },
    anchor: 13
  },
  [PiecesEnum.COUPLE]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_COUPLE),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_COUPLE)
    },
    anchor: 2
  },
  [PiecesEnum.DOZEN_DOZEN]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_DOZEN_DOZEN),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_DOZEN_DOZEN)
    },
    anchor: 144
  },
  [PiecesEnum.DOZEN]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_DOZEN),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_DOZEN)
    },
    anchor: 12
  },
  [PiecesEnum.GREAT_GROSS]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_GREAT_GROSS),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_GREAT_GROSS)
    },
    anchor: 1728
  },
  [PiecesEnum.GROSS]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_GROSS),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_GROSS)
    },
    anchor: 144
  },
  [PiecesEnum.HALF_DOZEN]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_HALF_DOZEN),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_HALF_DOZEN)
    },
    anchor: 6
  },
  [PiecesEnum.LONG_HUNDRED]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_LONG_HUNDRED),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_LONG_HUNDRED)
    },
    anchor: 120
  },
  [PiecesEnum.REAM]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_REAM),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_REAM)
    },
    anchor: 500
  },
  [PiecesEnum.SCORES]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_SCORES),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_SCORES)
    },
    anchor: 20
  },
  [PiecesEnum.SMALL_GROSS]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_SMALL_GROSS),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_SMALL_GROSS)
    },
    anchor: 120
  },
  [PiecesEnum.TRIO]: {
    name: {
      singular: translationModule.getTranslationByKey(PiecesTranslationEnum.SINGULAR_TRIO),
      plural: translationModule.getTranslationByKey(PiecesTranslationEnum.PLURAL_TRIO)
    },
    anchor: 3
  }
};

const piecesExport: UnitDefinition<'other', PiecesUnit> = {
  systems: {
    other
  }
};

export default piecesExport;
