import convert from '../../convert';
import { Converter } from '../../converter';
import each, { EachEnum } from '../each';

const converter = new Converter({ measuresData: { each } });

test('ea to ea', () => {
  expect(convert(converter, EachEnum.EACH, EachEnum.EACH, 1)).toBe(1);
});

test('dz to ea', () => {
  expect(convert(converter, EachEnum.DOZEN, EachEnum.EACH, 1)).toBe(12);
});

test('ea to dz', () => {
  expect(convert(converter, EachEnum.EACH, EachEnum.DOZEN, 12)).toBe(1);
});
