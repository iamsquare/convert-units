import convert from '../../convert';
import { Converter } from '../../converter';
import volume, { ImperialVolumeEnum, MetricVolumeEnum, SwedishVolumeEnum } from '../volume';

const converter = new Converter({ measuresData: { volume } });

test('l to l', () => {
  expect(convert(converter, MetricVolumeEnum.LITRE, MetricVolumeEnum.LITRE, 2)).toBe(2);
});

test('mm3 to l', () => {
  expect(convert(converter, MetricVolumeEnum.CUBIC_MILLIMETER, MetricVolumeEnum.LITRE, 1e6)).toBe(1);
});

test('cm3 to l', () => {
  expect(convert(converter, MetricVolumeEnum.CUBIC_CENTIMETER, MetricVolumeEnum.LITRE, 1e2)).toBe(0.1);
});

test('dl to l', () => {
  expect(convert(converter, MetricVolumeEnum.DECILITRE, MetricVolumeEnum.LITRE, 2)).toBe(0.2);
});

test('cl to l', () => {
  expect(convert(converter, MetricVolumeEnum.CENTILITRE, MetricVolumeEnum.LITRE, 25)).toBe(0.25);
});

test('ml to l', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, MetricVolumeEnum.LITRE, 1e2)).toBe(0.1);
});

test('m3 to l', () => {
  expect(convert(converter, MetricVolumeEnum.CUBIC_METER, MetricVolumeEnum.LITRE, 1)).toBe(1e3);
});

test('km3 to l', () => {
  expect(convert(converter, MetricVolumeEnum.CUBIC_KILOMETER, MetricVolumeEnum.LITRE, 1)).toBe(1e12);
});

test('l to ml', () => {
  expect(convert(converter, MetricVolumeEnum.LITRE, MetricVolumeEnum.MILLILITRE, 1)).toBe(1e3);
});

test('dl to ml', () => {
  expect(convert(converter, MetricVolumeEnum.DECILITRE, MetricVolumeEnum.MILLILITRE, 10)).toBe(1e3);
});

test('cl to ml', () => {
  expect(convert(converter, MetricVolumeEnum.CENTILITRE, MetricVolumeEnum.MILLILITRE, 100)).toBe(1e3);
});

test('ml to ml', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, MetricVolumeEnum.MILLILITRE, 1)).toBe(1);
});

test('msk to ml', () => {
  expect(convert(converter, SwedishVolumeEnum.MATSKED, MetricVolumeEnum.MILLILITRE, 2)).toBe(30);
});

test('tsk to ml', () => {
  expect(convert(converter, SwedishVolumeEnum.TESKED, MetricVolumeEnum.MILLILITRE, 3)).toBe(15);
});

test('krm to ml', () => {
  expect(convert(converter, SwedishVolumeEnum.KRYDDMATTET, MetricVolumeEnum.MILLILITRE, 13)).toBe(13);
});

test('kanna to l', () => {
  expect(convert(converter, SwedishVolumeEnum.KANNA, MetricVolumeEnum.LITRE, 2)).toBe(5.234);
});

test('kkp to ml', () => {
  expect(convert(converter, SwedishVolumeEnum.KAFFEKOPP, MetricVolumeEnum.MILLILITRE, 2)).toBe(3e2);
});

test('glas to ml', () => {
  expect(convert(converter, SwedishVolumeEnum.GLAS, MetricVolumeEnum.MILLILITRE, 2)).toBe(4e2);
});

test('ml to msk', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, SwedishVolumeEnum.MATSKED, 15)).toBe(1);
});

test('ml to tsk', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, SwedishVolumeEnum.TESKED, 5)).toBe(1);
});

test('ml to krm', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, SwedishVolumeEnum.KRYDDMATTET, 1)).toBe(1);
});

test('l to kanna', () => {
  expect(convert(converter, MetricVolumeEnum.LITRE, SwedishVolumeEnum.KANNA, 2.617)).toBe(1);
});

test('lm to kkp', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, SwedishVolumeEnum.KAFFEKOPP, 150)).toBe(1);
});

test('ml to glas', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, SwedishVolumeEnum.GLAS, 2e2)).toBe(1);
});

test('fl-oz to fl-oz', () => {
  expect(convert(converter, ImperialVolumeEnum.FLUID_OUNCE, ImperialVolumeEnum.FLUID_OUNCE, 1)).toBe(1);
});

test('fl-oz to tbsp', () => {
  expect(convert(converter, ImperialVolumeEnum.FLUID_OUNCE, ImperialVolumeEnum.TABLESPOON, 4)).toBe(8);
});

test('Tbs to fl-oz', () => {
  expect(convert(converter, ImperialVolumeEnum.TABLESPOON, ImperialVolumeEnum.FLUID_OUNCE, 2)).toBe(1);
});

test('Tbs to Tbs', () => {
  expect(convert(converter, ImperialVolumeEnum.TABLESPOON, ImperialVolumeEnum.TABLESPOON, 1)).toBe(1);
});

test('tsp to l', () => {
  expect(convert(converter, ImperialVolumeEnum.TEASPOON, MetricVolumeEnum.LITRE, 355)).toBeCloseTo(1.74977);
});

test('in3 to l', () => {
  expect(convert(converter, ImperialVolumeEnum.CUBIC_INCH, MetricVolumeEnum.LITRE, 1)).toBeCloseTo(0.0163871);
});

test('in3 to fl-oz', () => {
  expect(convert(converter, ImperialVolumeEnum.CUBIC_INCH, ImperialVolumeEnum.FLUID_OUNCE, 1)).toBeCloseTo(0.554113);
});

test('m3 to yd3', () => {
  expect(convert(converter, MetricVolumeEnum.CUBIC_METER, ImperialVolumeEnum.CUBIC_YARD, 1)).toBeCloseTo(1.30795);
});

test('ft3 to cm3', () => {
  expect(convert(converter, ImperialVolumeEnum.CUBIC_FOOT, MetricVolumeEnum.CUBIC_CENTIMETER, 1)).toBeCloseTo(
    28316.832
  );
});

test('pnt to ml', () => {
  expect(convert(converter, ImperialVolumeEnum.PINT, MetricVolumeEnum.MILLILITRE, 5)).toBeCloseTo(2365.88);
});

test('ml to gal', () => {
  expect(convert(converter, MetricVolumeEnum.MILLILITRE, ImperialVolumeEnum.GALLON, 9876)).toBeCloseTo(2.609);
});

test('gal to l', () => {
  expect(convert(converter, ImperialVolumeEnum.GALLON, MetricVolumeEnum.LITRE, 10)).toBeCloseTo(37.85);
});
