/* eslint-disable @typescript-eslint/ban-ts-comment */
import convert from '../convert';
import { Converter } from '../converter';
import convertToBest from '../convertToBest';
import { default as _describe } from '../describe';
import { allTranslations } from '../i18n';
import list from '../list';
import { allMeasures } from '../measures';
import possibilities from '../possibilities';

const converter = new Converter({ measuresData: allMeasures, translations: allTranslations });

test('l to kg throws', () => {
  expect(() => {
    convert(converter, 'l', 'kg', 2);
  }).toThrow();
});

test('fl-oz to oz throws', () => {
  expect(() => {
    convert(converter, 'fl-oz', 'oz', 4);
  }).toThrow();
});

test('kg to fl-oz throws', () => {
  expect(() => {
    convert(converter, 'kg', 'fl-oz', 4);
  }).toThrow();
});

test('kg to ft throws', () => {
  expect(() => {
    convert(converter, 'kg', 'ft', 3);
  }).toThrow();
});

test('kg to nonexistant unit throws', () => {
  expect(() => {
    convert(converter, 'kg', 'garbage', 4);
  }).toThrow();
});

test('Nonexistant unit to kg throws', () => {
  expect(() => {
    convert(converter, 'garbage', 'kg', 4);
  }).toThrow();
});

test('convertToBest throws if unit is not valid', () => {
  expect(() => {
    convertToBest(converter, {}, 'garbage', 4);
  }).toThrow();
});

test('describe throws if unit is not valid', () => {
  expect(() => {
    _describe(converter, 'not-a-unit');
  }).toThrow();
});

test('possibilities throws if unit is not valid', () => {
  expect(() => {
    //@ts-expect-error
    possibilities(converter, 'not-a-unit');
  }).toThrow();
});

test('list throws if measure is not valid', () => {
  expect(() => {
    list(converter, 'not-a-measure');
  }).toThrow();
});
