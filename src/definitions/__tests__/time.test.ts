import { convert } from '../..';
import { TimeEnum } from '../time';

test('s to ns', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.NANOSECOND, 1)).toBeCloseTo(1e9);
});

test('s to mu', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.MICROSECOND, 1)).toBe(1e6);
});

test('s to ms', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.MILLISECOND, 1)).toBe(1e3);
});

test('s to m', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.MINUTE, 60)).toBe(1);
});

test('s to s', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.SECOND, 1)).toBe(1);
});

test('s to h', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.HOUR, 3600)).toBe(1);
});

test('s to d', () => {
  expect(convert(TimeEnum.SECOND, TimeEnum.DAY, 86400)).toBe(1);
});

test('d to week', () => {
  expect(convert(TimeEnum.DAY, TimeEnum.WEEK, 7)).toBe(1);
});

test('d to month', () => {
  expect(convert(TimeEnum.DAY, TimeEnum.MONTH, 30.4375)).toBe(1);
});

test('d to year', () => {
  expect(convert(TimeEnum.DAY, TimeEnum.YEAR, 365.25)).toBe(1);
});

test('week to month', () => {
  expect(convert(TimeEnum.WEEK, TimeEnum.MONTH, 4.34821)).toBeCloseTo(1);
});

test('week to year', () => {
  expect(convert(TimeEnum.WEEK, TimeEnum.YEAR, 52.17857)).toBeCloseTo(1);
});

test('month to year', () => {
  expect(convert(TimeEnum.MONTH, TimeEnum.YEAR, 12)).toBe(1);
});
