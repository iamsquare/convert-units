import { convert } from '../..';
import { ChargeEnum } from '../charge';

test('Co to Co', () => {
  expect(convert(ChargeEnum.COULOMB, ChargeEnum.COULOMB, 1)).toBe(1);
});

test('Co to mC', () => {
  expect(convert(ChargeEnum.COULOMB, ChargeEnum.MILLICOULOMB, 1)).toBe(1e3);
});

test('mC to Co', () => {
  expect(convert(ChargeEnum.MILLICOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-3);
});

test('Co to μC', () => {
  expect(convert(ChargeEnum.COULOMB, ChargeEnum.MICROCOULOMB, 1)).toBe(1e6);
});

test('μC to Co', () => {
  expect(convert(ChargeEnum.MICROCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-6);
});

test('c to nC', () => {
  expect(convert(ChargeEnum.COULOMB, ChargeEnum.NANOCOULOMB, 1)).toBeCloseTo(1e9);
});

test('nC to Co', () => {
  expect(convert(ChargeEnum.NANOCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-9);
});

test('Co to pC', () => {
  expect(convert(ChargeEnum.COULOMB, ChargeEnum.PICOCOULOMB, 1)).toBe(1e12);
});

test('pC to Co', () => {
  expect(convert(ChargeEnum.PICOCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-12);
});
