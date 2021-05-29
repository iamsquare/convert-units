import { Definition } from './type';
import { PiecesUnit } from './type/units.type';

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

const pieces = {
  [PiecesEnum.PIECE]: {
    name: {
      singular: 'Piece',
      plural: 'Pieces'
    },
    toAnchor: 1
  },
  [PiecesEnum.BAKERS_DOZEN]: {
    name: {
      singular: 'Bakers Dozen',
      plural: 'Bakers Dozen'
    },
    toAnchor: 13
  },
  [PiecesEnum.COUPLE]: {
    name: {
      singular: 'Couple',
      plural: 'Couples'
    },
    toAnchor: 2
  },
  [PiecesEnum.DOZEN_DOZEN]: {
    name: {
      singular: 'Dozen Dozen',
      plural: 'Dozen Dozen'
    },
    toAnchor: 144
  },
  [PiecesEnum.DOZEN]: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens'
    },
    toAnchor: 12
  },
  [PiecesEnum.GREAT_GROSS]: {
    name: {
      singular: 'Great Gross',
      plural: 'Great Gross'
    },
    toAnchor: 1728
  },
  [PiecesEnum.GROSS]: {
    name: {
      singular: 'Gross',
      plural: 'Gross'
    },
    toAnchor: 144
  },
  [PiecesEnum.HALF_DOZEN]: {
    name: {
      singular: 'Half Dozen',
      plural: 'Half Dozen'
    },
    toAnchor: 6
  },
  [PiecesEnum.LONG_HUNDRED]: {
    name: {
      singular: 'Long Hundred',
      plural: 'Long Hundred'
    },
    toAnchor: 120
  },
  [PiecesEnum.REAM]: {
    name: {
      singular: 'Reams',
      plural: 'Reams'
    },
    toAnchor: 500
  },
  [PiecesEnum.SCORES]: {
    name: {
      singular: 'Scores',
      plural: 'Scores'
    },
    toAnchor: 20
  },
  [PiecesEnum.SMALL_GROSS]: {
    name: {
      singular: 'Small Gross',
      plural: 'Small Gross'
    },
    toAnchor: 120
  },
  [PiecesEnum.TRIO]: {
    name: {
      singular: 'Trio',
      plural: 'Trio'
    },
    toAnchor: 3
  }
};

export default {
  systems: {
    pieces
  },
  anchors: {
    pieces: {
      unit: PiecesEnum.PIECE,
      ratio: 1
    }
  }
} as Definition<'pieces', PiecesUnit>;
