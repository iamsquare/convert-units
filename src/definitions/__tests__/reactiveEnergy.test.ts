import { convert } from '../..';
import { ReactiveEnergyEnum } from '../reactiveEnergy';

test('VARh to VARh', () => {
  expect(convert(ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, 1)).toBe(
    1
  );
});

test('mVARh to mVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1);
});

test('kVARh to kVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1);
});

test('MVARh to MVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1);
});

test('GVARh to GVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1);
});

test('VARh to mVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e3);
});

test('VARh to kVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e-3);
});

test('VARh to MVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e-6);
});

test('VARh to GVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e-9);
});

test('GVARh to mVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e12);
});

test('MVARh to mVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e9);
});

test('kVARh to mVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e6);
});

test('mVARh to kVARh', () => {
  expect(
    convert(ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e-6);
});

test('mVARh to VARh', () => {
  expect(
    convert(ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e-3);
});

test('kVARh to VARh', () => {
  expect(
    convert(ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1e3);
});
