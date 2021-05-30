import { convert } from '../..';
import { AngleEnum } from '../angle';

test('rad to rad', () => {
  expect(convert(AngleEnum.RADIANS, AngleEnum.RADIANS, 1)).toBe(1);
});

test('deg to deg', () => {
  expect(convert(AngleEnum.DEGREES, AngleEnum.DEGREES, 1)).toBe(1);
});

test('grad to grad', () => {
  expect(convert(AngleEnum.GRADIANS, AngleEnum.GRADIANS, 1)).toBe(1);
});

test('arcmin to arcmin', () => {
  expect(convert(AngleEnum.ARCMINUTES, AngleEnum.ARCMINUTES, 1)).toBe(1);
});

test('arcsec to arcsec', () => {
  expect(convert(AngleEnum.ARCSECONDS, AngleEnum.ARCSECONDS, 1)).toBe(1);
});

test('deg to rad', () => {
  expect(convert(AngleEnum.DEGREES, AngleEnum.RADIANS, 360)).toBeCloseTo(6.28319);
});

test('deg to grad', () => {
  expect(convert(AngleEnum.DEGREES, AngleEnum.GRADIANS, 360)).toBe(400);
});

test('deg to arcmin', () => {
  expect(convert(AngleEnum.DEGREES, AngleEnum.ARCMINUTES, 360)).toBe(21600);
});

test('deg to arcsec', () => {
  expect(convert(AngleEnum.DEGREES, AngleEnum.ARCSECONDS, 360)).toBe(1.296e6);
});

test('rad to grad', () => {
  expect(convert(AngleEnum.RADIANS, AngleEnum.GRADIANS, 10)).toBeCloseTo(636.62);
});

test('rad to arcsec', () => {
  expect(convert(AngleEnum.RADIANS, AngleEnum.ARCSECONDS, 10)).toBeCloseTo(2062648.06);
});

test('grad to arcmin', () => {
  expect(convert(AngleEnum.GRADIANS, AngleEnum.ARCMINUTES, 5)).toBe(270);
});

test('grad to deg', () => {
  expect(convert(AngleEnum.GRADIANS, AngleEnum.DEGREES, 5)).toBe(4.5);
});

test('arcmin to rad', () => {
  expect(convert(AngleEnum.ARCMINUTES, AngleEnum.RADIANS, 10000)).toBeCloseTo(2.908882);
});
