import convert from '../../convert';
import { Converter } from '../../converter';
import angle, { AngleEnum } from '../angle';

const converter = new Converter({ measuresData: { angle } });

test('rad to rad', () => {
  expect(convert(converter, AngleEnum.RADIANS, AngleEnum.RADIANS, 1)).toBe(1);
});

test('deg to deg', () => {
  expect(convert(converter, AngleEnum.DEGREES, AngleEnum.DEGREES, 1)).toBe(1);
});

test('grad to grad', () => {
  expect(convert(converter, AngleEnum.GRADIANS, AngleEnum.GRADIANS, 1)).toBe(1);
});

test('arcmin to arcmin', () => {
  expect(convert(converter, AngleEnum.ARCMINUTES, AngleEnum.ARCMINUTES, 1)).toBe(1);
});

test('arcsec to arcsec', () => {
  expect(convert(converter, AngleEnum.ARCSECONDS, AngleEnum.ARCSECONDS, 1)).toBe(1);
});

test('deg to rad', () => {
  expect(convert(converter, AngleEnum.DEGREES, AngleEnum.RADIANS, 360)).toBeCloseTo(6.28319);
});

test('deg to grad', () => {
  expect(convert(converter, AngleEnum.DEGREES, AngleEnum.GRADIANS, 360)).toBe(400);
});

test('deg to arcmin', () => {
  expect(convert(converter, AngleEnum.DEGREES, AngleEnum.ARCMINUTES, 360)).toBe(21600);
});

test('deg to arcsec', () => {
  expect(convert(converter, AngleEnum.DEGREES, AngleEnum.ARCSECONDS, 360)).toBe(1.296e6);
});

test('rad to grad', () => {
  expect(convert(converter, AngleEnum.RADIANS, AngleEnum.GRADIANS, 10)).toBeCloseTo(636.62);
});

test('rad to arcsec', () => {
  expect(convert(converter, AngleEnum.RADIANS, AngleEnum.ARCSECONDS, 10)).toBeCloseTo(2062648.06);
});

test('grad to arcmin', () => {
  expect(convert(converter, AngleEnum.GRADIANS, AngleEnum.ARCMINUTES, 5)).toBe(270);
});

test('grad to deg', () => {
  expect(convert(converter, AngleEnum.GRADIANS, AngleEnum.DEGREES, 5)).toBe(4.5);
});

test('arcmin to rad', () => {
  expect(convert(converter, AngleEnum.ARCMINUTES, AngleEnum.RADIANS, 10000)).toBeCloseTo(2.908882);
});
