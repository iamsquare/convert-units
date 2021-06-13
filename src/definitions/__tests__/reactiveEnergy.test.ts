import convert from '../../convert';
import { Converter } from '../../converter';
import reactiveEnergy, { ReactiveEnergyEnum } from '../reactiveEnergy';

const converter = new Converter({ measuresData: { reactiveEnergy } });

test('VARh to VARh', () => {
  expect(
    convert(converter, ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR, 1)
  ).toBe(1);
});

test('mVARh to mVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1);
});

test('kVARh to kVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1);
});

test('MVARh to MVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1);
});

test('GVARh to GVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1);
});

test('VARh to mVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e3);
});

test('VARh to kVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e-3);
});

test('VARh to MVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e-6);
});

test('VARh to GVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e-9);
});

test('GVARh to mVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.GIGAVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e12);
});

test('MVARh to mVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.MEGAVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e9);
});

test('kVARh to mVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e6);
});

test('mVARh to kVARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e-6);
});

test('mVARh to VARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.MILLIVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e-3);
});

test('kVARh to VARh', () => {
  expect(
    convert(
      converter,
      ReactiveEnergyEnum.KILOVOLT_AMPERE_REACTIVE_HOUR,
      ReactiveEnergyEnum.VOLT_AMPERE_REACTIVE_HOUR,
      1
    )
  ).toBe(1e3);
});
