/* eslint-disable @typescript-eslint/ban-ts-comment */
import { convert } from '..';

test('convert is defined', () => {
  expect(convert).toBeDefined();
});

test('convert is a function', () => {
  expect(convert).toBeInstanceOf(Function);
});

test('convert is a curried function', () => {
  expect(convert('g', 'kg')).toBeInstanceOf(Function);
  expect(convert('g')).toBeInstanceOf(Function);
});

test('convert returns a number', () => {
  expect(convert('g', 'kg', 1)).toEqual(expect.any(Number));
});
