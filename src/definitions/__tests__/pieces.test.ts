import convert from '../../convert';
import { Converter } from '../../converter';
import pieces, { PiecesEnum } from '../pieces';

const converter = new Converter({ measuresData: { pieces } });

test('bk-doz to pcs', () => {
  expect(convert(converter, PiecesEnum.BAKERS_DOZEN, PiecesEnum.PIECE, 1)).toBe(13);
});

test('cp to pcs', () => {
  expect(convert(converter, PiecesEnum.COUPLE, PiecesEnum.PIECE, 1)).toBe(2);
});

test('doz-doz to pcs', () => {
  expect(convert(converter, PiecesEnum.DOZEN_DOZEN, PiecesEnum.PIECE, 1)).toBe(144);
});

test('doz to pcs', () => {
  expect(convert(converter, PiecesEnum.DOZEN, PiecesEnum.PIECE, 1)).toBe(12);
});

test('gr-gr to pcs', () => {
  expect(convert(converter, PiecesEnum.GREAT_GROSS, PiecesEnum.PIECE, 1)).toBe(1728);
});

test('gros to pcs', () => {
  expect(convert(converter, PiecesEnum.GROSS, PiecesEnum.PIECE, 1)).toBe(144);
});

test('half-dozen to pcs', () => {
  expect(convert(converter, PiecesEnum.HALF_DOZEN, PiecesEnum.PIECE, 1)).toBe(6);
});

test('long-hundred to pcs', () => {
  expect(convert(converter, PiecesEnum.LONG_HUNDRED, PiecesEnum.PIECE, 1)).toBe(120);
});

test('ream to pcs', () => {
  expect(convert(converter, PiecesEnum.REAM, PiecesEnum.PIECE, 1)).toBe(500);
});

test('scores to pcs', () => {
  expect(convert(converter, PiecesEnum.SCORES, PiecesEnum.PIECE, 1)).toBe(20);
});

test('sm-gr to pcs', () => {
  expect(convert(converter, PiecesEnum.SMALL_GROSS, PiecesEnum.PIECE, 1)).toBe(120);
});

test('trio to pcs', () => {
  expect(convert(converter, PiecesEnum.TRIO, PiecesEnum.PIECE, 1)).toBe(3);
});
