import { convert } from '../..';
import { CurrentEnum } from '../current';

test('A to A', () => {
  expect(convert(CurrentEnum.AMPERE, CurrentEnum.AMPERE, 1)).toBe(1);
});

test('mA to mA', () => {
  expect(convert(CurrentEnum.MILLIAMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1);
});

test('kA to kA', () => {
  expect(convert(CurrentEnum.KILOAMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1);
});

test('A to mA', () => {
  expect(convert(CurrentEnum.AMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1e3);
});

test('A to kA', () => {
  expect(convert(CurrentEnum.AMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1e-3);
});

test('kA to mA', () => {
  expect(convert(CurrentEnum.KILOAMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1e6);
});

test('mA to kA', () => {
  expect(convert(CurrentEnum.MILLIAMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1e-6);
});

test('mA to A', () => {
  expect(convert(CurrentEnum.MILLIAMPERE, CurrentEnum.AMPERE, 1)).toBe(1e-3);
});

test('kA to A', () => {
  expect(convert(CurrentEnum.KILOAMPERE, CurrentEnum.AMPERE, 1)).toBe(1e3);
});
