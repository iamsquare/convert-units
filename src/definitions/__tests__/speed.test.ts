import convert from '../../convert';
import { Converter } from '../../converter';
import speed, { ImperialSpeedEnum, MetricSpeedEnum } from '../speed';

const converter = new Converter({ measuresData: { speed } });

test('m/s to m/s', () => {
  expect(convert(converter, MetricSpeedEnum.METRE_PER_SECOND, MetricSpeedEnum.METRE_PER_SECOND, 1)).toBe(1);
});

test('m/s to km/h', () => {
  expect(convert(converter, MetricSpeedEnum.METRE_PER_SECOND, MetricSpeedEnum.KILOMETRE_PER_HOUR, 1)).toBe(3.6);
});

test('mph to mph', () => {
  expect(convert(converter, ImperialSpeedEnum.MILE_PER_HOUR, ImperialSpeedEnum.MILE_PER_HOUR, 1)).toBe(1);
});

test('mph to knot', () => {
  expect(convert(converter, ImperialSpeedEnum.MILE_PER_HOUR, ImperialSpeedEnum.KNOT, 2)).toBeCloseTo(1.73795);
});

test('mph to ft/s', () => {
  expect(convert(converter, ImperialSpeedEnum.MILE_PER_HOUR, ImperialSpeedEnum.FOOT_PER_SECOND, 3)).toBeCloseTo(4.4);
});

test('m/s to knot', () => {
  expect(convert(converter, MetricSpeedEnum.METRE_PER_SECOND, ImperialSpeedEnum.KNOT, 8)).toBeCloseTo(15.5508);
});

test('mph to km/h', () => {
  expect(convert(converter, ImperialSpeedEnum.MILE_PER_HOUR, MetricSpeedEnum.KILOMETRE_PER_HOUR, 12)).toBeCloseTo(
    19.3121
  );
});
