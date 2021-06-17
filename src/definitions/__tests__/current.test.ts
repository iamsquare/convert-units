import convert from '../../convert';
import { Converter } from '../../converter';
import current, { CurrentEnum } from '../current';

const converter = new Converter({ measuresData: { current } });

test('A to A', () => {
  expect(convert(converter, CurrentEnum.AMPERE, CurrentEnum.AMPERE, 1)).toBe(1);
});

test('mA to mA', () => {
  expect(convert(converter, CurrentEnum.MILLIAMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1);
});

test('kA to kA', () => {
  expect(convert(converter, CurrentEnum.KILOAMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1);
});

test('A to mA', () => {
  expect(convert(converter, CurrentEnum.AMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1e3);
});

test('A to kA', () => {
  expect(convert(converter, CurrentEnum.AMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1e-3);
});

test('kA to mA', () => {
  expect(convert(converter, CurrentEnum.KILOAMPERE, CurrentEnum.MILLIAMPERE, 1)).toBe(1e6);
});

test('mA to kA', () => {
  expect(convert(converter, CurrentEnum.MILLIAMPERE, CurrentEnum.KILOAMPERE, 1)).toBe(1e-6);
});

test('mA to A', () => {
  expect(convert(converter, CurrentEnum.MILLIAMPERE, CurrentEnum.AMPERE, 1)).toBe(1e-3);
});

test('kA to A', () => {
  expect(convert(converter, CurrentEnum.KILOAMPERE, CurrentEnum.AMPERE, 1)).toBe(1e3);
});
