import convert from '../../convert';
import { Converter } from '../../converter';
import frequency, { FrequencyEnum } from '../frequency';

const converter = new Converter({ measuresData: { frequency } });

test('Hz to Hz', () => {
  expect(convert(converter, FrequencyEnum.HERTZ, FrequencyEnum.HERTZ, 1)).toBe(1);
});

test('mHz to mHz', () => {
  expect(convert(converter, FrequencyEnum.MILLIHERTZ, FrequencyEnum.MILLIHERTZ, 1)).toBe(1);
});

test('kHz to kHz', () => {
  expect(convert(converter, FrequencyEnum.KILOHERTZ, FrequencyEnum.KILOHERTZ, 1)).toBe(1);
});

test('MHz to MHz', () => {
  expect(convert(converter, FrequencyEnum.MEGAHERTZ, FrequencyEnum.MEGAHERTZ, 1)).toBe(1);
});

test('GHz to GHz', () => {
  expect(convert(converter, FrequencyEnum.GIGAHERTZ, FrequencyEnum.GIGAHERTZ, 1)).toBe(1);
});

test('THz to THz', () => {
  expect(convert(converter, FrequencyEnum.TERAHERTZ, FrequencyEnum.TERAHERTZ, 1)).toBe(1);
});

test('rpm to rpm', () => {
  expect(convert(converter, FrequencyEnum.RPM, FrequencyEnum.RPM, 1)).toBe(1);
});

test('deg/s to deg/s', () => {
  expect(convert(converter, FrequencyEnum.DEGREE_PER_SECOND, FrequencyEnum.DEGREE_PER_SECOND, 1)).toBe(1);
});

test('rad/s to rad/s', () => {
  expect(convert(converter, FrequencyEnum.RADIAN_PER_SECOND, FrequencyEnum.RADIAN_PER_SECOND, 1)).toBe(1);
});

test('rpm to Hz', () => {
  expect(convert(converter, FrequencyEnum.RPM, FrequencyEnum.HERTZ, 60)).toBe(1);
});

test('deg/s to Hz', () => {
  expect(convert(converter, FrequencyEnum.DEGREE_PER_SECOND, FrequencyEnum.HERTZ, 360)).toBe(1);
});

test('rad/s to Hz', () => {
  expect(convert(converter, FrequencyEnum.RADIAN_PER_SECOND, FrequencyEnum.HERTZ, Math.PI)).toBe(0.5);
});

test('THz to GHz', () => {
  expect(convert(converter, FrequencyEnum.TERAHERTZ, FrequencyEnum.GIGAHERTZ, 1)).toBe(1e3);
});

test('mHz to MHz', () => {
  expect(convert(converter, FrequencyEnum.MILLIHERTZ, FrequencyEnum.MEGAHERTZ, 1)).toBe(1e-9);
});
