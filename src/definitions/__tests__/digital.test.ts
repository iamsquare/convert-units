import { convert } from '../..';
import { BitEnum, ByteEnum } from '../digital';

test('b to b', () => {
  expect(convert(BitEnum.BIT, BitEnum.BIT, 1)).toBe(1);
});

test('Kb to b', () => {
  expect(convert(BitEnum.KILOBIT, BitEnum.BIT, 1)).toBe(1024);
});

test('Mb to b', () => {
  expect(convert(BitEnum.MEGABIT, BitEnum.BIT, 1)).toBe(1048576);
});

test('Gb to b', () => {
  expect(convert(BitEnum.GIGABIT, BitEnum.BIT, 1)).toBe(1073741824);
});

test('Tb to b', () => {
  expect(convert(BitEnum.TERABIT, BitEnum.BIT, 1)).toBe(1099511627776);
});

test('B to B', () => {
  expect(convert(ByteEnum.BYTE, ByteEnum.BYTE, 1)).toBe(1);
});

test('KB to B', () => {
  expect(convert(ByteEnum.KILOBYTE, ByteEnum.BYTE, 1)).toBe(1024);
});

test('MB to B', () => {
  expect(convert(ByteEnum.MEGABYTE, ByteEnum.BYTE, 1)).toBe(1048576);
});

test('GB to B', () => {
  expect(convert(ByteEnum.GIGABYTE, ByteEnum.BYTE, 1)).toBe(1073741824);
});

test('TB to B', () => {
  expect(convert(ByteEnum.TERABYTE, ByteEnum.BYTE, 1)).toBe(1099511627776);
});

test('B to b', () => {
  expect(convert(ByteEnum.BYTE, BitEnum.BIT, 1)).toBe(8);
});

test('b to B', () => {
  expect(convert(BitEnum.BIT, ByteEnum.BYTE, 1)).toBeCloseTo(0.125);
});
