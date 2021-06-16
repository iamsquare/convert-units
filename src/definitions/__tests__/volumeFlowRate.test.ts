import convert from '../../convert';
import { Converter } from '../../converter';
import volumeFlowRate, { ImperialVolumeFlowEnum, MetricVolumeFlowEnum } from '../volumeFlowRate';

const converter = new Converter({ measuresData: { volumeFlowRate } });

test('l/s to l/s', () => {
  expect(convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)).toBe(1);
});

test('mm3/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_MILLIMETER_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1e6)
  ).toBe(1);
});

test('cm3/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_CENTIMETER_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1e2)
  ).toBe(0.1);
});

test('dl/s to l/s', () => {
  expect(convert(converter, MetricVolumeFlowEnum.DECILITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 2)).toBe(
    0.2
  );
});

test('cl/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CENTILITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 25)
  ).toBe(0.25);
});

test('ml/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1e2)
  ).toBe(0.1);
});

test('m3/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)
  ).toBe(1e3);
});

test('km3/s to l/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_KILOMETER_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)
  ).toBe(1e12);
});

test('l/s to ml/s', () => {
  expect(convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, 1)).toBe(
    1e3
  );
});

test('dl/s to ml/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.DECILITRE_PER_SECOND, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, 10)
  ).toBe(1e3);
});

test('cl/s to ml/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CENTILITRE_PER_SECOND, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, 1e2)
  ).toBe(1e3);
});

test('ml/s to ml/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, 1)
  ).toBe(1);
});

test('fl-oz/s to fl-oz/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, 1)
  ).toBe(1);
});

test('fl-oz/s to Tbs/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND, 4)
  ).toBe(8);
});

test('Tbs/s to fl-oz/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, 2)
  ).toBe(1);
});

test('Tbs/s to Tbs/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND, ImperialVolumeFlowEnum.TABLESPOON_PER_SECOND, 1)
  ).toBe(1);
});

test('l/s to l/min', () => {
  expect(convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_MINUTE, 1)).toBe(60);
});

test('l/s to l/h', () => {
  expect(convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_HOUR, 1)).toBe(3.6e3);
});

test('kl/s to kl/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.KILOLITRE_PER_SECOND, MetricVolumeFlowEnum.KILOLITRE_PER_HOUR, 1)
  ).toBe(3.6e3);
});

test('l/s to kl/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.KILOLITRE_PER_HOUR, 1)
  ).toBeCloseTo(3.6);
});

test('l/s to m3/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND, 1)
  ).toBe(1e-3);
});

test('m3/s to m3/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND, MetricVolumeFlowEnum.CUBIC_METER_PER_HOUR, 1)
  ).toBe(3.6e3);
});

test('tsp/s to l/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.TEASPOON_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 355)
  ).toBeCloseTo(1.75);
});

test('in3/s to l/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.CUBIC_INCH_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)
  ).toBeCloseTo(0.0163871);
});

test('in3/s to fl-oz/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.CUBIC_INCH_PER_SECOND, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, 1)
  ).toBeCloseTo(0.554113);
});

test('m3/s to yd3/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND, ImperialVolumeFlowEnum.CUBIC_YARD_PER_SECOND, 1)
  ).toBeCloseTo(1.30795);
});

test('ft3/s to cm3/s', () => {
  expect(
    convert(
      converter,
      ImperialVolumeFlowEnum.CUBIC_FOOT_PER_SECOND,
      MetricVolumeFlowEnum.CUBIC_CENTIMETER_PER_SECOND,
      1
    )
  ).toBeCloseTo(28316.832);
});

test('pnt/s to ml/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.PINT_PER_SECOND, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, 5)
  ).toBeCloseTo(2365.882);
});

test('ml/s to gal/s', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.MILLILITRE_PER_SECOND, ImperialVolumeFlowEnum.GALLON_PER_SECOND, 9876)
  ).toBeCloseTo(2.609);
});

test('gal/s to l/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.GALLON_PER_SECOND, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)
  ).toBeCloseTo(3.78541178);
});

test('kl/s to kl/min', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.KILOLITRE_PER_SECOND, MetricVolumeFlowEnum.KILOLITRE_PER_MINUTE, 1)
  ).toBeCloseTo(60);
});

test('l/s to kl/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.KILOLITRE_PER_HOUR, 1)
  ).toBeCloseTo(3.6);
});

test('kl/min to l/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.KILOLITRE_PER_MINUTE, MetricVolumeFlowEnum.LITRE_PER_HOUR, 1)
  ).toBeCloseTo(6e4);
});

test('l/s to m3/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.LITRE_PER_SECOND, MetricVolumeFlowEnum.CUBIC_METER_PER_HOUR, 1)
  ).toBeCloseTo(3.6);
});

test('m3/s to kl/h', () => {
  expect(
    convert(converter, MetricVolumeFlowEnum.CUBIC_METER_PER_SECOND, MetricVolumeFlowEnum.KILOLITRE_PER_HOUR, 1)
  ).toBeCloseTo(3.6e3);
});

test('fl-oz/s to m3/min', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.FLUID_OUNCE_PER_SECOND, MetricVolumeFlowEnum.CUBIC_METER_PER_MINUTE, 1)
  ).toBeCloseTo(0.00177441177);
});

test('ft3/min to l/s', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.CUBIC_FOOT_PER_MINUTE, MetricVolumeFlowEnum.LITRE_PER_SECOND, 1)
  ).toBeCloseTo(0.471947443);
});

test('pnt/min to kl/h', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.PINT_PER_MINUTE, MetricVolumeFlowEnum.KILOLITRE_PER_HOUR, 1)
  ).toBeCloseTo(0.0283905884);
});

test('yd3/h to m3/min', () => {
  expect(
    convert(converter, ImperialVolumeFlowEnum.CUBIC_YARD_PER_HOUR, MetricVolumeFlowEnum.CUBIC_METER_PER_MINUTE, 1)
  ).toBeCloseTo(0.012742581);
});
