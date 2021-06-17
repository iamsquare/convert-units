import convert from '../../convert';
import { Converter } from '../../converter';
import pressure, { ImperialPressureEnum, MetricPressureEnum } from '../pressure';

const converter = new Converter({ measuresData: { pressure } });

test('Pa to Pa', () => {
  expect(convert(converter, MetricPressureEnum.PASCAL, MetricPressureEnum.PASCAL, 1)).toBe(1);
});

test('Pa to kPa', () => {
  expect(convert(converter, MetricPressureEnum.PASCAL, MetricPressureEnum.KILOPASCAL, 1e3)).toBe(1);
});

test('kPa to Pa', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.PASCAL, 1)).toBe(1e3);
});

test('kPa to hPa', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.HECTOPASCAL, 10)).toBe(100);
});

test('kPa to MPa', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.MEGAPASCAL, 1e3)).toBe(1);
});

test('kPa to bar', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.BAR, 1e3)).toBe(10);
});

test('kPa to torr', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.TORR, 532)).toBeCloseTo(3990.33);
});

test('kPa to mmHg', () => {
  expect(convert(converter, MetricPressureEnum.KILOPASCAL, MetricPressureEnum.MILLIMETRE_OF_MERCURY, 532)).toBeCloseTo(
    3990.33
  );
});

test('psi to psi', () => {
  expect(
    convert(converter, ImperialPressureEnum.POUND_PER_SQUARE_INCH, ImperialPressureEnum.POUND_PER_SQUARE_INCH, 1)
  ).toBe(1);
});

test('psi to ksi', () => {
  expect(
    convert(converter, ImperialPressureEnum.POUND_PER_SQUARE_INCH, ImperialPressureEnum.KILOPOUND_PER_SQUARE_INCH, 1e3)
  ).toBe(1);
});

test('psi to inHg', () => {
  expect(
    convert(converter, ImperialPressureEnum.POUND_PER_SQUARE_INCH, ImperialPressureEnum.INCH_OF_MERCURY, 1)
  ).toBeCloseTo(2.03604);
});

test('Pa to psi', () => {
  expect(convert(converter, MetricPressureEnum.PASCAL, ImperialPressureEnum.POUND_PER_SQUARE_INCH, 10000)).toBeCloseTo(
    1.450377
  );
});

test('torr to ksi', () => {
  expect(
    convert(converter, MetricPressureEnum.TORR, ImperialPressureEnum.KILOPOUND_PER_SQUARE_INCH, 51714.93186)
  ).toBeCloseTo(1);
});

test('psi to hPa', () => {
  expect(
    convert(converter, ImperialPressureEnum.POUND_PER_SQUARE_INCH, MetricPressureEnum.HECTOPASCAL, 10)
  ).toBeCloseTo(689.47573);
});
