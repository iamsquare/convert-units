export enum PiecesTranslationEnum {
  SINGULAR_PIECE = 'SINGULAR_PIECE',
  SINGULAR_BAKERS_DOZEN = 'SINGULAR_BAKERS_DOZEN',
  SINGULAR_COUPLE = 'SINGULAR_COUPLE',
  SINGULAR_DOZEN_DOZEN = 'SINGULAR_DOZEN_DOZEN',
  SINGULAR_PIECE_DOZEN = 'SINGULAR_PIECE_DOZEN',
  SINGULAR_GREAT_GROSS = 'SINGULAR_GREAT_GROSS',
  SINGULAR_GROSS = 'SINGULAR_GROSS',
  SINGULAR_SMALL_GROSS = 'SINGULAR_SMALL_GROSS',
  SINGULAR_HALF_DOZEN = 'SINGULAR_HALF_DOZEN',
  SINGULAR_LONG_HUNDRED = 'SINGULAR_LONG_HUNDRED',
  SINGULAR_REAM = 'SINGULAR_REAM',
  SINGULAR_SCORES = 'SINGULAR_SCORES',
  SINGULAR_TRIO = 'SINGULAR_TRIO',
  PLURAL_PIECE = 'PLURAL_PIECE',
  PLURAL_BAKERS_DOZEN = 'PLURAL_BAKERS_DOZEN',
  PLURAL_COUPLE = 'PLURAL_COUPLE',
  PLURAL_DOZEN_DOZEN = 'PLURAL_DOZEN_DOZEN',
  PLURAL_PIECE_DOZEN = 'PLURAL_PIECE_DOZEN',
  PLURAL_GREAT_GROSS = 'PLURAL_GREAT_GROSS',
  PLURAL_GROSS = 'PLURAL_GROSS',
  PLURAL_SMALL_GROSS = 'PLURAL_SMALL_GROSS',
  PLURAL_HALF_DOZEN = 'PLURAL_HALF_DOZEN',
  PLURAL_LONG_HUNDRED = 'PLURAL_LONG_HUNDRED',
  PLURAL_REAM = 'PLURAL_REAM',
  PLURAL_SCORES = 'PLURAL_SCORES',
  PLURAL_TRIO = 'PLURAL_TRIO'
}

export type PiecesSingularTranslationKey =
  | 'SINGULAR_PIECE'
  | 'SINGULAR_BAKERS_DOZEN'
  | 'SINGULAR_COUPLE'
  | 'SINGULAR_DOZEN_DOZEN'
  | 'SINGULAR_PIECE_DOZEN'
  | 'SINGULAR_GREAT_GROSS'
  | 'SINGULAR_GROSS'
  | 'SINGULAR_SMALL_GROSS'
  | 'SINGULAR_HALF_DOZEN'
  | 'SINGULAR_LONG_HUNDRED'
  | 'SINGULAR_REAM'
  | 'SINGULAR_SCORES'
  | 'SINGULAR_TRIO';

export type PiecesPluralTranslationKey =
  | 'PLURAL_PIECE'
  | 'PLURAL_BAKERS_DOZEN'
  | 'PLURAL_COUPLE'
  | 'PLURAL_DOZEN_DOZEN'
  | 'PLURAL_PIECE_DOZEN'
  | 'PLURAL_GREAT_GROSS'
  | 'PLURAL_GROSS'
  | 'PLURAL_SMALL_GROSS'
  | 'PLURAL_HALF_DOZEN'
  | 'PLURAL_LONG_HUNDRED'
  | 'PLURAL_REAM'
  | 'PLURAL_SCORES'
  | 'PLURAL_TRIO';

export const piecesTranslations: Record<PiecesSingularTranslationKey | PiecesPluralTranslationKey, string> = {
  [PiecesTranslationEnum.SINGULAR_PIECE]: 'Piece',
  [PiecesTranslationEnum.SINGULAR_BAKERS_DOZEN]: 'Bakers Dozen',
  [PiecesTranslationEnum.SINGULAR_COUPLE]: 'Couple',
  [PiecesTranslationEnum.SINGULAR_PIECE_DOZEN]: 'Dozen',
  [PiecesTranslationEnum.SINGULAR_DOZEN_DOZEN]: 'Dozen Dozen',
  [PiecesTranslationEnum.SINGULAR_GREAT_GROSS]: 'Great Gross',
  [PiecesTranslationEnum.SINGULAR_GROSS]: 'Gross',
  [PiecesTranslationEnum.SINGULAR_SMALL_GROSS]: 'Small Gross',
  [PiecesTranslationEnum.SINGULAR_HALF_DOZEN]: 'Half Dozen',
  [PiecesTranslationEnum.SINGULAR_LONG_HUNDRED]: 'Long Hundred',
  [PiecesTranslationEnum.SINGULAR_REAM]: 'Reams',
  [PiecesTranslationEnum.SINGULAR_SCORES]: 'Scores',
  [PiecesTranslationEnum.SINGULAR_TRIO]: 'Trio',
  [PiecesTranslationEnum.PLURAL_PIECE]: 'Pieces',
  [PiecesTranslationEnum.PLURAL_BAKERS_DOZEN]: 'Bakers Dozen',
  [PiecesTranslationEnum.PLURAL_COUPLE]: 'Couples',
  [PiecesTranslationEnum.PLURAL_PIECE_DOZEN]: 'Dozens',
  [PiecesTranslationEnum.PLURAL_DOZEN_DOZEN]: 'Dozen Dozen',
  [PiecesTranslationEnum.PLURAL_GREAT_GROSS]: 'Great Gross',
  [PiecesTranslationEnum.PLURAL_GROSS]: 'Gross',
  [PiecesTranslationEnum.PLURAL_SMALL_GROSS]: 'Small Gross',
  [PiecesTranslationEnum.PLURAL_HALF_DOZEN]: 'Half Dozen',
  [PiecesTranslationEnum.PLURAL_LONG_HUNDRED]: 'Long Hundred',
  [PiecesTranslationEnum.PLURAL_REAM]: 'Reams',
  [PiecesTranslationEnum.PLURAL_SCORES]: 'Scores',
  [PiecesTranslationEnum.PLURAL_TRIO]: 'Trio'
};
