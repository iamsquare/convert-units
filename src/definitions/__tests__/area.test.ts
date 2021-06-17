import convert from '../../convert';
import { Converter } from '../../converter';
import area, { ImperialAreaEnum, MetricAreaEnum } from '../area';

const converter = new Converter({ measuresData: { area } });

test('ft2 to ft2', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_FOOT, ImperialAreaEnum.SQUARE_FOOT, 1)).toBe(1);
});

test('ft2 to in2', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_FOOT, ImperialAreaEnum.SQUARE_INCH, 1)).toBe(144);
});

test('in2 to ft2', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_INCH, ImperialAreaEnum.SQUARE_FOOT, 1)).toBe(1 / 144);
});

test('ft2 to ac', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_FOOT, ImperialAreaEnum.ACRE, 1)).toBe(1 / 43560);
});

test('ac to ft2', () => {
  expect(convert(converter, ImperialAreaEnum.ACRE, ImperialAreaEnum.SQUARE_FOOT, 1)).toBe(43560);
});

test('ft2 to mi2', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_FOOT, ImperialAreaEnum.SQUARE_MILE, 1)).toBe(1 / 27878400);
});

test('mi2 to ft2', () => {
  expect(convert(converter, ImperialAreaEnum.SQUARE_MILE, ImperialAreaEnum.SQUARE_FOOT, 1)).toBe(27878400);
});

test('m2 to m2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_METER, MetricAreaEnum.SQUARE_METER, 1)).toBe(1);
});

test('m2 to cm2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_METER, MetricAreaEnum.SQUARE_CENTIMETER, 1)).toBe(1e4);
});

test('cm2 to m2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_CENTIMETER, MetricAreaEnum.SQUARE_METER, 1)).toBe(1e-4);
});

test('m2 to mm2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_METER, MetricAreaEnum.SQUARE_MILLIMETER, 1)).toBe(1e6);
});

test('ha to m2', () => {
  expect(convert(converter, MetricAreaEnum.HECTARE, MetricAreaEnum.SQUARE_METER, 1)).toBe(1e4);
});

test('km2 to m2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_KILOMETER, MetricAreaEnum.SQUARE_METER, 1)).toBe(1e6);
});

test('m2 to ft2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_METER, ImperialAreaEnum.SQUARE_FOOT, 1)).toBeCloseTo(10.7639);
});

test('mm2 to ft2', () => {
  expect(convert(converter, MetricAreaEnum.SQUARE_MILLIMETER, ImperialAreaEnum.SQUARE_FOOT, 1)).toBeCloseTo(1.07639e-5);
});
