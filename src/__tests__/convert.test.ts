/* eslint-disable @typescript-eslint/ban-ts-comment */
import convert from '../convert';
import { Converter } from '../converter';
import { allMeasures } from '../measures';

const converter = new Converter({ measuresData: allMeasures });

test('convert is defined', () => {
  expect(convert).toBeDefined();
});

test('convert is a function', () => {
  expect(convert).toBeInstanceOf(Function);
});

test('convert returns a number', () => {
  expect(convert(converter, 'g', 'kg', 1)).toEqual(expect.any(Number));
});
