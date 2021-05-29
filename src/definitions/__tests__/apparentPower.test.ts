import { convert } from '../..';
import { ApparentPowerEnum } from '../apparentPower';

test('VA to VA', () => {
  expect(convert(ApparentPowerEnum.VOLT_AMPERE, ApparentPowerEnum.VOLT_AMPERE, 1)).toBe(1);
});

test('mVA to mVA', () => {
  expect(convert(ApparentPowerEnum.MILLIVOLT_AMPERE, ApparentPowerEnum.MILLIVOLT_AMPERE, 1)).toBe(1);
});

test('kVA to kVA', () => {
  expect(convert(ApparentPowerEnum.KILOVOLT_AMPERE, ApparentPowerEnum.KILOVOLT_AMPERE, 1)).toBe(1);
});

test('MVA to MVA', () => {
  expect(convert(ApparentPowerEnum.MEGAVOLT_AMPERE, ApparentPowerEnum.MEGAVOLT_AMPERE, 1)).toBe(1);
});

test('GVA to GVA', () => {
  expect(convert(ApparentPowerEnum.GIGAVOLT_AMPERE, ApparentPowerEnum.GIGAVOLT_AMPERE, 1)).toBe(1);
});

test('VA to mVA', () => {
  expect(convert(ApparentPowerEnum.VOLT_AMPERE, ApparentPowerEnum.MILLIVOLT_AMPERE, 1)).toBe(1e3);
});

test('VA to kVA', () => {
  expect(convert(ApparentPowerEnum.VOLT_AMPERE, ApparentPowerEnum.KILOVOLT_AMPERE, 1)).toBe(1e-3);
});

test('VA to MVA', () => {
  expect(convert(ApparentPowerEnum.VOLT_AMPERE, ApparentPowerEnum.MEGAVOLT_AMPERE, 1)).toBe(1e-6);
});

test('VA to GVA', () => {
  expect(convert(ApparentPowerEnum.VOLT_AMPERE, ApparentPowerEnum.GIGAVOLT_AMPERE, 1)).toBe(1e-9);
});

test('GVA to mVA', () => {
  expect(convert(ApparentPowerEnum.GIGAVOLT_AMPERE, ApparentPowerEnum.MILLIVOLT_AMPERE, 1)).toBe(1e12);
});

test('MVA to mVA', () => {
  expect(convert(ApparentPowerEnum.MEGAVOLT_AMPERE, ApparentPowerEnum.MILLIVOLT_AMPERE, 1)).toBe(1e9);
});

test('kVA to mVA', () => {
  expect(convert(ApparentPowerEnum.KILOVOLT_AMPERE, ApparentPowerEnum.MILLIVOLT_AMPERE, 1)).toBe(1e6);
});

test('mVA to kVA', () => {
  expect(convert(ApparentPowerEnum.MILLIVOLT_AMPERE, ApparentPowerEnum.KILOVOLT_AMPERE, 1)).toBe(1e-6);
});

test('mVA to VA', () => {
  expect(convert(ApparentPowerEnum.MILLIVOLT_AMPERE, ApparentPowerEnum.VOLT_AMPERE, 1)).toBe(1e-3);
});

test('kVA to VA', () => {
  expect(convert(ApparentPowerEnum.KILOVOLT_AMPERE, ApparentPowerEnum.VOLT_AMPERE, 1)).toBe(1e3);
});
