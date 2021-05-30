import { convert } from '../..';
import { ImperialTemperatureEnum, MetricTemperatureEnum } from '../temperature';

test('C to K', () => {
  expect(convert(MetricTemperatureEnum.CELSIUS, MetricTemperatureEnum.KELVIN, 0)).toBe(273.15);
});

test('K to C', () => {
  expect(convert(MetricTemperatureEnum.KELVIN, MetricTemperatureEnum.CELSIUS, 273.15)).toBe(0);
});

test('F to C', () => {
  expect(convert(ImperialTemperatureEnum.FAHRENHEIT, MetricTemperatureEnum.CELSIUS, 32)).toBe(0);
});

test('C to F', () => {
  expect(convert(MetricTemperatureEnum.CELSIUS, ImperialTemperatureEnum.FAHRENHEIT, 0)).toBe(32);
});

test('F to K', () => {
  expect(convert(ImperialTemperatureEnum.FAHRENHEIT, MetricTemperatureEnum.KELVIN, 32)).toBe(273.15);
});

test('F to R', () => {
  expect(convert(ImperialTemperatureEnum.FAHRENHEIT, ImperialTemperatureEnum.RANKINE, 100)).toBeCloseTo(559.67);
});

test('R to F', () => {
  expect(convert(ImperialTemperatureEnum.RANKINE, ImperialTemperatureEnum.FAHRENHEIT, 670)).toBeCloseTo(210.32999);
});

test('R to C', () => {
  expect(convert(ImperialTemperatureEnum.RANKINE, MetricTemperatureEnum.CELSIUS, 612)).toBe(66.85);
});

test('R to K', () => {
  expect(convert(ImperialTemperatureEnum.RANKINE, MetricTemperatureEnum.KELVIN, 459.67)).toBeCloseTo(255.37222);
});
