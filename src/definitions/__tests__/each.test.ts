import { convert } from '../..';
import { EachEnum } from '../each';

test('ea to ea', () => {
  expect(convert(EachEnum.EACH, EachEnum.EACH, 1)).toBe(1);
});

test('dz to ea', () => {
  expect(convert(EachEnum.DOZEN, EachEnum.EACH, 1)).toBe(12);
});

test('ea to dz', () => {
  expect(convert(EachEnum.EACH, EachEnum.DOZEN, 12)).toBe(1);
});
