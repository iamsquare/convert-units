import convert from '../../convert';
import { Converter } from '../../converter';
import reactivePower, { ReactivePowerEnum } from '../reactivePower';

const converter = new Converter({ measuresData: { reactivePower } });

test('VAR to VAR', () => {
  expect(convert(converter, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)).toBe(1);
});

test('mVAR to mVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1);
});

test('kVAR to kVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1);
});

test('MVAR to MVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1);
});

test('GVAR to GVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1);
});

test('VAR to mVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e3);
});

test('VAR to kVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e-3);
});

test('VAR to MVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e-6);
});

test('VAR to GVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e-9);
});

test('GVAR to mVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.GIGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e12);
});

test('MVAR to mVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.MEGAVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e9);
});

test('kVAR to mVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e6);
});

test('mVAR to kVAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e-6);
});

test('mVAR to VAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.MILLIVOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e-3);
});

test('kVAR to VAR', () => {
  expect(
    convert(converter, ReactivePowerEnum.KILOVOLT_AMPERE_REACTIVE, ReactivePowerEnum.VOLT_AMPERE_REACTIVE, 1)
  ).toBe(1e3);
});
