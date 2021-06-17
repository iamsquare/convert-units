import convert from '../../convert';
import { Converter } from '../../converter';
import time, { TimeEnum } from '../time';

const converter = new Converter({ measuresData: { time } });

test('s to ns', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.NANOSECOND, 1)).toBeCloseTo(1e9);
});

test('s to mu', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.MICROSECOND, 1)).toBe(1e6);
});

test('s to ms', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.MILLISECOND, 1)).toBe(1e3);
});

test('s to m', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.MINUTE, 60)).toBe(1);
});

test('s to s', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.SECOND, 1)).toBe(1);
});

test('s to h', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.HOUR, 3600)).toBe(1);
});

test('s to d', () => {
  expect(convert(converter, TimeEnum.SECOND, TimeEnum.DAY, 86400)).toBe(1);
});

test('d to week', () => {
  expect(convert(converter, TimeEnum.DAY, TimeEnum.WEEK, 7)).toBe(1);
});

test('d to month', () => {
  expect(convert(converter, TimeEnum.DAY, TimeEnum.MONTH, 30.4375)).toBe(1);
});

test('d to year', () => {
  expect(convert(converter, TimeEnum.DAY, TimeEnum.YEAR, 365.25)).toBe(1);
});

test('week to month', () => {
  expect(convert(converter, TimeEnum.WEEK, TimeEnum.MONTH, 4.34821)).toBeCloseTo(1);
});

test('week to year', () => {
  expect(convert(converter, TimeEnum.WEEK, TimeEnum.YEAR, 52.17857)).toBeCloseTo(1);
});

test('month to year', () => {
  expect(convert(converter, TimeEnum.MONTH, TimeEnum.YEAR, 12)).toBe(1);
});
