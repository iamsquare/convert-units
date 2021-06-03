/* eslint-disable @typescript-eslint/ban-ts-comment */
import { convert, describe as _describe, possibilities } from '..';

test('l to kg throws', () => {
  expect(() => {
    convert('l', 'kg', 2);
  }).toThrow();
});

test('fl-oz to oz throws', () => {
  expect(() => {
    convert('fl-oz', 'oz', 4);
  }).toThrow();
});

test('kg to fl-oz throws', () => {
  expect(() => {
    convert('kg', 'fl-oz', 4);
  }).toThrow();
});

test('kg to ft throws', () => {
  expect(() => {
    convert('kg', 'ft', 3);
  }).toThrow();
});

test('kg to nonexistant unit throws', () => {
  expect(() => {
    //@ts-ignore
    convert('kg', 'garbage', 4);
  }).toThrow();
});

test('nonexistant unit to kg throws', () => {
  expect(() => {
    //@ts-ignore
    convert('garbage', 'kg', 4);
  }).toThrow();
});

test('describe throws if unit is not valid', () => {
  expect(() => {
    //@ts-ignore
    _describe('not-a-unit');
  }).toThrow();
});

test('possibilities throws if unit is not valid', () => {
  expect(() => {
    //@ts-ignore
    possibilities('not-a-unit');
  }).toThrow();
});

test('list throws if measure is not valid', () => {
  expect(() => {
    //@ts-ignore
    list('not-a-measure');
  }).toThrow();
});
