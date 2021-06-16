import convert from '../../convert';
import { Converter } from '../../converter';
import temperature, { ImperialTemperatureEnum, MetricTemperatureEnum } from '../temperature';

const converter = new Converter({ measuresData: { temperature } });

test('C to K', () => {
  expect(convert(converter, MetricTemperatureEnum.CELSIUS, MetricTemperatureEnum.KELVIN, 0)).toBe(273.15);
});

test('K to C', () => {
  expect(convert(converter, MetricTemperatureEnum.KELVIN, MetricTemperatureEnum.CELSIUS, 273.15)).toBe(0);
});

test('F to C', () => {
  expect(convert(converter, ImperialTemperatureEnum.FAHRENHEIT, MetricTemperatureEnum.CELSIUS, 32)).toBe(0);
});

test('C to F', () => {
  expect(convert(converter, MetricTemperatureEnum.CELSIUS, ImperialTemperatureEnum.FAHRENHEIT, 0)).toBe(32);
});

test('F to K', () => {
  expect(convert(converter, ImperialTemperatureEnum.FAHRENHEIT, MetricTemperatureEnum.KELVIN, 32)).toBe(273.15);
});

test('F to R', () => {
  expect(convert(converter, ImperialTemperatureEnum.FAHRENHEIT, ImperialTemperatureEnum.RANKINE, 100)).toBeCloseTo(
    559.67
  );
});

test('R to F', () => {
  expect(convert(converter, ImperialTemperatureEnum.RANKINE, ImperialTemperatureEnum.FAHRENHEIT, 670)).toBeCloseTo(
    210.32999
  );
});

test('R to C', () => {
  expect(convert(converter, ImperialTemperatureEnum.RANKINE, MetricTemperatureEnum.CELSIUS, 612)).toBe(66.85);
});

test('R to K', () => {
  expect(convert(converter, ImperialTemperatureEnum.RANKINE, MetricTemperatureEnum.KELVIN, 459.67)).toBeCloseTo(
    255.37222
  );
});
