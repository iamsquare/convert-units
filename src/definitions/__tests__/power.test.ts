import { convert } from '../..';
import { ImperialPowerEnum, MetricPowerEnum } from '../power';

test('W to W', () => {
  expect(convert(MetricPowerEnum.WATT, MetricPowerEnum.WATT, 1)).toBe(1);
});

test('mW to mW', () => {
  expect(convert(MetricPowerEnum.MILLIWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1);
});

test('kW to kW', () => {
  expect(convert(MetricPowerEnum.KILOWATT, MetricPowerEnum.KILOWATT, 1)).toBe(1);
});

test('MW to MW', () => {
  expect(convert(MetricPowerEnum.MEGAWATT, MetricPowerEnum.MEGAWATT, 1)).toBe(1);
});

test('GW to GW', () => {
  expect(convert(MetricPowerEnum.GIGAWATT, MetricPowerEnum.GIGAWATT, 1)).toBe(1);
});

test('PS to PS', () => {
  expect(convert(MetricPowerEnum.HORSE_POWER, MetricPowerEnum.HORSE_POWER, 1)).toBe(1);
});

test('Btu/s to Btu/s', () => {
  expect(convert(ImperialPowerEnum.BTU_PER_SECOND, ImperialPowerEnum.BTU_PER_SECOND, 1)).toBe(1);
});

test('ft-lb/s to ft-lb/s', () => {
  expect(convert(ImperialPowerEnum.FOOT_POUND_PER_SECOND, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(1);
});

test('hp to hp', () => {
  expect(convert(ImperialPowerEnum.HORSE_POWER, ImperialPowerEnum.HORSE_POWER, 1)).toBe(1);
});

test('W to mW', () => {
  expect(convert(MetricPowerEnum.WATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e3);
});

test('W to kW', () => {
  expect(convert(MetricPowerEnum.WATT, MetricPowerEnum.KILOWATT, 1)).toBe(1e-3);
});

test('W to MW', () => {
  expect(convert(MetricPowerEnum.WATT, MetricPowerEnum.MEGAWATT, 1)).toBe(1e-6);
});

test('W to GW', () => {
  expect(convert(MetricPowerEnum.WATT, MetricPowerEnum.GIGAWATT, 1)).toBe(1e-9);
});

test('GW to mW', () => {
  expect(convert(MetricPowerEnum.GIGAWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e12);
});

test('MW to mW', () => {
  expect(convert(MetricPowerEnum.MEGAWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e9);
});

test('kW to mW', () => {
  expect(convert(MetricPowerEnum.KILOWATT, MetricPowerEnum.MILLIWATT, 1)).toBe(1e6);
});

test('mW to kW', () => {
  expect(convert(MetricPowerEnum.MILLIWATT, MetricPowerEnum.KILOWATT, 1)).toBe(1e-6);
});

test('mW to W', () => {
  expect(convert(MetricPowerEnum.MILLIWATT, MetricPowerEnum.WATT, 1)).toBe(1e-3);
});

test('kW to W', () => {
  expect(convert(MetricPowerEnum.KILOWATT, MetricPowerEnum.WATT, 1)).toBe(1e3);
});

test('PS to W', () => {
  expect(convert(MetricPowerEnum.HORSE_POWER, MetricPowerEnum.WATT, 1)).toBe(735.49875);
});

test('hp to ft-lb/s', () => {
  expect(convert(ImperialPowerEnum.HORSE_POWER, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(550);
});

test('Btu/s to ft-lb/s', () => {
  expect(convert(ImperialPowerEnum.BTU_PER_SECOND, ImperialPowerEnum.FOOT_POUND_PER_SECOND, 1)).toBe(778.16937);
});
