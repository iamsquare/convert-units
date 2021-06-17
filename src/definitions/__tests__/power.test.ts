import convert from '../../convert';
import { Converter } from '../../converter';
import power, { ImperialPowerEnum, MetricPowerEnum } from '../power';

const converter = new Converter({ measuresData: { power } });

test('W to W', () => {
  expect(convert(converter, MetricPowerEnum.WATT, MetricPowerEnum.WATT, 1)).toBe(1);
});

test('mW to mW', () => {
  expect(convert(converter, MetricPowerEnum.MILLIWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1);
});

test('kW to kW', () => {
  expect(convert(converter, MetricPowerEnum.KILOWATT, MetricPowerEnum.KILOWATT, 1)).toBe(1);
});

test('MW to MW', () => {
  expect(convert(converter, MetricPowerEnum.MEGAWATT, MetricPowerEnum.MEGAWATT, 1)).toBe(1);
});

test('GW to GW', () => {
  expect(convert(converter, MetricPowerEnum.GIGAWATT, MetricPowerEnum.GIGAWATT, 1)).toBe(1);
});

test('PS to PS', () => {
  expect(convert(converter, MetricPowerEnum.HORSE_POWER, MetricPowerEnum.HORSE_POWER, 1)).toBe(1);
});

test('Btu/s to Btu/s', () => {
  expect(convert(converter, ImperialPowerEnum.BTU_PER_SECOND, ImperialPowerEnum.BTU_PER_SECOND, 1)).toBe(1);
});

test('ft-lb/s to ft-lb/s', () => {
  expect(convert(converter, ImperialPowerEnum.FOOT_POUND_PER_SECOND, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(
    1
  );
});

test('hp to hp', () => {
  expect(convert(converter, ImperialPowerEnum.HORSE_POWER, ImperialPowerEnum.HORSE_POWER, 1)).toBe(1);
});

test('W to mW', () => {
  expect(convert(converter, MetricPowerEnum.WATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e3);
});

test('W to kW', () => {
  expect(convert(converter, MetricPowerEnum.WATT, MetricPowerEnum.KILOWATT, 1)).toBe(1e-3);
});

test('W to MW', () => {
  expect(convert(converter, MetricPowerEnum.WATT, MetricPowerEnum.MEGAWATT, 1)).toBe(1e-6);
});

test('W to GW', () => {
  expect(convert(converter, MetricPowerEnum.WATT, MetricPowerEnum.GIGAWATT, 1)).toBe(1e-9);
});

test('GW to mW', () => {
  expect(convert(converter, MetricPowerEnum.GIGAWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e12);
});

test('MW to mW', () => {
  expect(convert(converter, MetricPowerEnum.MEGAWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e9);
});

test('kW to mW', () => {
  expect(convert(converter, MetricPowerEnum.KILOWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e6);
});

test('mW to kW', () => {
  expect(convert(converter, MetricPowerEnum.MILLIWATT, MetricPowerEnum.KILOWATT, 1)).toBe(1e-6);
});

test('mW to W', () => {
  expect(convert(converter, MetricPowerEnum.MILLIWATT, MetricPowerEnum.WATT, 1)).toBe(1e-3);
});

test('kW to W', () => {
  expect(convert(converter, MetricPowerEnum.KILOWATT, MetricPowerEnum.WATT, 1)).toBe(1e3);
});

test('PS to W', () => {
  expect(convert(converter, MetricPowerEnum.HORSE_POWER, MetricPowerEnum.WATT, 1)).toBe(735.49875);
});

test('hp to ft-lb/s', () => {
  expect(convert(converter, ImperialPowerEnum.HORSE_POWER, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(550);
});

test('Btu/s to ft-lb/s', () => {
  expect(convert(converter, ImperialPowerEnum.BTU_PER_SECOND, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(
    778.16937
  );
});
