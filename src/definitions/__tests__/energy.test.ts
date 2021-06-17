import convert from '../../convert';
import { Converter } from '../../converter';
import energy, { EnergyEnum } from '../energy';

const converter = new Converter({ measuresData: { energy } });

test('Wh to Wh', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.WATT_HOUR, 1)).toBe(1);
});

test('mWh to mWh', () => {
  expect(convert(converter, EnergyEnum.MILLIWATT_HOUR, EnergyEnum.MILLIWATT_HOUR, 1)).toBe(1);
});

test('kWh to kWh', () => {
  expect(convert(converter, EnergyEnum.KILOWATT_HOUR, EnergyEnum.KILOWATT_HOUR, 1)).toBe(1);
});

test('MWh to MWh', () => {
  expect(convert(converter, EnergyEnum.MEGAWATT_HOUR, EnergyEnum.MEGAWATT_HOUR, 1)).toBe(1);
});

test('GWh to GWh', () => {
  expect(convert(converter, EnergyEnum.GIGAWATT_HOUR, EnergyEnum.GIGAWATT_HOUR, 1)).toBe(1);
});

test('J to J', () => {
  expect(convert(converter, EnergyEnum.JOULE, EnergyEnum.JOULE, 1)).toBe(1);
});

test('kJ to kJ', () => {
  expect(convert(converter, EnergyEnum.KILOJOULE, EnergyEnum.KILOJOULE, 1)).toBe(1);
});

test('Wh to J', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.JOULE, 1)).toBe(3.6e3);
});

test('Wh to mWh', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.MILLIWATT_HOUR, 1)).toBe(1e3);
});

test('Wh to kWh', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.KILOWATT_HOUR, 1)).toBe(1e-3);
});

test('Wh to MWh', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.MEGAWATT_HOUR, 1)).toBe(1e-6);
});

test('Wh to GWh', () => {
  expect(convert(converter, EnergyEnum.WATT_HOUR, EnergyEnum.GIGAWATT_HOUR, 1)).toBe(1e-9);
});

test('GWh to mWh', () => {
  expect(convert(converter, EnergyEnum.GIGAWATT_HOUR, EnergyEnum.MILLIWATT_HOUR, 1)).toBe(1e12);
});

test('GWh to J', () => {
  expect(convert(converter, EnergyEnum.GIGAWATT_HOUR, EnergyEnum.JOULE, 1)).toBe(3.6e12);
});

test('MWh to mWh', () => {
  expect(convert(converter, EnergyEnum.MEGAWATT_HOUR, EnergyEnum.MILLIWATT_HOUR, 1)).toBe(1e9);
});

test('kWh to mWh', () => {
  expect(convert(converter, EnergyEnum.KILOWATT_HOUR, EnergyEnum.MILLIWATT_HOUR, 1)).toBe(1e6);
});

test('mWh to kWh', () => {
  expect(convert(converter, EnergyEnum.MILLIWATT_HOUR, EnergyEnum.KILOWATT_HOUR, 1)).toBe(1e-6);
});

test('mWh to Wh', () => {
  expect(convert(converter, EnergyEnum.MILLIWATT_HOUR, EnergyEnum.WATT_HOUR, 1)).toBe(1e-3);
});

test('kWh to Wh', () => {
  expect(convert(converter, EnergyEnum.KILOWATT_HOUR, EnergyEnum.WATT_HOUR, 1)).toBe(1e3);
});

test('kWh to kJ', () => {
  expect(convert(converter, EnergyEnum.KILOWATT_HOUR, EnergyEnum.KILOJOULE, 1)).toBe(3.6e3);
});
