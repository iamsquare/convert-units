import { convert } from '../..';
import { VoltageEnum } from '../voltage';

test('V to V', () => {
  expect(convert(VoltageEnum.VOLT, VoltageEnum.VOLT, 1)).toBe(1);
});

test('mV to mV', () => {
  expect(convert(VoltageEnum.MILLIVOLT, VoltageEnum.MILLIVOLT, 1)).toBe(1);
});

test('kV to kV', () => {
  expect(convert(VoltageEnum.KILOVOLT, VoltageEnum.KILOVOLT, 1)).toBe(1);
});

test('V to mV', () => {
  expect(convert(VoltageEnum.VOLT, VoltageEnum.MILLIVOLT, 1)).toBe(1e3);
});

test('V to kV', () => {
  expect(convert(VoltageEnum.VOLT, VoltageEnum.KILOVOLT, 1)).toBe(1e-3);
});

test('kV to mV', () => {
  expect(convert(VoltageEnum.KILOVOLT, VoltageEnum.MILLIVOLT, 1)).toBe(1e6);
});

test('mV to kV', () => {
  expect(convert(VoltageEnum.MILLIVOLT, VoltageEnum.KILOVOLT, 1)).toBe(1e-6);
});

test('mV to V', () => {
  expect(convert(VoltageEnum.MILLIVOLT, VoltageEnum.VOLT, 1)).toBe(1e-3);
});

test('kV to V', () => {
  expect(convert(VoltageEnum.KILOVOLT, VoltageEnum.VOLT, 1)).toBe(1e3);
});
