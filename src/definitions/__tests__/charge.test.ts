import convert from '../../convert';
import { Converter } from '../../converter';
import charge, { ChargeEnum } from '../charge';

const converter = new Converter({ measuresData: { charge } });

test('Co to Co', () => {
  expect(convert(converter, ChargeEnum.COULOMB, ChargeEnum.COULOMB, 1)).toBe(1);
});

test('Co to mC', () => {
  expect(convert(converter, ChargeEnum.COULOMB, ChargeEnum.MILLICOULOMB, 1)).toBe(1e3);
});

test('mC to Co', () => {
  expect(convert(converter, ChargeEnum.MILLICOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-3);
});

test('Co to μC', () => {
  expect(convert(converter, ChargeEnum.COULOMB, ChargeEnum.MICROCOULOMB, 1)).toBe(1e6);
});

test('μC to Co', () => {
  expect(convert(converter, ChargeEnum.MICROCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-6);
});

test('c to nC', () => {
  expect(convert(converter, ChargeEnum.COULOMB, ChargeEnum.NANOCOULOMB, 1)).toBeCloseTo(1e9);
});

test('nC to Co', () => {
  expect(convert(converter, ChargeEnum.NANOCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-9);
});

test('Co to pC', () => {
  expect(convert(converter, ChargeEnum.COULOMB, ChargeEnum.PICOCOULOMB, 1)).toBe(1e12);
});

test('pC to Co', () => {
  expect(convert(converter, ChargeEnum.PICOCOULOMB, ChargeEnum.COULOMB, 1)).toBe(1e-12);
});
