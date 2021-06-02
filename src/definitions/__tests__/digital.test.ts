import { convert } from '../..';
import { BitEnum, ByteEnum } from '../digital';

test('b to b', () => {
  expect(convert(BitEnum.BIT, BitEnum.BIT, 1)).toBe(1);
});

test('Kb to b', () => {
  expect(convert(BitEnum.KILOBIT, BitEnum.BIT, 1)).toBe(1e3);
});

test('Mb to b', () => {
  expect(convert(BitEnum.MEGABIT, BitEnum.BIT, 1)).toBe(1e6);
});

test('Gb to b', () => {
  expect(convert(BitEnum.GIGABIT, BitEnum.BIT, 1)).toBe(1e9);
});

test('Tb to b', () => {
  expect(convert(BitEnum.TERABIT, BitEnum.BIT, 1)).toBe(1e12);
});

test('Tb to b', () => {
  expect(convert(BitEnum.PETABIT, BitEnum.BIT, 1)).toBe(1e15);
});

test('Kib to b', () => {
  expect(convert(BitEnum.KIBIBIT, BitEnum.BIT, 1)).toBe(1024);
});

test('Mib to b', () => {
  expect(convert(BitEnum.MEBIBIT, BitEnum.BIT, 1)).toBe(1048576);
});

test('Gib to b', () => {
  expect(convert(BitEnum.GIBIBIT, BitEnum.BIT, 1)).toBe(1073741824);
});

test('Tib to b', () => {
  expect(convert(BitEnum.TEBIBIT, BitEnum.BIT, 1)).toBe(1099511627776);
});

test('Pib to b', () => {
  expect(convert(BitEnum.PEBIBIT, BitEnum.BIT, 1)).toBe(1125899906842624);
});

test('B to B', () => {
  expect(convert(ByteEnum.BYTE, ByteEnum.BYTE, 1)).toBe(1);
});

test('KB to B', () => {
  expect(convert(ByteEnum.KILOBYTE, ByteEnum.BYTE, 1)).toBe(1e3);
});

test('MB to B', () => {
  expect(convert(ByteEnum.MEGABYTE, ByteEnum.BYTE, 1)).toBe(1e6);
});

test('GB to B', () => {
  expect(convert(ByteEnum.GIGABYTE, ByteEnum.BYTE, 1)).toBe(1e9);
});

test('TB to B', () => {
  expect(convert(ByteEnum.TERABYTE, ByteEnum.BYTE, 1)).toBe(1e12);
});

test('PB to B', () => {
  expect(convert(ByteEnum.PETABYTE, ByteEnum.BYTE, 1)).toBe(1e15);
});

test('KiB to B', () => {
  expect(convert(ByteEnum.KIBIBYTE, ByteEnum.BYTE, 1)).toBe(1024);
});

test('MiB to B', () => {
  expect(convert(ByteEnum.MEBIBYTE, ByteEnum.BYTE, 1)).toBe(1048576);
});

test('GiB to B', () => {
  expect(convert(ByteEnum.GIBIBYTE, ByteEnum.BYTE, 1)).toBe(1073741824);
});

test('TiB to B', () => {
  expect(convert(ByteEnum.TEBIBYTE, ByteEnum.BYTE, 1)).toBe(1099511627776);
});

test('PiB to B', () => {
  expect(convert(ByteEnum.PEBIBYTE, ByteEnum.BYTE, 1)).toBe(1125899906842624);
});

test('B to b', () => {
  expect(convert(ByteEnum.BYTE, BitEnum.BIT, 1)).toBe(8);
});

test('b to B', () => {
  expect(convert(BitEnum.BIT, ByteEnum.BYTE, 1)).toBeCloseTo(0.125);
});
