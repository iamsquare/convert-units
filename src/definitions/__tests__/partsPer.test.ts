import convert from '../../convert';
import { Converter } from '../../converter';
import partsPer, { PartsPerEnum } from '../partsPer';

const converter = new Converter({ measuresData: { partsPer } });

test('ppm to ppm', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_MILLION, PartsPerEnum.PART_PER_MILLION, 1)).toBe(1);
});

test('ppb to ppb', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_BILLION, PartsPerEnum.PART_PER_BILLION, 1)).toBe(1);
});

test('ppm to ppb', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_MILLION, PartsPerEnum.PART_PER_BILLION, 1)).toBe(1e3);
});

test('ppb to ppm', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_BILLION, PartsPerEnum.PART_PER_MILLION, 1)).toBe(1e-3);
});

test('ppt to ppt', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_TRILLION, PartsPerEnum.PART_PER_TRILLION, 1)).toBe(1);
});

test('ppm to ppt', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_MILLION, PartsPerEnum.PART_PER_TRILLION, 1)).toBe(1e6);
});

test('ppt to ppb', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_TRILLION, PartsPerEnum.PART_PER_BILLION, 1)).toBe(1e-3);
});

test('ppt to ppm', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_TRILLION, PartsPerEnum.PART_PER_MILLION, 1)).toBe(1e-6);
});

test('ppq to ppq', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_QUADRILLION, PartsPerEnum.PART_PER_QUADRILLION, 1)).toBe(1);
});

test('ppq to ppt', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_QUADRILLION, PartsPerEnum.PART_PER_TRILLION, 1)).toBe(1e-3);
});

test('ppq to ppm', () => {
  expect(convert(converter, PartsPerEnum.PART_PER_QUADRILLION, PartsPerEnum.PART_PER_MILLION, 1)).toBe(1e-9);
});
