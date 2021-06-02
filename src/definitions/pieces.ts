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
    anchor: 1
  },
  [PiecesEnum.BAKERS_DOZEN]: {
    name: {
      singular: 'Bakers Dozen',
      plural: 'Bakers Dozen'
    },
    anchor: 13
  },
  [PiecesEnum.COUPLE]: {
    name: {
      singular: 'Couple',
      plural: 'Couples'
    },
    anchor: 2
  },
  [PiecesEnum.DOZEN_DOZEN]: {
    name: {
      singular: 'Dozen Dozen',
      plural: 'Dozen Dozen'
    },
    anchor: 144
  },
  [PiecesEnum.DOZEN]: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens'
    },
    anchor: 12
  },
  [PiecesEnum.GREAT_GROSS]: {
    name: {
      singular: 'Great Gross',
      plural: 'Great Gross'
    },
    anchor: 1728
  },
  [PiecesEnum.GROSS]: {
    name: {
      singular: 'Gross',
      plural: 'Gross'
    },
    anchor: 144
  },
  [PiecesEnum.HALF_DOZEN]: {
    name: {
      singular: 'Half Dozen',
      plural: 'Half Dozen'
    },
    anchor: 6
  },
  [PiecesEnum.LONG_HUNDRED]: {
    name: {
      singular: 'Long Hundred',
      plural: 'Long Hundred'
    },
    anchor: 120
  },
  [PiecesEnum.REAM]: {
    name: {
      singular: 'Reams',
      plural: 'Reams'
    },
    anchor: 500
  },
  [PiecesEnum.SCORES]: {
    name: {
      singular: 'Scores',
      plural: 'Scores'
    },
    anchor: 20
  },
  [PiecesEnum.SMALL_GROSS]: {
    name: {
      singular: 'Small Gross',
      plural: 'Small Gross'
    },
    anchor: 120
  },
  [PiecesEnum.TRIO]: {
    name: {
      singular: 'Trio',
      plural: 'Trio'
    },
    anchor: 3
  }
};

const piecesExport = {
  systems: {
    pieces
  },
  anchors: {
    pieces: {
      unit: PiecesEnum.PIECE,
      ratio: 1
    }
  }
};

export default piecesExport;
