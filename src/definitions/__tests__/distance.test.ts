import convert from '../../convert';
import { Converter } from '../../converter';
import distance, { ImperialDistanceEnum, MetricDistanceEnum } from '../distance';

const converter = new Converter({ measuresData: { distance } });

test('ft to ft', () => {
  expect(convert(converter, ImperialDistanceEnum.FOOT, ImperialDistanceEnum.FOOT, 1)).toBe(1);
});

test('ft to ft-us', () => {
  expect(convert(converter, ImperialDistanceEnum.FOOT, ImperialDistanceEnum.US_SURVEY_FOOT, 1)).toBeCloseTo(0.999998);
});

test('ft-us to ft', () => {
  expect(convert(converter, ImperialDistanceEnum.US_SURVEY_FOOT, ImperialDistanceEnum.FOOT, 1)).toBeCloseTo(1.000002);
});

test('in to in', () => {
  expect(convert(converter, ImperialDistanceEnum.INCH, ImperialDistanceEnum.INCH, 1)).toBe(1);
});

test('ft to in', () => {
  expect(convert(converter, ImperialDistanceEnum.FOOT, ImperialDistanceEnum.INCH, 1)).toBe(12);
});

test('in to ft', () => {
  expect(convert(converter, ImperialDistanceEnum.INCH, ImperialDistanceEnum.FOOT, 1)).toBe(1 / 12);
});

test('ft to mi', () => {
  expect(convert(converter, ImperialDistanceEnum.FOOT, ImperialDistanceEnum.MILE, 1)).toBe(1 / 5280);
});

test('mi to ft', () => {
  expect(convert(converter, ImperialDistanceEnum.MILE, ImperialDistanceEnum.FOOT, 1)).toBe(5280);
});

test('nMi to mi', () => {
  expect(convert(converter, ImperialDistanceEnum.NAUTICAL_MILE, ImperialDistanceEnum.MILE, 1)).toBeCloseTo(1.15078);
});

test('m to m', () => {
  expect(convert(converter, MetricDistanceEnum.METER, MetricDistanceEnum.METER, 1)).toBe(1);
});

test('m to cm', () => {
  expect(convert(converter, MetricDistanceEnum.METER, MetricDistanceEnum.CENTIMETER, 1)).toBe(1e2);
});

test('cm to m', () => {
  expect(convert(converter, MetricDistanceEnum.CENTIMETER, MetricDistanceEnum.METER, 1)).toBe(1e-2);
});

test('m to mm', () => {
  expect(convert(converter, MetricDistanceEnum.METER, MetricDistanceEnum.MILLIMETER, 1)).toBe(1e3);
});

test('km to m', () => {
  expect(convert(converter, MetricDistanceEnum.KILOMETER, MetricDistanceEnum.METER, 1)).toBe(1e3);
});

test('m to ft', () => {
  expect(convert(converter, MetricDistanceEnum.METER, ImperialDistanceEnum.FOOT, 1)).toBeCloseTo(3.28084);
});

test('m to ft-us', () => {
  expect(convert(converter, MetricDistanceEnum.METER, ImperialDistanceEnum.US_SURVEY_FOOT, 1)).toBeCloseTo(3.28084);
});

test('mm to ft', () => {
  expect(convert(converter, MetricDistanceEnum.MILLIMETER, ImperialDistanceEnum.FOOT, 1)).toBeCloseTo(0.00328084);
});

test('nMi to m', () => {
  expect(convert(converter, ImperialDistanceEnum.NAUTICAL_MILE, MetricDistanceEnum.METER, 1)).toBeCloseTo(1852);
});

test('km to nMi', () => {
  expect(convert(converter, MetricDistanceEnum.KILOMETER, ImperialDistanceEnum.NAUTICAL_MILE, 1)).toBeCloseTo(
    0.539956803
  );
});

test('fathom to m', () => {
  expect(convert(converter, ImperialDistanceEnum.FATHOM, MetricDistanceEnum.METER, 1)).toBeCloseTo(1.8288);
});

test('nm to nm', () => {
  expect(convert(converter, MetricDistanceEnum.NANOMETER, MetricDistanceEnum.NANOMETER, 1)).toBe(1);
});

test('nm to m', () => {
  expect(convert(converter, MetricDistanceEnum.NANOMETER, MetricDistanceEnum.METER, 1)).toBe(1e-9);
});

test('μm to μm', () => {
  expect(convert(converter, MetricDistanceEnum.MICROMETER, MetricDistanceEnum.MICROMETER, 1)).toBe(1);
});

test('μm to m', () => {
  expect(convert(converter, MetricDistanceEnum.MICROMETER, MetricDistanceEnum.METER, 1)).toBe(1e-6);
});
