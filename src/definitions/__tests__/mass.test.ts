import convert from '../../convert';
import { Converter } from '../../converter';
import mass, { ImperialMassEnum, MetricMassEnum } from '../mass';

const converter = new Converter({ measuresData: { mass } });

test('lb to lb', () => {
  expect(convert(converter, ImperialMassEnum.POUND, ImperialMassEnum.POUND, 1)).toBe(1);
});

test('lb to oz', () => {
  expect(convert(converter, ImperialMassEnum.POUND, ImperialMassEnum.OUNCE, 1)).toBe(16);
});

test('oz to lb', () => {
  expect(convert(converter, ImperialMassEnum.OUNCE, ImperialMassEnum.POUND, 1)).toBe(1 / 16);
});

test('oz to oz', () => {
  expect(convert(converter, ImperialMassEnum.OUNCE, ImperialMassEnum.OUNCE, 6)).toBe(6);
});

test('kg to kg', () => {
  expect(convert(converter, MetricMassEnum.KILOGRAM, MetricMassEnum.KILOGRAM, 1)).toBe(1);
});

test('kg to g', () => {
  expect(convert(converter, MetricMassEnum.KILOGRAM, MetricMassEnum.GRAM, 1)).toBe(1e3);
});

test('g to kg', () => {
  expect(convert(converter, MetricMassEnum.GRAM, MetricMassEnum.KILOGRAM, 1)).toBe(1e-3);
});

test('g to g', () => {
  expect(convert(converter, MetricMassEnum.GRAM, MetricMassEnum.GRAM, 1)).toBe(1);
});

test('lb to kg', () => {
  expect(convert(converter, ImperialMassEnum.POUND, MetricMassEnum.KILOGRAM, 1)).toBeCloseTo(0.453592);
});

test('g to lb', () => {
  expect(convert(converter, MetricMassEnum.GRAM, ImperialMassEnum.POUND, 1)).toBeCloseTo(0.00220462);
});

test('lb to g', () => {
  expect(convert(converter, ImperialMassEnum.POUND, MetricMassEnum.GRAM, 3)).toBeCloseTo(1360.78);
});
